class API {
    // TODO: try to get token from local storage
    BASE_URL = 'http://practice.mobile.kreosoft.ru/api';
    DEBUG = true;
    headers = {
        'Content-Type': 'application/json'
    };

    ////////////////////
    // AUTH ENDPOINTS //
    ////////////////////

    RegisterUser = async (name, email, password) => {
        let body = JSON.stringify({name: name, email: email, password: password});
        let response = await fetch(this.BASE_URL + `/register`,
            {method: 'POST', headers: this.headers, body: body});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            this.headers["Authorization"] = "Bearer " + data["api_token"];

            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    LoginUser = async (email, password) => {
        let body = JSON.stringify({email: email, password: password});
        let response = await fetch(this.BASE_URL + `/login`,
            {method: 'POST', headers: this.headers, body: body});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            this.headers["Authorization"] = "Bearer " + data["api_token"];

            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    ////////////////////
    // ITEM ENDPOINTS //
    ////////////////////

    GetPriorities = async () => {
        let response = await fetch(this.BASE_URL + `/priorities`,
            {method: 'GET', headers: this.headers});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    GetCategories = async () => {
        let response = await fetch(this.BASE_URL + `/categories`,
            {method: 'GET', headers: this.headers});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    CreateCategory = async (category) => {
        let body = JSON.stringify(category);
        let response = await fetch(this.BASE_URL + `/categories`,
            {method: 'POST', headers: this.headers, body: body});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    GetTasks = async () => {
        let response = await fetch(this.BASE_URL + `/tasks`,
            {method: 'GET', headers: this.headers});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    CreateTask = async (task) => {
        let body = JSON.stringify(task);
        let response = await fetch(this.BASE_URL + `/tasks`,
            {method: 'POST', headers: this.headers, body: body});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    UpdateTask = async (taskID, task) => {
        let body = JSON.stringify(task);
        let response = await fetch(this.BASE_URL + `/tasks/${taskID}`,
            {method: 'PATCH', headers: this.headers, body: body});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };

    DeleteTask = async (taskID) => {
        let response = await fetch(this.BASE_URL + `/tasks/${taskID}`,
            {method: 'DELETE', headers: this.headers});

        let data = await response.json();
        if (this.DEBUG) {
            console.log(response.status, data);
        }

        if (response.status === 200) {
            return data;
        } else {
            throw new Error(data["message"]);
        }
    };
}

export const api = new API();
