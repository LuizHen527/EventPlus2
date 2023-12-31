import React from 'react';
import './TableEv.css';

import edtiPen from '../../../assets/images/edit-pen.svg'
import trashDelete from '../../../assets/images/trash-delete.svg'

const TableEv = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className='table-data'>
            
            {/* Cabecalho */}

            <thead className="table-data__head">
                <tr className='table-data__head-row'>
                    <th className="table-data__head-title table-data__head-title--big">Evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Descricao</th>
                    <th className="table-data__head-title table-data__head-title--big">Tipo Evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Data</th>
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>

            {/* Corpo */}

            <tbody>
                {dados.map((ev) => {
                    return(
                        <tr className="table-data__head-row" key={ev.idEvento}>
                            
                            <td className="table-data__data table-data__data--big">
                                {ev.nomeEvento}
                            </td>

                            <td className="table-data__data table-data__data--big">
                                {ev.descricao}
                            </td>

                            <td className="table-data__data table-data__data--big">
                                {ev.tiposEvento.titulo}
                            </td>

                            <td className="table-data__data table-data__data--big">
                                {new Date(ev.dataEvento).toLocaleDateString()}
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img 
                                className="table-data__icon"
                                src={edtiPen}
                                alt="" 
                                onClick={(e) => {
                                    //Da pra passar o ev direto?
                                    fnUpdate({
                                        idEvento: ev.idEvento,
                                        nomeEvento: ev.nomeEvento,
                                        dataEvento: ev.dataEvento,
                                        descricao: ev.descricao,
                                        idInstituicao: ev.idInstituicao,
                                        idTipoEvento: ev.idTipoEvento
                                    })
                                }}
                                />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img 
                                className="table-data__icon"
                                src={trashDelete} 
                                alt="" 
                                onClick={(e) => {
                                    fnDelete(ev.idEvento)
                                }}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
};

export default TableEv;