

export const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
export const EDITAR_NOTA = 'EDITAR_NOTA'
export const REMOVER_NOTA = 'REMOVER_NOTA'
export const EDICAO_TRUE = 'EDICAO_TRUE'



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
