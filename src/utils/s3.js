import { ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../config/aws";

/**
 * @typedef {Object} S3Object
 * @property {string} Key
 * @property {number} Size
 * @property {Date} LastModified
 */

/**
 * @typedef {Object} S3CommonPrefix
 * @property {string} Prefix
 */

/**
 * @typedef {Object} S3ListResult
 * @property {S3Object[]} files
 * @property {S3CommonPrefix[]} folders
 * @property {string} nextContinuationToken
 */

/**
 * List objects in an S3 bucket
 * @param {string} bucket - The bucket name
 * @param {string} [prefix=""] - The prefix to filter objects
 * @param {string} [continuationToken] - Token for pagination
 * @param {number} [maxKeys=1000] - Maximum number of keys to return
 * @returns {Promise<S3ListResult>}
 */
export async function listObjects(bucket, prefix = "", continuationToken = null, maxKeys = 1000) {
  try {
    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
      Delimiter: "/",
      ContinuationToken: continuationToken,
      MaxKeys: maxKeys,
    });

    const response = await s3Client.send(command);
    return {
      files: response.Contents || [],
      folders: response.CommonPrefixes || [],
      nextContinuationToken: response.NextContinuationToken,
    };
  } catch (error) {
    console.error("Error listing objects:", error);
    throw error;
  }
}

/**
 * Generate a signed URL for an S3 object
 * @param {string} bucket - The bucket name
 * @param {string} key - The object key
 * @returns {Promise<string>}
 */
export async function getSignedUrlForObject(bucket, key) {
  try {
    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  } catch (error) {
    console.error("Error generating signed URL:", error);
    throw error;
  }
} 