function gradeStudent(score, isBonus, isPremium, attendance) {
  let grade;
  if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B";
  else if (score >= 70) grade = "C";
  else if (score >= 60) grade = "D";
  else grade = "F";
  if (isBonus && score < 100) grade += "+";
  if (isPremium && attendance >= 0.9) grade += " (honors)";
  else if (isPremium && attendance < 0.5) grade += " (probation)";
  if (attendance < 0.75 && !isPremium) grade += " (attendance-warning)";
  return grade;
}
function classifyTransaction(amount, isIntl, isNew, flagged) {
  if (amount > 10000) {
    if (isIntl) {
      if (isNew) return flagged ? "high_risk_review" : "international_new_customer";
      return "international_review";
    }
    return flagged ? "domestic_flagged" : "domestic_review";
  }
  if (isNew && flagged) return "small_flagged";
  return "approved";
}
module.exports = { gradeStudent, classifyTransaction };
