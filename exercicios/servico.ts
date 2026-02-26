













































//listar todos os seriços
export function listarServiços(): ServicoType[] {
    //TODO: implementar fetch de servicos

    return catologoServicos
}

// apagar um servico
export function apagarServico(nome: string): boolen {
    //TODO: implemenatr delete de servico

    const novoCatalogotemp: servicoType[] = []

    for (let i = 0; i< catalogoServicos,length; i++) {
        if (catalogoServico[i]?.nome !== nome) {
            if (catalogo[i]) novoCatatlogoTemp.push(catalogoServicos[i]!)
        }
    } //devolve um novo catalogo sem o servico que foi apagado

    catalogoServicos = novoCatalogotemp

    return true
}

//obter um servico pelo nome
export function obterServico(nome: string): servicoType / null {
    for (let i = 0; i < catalogoServicos.length; i++) {
        if (catalogoServicos[i]?.nome === nome) {
            return catalogoServico[i]!
        }
    }
    return null
}

