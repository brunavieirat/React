import React from 'react'
import SectionNotas from '../secaoNotas'
import FormNotas from '../formNotas'
import Nota from '../../nota'
import NovaLista from '../../ListaNotas'

import './page.css'



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

    // const children = [formNotas, secaoNotas]

    return (

        // <main {...props}>
        <main className='container'>

            {formNotas}
            {secaoNotas}

        </main>

    )

    //React.createElement('main', props, children)


}

export default Page;

// ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥