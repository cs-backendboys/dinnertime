import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"
import axios from "axios"

const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  }
});

export default async function getImages (req, res) {
  
  const command = new ListObjectsV2Command({
    Bucket: process.env.AWS_S3_READ_BUCKET_NAME,
  })

  try {
    let isTruncated = true;

    // console.log('Your bucket contains the following objects:\n');
    let contents = [];

    while (isTruncated) {
      const { Contents, IsTrucated, NextContinuationToken } = await client.send(command);
      for (let i of Contents) contents.push((`${i.Key}`))
      isTruncated = IsTrucated;
      command.input.ContinuationToken = NextContinuationToken;
    }
    
    return contents;
  } catch(err) {
    console.log(err);
    return;
  }
}


