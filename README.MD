# Webpack 5 Module Federation POC

- Step 1: Build slave project and serve in localhost:5000

```bash
cd app-slave/
npm ci
npm run build
npm run serve:remote
```

- Step 2: Serve host project and fetch from remote entry

```bash
cd app-host/
npm ci
npm run serve
```