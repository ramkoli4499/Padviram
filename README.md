
    # Padviram HR - Starter Repo


    This ZIP contains a starter skeleton for the Padviram HR full project.


    Structure:

    - web-admin/public/index.html  --> Frontend single-file (your uploaded HTML UI)
    - backend/index.js            --> Node.js + Express basic server with attendance endpoint
    - backend/package.json        --> Dependencies and start scripts
    - infra/                      --> (empty) placeholder for firebase/hosting configs


## How to run locally

### Backend
1. Open a terminal and `cd backend`
2. Install dependencies: `npm install`
3. Start server: `npm start`
4. Health check: `curl http://localhost:4000/health`
5. Test attendance endpoint:

```bash
curl -X POST http://localhost:4000/api/attendance/checkin \
  -H 'Content-Type: application/json' \
  -d '{"employeeId":"PAD001","lat":18.5204,"lng":73.8567}'
```

### Web Admin (static)
You can serve `web-admin/public` as static files (any static server).
Example using `npx serve`:

```bash
npx serve web-admin/public -l 3000
```

Or open `web-admin/public/index.html` directly in a browser.


## Next recommended steps (I can do for you):
- Convert the frontend into a React project and wire API calls to backend endpoints.
- Add Firebase configuration (Auth, Firestore, Storage) and sample rules.
- Create mobile React Native app skeleton.
- Setup deployment scripts (Vercel for web, Render/Heroku for backend) and CI/CD.

If you want, I can now:
- Build the React web-admin project and wire up the attendance POST call from the UI.
- Add Firebase scaffolding and rules.
- Create a ZIP with a runnable Dockerfile for backend.

Tell me which of the above to implement next (I'll proceed immediately):
- `Wire frontend to backend` (connect UI to attendance endpoint)
- `Add Firebase scaffolding` (firestore rules + sample env)
- `Create mobile skeleton` (React Native starter)
- `Prepare Docker + deployment` (Dockerfile for backend)

