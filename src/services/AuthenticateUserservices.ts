import { prisma } from '@prisma/client'
import axios from 'axios'
import { response } from 'express'
import prismaClient from '../Prisma'

interface IAccessToken {
  access_token: string
}

interface IUserResponse {
  avatar_url: string
  login: string
  id: number
  name: string
}

class Authenticateuserservices {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data: accessTokenResponse } = await axios.post<IAccessToken>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    })

    const response = await axios.get<IUserResponse>('https://api.github.com/user', {
      headers: {
        authorization: `bearer ${accessTokenResponse.access_token}`,
      },
    })

    const { login, id, avatar_url, name } = response.data

    let user = await prismaClient.user.findFirst({
      where: {
        git_hub_id: id,
      },
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          git_hub_id: id,
          name,
          login,
          avatar_url,
        },
      })
    }

    return response.data
  }
}

export { Authenticateuserservices }
