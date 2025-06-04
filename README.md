# Your Natural Guide To Gestational Diabetes (GDM)

## Overview
Degree Project for Frontend Developer studies at Medieinstitutet in Stockholm (2022-2024). Also a major passion project personally :)

The project language is swedish.

For information in Swedish visit a [swedish version here](https://github.com/Ayngie/naturlig-guide-till-graviditetsdiabetes).


### Description
The *Natural Guide to Gestational Diabetes* is a web application that aims to educate and empower individuals with Gestational Diabetes Mellitus (GDM) in how to better manage their GDM via natural and holistic remedies. 

The information provided comes from previous knowledge from my time as an osteopath, personal experiences with GDM, and is supplemented by credible research and authoritative sources. 

The app also includes a search function for retrieving the nutritional info of various foods. The source of this nutritional information is Livsmedelsverket in Sweden.

This project serves as both a learning tool and a showcase of front-end web development skills. I have strived to deliver the info in a clean, accessibble format that is both informative and easy to navigate. I.e. simple and user-friendly!


### Techniques:
This application is built in React + TypeScript + Vite, and includes HTML5, Styled Components & Lazy loading.

The search info is dynamically retrieved from a JSON-file.

### Future development
The project is prepared for implementing api-calls to: 
- Svenska Livsmedelsverket (LSV). However - for this a proxy-server is needed as api-calls from the frontend get access denied due to CORS.
- FoodCentral API (usda.gov) for adding the feature of searching info on foods in english.
- FIX GitHub 404 issue / Deploy elsewhere as GitHub and 404:s aren't best friends... If you try to refresh on any other url than the startpage you will get a GitHub 404. Please go back to the starting URL and navigate from there if this happens.

_UPDATE: This web application is being completely refactored for better structure, accessibility, aesthetics, and SEO (among other things). 
Stay tuned!_


### Deployed with GitHub Actions
Check out the site [here](https://ayngie.github.io/natural-guide-to-gestational-diabetes/)!

Feel free to share it with anyone who you think can benefit from the information! ✨️

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
