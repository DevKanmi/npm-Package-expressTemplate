# node-bptemplate

`node-bptemplate` is a basic template designed for beginners to streamline the creation of new Node.js projects. It provides a simple way to set up a project with a predefined structure and configuration, following best practices.

## Features

- A command-line interface (CLI) for creating a new project from a template.
- Includes a customizable template folder to kickstart your project.
- Easy to integrate with existing Node.js projects.

## Installation

To install the package globally on your system, use npm:

```bash
npm install -g node-bptemplate
```
## Usage
After installing the package, you can use the `create-template` command to copy the contents of the `templates` folder into your desired directory.

```bash
create-template <destination-directory>
```
- `<destination-directory>:` The path where the template will be copied. If not specified, the current directory (`.`) will be used.

## Example
To create a new project in a directory named `my-new-project`, run:

```bash
create-template my-new-project
```
This will copy the contents of the `templates` folder into the `my-new-project directory.`



## Project Structure (Template) for Users

When you run the `create-template` command, the following project structure will be generated:
``` arduino
project-root/
│
├── controllers/
│   └── routeController.js
│
├── middlewares/
│   └── middleware.js  // Common error handling to speed up the process
│
├── models/
│   └── exampleSchema.js
│
├── routes/
│   └── routeEx.js
│
├── tests/
│   └── newFile.test.js
│
├── utils/
│   ├── config.js
│   └── logger.js  // Logging functions for error and info
│
├── .env
├── app.js
├── index.js
├── package.json

```


## Project Structure(For Contributing)
Here is an overview of the project structure:

- `bin/:` Contains the CLI entry point (cli.js).
- `lib/:` Contains the logic for copying the template (createSkeleton.js).
- `templates/:` The folder whose contents will be copied to the destination 
 directory.
- `package.json:` Defines the project’s metadata, dependencies, and scripts.
- `Dependencies used` : `fs-extra` helped in creating, copying, and manipulating files and directories when Creating new projects with your template.

## Development
### Setup
1. `Clone the repository:`
```bash
git clone https://github.com/DevKanmi/npm-Package-expressTemplate.git
```
2. `Navigate to the project directory:`

```bash
cd npm-Package-expressTemplate
```
3. `Install dependencies:`
```bash
npm install
```
## Testing Locally
To test the package locally:

Link the package globally:

```bash
npm link
```
Use the create-template command to test:

```bash
create-template <destination-directory>
```
## Making Changes
1. #### Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```
2. #### Make your changes to the codebase.

3. #### Commit your changes:

```bash
git add .
git commit -m "Add a concise message describing your changes"
```

4. #### Push your branch to the repository:

```bash
git push origin feature/your-feature-name
```

5. #### Open a Pull Request (PR) on GitHub:

- Go to the repository on GitHub.
- Click on "Compare & pull request".
- Provide a clear description of your changes and submit the PR

## Contributing
We welcome contributions to the project! Please follow these guidelines:

- Fork the repository and work on a new branch for each feature or bug fix.
- Write clear and concise commit messages.
- Ensure all tests pass by `Testing it Locally` before submitting a pull request.
- Follow the Code of Conduct and Contributing Guidelines.

## License
This project is licensed under the ISC License.

``` bash
This `README.md` includes a detailed section for contributors, covering how to set up the development environment, make changes, and submit pull requests. Let me know if you need any additional details!
```

