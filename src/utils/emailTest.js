import config from '../config'

const emailConfig = {
  host: config?.emailHost,
  port: config?.emailPort,
  auth: {
    user: config?.emailUser,
    pass: config?.emailPass,
  },
}
console.log('app.js::[24]', { emailConfig })

const emailTransfer = createTransport(emailConfig)

emailTransfer
  .sendMail({
    from: 'd@d.com',
    to: config?.emailUser,
    subject: 'Hello ✔',
    text: 'Hello world?',
  })
  .then()
  .catch((e) => {
    console.log('app.js::[28] emailTransfer EMAIL', e)
  })
