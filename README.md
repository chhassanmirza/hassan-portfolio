# Hassan Ali — Amazon Portfolio

A Next.js portfolio prepared for deployment through GitHub and Vercel.

## Run locally

1. Install Node.js 18.18 or newer.
2. Open this project folder in Terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open `http://localhost:3000`.

## Deploy with GitHub and Vercel

### 1. Create a GitHub repository
- Sign in to GitHub.
- Click **New repository**.
- Name it `hassan-amazon-portfolio`.
- Keep it Public or Private.
- Do not add a README, .gitignore or license because this folder already contains files.

### 2. Upload with GitHub Desktop (easiest)
- Install and open GitHub Desktop.
- Choose **File → Add local repository**.
- Select this project folder.
- If prompted, choose **Create a repository**.
- Commit all files with the message `Initial portfolio build`.
- Click **Publish repository**.

### 3. Import into Vercel
- Sign in to Vercel with GitHub.
- Click **Add New → Project**.
- Import `hassan-amazon-portfolio`.
- Framework should be detected as **Next.js**.
- Leave Build Command, Output Directory and Install Command at their defaults.
- Click **Deploy**.

### 4. Future updates
After editing files:
- Commit changes in GitHub Desktop.
- Push to GitHub.
- Vercel will redeploy automatically.

## Important files
- `app/page.js`: website content and React components.
- `app/globals.css`: all design and responsive styling.
- `public/photo.png`: profile photo.
- `app/layout.js`: SEO title and description.
