const { mockClient } = require("aws-sdk-client-mock");
const { SQSClient } = require("@aws-sdk/client-sqs");
const SQSHelper = require("./SQSHelper");

const sqsMock = mockClient(SQSClient);
sqsMock.onAnyCommand().resolves({ Message: "Hello world!" });

(async () => {
  const sqsHelper = new SQSHelper();
  console.log(await sqsHelper.listQueues());
})();
