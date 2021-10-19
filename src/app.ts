import express, { Request, response, Response } from 'express'
import dotenv from 'dotenv'
var emoji = require('node-emoji')
const fire = emoji.get('fire')
import cors from 'cors'
import { route } from './routes'

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

app.listen(PORT, () => {
  console.log(`${fire} Api Running on Port: ${PORT}`)
})

export default app
