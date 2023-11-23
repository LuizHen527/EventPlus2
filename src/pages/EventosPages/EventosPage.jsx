import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import "./EventosPage.css";
import MainContent from '../../components/MainContent/MainContent';
import Container from '../../components/Container/Container';
import Title from '../../components/Titulo/Titulo';
import ImageIllustrator from '../../components/ImageIllustrator/ImageIllustrator';
import api, { eventsResource } from "../../Services/Services";
import Notification from "../../components/Notification/Notification";

import eventoImage from '../../assets/images/evento.svg';
import { Button, Input } from '../../components/FormComponents/FormComponents';
import TableTp from '../TipoEventosPage/TableTp/TableTp';
import TableEv from './TableEv/TableEv';

const EventosPage = () => {

    const [frmEdit, setFrmEdit] = useState(false);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [eventos, setEventos] = useState([]);
    const [notifyUser, setNotifyUser] = useState();
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        async function loadEvents() {
            try {

                const retorno = await api.get(eventsResource);
                setEventos(retorno.data);
                console.log(retorno.data);

            } catch (error) {
                console.log(error);
            }
        };

        loadEvents();
    }, [])


    function handleUpdate() {
        
    }

    function handleSubmit() {
        
    }

    function showUpdateForm() {
        
    }

    async function handleDelete(idElement) {
        if (! window.confirm('Confirma exclusao?')) {
            return;
        }

        setShowSpinner(true);

        try {
            const promise = await api.delete(`${eventsResource}/${idElement}`);

            if (promise.status === 204) {
      
                setNotifyUser({
                  titleNote: "Título não informado",
                  textNote: "Mensagem não informada",
                  imgIcon: "default",
                  imgAlt: "Icone da ilustração",
                  showMessage: true
                
                });

            }

            const buscaEventos = await api.get(eventsResource);
            setEventos(buscaEventos.data);
        } catch (error) {
            console.log(error);
        }
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