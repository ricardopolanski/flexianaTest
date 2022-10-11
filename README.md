[![Flexiana Challenge](https://github.com/ricardopolanski/flexianaTest/actions/workflows/main.yml/badge.svg)](https://github.com/ricardopolanski/flexianaTest/actions/workflows/main.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ricardopolanski_flexianaTest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ricardopolanski_flexianaTest)

<H1>How to install and run automated Smart Flexiana Challenge test</h1>

<h3>Requirements</h3>

- [NodeJS](https://nodejs.org/en/download/ "NodeJS")

<h3>Steps to execute</h3>

- Clone this repository to your local computer using the following URL: https://github.com/ricardopolanski/flexianaTest.git
- Run the following comands:

	- Install dependencies
		- npm i

	- Run the test on openMode
		- npx cypress open

	- Run the test on runMode
		- npx cypress run


<h3>About the project</h3>

The project was developed using [Cypress](https://www.npmjs.com/package/cypress "Cypress") Framework.
Was writen four scenarios as following:
  1. Add Computers
  2. Delete Computers
  3. Edit Computers
  4. Filter Computer by name
  
<h3>Project Structure</h3>

<pre>

📂---.github
|   \📂---workflows
|         📜 main.yml			# Git Action Config file
|
📂---cypress
|   📂---fixtures
|   |       example.json
|   |
|   📂---integration
|   |   📂---api-test
|   |   |     📜  cards.spec.js
|   |   |
|   |   📂---apiRequest
|   |   |     📜  requests.js
|   |   |
|   |   📂---e2e
|   |   |     📜  e2e.spec.js
|   |   |
|   |   \📂---pageObjects
|   |         📜  elements.js
|   |
|   📂---plugins
|   |     📜  index.js
|   |
|   \📂---support
|         📜  commands.js
|         📜  index.js

</pre>
