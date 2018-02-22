// ações



// Adicionar nota - adicionar
// salvar
// Editar nota  - editar 
// Excluir - remove
// atualizar pag

// secao notas

// criação dos componentes - input, textarea, forms, section, button

ADD
EDIT
REMOVE
SAVE

// const ADICIONAR_NOTA = 'ADICIONAR_NOTA'

// {
//     type: ADICIONAR_NOTA,
//     titulo: ???,
//     texto: ??? 
// }

const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
const EDITAR_NOTA = 'EDITAR_NOTA'
const REMOVER_NOTA = 'REMOVER_NOTA'
const EDICAO_TRUE = 'EDICAO_TRUE'

export function addNota(titulo, texto) {

    return {
        type: ADICIONAR_NOTA,
        titulo,
        texto

    }
}


export function removeNota(posicao) {

    return {

        type: REMOVER_NOTA,
        posicao
   }
}
// const REMOVER_NOTA = 'REMOVER_NOTA'
// {
//     type: REMOVER_NOTA,
//     posicao: ???

// }

export function editarNota(posicao) {
    return {

        type: EDICAO_TRUE,
        posicao
}
}

// const EDICAO_TRUE = 'EDICAO_TRUE'

// {
//     type: EDICAO_TRUE,
//     posicao: ???
// }

export function salvarNota(posicao, titulo, texto) {

    return {
        type: EDITAR_NOTA,
        posicao,
        titulo,
        texto
}
}

// const EDITAR_NOTA = 'EDITAR_NOTA'
// {
//     type: EDITAR_NOTA,
//     posicao: ???,
//     titulo: ???,
//     texto: ???

// }
