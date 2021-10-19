import express, { Request, response, Response } from 'express'
var emoji = require('node-emoji')
const fire = emoji.get('fire')
import cors from 'cors'
import { route } from './routes'
import http from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'

dotenv.config()

const { PORT, GITHUB_CLIENT_ID } = process.env

const app = express()

app.get('/github', (req: Request, res: Response) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req: Request, res: Response) => {
  const { code } = req.query

  return res.json(`Codigo: ${code}`)
})

app.use(express.json())
app.use(cors())
app.use(route)

// app.listen(PORT, () => {
//   console.log(` Api Running on Port Boat: ${PORT}`)
// })

const serverHTTP = http.createServer(app)

serverHTTP.listen(PORT, () => {
  console.log(` Api Running on Port Boat: ${PORT}`)
})

const io = new Server(serverHTTP, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('User connected!')
})

export { serverHTTP, io }

export default app
