//importação das ferramentas necessárias
import express from 'express' //framework que cria servidor e rotas
import cors from 'cors' //conecta front e back
import pkg from '@prisma/client' //importa o pacote do prisma

const { PrismaClient } = pkg; //extrai o PrismaClient do pacote

//configuração do prisma para conectar ao banco de dados
const prisma = new PrismaClient();

//inicialização do servidor (express)
const app = express()
app.use(express.json()) //configura o servidor para receber JSON no body das requisições
app.use(cors()) //configura o servidor para aceitar requisições do front-end

//rota de criação de usuário (métopdo POST)
app.post('/usuarios', async (req, res) => {

    //loga no console os dados recebidos para verificação
    console.log('Recebido pedido de criação de usuário:', req.body);
    try { //tenta criar o usuário no banco de dados usando o Prisma
        await prisma.user.create({
            data: {
                user: req.body.usuario, //pega o 'usuario' enviado pelo front
                email: req.body.email, //pega o 'email' enviado pelo front
                password: req.body.senha //pega a 'senha' enviada pelo front
            }
        });

        //se der certo, envia o status 201 (criado) e uma mensagem de sucesso
        res.status(201).json({ message: 'Usuário criado com sucesso!' })
    } catch (error) {

        //se der erro, verifica se é erro de dados duplicados (código específico P2002 do Prisma)
        if (error.code === 'P2002') {
            return res.status(400).json({
                error: 'Dados já cadastrados',
                message: 'O email ou usário informado já está cadastrado.'
            });
        }
        
        //para outros erros, envia status 500 (erro interno) com mensagem genérica
        return res.status(500).json({ 
            error: 'Erro interno do servidor',
            message: 'Não foi possível completar o cadastro agora. Tente novamente mais tarde.'
        });
    }
});

//inicialização do servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000 '))