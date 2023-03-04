import app from './app.js'

// escolhendo a porta em que o servidor será aberto
const port =  3000
import './infra/contents.js'

// abrindo o servidor na porta escolhida
app.listen(port, ()=>{
  console.log(`Server rodando em http://localhost:${port}/`)
})