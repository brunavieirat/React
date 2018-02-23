import {
    ADICIONAR_NOTA,
    EDITAR_NOTA,
    REMOVER_NOTA,
    EDICAO_TRUE
} from './actions'

import Nota from './src/Nota'

const initialState = {
    notas: []
}

function App(state = initialState, acao) {

    switch (acao.type) {
        case ADICIONAR_NOTA:

            const novaNota = new Nota(acao.titulo, acao.texto);             //concat
            const newstate = {
                notas: newState.notas.concat(novaNota)
            }

            return newstate;
    

        case EDICAO_TRUE:
            const newstate = {

                notas: newState.notas.map((notaAtual, posicao) => {
                    if (posicao === acao.posicao) {
                        return new Nota(notaAtual.titulo, notaAtual.texto, true)
                    } else {

                        return notaAtual
                    }
                })
            }

            return newstate;       //map  

        case EDITAR_NOTA:
            const newState = {

                notas: newstate.notas.map((notaAtual, posicao) => {
                    if (posicao === acao.posicao) {
                        return new Nota(acao.titulo, acao.texto, false)
                    } else {
                        return notaAtual;
                    }
                })
            }


            return newState;         //map

        case REMOVER_NOTA:
            const newstate = {

                notas: newState.notas.filter((notaAtual, posicao) => {
                    return posicao !== acao.posicao
                })

            }

            return newstate;

            default:
            return state

    }

}

