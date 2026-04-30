# Karthik Web Solutions Portfolio

Premium, high-converting freelance portfolio built with:

- React (Vite)
- TypeScript
- Tailwind CSS

## Quick start (local preview)

```bash
# 1) open project
cd /workspaces/Karthik-Web-Solutions

# 2) install dependencies
npm install

# 3) start preview server
npm run dev
```

Open the Vite URL shown in terminal (usually `http://localhost:5173`).

## If you get `ENOENT: ... package.json`

You are running commands in a folder/branch that does not contain this project.

```bash
# verify you're in the repo root
pwd
ls -la

# verify branch and recent commits
git branch --show-current
git log --oneline -n 3
```

You should see files like `package.json`, `index.html`, and `src/` in the current directory.

## Build for production

```bash
npm run build
npm run preview
```
