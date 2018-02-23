import React from 'react'
import Section from './section'
import FormNotas from './formNotas'


const createFormNotas = (adicionarNota, excluirNota, editarNota, notaAtual, index) => {

    const props = {
        
        notaAtual, 
        index, 
        adicionarNota, 
        excluirNota, 
        editarNota
    }
    
    return <FormNotas key={index} {...props}/>
    
    // React.createElement(FormNotas, props)
}


function SecaoNotas({ listaNotas, adicionarNota, excluirNota, editarNota, notaAtual }) {

    // let secao = React.getElementsByClassName('notes')[0];

    const props = { className: 'notes' };

    const children = listaNotas.map((notaAtual, index) => (
        createFormNotas(adicionarNota, excluirNota, editarNota, notaAtual, index)
    ))
    console.log(children);
    return <Section {...props}>{children}</Section>
    
    
    
    // React.createElement(Section, props, children);

}

export default SecaoNotas;
