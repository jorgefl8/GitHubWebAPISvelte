# GitHubWebAPISvelte
- This app show your followers and following on GitHub. 
- The backend is developed in NodeJS and the frontend in Svelte.
- Using authorization by OAUTH.

- **STEPS FOR USING**:
    1. Run the command `npm install` & then in /frontend run the command `npm install`.
    2. If you want to run in developer mode, then run the command `npm start` in the root directory and `npm run dev --` in the /frontend directory at the same time. If poppers error comes out, go to /frontend/node_modules/@popperjs/core/package.json and add `"type: "module" `. Then go to `http://localhost:5173`.
    5. If you want to run in production mode, then run the command `npm start` in the root directory, and go to `http://localhost:`+`process.env.PORT` or `12345`. Remember to run the command `npm run build` in the /frontend directory before.


