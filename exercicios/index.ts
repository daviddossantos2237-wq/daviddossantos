import express {type Request, type Respopnse} from "express"
import {adicionarServico, listaServico, obterServico} from "./servico.js"

const app = express ()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello Word!")
})

 // rota para adicionar um serviço novoa
 app.post("/adicionar-servico", (req:Request, rest: Response) => {
    const novoServico = req.body

    const addservicoResponse = adicionarServico(novoServico) 

    rest.json(addServicoResponse)
 })
 
 // rota listar todos so servicos
 app.get("/listar-servicos", (req: Request, res: Response) =>{
  const listenServicoResponse = listaServicos()




 //rota para apagar um servico
 app.delete("/apagar-servico", (req: Request, res: Response) => {
    const { nome } = req.query

    const apagarServicoResponse = apagarServico(nome as string)
 })
 })

  app.listen(8080, () => {
         console.log("Server running on port 8080")
    })  




// rota para obter servico
app.get("/obter-servioo", (req:Request, res: Response) => {
    const { nome } =req.query

    if(nome) {
        cost obterservicoResponse = obterServico(nome as string)
        
        res.json(obterServicoResponse)
    } else{
        res.json({
           message: "Nome do servico eh obrigatorio" 
        })
    }

})
















