const { PublishCommand, SNSClient } = require("@aws-sdk/client-sns");
const { mockClient } = require("aws-sdk-client-mock");

(async () => {
  const snsMock = mockClient(SNSClient);
  snsMock.on(PublishCommand).resolves({
    MessageId: "Example-Id-01",
  });

  const sns = new SNSClient({});
  const result = await sns.send(
    new PublishCommand({
      TopicArn: "arn:aws:sns:us-east-1:111111111111:MyTopic",
      Message: "My message",
    })
  );

  console.log(result);
})();
