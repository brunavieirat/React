import React from 'react'
import Section from './sectionReact'
import FormNotas from './FormNotasReact'


const createFormNotas = (adicionarNota, excluirNota, editarNota, listaNotas, index) => {

    const props = {
        key: index,
        notaAtual: listaNotas.pegar(index), 
        index: index, 
        adicionarNota: adicionarNota, 
        excluirNota: excluirNota, 
        editarNota: editarNota
    }
    
    return <FormNotas {...props}/>
    
    // React.createElement(FormNotas, props)
}


function SecaoNotas ( { listaNotas, adicionarNota, excluirNota, editarNota } ) {

    // let secao = React.getElementsByClassName('notes')[0];

    const props = { className: 'notes' };

    

    return (
        <Section {...props}>
            {listaNotas.pegarTodos().map( (notaAtual, index) => (
        createFormNotas(adicionarNota, excluirNota, editarNota, listaNotas, index)
    ))   }
            </Section>
    )
    
    
    // React.createElement(Section, props, children);

}

export default SecaoNotas;
