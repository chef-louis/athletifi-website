# AthletiFi Website

This is the repository for the AthletiFi platform. AthletiFi is a sports technology company focused on transforming youth soccer development and analytics. To that aim we have created a comprehensive platform that offers in-depth analytics and valuable features tailored to the needs of the youth soccer community.

## Architecture Overview

The AthletiFi Dashboard is built using the following architecture:

- **Frontend**: Next.js framework with Tailwind CSS for UI development
- **Backend**: AWS Lambda functions and API Gateway for serverless API endpoints
- **Database**: AWS RDS PostgreSQL for data storage
- **Authentication**: AWS Amplify and Cognito for user authentication and authorization
- **CMS**: Strapi for content management

The frontend communicates with the backend API endpoints to fetch and update data from the PostgreSQL database. AWS Amplify and Cognito handle user authentication and secure access to protected routes and resources. Strapi is used as the headless CMS for managing content.

## Key Technologies

The AthletiFi project utilizes the following key technologies:

- **Next.js**: A React framework for server-side rendering, automatic code splitting, and simple client-side routing.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **AWS Lambda**: Serverless compute service for running backend code without provisioning or managing servers.
- **AWS API Gateway**: Fully managed service for creating, publishing, and securing APIs at any scale.
- **AWS RDS PostgreSQL**: Managed relational database service for storing structured data.
- **AWS Amplify**: Development platform for building secure and scalable mobile and web applications.
- **AWS Cognito**: User authentication and authorization service.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Recharts**: A composable charting library built on React components.
- **Strapi**: Open-source headless CMS (Content Management System) for managing content via APIs.

## Getting Started

1. Clone the repository and navigate to the project directory.
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

### Strapi CMS Setup

1. Strapi is a next-gen headless CMS that allows for content-rich experiences.
2. Create a new Strapi app:

   ```bash
   yarn create strapi-app my-project --quickstart
   ```

3. Run the development server:

   ```bash
   yarn run development
   ```

## Amplify Setup

To set up AWS Amplify for the AthletiFi project, follow these steps:

1. Install the AWS Amplify CLI globally:

   ```bash
   yarn global add @aws-amplify/cli
   ```

2. Configure Amplify by running the following command:

   ```bash
   amplify configure
   ```

   This will open the AWS Management Console in your web browser.

3. If prompted, click on "Open AWS Console" and sign in to your AWS account. If you don't have an account, you can create a new one.

4. In the Amplify CLI, press Enter to continue.

5. Specify the AWS Region for the Amplify project (e.g., `us-east-2`).

6. Provide the access key ID and secret access key for your AWS IAM user. These credentials can be found in the provided CSV file. Be careful not to share or expose these sensitive credentials.

7. Choose a profile name for the Amplify configuration (e.g., `default`).

8. After the configuration is complete, run the following command to pull the existing Amplify project:

   ```bash
   amplify pull
   ```

9. When prompted, select the following options:

   - Choose the AWS profile: `default`
   - Choose the Amplify environment: `athletifi-website`
   - Confirm the project setup
   - Select code generation language: `javascript`
   - Select framework: `react`
   - Use the default `src` directory path
   - Set the distribution directory path to `.next`
   - Set the build command to `yarn build`
   - Set the start command to `yarn start`

10. After the Amplify project is pulled successfully, you can start the development server using:

    ```bash
    yarn dev
    ```

If you encounter any issues during the build process, make sure to run `yarn install` to install any missing dependencies.

Note: The `amplify serve` command can be used to start the application using the Amplify server, but it requires a production build to be available in the `.next` directory. If you want to use `amplify serve`, make sure to run `yarn build` first.

For more information on AWS Amplify and its setup process, refer to the official Amplify documentation: [AWS Amplify Docs](https://docs.amplify.aws/)

## ESLint and Prettier Setup for VS Code

For maintaining consistent code quality and formatting, we use `eslint-config-next` along with `prettier` for code formatting. In order for this setup to work seamlessly in VS Code, some additional setup is required.

### Configuration Steps

Assuming you have already run `yarn install` which installs all the dependencies listed in `package.json`, including ESLint and Prettier configurations, follow these steps to configure your VS Code:

1. Please install the following extensions in VS Code:

   1. ESLint (`dbaeumer.vscode-eslint`)
   2. Prettier - Code formatter (`esbenp.prettier-vscode`)

2. To automatically format and lint your code on save, add the following settings to your `settings.json` file in VS Code:

   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     },
     "editor.formatOnSave": true,
     "[javascript]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[javascriptreact]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[typescript]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     },
     "[typescriptreact]": {
       "editor.defaultFormatter": "dbaeumer.vscode-eslint"
     }
   }
   ```

## File Structure

The project follows a standard Next.js file structure:

- **/app**: Contains the main Next.js pages and API routes.
  - **/actions**: Contains definition files for server actions used throughout the application.
  - **/api**: Holds the backend API routes that connect to AWS Lambda functions.
  - **/addUser**: Adds a new user.
  - **/contact**: Handles contact/support requests.
  - **/dashboard/[...cardId]**: Fetches data for a specific player dashboard based on their card ID.
  - **/news/[slug]**: Retrieves a specific news article based on the slug.
  - **/signup**: Handles user sign-up flow.
  - **/user**: Manages user data and preferences.
  - **/video**: Serves video content.
- **/(auth)**: Contains auth-protected pages that require login.
  - **/dashboard/[...cardId]**: The main dashboard page for an individual player.
  - **/help-support**: Help and support pages.
  - **/profile**: User profile management page.
  - **/settings**: User account settings.
- **/public**: Publicly hosted static files like images, fonts, and videos.
- **/src**: Contains the application source code.
  - **/components**: React components organized by feature/page.
  - **/styles**: Custom CSS stylesheets.
  - **/types**: TypeScript type/interface definitions.
  - **/utils**: Utility and helper functions.

## Component Descriptions

The AthletiFi project is organized into various components based on features and pages. Each component serves a specific purpose and is responsible for rendering a part of the user interface or handling specific functionality. Detailed descriptions of each component can be found in the [Component Descriptions](#component-descriptions) section.

## API Routes

The project utilizes NextJS server actions and server components to communicate with the backend. These actions are defined within files in the `/app/actions` directory and encompass utilities for user management, player dashboards, news articles, and more.

## Utility Functions

The project includes various utility functions that provide helper functionalities and abstractions for common tasks. These functions are organized in the `/src/utils` directory and cover areas such as data transformation, API requests, authentication, and more. Detailed descriptions of each utility function can be found in the [Utility Functions](#utility-functions) section.

## Styling

The project uses Tailwind CSS for styling the user interface. Tailwind CSS provides a set of utility classes that can be composed to quickly build custom designs. The configuration for Tailwind CSS can be found in the `tailwind.config.js` file. Custom CSS styles are defined in the `/src/styles` directory.

## Testing

The project uses Jest for unit testing along with Playwright for E2E and integration testing. Jest test files can be found in the `/__tests__` directory while Playwright tests are organized under the `/__e2etests__`. Both testing directories utilize a similar folder structure as the `/app` directory for keeping our tests organized as best as possible. To execute Jest test suites, navigate to the root directory of the project and run `yarn test` and for Playwright you can run `yarn test:e2e` to load the test console for executing Playwright test suites.

## Deployment

The AthletiFi Dashboard is deployed using AWS Amplify. The deployment configuration is defined in the `amplify.yml` file. AWS Amplify provides a seamless way to deploy and manage the application, including provisioning the necessary AWS resources and handling continuous deployment.

## Best Practices

To ensure code quality and maintainability, the project follows various best practices:

- Use TypeScript for type safety and improved developer experience.
- Follow a consistent code style and naming conventions.
- Use meaningful and descriptive names for components, functions, and variables.
- Keep components small and focused on a single responsibility.
- Use NextJS caching to provide efficient management of data throughout the application.
- Leverage Tailwind CSS for rapid UI development and consistency.
- Write unit tests for critical components and functions.
- Use Git for version control and follow a branching strategy.
- Regularly update dependencies and address security vulnerabilities.
