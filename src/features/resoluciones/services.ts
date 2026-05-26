import axiosClient from "axios";
import type { ResolutionsResponse, ResolutionItem } from "./models.ts";
import { API_ENDPOINTS } from "../../core/api.ts";

export interface ResolutionQueries {
    page?: number;
    per_page?: number;
    year?: string | number;
    type?: string | number;
}


// Asumiendo que tu constante apunta a la base 'api/resolutions'
const url = API_ENDPOINTS.resolutions;

export const ResolutionsService = {
    /**
     * Obtiene la lista paginada de todas las resoluciones
     */
    async get(queries?: ResolutionQueries) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(url, {
                params: queries
            });

            return data;
        } catch (e) {
            console.error('Error en getAll resoluciones', e);
            throw e;
        }
    },

    /**
     * Obtiene un único registro de resolución por su ID primario
     */
    async getById(id: number | string) {
        try {
            // Retorna directamente el objeto de la resolución, no la estructura paginada con meta
            const { data } = await axiosClient.get<ResolutionItem>(`${url}/${id}`);
            return data;
        } catch (e) {
            console.error(`Error en getById resoluciones para ID: ${id}`, e);
            throw e;
        }
    },

    /**
     * Busca resoluciones mediante un término o query de texto
     */
    async search({query, page, per_page}: {query: string, page: number, per_page: number}) {
        console.log(`${url}/search/${encodeURIComponent(query)}`)
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/search/${encodeURIComponent(query)}`, {
                params: { page, per_page }
            });
            return data;
        } catch (e) {
            console.error(`Error en search resoluciones con query: ${query}`, e);
            throw e;
        }
    },

    /**
     * Filtra las resoluciones por sección (ej: resolutions-senave)
     */
    async getBySection(section: string) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/section/${section}`);
            return data;
        } catch (e) {
            console.error(`Error en getBySection resoluciones para sección: ${section}`, e);
            throw e;
        }
    },

    /**
     * Filtra las resoluciones por el año de emisión (ej: 2024)
     */
    async getByYear(year: number | string) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/year/${year}`);
            return data;
        } catch (e) {
            console.error(`Error en getByYear resoluciones para el año: ${year}`, e);
            throw e;
        }
    },

    /**
     * Filtra por tipo de resolución (ej: Interna, Externa)
     * Si tu backend maneja IDs de tipo (como el id: 1 del JSON), puedes tiparlo como number | string
     */
    async getByType(type: number | string) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/type/${type}`);
            return data;
        } catch (e) {
            console.error(`Error en getByType resoluciones para el tipo: ${type}`, e);
            throw e;
        }
    },

    /**
     * Filtra por el estado de vigencia de la resolución
     */
    async getByStatus(status: string) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/status/${status}`);
            return data;
        } catch (e) {
            console.error(`Error en getByStatus resoluciones para el estado: ${status}`, e);
            throw e;
        }
    }

}
