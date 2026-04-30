# Karthik Web Solutions Portfolio

Premium, high-converting freelance portfolio built with:

- React (Vite)
- TypeScript
- Tailwind CSS

## Quick start

```bash
# 1) clone/open repo
cd /workspaces/Karthik-Web-Solutions

# 2) ensure you are on the branch that contains the website files
# (if you're on main and package.json is missing)
git branch
git checkout work

# 3) install dependencies
npm install

# 4) run dev server
npm run dev
```

Then open the local Vite URL (usually `http://localhost:5173`).

## Why you saw `ENOENT: ... package.json`

That error means the current folder does not contain the project files yet. In your logs, you were on `main`, while the project files were committed on branch `work` in this environment.

If needed, merge the branch into `main`:

```bash
git checkout main
git merge work
```

After that, `package.json` will be available on `main` and `npm install` should work (assuming network access to npm is allowed).
