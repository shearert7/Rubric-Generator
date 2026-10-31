# ACARA / QCAA v9.0 Standards Elaborations Rubric Generator

A fast, teacher-focused web application for generating Australian Curriculum in Queensland (ACiQ) v9.0 standards-aligned assessment rubrics. 

Designed specifically for Queensland secondary educators to quickly select discrete standard elaborations, combine criteria, customize grade descriptors, and export clean, beautifully formatted rubrics to **Google Docs**, **Landscape PDF**, or **Microsoft Word**.

🔗 **Live Site:** [https://shearert7.github.io/Rubric-Generator/](https://shearert7.github.io/Rubric-Generator/)

---

## ✨ Features

- **Official QCAA v9.0 Standards Elaborations Library:**
  Preloaded with hundreds of verified discrete criteria across Australian Curriculum v9.0 learning areas:
  - **Science** (Years 7, 8, 9, 10)
  - **English** (Years 7, 8, 9, 10)
  - **Mathematics** (Years 7, 8, 9, 10)
  - **HASS — Humanities & Social Sciences**:
    - History (Years 7–10)
    - Geography (Years 7–10)
    - Economics & Business (Years 7–10)
    - Civics & Citizenship (Years 7–10)
  - **Health and Physical Education (HPE)** (Years 7–8, Years 9–10)
  - **Languages**:
    - French (Years 7–8, Years 9–10)
  - **The Arts**:
    - Visual Arts (Years 7–8, Years 9–10)
    - Music (Years 7–8, Years 9–10)
    - Drama (Years 7–8, Years 9–10)
  - **Technologies**:
    - Design and Technologies (Years 7–8, Years 9–10)
    - Digital Technologies (Years 7–8, Years 9–10)

- **Discrete Dot-Point Selection:**
  Criteria are broken down into discrete dot points so you can select only the exact skills and concepts assessed in your specific assessment instrument.

- **Intelligent Row Combination:**
  When multiple dot points from the same strand/sub-strand are selected, the generator automatically merges them into a single consolidated row using clean `- ` hyphens.

- **Cross-Curricular & Multi-Subject Support:**
  Combine criteria across different subjects (e.g. Science + Digital Technologies). The first column automatically displays subject tags only when criteria from multiple distinct subjects are included.

- **Dual Grading Scale Options:**
  - **QCAA Standards Elaborations Scale:** `EXT` (Applying / Extending), `ADV` (Making connections / Advancing), `DEM` (Consistently demonstrating), `DEV` (Developing), `EME` (Emerging / Beginning).
  - **Letter Scale:** `A`, `B`, `C`, `D`, `E`.

- **Flexible Ordering:**
  - **QCAA Order:** Matches official QCAA syllabus sequence.
  - **Custom Order:** Reorder criteria rows up and down with one click.

- **Zero-Friction Export Options:**
  - 📄 **Save PDF:** Directly downloads an A4 landscape PDF file styled to QCAA standards with auto-wrapped table cells.
  - 📋 **Copy Table for Google Docs:** Copies pure HTML table to your clipboard formatted with clean `- ` hyphens. When pasted into Google Docs or Google Classroom, it maintains clean lines without distorted bullet point indents.
  - 📝 **Microsoft Word (.doc):** Downloads an MSO XML landscape-formatted Word document.
  - 🖨️ **Print:** Clean landscape print view with page styling.

- **Full Reset & Storage:**
  - One-click **Reset** button to blank all selections back to 0.
  - Selections and configurations are saved to your browser's local storage so you never lose progress.

- **Custom Standards Import:**
  - Paste text from any new or custom syllabus document to immediately add it to your selection library.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### Local Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shearert7/Rubric-Generator.git
   cd Rubric-Generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚢 Deploying to GitHub Pages

This project is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site whenever changes are pushed to `main`.

### Pushing changes to GitHub

From your repository folder, run:
```bash
git add .
git commit -m "Update rubric generator"
git push origin main
```

> **Note on GitHub Authentication:**
> If prompted for your GitHub password in the terminal, use a [GitHub Personal Access Token](https://github.com/settings/tokens) with `repo` permissions.

### Enabling GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/shearert7/Rubric-Generator`
2. Navigate to **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Once your push is complete, the workflow will publish your site to:
   **`https://shearert7.github.io/Rubric-Generator/`**

---

## 🛠️ Built With

- **React 19** & **TypeScript**
- **Vite** (with relative base path `./` for GitHub Pages hosting)
- **Tailwind CSS v4**
- **jsPDF** & **jspdf-autotable** for direct PDF generation
- **Lucide React** for clean icons

---

## 📄 License

This tool is created for educational use with Australian Curriculum in Queensland (ACiQ) v9.0 and QCAA standard elaborations. All Australian Curriculum material is subject to ACARA and QCAA copyright policies.
