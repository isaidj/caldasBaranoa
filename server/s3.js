const aws = require("aws-sdk");
const region = "us-east-1";
const bucketName = "caldasbaranoa";
const accesskeyId = "AKIAQUYEXQYY3EY5IEKG";
const secretAccessKey = "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";

const s3 = new aws.S3({
  region,
  accesskeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

module.exports = async function generateUploadUrl(fileName) {
  const imageName = "random_image_name";
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };
  const uploadUrl = await s3.getSignedUrl("putObject", params);
  return uploadUrl;
};
