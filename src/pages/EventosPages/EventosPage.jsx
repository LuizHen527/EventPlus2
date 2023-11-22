import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import "./EventosPage.css";
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import Title from '../../components/Titulo/Titulo';
import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';

import eventoImage from '../../assets/images/evento.svg';
import { Button, Input } from '../../components/FormComponents/FormComponents';
import TableTp from '../TipoEventosPage/TableTp/TableTp';
import TableEv from './TableEv/TableEv';

const EventosPage = () => {

    const [frmEdit, setFrmEdit] = useState(false);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [eventos, setEventos] = useState([]);


    function handleUpdate() {
        
    }

    function handleSubmit() {
        
    }

    function showUpdateForm() {
        
    }

    function handleDelete() {
        
    }

    return (
        <MainContent>
            <section className='cadastro-evento-section'>
                <Container>
                    <div className='cadastro-evento__box'>

                        {/* Titulo */}
                        <Title titleText={'Cadastro de evento'} />

                        {/* Imagem da pagina */}
                        <ImageIllustrator imageRender={eventoImage}/> 

                        {/* Formulario */}
                        <form 
                            className='ftipo-evento'
                            onSubmit={frmEdit ? handleUpdate : handleSubmit}
                        >
                            {/* Cadastra ou edita */}
                            {!frmEdit ? (
                                //Cadastrar
                                <>
                                    <Input 
                                    id="Nome"
                                    placeholder="Nome"
                                    name={"nome"}
                                    type={"text"}
                                    required={"required"}
                                    value={nome}
                                    />

                                    <Input 
                                    id="descricao"
                                    placeholder="Descrição"
                                    name={"descricao"}
                                    type={"text"}
                                    required={"required"}
                                    value={descricao}
                                    />

                                    <Input 
                                    id="tipoEvento"
                                    placeholder="Tipo Evento"
                                    name={"tipoEvento"}
                                    type={"text"}
                                    required={"required"}
                                    /> 

                                    <Input 
                                    id="data"
                                    placeholder="dd/mm/aaaa"
                                    name={"data"}
                                    type={"data"}
                                    required={"required"}
                                    />

                                    <Button 
                                    textButton="Cadastrar"
                                    id={"cadastrar"}
                                    name={"cadastrar"}
                                    type="submit"
                                    />
                                </>
                            ) : (
                                //Editar
                                <></>
                            )}
                        </form>
                    </div>
                </Container>
            </section>

            {/* Listagem de eventos */}

            <section className='lista-eventos-section'>
                <Container>
                    <Title titleText={"Lista de eventos"} color="white"/>

                    <TableEv 
                    dados={eventos}
                    fnUpdate={showUpdateForm}
                    fnDelete={handleDelete}
                    />
                </Container>
            </section>
        </MainContent>
    );
};

export default EventosPage;