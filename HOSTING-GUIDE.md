# BezaTo Website — Free Hosting on GitHub Pages + Namecheap Domain Guide

## What You Need (All Free or Already Paid)
- GitHub account (free) → github.com
- Your domain: bezatoconsultancy.com (Namecheap)
- Your website files: index.html + BezaTo_Logo.png + BezaTo_Favicon.png

---

## PART 1 — HOST YOUR SITE FREE ON GITHUB PAGES

### Step 1: Create a GitHub Account
1. Go to https://github.com
2. Click **Sign up** → enter email, password, username
3. Verify your email

### Step 2: Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Repository name: **bezatoconsultancy.com**  
   *(exact name matters for your custom domain)*
3. Set it to **Public**
4. Check ✅ **Add a README file**
5. Click **Create repository**

### Step 3: Upload Your Website Files
1. Inside your repository, click **Add file → Upload files**
2. Upload ALL of these files (all must sit in the same root folder):
   - `index.html` — homepage
   - `curriculum.html` — full course catalogue + pricing
   - `blog.html` — career guide articles
   - `style.css` — shared design file (all 3 pages use this)
   - `script.js` — shared interactivity (nav, FAQ, tabs)
   - `BezaTo_Logo.png`
   - `BezaTo_Favicon.png`
   - `BezaTo_Text.png`
3. At the bottom, click **Commit changes**

⚠️ **Important:** All files must stay in the same folder (the root of the repo) — the pages link to each other and to `style.css`/`script.js` using simple relative paths like `curriculum.html` and `style.css`, not full URLs. If you create subfolders, the links will break.

### Step 4: Enable GitHub Pages
1. In your repository, click **Settings** (top menu)
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Click **Save**
6. Wait 2 minutes → your site is live at:
   `https://YOUR-USERNAME.github.io/bezatoconsultancy.com`

### Step 5: Add Your Custom Domain (CNAME file)
1. In your repository, click **Add file → Create new file**
2. File name: `CNAME` (no extension)
3. File content (one line only):
   ```
   bezatoconsultancy.com
   ```
4. Click **Commit new file**

---

## PART 2 — CONNECT bezatoconsultancy.com ON NAMECHEAP

### Step 1: Log In to Namecheap
1. Go to https://namecheap.com → log in
2. Click **Domain List** → find **bezatoconsultancy.com**
3. Click **Manage**

### Step 2: Update DNS Settings
1. Click the **Advanced DNS** tab
2. Delete any existing A Records and CNAME records

### Step 3: Add GitHub Pages IP Addresses (A Records)
Click **Add New Record** for each of these — Type: **A Record**:

| Type     | Host | Value           | TTL  |
|----------|------|-----------------|------|
| A Record | @    | 185.199.108.153 | Auto |
| A Record | @    | 185.199.109.153 | Auto |
| A Record | @    | 185.199.110.153 | Auto |
| A Record | @    | 185.199.111.153 | Auto |

### Step 4: Add CNAME for www
| Type  | Host | Value                              | TTL  |
|-------|------|------------------------------------|------|
| CNAME | www  | YOUR-USERNAME.github.io            | Auto |

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 5: Back in GitHub — Set Custom Domain
1. GitHub → your repository → **Settings → Pages**
2. Under **Custom domain**, type: `bezatoconsultancy.com`
3. Click **Save**
4. Check ✅ **Enforce HTTPS** (after a few minutes)

---

## PART 3 — WAIT & VERIFY

DNS propagation takes **15 minutes to 48 hours** (usually under 2 hours).

To check if it's working:
- Open a new browser tab
- Type: `https://bezatoconsultancy.com`
- Your BezaTo website should appear! ✅

To check DNS propagation status:
→ https://dnschecker.org/#A/bezatoconsultancy.com

---

## PART 4 — UPDATE YOUR WEBSITE

When you want to update the site:
1. Make changes to `index.html` on your computer
2. Go to GitHub repository
3. Click on `index.html` → click the ✏️ **Edit** icon
4. Paste your updated code
5. Click **Commit changes**
6. Site updates within 2–3 minutes automatically

OR use GitHub Desktop app (easier):
→ Download at https://desktop.github.com

---

## PART 5 — BEFORE YOU GO LIVE (Checklist)

Before sharing your link, do these:

- [ ] Replace `234XXXXXXXXXX` with your real WhatsApp number in the HTML
       Example: if your number is 08012345678 → use `2348012345678`
       Find all occurrences with Ctrl+F → `234XXXXXXXXXX`

- [ ] Replace `hello@bezatoconsultancy.com` with your real email

- [ ] Add the actual webinar date and platform (Zoom/Google Meet link)

- [ ] Replace `+234 XX XXXX XXXX` in the Contact section with your number

- [ ] Test all WhatsApp links work on your phone

---

## SUMMARY — Your Free Setup

| What          | Service        | Cost        |
|---------------|----------------|-------------|
| Website Host  | GitHub Pages   | FREE forever|
| SSL (HTTPS)   | GitHub Pages   | FREE forever|
| Domain Name   | Namecheap      | ~$10–15/yr  |
| Website Files | Your computer  | FREE        |

**Total running cost: ~$12/year** (domain only)

---

## Need Help?

WhatsApp or email BezaTo if you get stuck at any step.
All the hard part (the website itself) is already done. 🎉
