import prismaClient from '../Prisma'

class Get3Last {
  async execute() {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    })

    return messages
  }
}

export { Get3Last }
