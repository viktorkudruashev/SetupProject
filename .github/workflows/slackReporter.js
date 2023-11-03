const fs = require('fs');
const { WebClient } = require('@slack/web-api');
const results = JSON.parse(fs.readFileSync('results.json'));

const passedTests = results.runs[0].stats.passes;
const failedTests = results.runs[0].stats.failures;

const message = {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Cypress tests have completed.\nPassed: ${passedTests}, Failed: ${failedTests}`,
      },
    },
  ],
};

const slack = new WebClient(process.env.SLACK_TOKEN);

(async () => {
  await slack.chat.postMessage({
    channel: 'your-slack-channel',
    blocks: message.blocks,
  });
})();