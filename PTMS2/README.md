# PTMS2

PTMS2 is an Angular-based task management application designed for managing project activities, incidents, and task workflows. The project uses Angular 8 with TypeScript, Angular Material, Bootstrap, and charting libraries for a dashboard-oriented interface.

## Project Overview

This application is built for:
- Task tracking and monitoring
- Incident management
- Role-based workflow handling
- Dashboard visualization with charts and progress indicators
- Responsive UI using Angular Material and Bootstrap

## Tech Stack

- Angular 8
- TypeScript
- SCSS
- Angular Material
- Bootstrap 4
- Chart.js
- FusionCharts
- RxJS

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js 10.x or 12.x (recommended for Angular 8 compatibility)
- npm 6.x or later
- Angular CLI 8.x

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Swaroop729/PTMS2.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PTMS2
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the development server:

```bash
npm start
```

or:

```bash
npx ng serve
```

Then open:

```text
http://localhost:4200/
```

The app will automatically reload when source files change.

## Build

To create a production build:

```bash
npm run build
```

For a production-optimized build:

```bash
npm run build -- --prod
```

The build output will be generated in the `dist/` directory.

## Testing

Run unit tests:

```bash
npm test
```

Run end-to-end tests:

```bash
npm run e2e
```

## Linting

```bash
npm run lint
```

## Notes for Stability

This project is based on Angular 8 and older third-party libraries. For a stable local setup:

- Use a compatible Node.js version (preferably Node 10/12)
- If `node-sass` build issues appear, reinstall dependencies:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
- If needed, clean the Angular cache:
  ```bash
  npx ng cache clean
  ```

## Project Structure

```text
PTMS2/
├── src/
├── e2e/
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## License

This project does not currently declare a license in the repository metadata. Please check the repository for any licensing updates before using it in a production environment.

## Support

For issues or improvements, open an issue in the GitHub repository and provide:
- Node.js version
- npm version
- Angular CLI version
- Operating system
- Error logs or screenshots

