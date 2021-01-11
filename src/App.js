import React, {Fragment} from 'react';
// import logo from './logo.svg';
import './styles/styles.scss';
import Curso from "./Curso";
import './App.css'
import cursos from './lista_cursos'

// JSX
// El contenido debe estar dentro de un div, un solo elemento
// No es necesario importar <Fragment> se puede usar <> </> sin import
const fondo = {'background': '#53588A'}

const App = () => (
    <Fragment>
        <div className="fondo">
            <section className="l-section s-py-4 l-bg-grey">
                <div className="ed-grid lg-grid-2 row-gap s-gap-2 m-gap-4">
                    <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left">
                        <h1>Bienvenido a nuestra plataforma de Cursos</h1>
                        <p>Únase a la mejor plataforma de cursos online. Totalmente responsive.</p>
                        <div className="s-main-center">
                            <a className="button s-mr-2 s-mb-2 m-mb-0">Botón 1</a>
                            <a className="button s-mb-2 m-mb-0">Botón 2</a>
                        </div>
                    </div>
                    <div>
                        <div className="img-container s-ratio-16-9">
                            <img className="s-radius-1"
                                 src="https://ep01.epimg.net/elpais/imagenes/2018/04/02/opinion/1522672824_087758_1522681265_noticia_normal.jpg"
                                 alt="Imagen del profesor"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="ed-grid m-grid-3">
                {cursos.map(curso => <Curso nombre={curso.nombre} imagen={curso.imagen} foto={curso.foto} profesor={curso.profesor} precio={curso.precio}/>)}
            </div>
        </div>
    </Fragment>
)

export default App;
