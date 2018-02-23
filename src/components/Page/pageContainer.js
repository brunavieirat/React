import React from 'react'
import { connect } from 'react-redux'

import { adicionarNota, editarNota, habilitarEdicao, removerNota, salvarNota } from '../../actions'

import Page from './index'

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
            console.log('sssssssssssssss')
            dispatch(habilitarEdicao(index))
        }
    })

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer