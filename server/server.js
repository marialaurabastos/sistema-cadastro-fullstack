import express from 'express'
import cors from 'cors'
import pkg from '@prisma/client'

const { PrismaClient } = pkg

const prisma = new PrismaClient({
  datasourceUrl: "postgresql://postgres:yetTUTact.1@localhost:5432/cadastro?schema=public",
  __internal: {
    debug: false
  }
})

const app = express()
app.use(express.json())
app.use(cors())
app.post('/usuarios', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                user: req.body.usuario,
                email: req.body.email,
                password: req.body.senha
            }
        })
        res.status(201).json({ message: 'Usuário criado com sucesso!' })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar' })
    }
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000 '))