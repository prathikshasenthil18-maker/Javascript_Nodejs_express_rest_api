        # Javascript Node.js Express REST API — Node 21

        **Scenario:** 1 - Monolithic  
        **Project type:** Node.js + Express REST API  
        **Customer Version:** 21  
        **Syntax:** ES2023+ / Node.js 21 — ES2023 APIs (findLast/toSorted/with); no Set.intersection/Promise.withResolvers

        ## APIs

        - `GET /api/v1/health`
        - `GET /api/v1/orders`
        - `POST /api/v1/orders`

        ## Build

        ```bash
        npm install
        npm run build
        npm test
        npm start
        ```

        ## Tools (12)

        See `tools/` — each tool folder links to this project.

        - [`diff-cover`](tools/diff-cover/)
- [`eslint`](tools/eslint/)
- [`eslint-plugin-security`](tools/eslint-plugin-security/)
- [`eslint-plugin-sonarjs`](tools/eslint-plugin-sonarjs/)
- [`jscpd`](tools/jscpd/)
- [`lizard`](tools/lizard/)
- [`mocha`](tools/mocha/)
- [`npm-audit`](tools/npm-audit/)
- [`npm-ls`](tools/npm-ls/)
- [`nyc`](tools/nyc/)
- [`pydriller`](tools/pydriller/)
- [`stryker-js`](tools/stryker-js/)
