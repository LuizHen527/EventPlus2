import axios from 'axios';

/**
 * Rota para o recurso do evento
 */

export const eventsResource = '/Evento';

/**
 * Rota para fazer login
 */

export const loginResource = '/Login'

/**
 * Rota para o recurso Proximos Eventos
 */

export const nextEventResource = '/EventoListarProximos';

/**
 * Rota para o recurso Tipos Eventos
 */

export const eventsTypeResource = '/TiposEvento';

const apiPort = '7118';
const localApiUri = `https://localhost:${apiPort}/api`;
const externalApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;