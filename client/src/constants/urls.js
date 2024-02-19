const PORT = 3000;

const URL_BASE = `http://localhost:${PORT}/`;
const API_WINES = URL_BASE + 'api/wines';
const API_AUTH = URL_BASE + 'api/auth';

const AUTH_LOGIN = API_AUTH + '/login';
const AUTH_REGISTER = API_AUTH + '/register';
const AUTH_VERYFY_TOKEN = API_AUTH + '/verify-token';

export const URLS = {
	API_WINES,
	AUTH_LOGIN,
	AUTH_REGISTER,
	AUTH_VERYFY_TOKEN
};
