// import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'react-admin';

const authProvider = {
    login: ({ username, password }) => {
        // Logique de connexion simplifiée 
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('token', 'my-token');
            localStorage.setItem('role', 'admin');
            localStorage.setItem('user', 'bezout kadji');
            return Promise.resolve();
        }
        
        return new Promise((resolve, reject) => setTimeout(reject, 1000));
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    checkError({ error }) {
        if (error.status === 401) {

            // Gérer l'erreur d'authentification 
            localStorage.removeItem('token'); // Supprimer le token
            window.location.href = '/login'; // Rediriger vers la page de connexion

        } else if (error.status === 403) {

            alert("Vous n'avez pas les droits nécessaires pour effectuer cette action.");
        } else {

            console.error(error);
            alert('Une erreur est survenue.');
        }
    },
    
    getIdentity: () => {
        const token = localStorage.getItem('token');

        // Récupérer les informations de l'utilisateur à partir du token

        return Promise.resolve({ id: 1, fullName: localStorage.getItem("user") });
    },
};

export default authProvider;