<div align="center">
  <h1>JavaScript - Web Scraping</h1>
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uYsNi1UQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1yuk24tdujckpswg8en.gif" alt="Web Scraping">
</div>

## Table of Contents

- [Description](#description)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#Author)

---

## Description

This project introduces you to the exciting world of web scraping using JavaScript. Web scraping allows you to extract data from websites and work with it programmatically. You'll learn how to manipulate JSON data, use the `request` module, and interact with web resources. Dive into the fundamentals of web scraping and unleash the power of JavaScript!

---

## Learning Objectives

Upon completing this project, you will be able to:

- Understand the incredible capabilities of JavaScript programming.
- Manipulate JSON data efficiently.
- Utilize the `request` and `fetch` APIs for making web requests.
- Read and write files using the `fs` module for local data processing.

---

## Requirements

**General:**
- Editor: vi, vim, emacs.
- Environment: Ubuntu 14.04 LTS with Node.js version 10.14.x.
- Files should have a newline at the end.
- The first line of each file should be `#!/usr/bin/node`.
- A mandatory `README.md` file at the root of the project folder.
- Code should adhere to the semistandard style, with semicolons included.

**File Execution:**
- All project files must be executable.

**Code Style:**
- Use ES6 syntax, avoiding `var`.

---

## Installation

1. **Install Node.js 10:**
   To set up your environment with Node.js 10, run the following commands:

   ```bash
   $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
   $ sudo apt-get install -y nodejs

   ```
2. **Install semistandard:**
Ensure your code follows the semistandard style by installing it globally:
```bash
$ sudo npm install semistandard --global
```
3. **Install request module:**
The request module is used for web scraping. Install it and set the NODE_PATH:
```bash
$ sudo npm install request --global
$ export NODE_PATH=/usr/lib/node_modules
```

## Usage

To run your web scraping project, execute the main JavaScript file using Node.js. Replace filename.js with the name of your JavaScript file:

```bash
$ node filename.js
```
## Author
Youssef Saad
