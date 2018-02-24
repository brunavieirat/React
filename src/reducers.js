import {
    ADICIONAR_NOTA,
    EDITAR_NOTA,
    REMOVER_NOTA,
    EDICAO_TRUE,
    DESLOGAR_USUARIO,
    LOGAR_USUARIO
} from './actions'

import Nota from './nota'

import {combineReducers} from 'redux'

const initialState = {
    notas: []
}

 function notas(newState = [], acao) {

    switch (acao.type) {
        case ADICIONAR_NOTA:
            console.log(acao);
            const novaNota = new Nota(acao.titulo, acao.texto)             //concat
                                   

            return {
                notas: newState.notas.concat(novaNota)
            }

        case EDICAO_TRUE:
            return {

                notas: newState.notas.map((notaAtual, posicao) => {
                    if (posicao === acao.posicao) {
                        return new Nota(notaAtual.titulo, notaAtual.texto, true)
                    } else {

                        return notaAtual
                    }
                })
            }

                 //map  

        case EDITAR_NOTA:
           return  {

                notas: newState.notas.map((notaAtual, posicao) => {
                    if (posicao === acao.posicao) {
                        return new Nota(acao.titulo, acao.texto, false)
                    } else {
                        return notaAtual;
                    }
                })
            }


            // return newstate;         //map

        case REMOVER_NOTA:
            

               return{
                    notas: newState.notas.filter((notaAtual, posicao) =>  posicao !== acao.posicao)
                }

            

            default:
            return newState

    }

}


function usuario(newState = false, acao){
    switch(acao.type){

        case LOGAR_USUARIO:

        return{
            newState = true
        }

        case DESLOGAR_USUARIO:

        return{
            newState = false
        }

        default:
        return newState
    }
}


const reducer = combineReducers({
    usuario,
    notas
})




export default reducer