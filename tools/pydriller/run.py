#!/usr/bin/env python3
import json, sys
from collections import defaultdict
from pathlib import Path
ROOT = Path(__file__).resolve().parents[2]
try:
    from pydriller import Repository
except ImportError:
    print("pip install -r requirements-tools.txt", file=sys.stderr)
    raise SystemExit(1)
churn = defaultdict(lambda: {"commits": 0, "added": 0, "removed": 0})
n = 0
for commit in Repository(str(ROOT)).traverse_commits():
    n += 1
    for mod in commit.modified_files:
        path = mod.new_path or mod.old_path
        if not path:
            continue
        path = path.replace("\", "/")
        churn[path]["commits"] += 1
        churn[path]["added"] += mod.added_lines
        churn[path]["removed"] += mod.deleted_lines
    if n >= 200:
        break
top = sorted(churn.items(), key=lambda kv: kv[1]["commits"], reverse=True)[:10]
out = {"project_root": str(ROOT), "commits_analyzed": n, "top_churned_files": [{"path": p, **s} for p, s in top]}
reports = ROOT / "reports" / "pydriller"
reports.mkdir(parents=True, exist_ok=True)
(reports / "churn.json").write_text(json.dumps(out, indent=2), encoding="utf-8")
print(json.dumps(out, indent=2))
