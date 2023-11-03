const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
      "reporter": "cypress-slack-reporter",
      "reporterOptions": {
        "url": "${SLACK_WEBHOOK_URL}"
      }
  }
});
