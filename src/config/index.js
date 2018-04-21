const env = process.env.REACT_APP_ENV || 'local'
const envConfig = require(`./env/${env}`).default

export default envConfig
