# takeHome

Install Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

After cloning repo, install node module in the root folder with:'npm install node-modules'

To run tests from Cypress runner run the : 'npx cypress open' command (preferable)

To run the tests directly from command line use the: 'npx cypress run' command

Main spec file with the tests are under tests > cypress > integration > otcMarkets.spec.js (this spec file has comments on what each tests are validating as well)

Element selectors file is in tests > cypress > fixtures > testdata.json //was using this prior to adding a command that allows you to perform the same test for multiple data

Custom Cypress Command that runs the tests with multiple data : Look in > Cypress > Support > Commands
