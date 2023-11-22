import React from 'react';

const TableEv = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className='table-data'>
            
            {/* Cabecalho */}

            <thead className="table-data__head">
                <tr className='table-data__head-row'>
                    <th className="table-data__head-title table-data__head-title--big">Titulo</th>
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>

            {/* Corpo */}

            <tbody>
                {dados.map((tp) => {
                    return(
                        <tr>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    );
};

export default TableEv;