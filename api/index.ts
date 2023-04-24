import express from 'express'
import medicacaoRouter from './src/routers/medicacaoRouter'
const app = express()

app.use(express.json())

app.use('/api', medicacaoRouter)

app.listen(3333, () => 'server running on port 3333')
