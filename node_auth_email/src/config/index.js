export { default as swaggerConfig } from './swagger.config.js'
import { config } from 'dotenv';
config();

//NOTE: If you are running the project in an instance, you should store these secret keys in its configuration settings.
// This type of storing secret information is only experimental and for the purpose of local running.

const { DB_URI, PORT, JWT_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, BUCKET_NAME } = process.env
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_FROM } =
  process.env

export const port = PORT || 3000
export const jwtSecretKey = JWT_SECRET_KEY
export const refreshTokenSecretKey = REFRESH_TOKEN_SECRET_KEY
export const dbUri = DB_URI
export const awsAccessKey = AWS_ACCESS_KEY_ID
export const awsSecretAccessKey = AWS_SECRET_ACCESS_KEY
export const awsRegion = AWS_REGION
export const bucketName = BUCKET_NAME

export const emailHost = EMAIL_HOST
export const emailPort = EMAIL_PORT || 587
export const emailUser = EMAIL_USER
export const emailPass = EMAIL_PASS
export const emailFrom = EMAIL_FROM

export const prefix = '/api'
export const specs = '/docs'

export default {
  port,
  jwtSecretKey,
  refreshTokenSecretKey,
  dbUri,
  awsAccessKey,
  awsSecretAccessKey,
  awsRegion,
  bucketName,
  emailHost,
  emailPort,
  emailUser,
  emailPass,
  emailFrom,
  prefix,
  specs,
}