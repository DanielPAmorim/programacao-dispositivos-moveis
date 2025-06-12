import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function signIn(credenciais) {
    try {
        const response = await axios.post(`${API_URL}:signInWithPassword?key=${API_KEY}` , {...credenciais, returnSecureToken: true});
        return response.data;
    } catch (error) {
        const { message } = error.response.data.error;
        if (message === 'INVALID_LOGIN_CREDENTIALS') {
            throw new Error('Email/Senha inválidos');
        } 
        throw error;
    }
}

async function signUp(credenciais) {
    try {
        const response = await axios.post(`${API_URL}:signUp?key=${API_KEY}` , {...credenciais, returnSecureToken: true});
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { signIn, signUp }