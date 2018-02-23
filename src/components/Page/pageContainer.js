import react from React
import { connect } from 'react-redux'

import { adicionarNota, editarNota, habilitarNota, salvarNota } from '../../../actions'

import Page from './index'

const mapStateToProps = store => ({ listaNotas: state.notas })


const mapDispatchToProps = dispatch => (
    {
        adicionarNota: (titulo, texto, formulario, index) => {

            if (index == undefined) {
                dispatch(adicionarNota(titulo, texto))
                formulario.reset()
            }
            else {
                dispatch(editarNota(index, titulo, texto))
            }
        },

        removerNota: (evento, index) => {
            evento.stopPropagation()
            dispacth(removerNota(index))

        },

        editarNota: index => {
            dispatch(habilitarEdicao)
        }




    }


)

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer