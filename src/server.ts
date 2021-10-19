import { serverHTTP, io } from './app'
import dotenv from 'dotenv'
const fire = emoji.get('fire')
var emoji = require('node-emoji')

dotenv.config()

const { PORT } = process.env

serverHTTP.listen(PORT, () => {
  console.log(` Api Running on Port Boat: ${PORT}`)
})

export default serverHTTP
