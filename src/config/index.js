const env = process.env.REACT_APP_ENV || 'local'
const envConfig = require(`./${env}/index`).default

export default envConfig
