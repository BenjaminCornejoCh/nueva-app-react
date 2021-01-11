import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({nombre, imagen, precio, profesor, foto}) => (
    <article className="s-shadow-bottom m">
        <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            {imagen ? <img src={imagen} alt={nombre} /> : <h3>No hay imagen :'(</h3>} {/*Puede colocarse otra imagen por defecto*/}
        </div>
        <div className="s-bg-white s-pxy-2">
            <h3>{nombre}</h3>
            <p className="s-mb-0">Diseña, estructura y administra bases de datos SQL y crea un sistema de
                facturación con el tío Alexys</p>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
            <div className="s-10 s-mr-1">
                <div className="circle ">
                    <img src={foto} alt="Foto-profe"/>
                </div>
            </div>
            <p className="s-mb-0">{profesor}</p>
            <div className="button s-to-right">{precio}</div>
        </footer>
    </article>
)

Curso.propTypes = {
    title: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps = {
    title: 'No se encontró título',
    imagen: 'No hay imagen',
    precio: 'Curso gratis',
    profesor: 'No hay profesor(a)'
}

export default Curso