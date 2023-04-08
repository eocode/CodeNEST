import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
    post(url: string, data: any): Promise<any>;
    put(url: string, data: any): Promise<any>;
    delete(url: string): Promise<any>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data: T = await response.json();
        return data;
    }

    async post(url: string, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async put(url: string, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async delete(url: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}


export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        return data
    }

    async post(url: string, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async put(url: string, data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    async delete(url: string): Promise<any> {
        throw new Error("Method not implemented.");
    }


}