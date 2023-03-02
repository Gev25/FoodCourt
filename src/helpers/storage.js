class Storage {
    static getToken() {
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token');
        }
        return '';
    }

    static setToken(token) {
        if (!token) {
            return;
        }
        localStorage.setItem('token', token);
    }

    static delete() {
        localStorage.removeItem('token');
    }
}

export default Storage;
