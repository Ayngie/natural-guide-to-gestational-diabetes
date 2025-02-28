# Your Natural Guide To Gestational Diabetes (GDM)

_UPDATE INFORMATION: This web application is being completely refactored for better structure, accessibility, aesthetics, and SEO (among other things). 
Link to refactored project will be released here when ready, so stay tuned!_

## Description
This is a Degree Project for Frontend Developer studies at Medieinstitutet in Stockholm (2022-2024).

### Overview
The *Natural Guide to Gestational Diabetes* is a web application crafted to provide users with a comprehensive resource for understanding and managing Gestational Diabetes Mellitus (GDM) via a natural and holistic approach . Drawing from personal experiences and authoritative sources, this project aims to educate and empower individuals through accessible, user-friendly content. The app also includes a search function for retrieving the nutritional info of various foods. 

This application is built in React + TypeScript + Vite, with lazy loading.

The search info is dynamically retrieved from a JSON-file, the source of this nutritional information is Livsmedelsverket in Sweden.

The project language is swedish.

**[Visit the Live Site](https://ayngie.github.io/natural-guide-to-gestational-diabetes/)**

### Features
- **Educational Content**: Combines personal insights with research-backed information from reputable health organizations.
- **Responsive Design**: Built with HTML5 and Styled Components to ensure seamless usability across desktop and mobile devices.
- **Interactive Elements**: Utilizes JavaScript/TypeScript for dynamic content delivery and enhanced user engagement.
- **Clean UI**: Structured with semantic HTML and styled with modern styling techniques for an intuitive user experience.

### Purpose
This project was developed to share knowledge gained from personal experience with gestational diabetes, supplemented by credible research, in a clean format that is both informative and easy to navigate. It serves as both a learning tool and a showcase of front-end web development skills.

### Future development
The project is prepared for implementing api-calls to: 
- Svenska Livsmedelsverket (LSV). However - for this a proxy-server is needed as api-calls from the frontend get access denied due to CORS.
- FoodCentral API (usda.gov) for adding the feature of searching info on foods in english.

---

## N.B.
### GitHub and SPA's:
As GitHub does not support SPA's (Single Page Applications) - if you refresh any of the 'subpages' (other than the startpage) you will get a 404 from GitHub. If this happens - to fix  this - please revisit the startpage and continue to navigate with help of the navbar (do not refresh the page deployed with GitHub Actions :).

### Swedish description of project:
This project exists in an identical copy with a swedish title.
Were you looking for this projects repo with a swedish title and Readme? Find the [swedish version here](https://github.com/Ayngie/naturlig-guide-till-graviditetsdiabetes).

---

## Techniques used (shields/badges)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB/to/img.png)
![React Router badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white/to/img.png)
![Styled Components badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white/to/img.png)
![TypeScript badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white/to/img.png)
![JSON badge](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white/to/img.png)
![Vite badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E/to/img.png)
![Cypress badge](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white/to/img.png)
![SPA badge](https://img.shields.io/badge/SPA-0FAAFF?style=for-the-badge&logo=sap&logoColor=white/to/img.png)
![Git badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white/to/img.png) 
![npm badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white/to/img.png)
![VSCode badge](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white/to/img.png)
![ESLint badge](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white/to/img.png)
![Prettier badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E/to/img.png)
![HTML5 badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white/to/img.png)
![JavaScript badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E/to/img.png)
![Adobe Photoshop badge](https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black/to/img.png)
![Axios badge](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white/to/img.png)
![Postman badge](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white/to/img.png)
![.env badge](https://img.shields.io/badge/.env%20-%20%23FF4FA7?style=for-the-badge&color=%23FF4FA7/to/img.png)
![GitHub badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white/to/img.png)
![GitHub Actions badge](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white./to/img.png)


---

## Git commit convention:
- 👷 build: - *project build-up*
- 📝 docs: - *documentation / README*
- ✨ feat: - *introduces a new feature to the codebase*
- ♻️ refactor: - *refactoring of code*
- 💄 style: - *css/scss styling*
- 🐛 bugfix: - *patches a bug in your codebase*
- 🚚 moved: - *moved files*
- 🔥 deleted: - *deleted files or code*
- ⏪ revert: - *revert to previous code*
- ✅ test: - *add or update tests*

---

## Screenshot of project:
![Demonstration of my degree project](./public/screenshot-of-project.png?raw=true "Your Natural Guide to Gestational Diabetes")

---

## Installation
To run this project locally:

Clone the repository

```terminal
  git clone https://github.com/Ayngie/natural-guide-to-gestational-diabetes.git
```

Navigate to the project directory

```terminal
  cd natural-guide-to-gestational-diabetes
```

Install dependencies

```terminal
  npm install
```

Start the server

```terminal
  npm run dev
```
