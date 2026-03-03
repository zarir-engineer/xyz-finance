# XYZ Investments Website

A professional finance website built with React, inspired by Vanguard's layout.  
All internal pages show a friendly animated dog "Coming Soon" page.

---

## 🚀 Quick Start (Local Development)

```bash
npm install
npm start
# Opens at http://localhost:3000
```

---

## 📦 Deploy to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `xyz-finance` (or anything you like)
3. Set to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2 — Push this code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/xyz-finance.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, choose **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` will auto-run on every push to `main`
4. Your site will be live at: `https://YOUR_USERNAME.github.io/xyz-finance/`

---

## 🌐 Connect Your GoDaddy Domain

### Step 1 — Get your GitHub Pages IP addresses

GitHub Pages uses these IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Step 2 — Configure DNS in GoDaddy

1. Log in to [godaddy.com](https://godaddy.com) → **My Products** → **DNS**
2. Find your domain (e.g. `xyzinvestments.com`)
3. Click **Manage DNS**
4. **Delete** any existing A records pointing to GoDaddy parking pages
5. **Add 4 new A records**:

| Type | Host | Points to         | TTL  |
|------|------|-------------------|------|
| A    | @    | 185.199.108.153   | 600  |
| A    | @    | 185.199.109.153   | 600  |
| A    | @    | 185.199.110.153   | 600  |
| A    | @    | 185.199.111.153   | 600  |

6. **Add a CNAME for www**:

| Type  | Host | Points to                         | TTL  |
|-------|------|-----------------------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io           | 600  |

### Step 3 — Add custom domain in GitHub

1. Go to your repo → **Settings** → **Pages**
2. Under **Custom domain**, enter: `xyzinvestments.com`
3. Click **Save**
4. Check **Enforce HTTPS** (wait a few minutes for the cert)

### Step 4 — Add CNAME file to your project

Create a file called `CNAME` (no extension) inside the `/public` folder:

```
xyzinvestments.com
```

Then commit and push:
```bash
git add public/CNAME
git commit -m "Add custom domain"
git push
```

⏱️ DNS changes can take **15 minutes to 48 hours** to propagate globally.

---

## 🏗️ Project Structure

```
xyz-finance/
├── public/
│   ├── index.html
│   └── CNAME              ← add your domain here
├── src/
│   ├── App.js             ← routing
│   ├── styles.css         ← global styles
│   ├── components/
│   │   ├── Navbar.js      ← sticky nav with dropdowns
│   │   ├── TopBar.js      ← top utility bar
│   │   ├── HeroSlider.js  ← animated 3-slide hero
│   │   └── Footer.js      ← full footer with links
│   └── pages/
│       ├── HomePage.js    ← full home page
│       └── ComingSoon.js  ← animated dog page (all other routes)
├── .github/
│   └── workflows/
│       └── deploy.yml     ← auto-deploy on push
└── package.json
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Company name | `src/components/Navbar.js` and `src/components/Footer.js` |
| Hero slides content | `src/components/HeroSlider.js` → `slides` array |
| Nav menu items | `src/components/Navbar.js` → `navItems` array |
| Goal cards | `src/pages/HomePage.js` → `GoalCard` section |
| Stats numbers | `src/pages/HomePage.js` → `Stat` components |
| Colors | `src/styles.css` → `:root` CSS variables |
| Dog messages | `src/pages/ComingSoon.js` → `dogMessages` array |

---

## 🎨 Color Palette

| Variable | Value | Use |
|---|---|---|
| `--navy` | `#0a1628` | Primary dark |
| `--accent` | `#c8973a` | Gold accent |
| `--gold` | `#e5b55a` | Highlight gold |
| `--cream` | `#f8f5f0` | Background light |
| `--light` | `#f3f0eb` | Section backgrounds |

---

## 📞 Need help?

Replace all `XYZ` references with your friend's actual company name before going live!
