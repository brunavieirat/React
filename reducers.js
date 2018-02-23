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

export default function redutor(newstate = initialState, acao) {

    switch (acao.type) {
        case ADICIONAR_NOTA:
            console.log(acao);
            const novaNota = new Nota(acao.titulo, acao.texto)             //concat
                                   

            return {
                notas: newstate.notas.concat(novaNota)
            }

        case EDICAO_TRUE:
            return {

                notas: newstate.notas.map((notaAtual, posicao) => {
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

                notas: newstate.notas.map((notaAtual, posicao) => {
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
                    notas: newstate.notas.filter((notaAtual, posicao) =>  posicao !== acao.posicao)
                }

            

            default:
            return newstate

    }

}

