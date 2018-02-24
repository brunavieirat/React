import React from 'react'
import SectionNotas from '../secaoNotas'
import FormNotas from '../formNotas'
import Nota from '../../nota'
import NovaLista from '../../ListaNotas'

import './page.css'

import { connect } from 'react-redux'
import { adicionarNota, editarNota, habilitarEdicao, removerNota, salvarNota, logaUsuario, deslogaUsuario } from '../../actions'


// let secao = document.getElementsByClassName('notes')[0];


// const listaNotas = new NovaLista(observaMudancasNaLista);


function montaFormNotas  (adicionarNota, excluirNota, editarNota) {

    const props = {
        key: 'form-note',
        notaAtual: new Nota('', ''),
        adicionarNota, // == IGUAL adicionarNota: adicionarNota
        excluirNota,
        editarNota
    }

    return <FormNotas {...props} />
    //  React.createElement(FormNotas, props)
}

function montaSecaoNotas(listaNotas, adicionarNota, excluirNota, editarNota)  {

    const props = {
        //  key: 'section-notes',
        listaNotas,
        adicionarNota,
        excluirNota,
        editarNota
    }

    return <SectionNotas {...props} />
    // React.createElement(SectionNotas, props)
}



function Page  ({ listaNotas, adicionarNota, excluirNota, editarNota }) {
    const props = { className: 'container' }


    let formNotas = montaFormNotas(adicionarNota, excluirNota, editarNota)
    let secaoNotas = montaSecaoNotas(listaNotas, adicionarNota, excluirNota, editarNota)

const mapStateToProps = store => ({ listaNotas: store.notas })


const mapDispatchToProps = dispatch => (
    {
        adicionarNota: (titulo, texto, formulario, index) => {

            if (index == undefined) {
                dispatch(adicionarNota(titulo, texto))
                formulario.reset()
            }
            else {
                dispatch(salvarNota(index, titulo, texto))
            }
        },

        excluirNota: (evento, index) => {
            evento.stopPropagation()
            dispatch(removerNota(index))

        },

        editarNota: index => {
            
            dispatch(habilitarEdicao(index))
        }
    })
  return (

        // <main {...props}>
        <main className='container'>

            {formNotas}
            {secaoNotas}

        </main>

    )

}


const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer

export default Page;

// ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥