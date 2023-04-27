import express from 'express'

import medicacaoRouter from './src/routers/medicacaoRouter'
import pacienteRouter from './src/routers/pacienteRouter'
import receitaRouter from './src/routers/receitaRouter'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', medicacaoRouter)
app.use('/api', pacienteRouter)
app.use('/api', receitaRouter)
app.use(function(err: any, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3333, () => 'server running on port 3333')
