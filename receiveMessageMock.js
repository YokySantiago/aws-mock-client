const { mockClient } = require("aws-sdk-client-mock");
const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs");
const SQSHelper = require("./SQSHelper");

const sqsMock = mockClient(SQSClient);
sqsMock
  .resolves({ Message: "Hello world!" })
  .on(ReceiveMessageCommand)
  .resolves({ Message: "Hello from receiveMessage!" });

(async () => {
  const sqsHelper = new SQSHelper();
  const params = {};
  console.log(
    "Calling receiveMessage: ",
    await sqsHelper.receiveMessage(params)
  );
  console.log("Calling listQueues: ", await sqsHelper.listQueues());
})();
