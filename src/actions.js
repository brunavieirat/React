

export const ADICIONAR_NOTA = 'ADICIONAR_NOTA'
export const EDITAR_NOTA = 'EDITAR_NOTA'
export const REMOVER_NOTA = 'REMOVER_NOTA'
export const EDICAO_TRUE = 'EDICAO_TRUE'
export const LOGAR_USUARIO = 'LOGAR_USUARIO'
export const DESLOGAR_USUARIO = 'DESLOGAR_USUARIO'


export function logaUsuario(){
   return{
        type: LOGAR_USUARIO
   }
}

export function deslogaUsuario(){
    return {
    type: DESLOGAR_USUARIO
    }
}


export function adicionarNota(titulo, texto) {
    
    return {
        type: ADICIONAR_NOTA,
        titulo,
        texto

    }
}


export function removerNota(posicao) {

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

export function habilitarEdicao(posicao) {
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
