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
// IMPORTANTE: Asegúrate que API_ENDPOINTS use la baseURL del proxy (/api-senave) en desarrollo.
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
            console.error('Error en get de resoluciones', e);
            throw e;
        }
    },

    /**
     * Obtiene un único registro de resolución por su ID primario
     */
    async getById(id: number | string) {
        try {
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
    async search({ query, page, per_page, section, administration }: { query?: string, page: number, per_page: number, section: string, administration?: string }) {
        console.log("1. Parámetros iniciales:", { query, page, per_page, section, administration });

        const apiParams: Record<string, any> = {
            page,
            per_page
        };

        if (query && query !== 'undefined' && query.trim() !== '') {
            apiParams.query = query;
        }

        if (administration && administration !== 'undefined' && administration.trim() !== '') {
            apiParams.administration = administration;
        }

        try {
            const response = await axiosClient.get<ResolutionsResponse>(`${url}/search/${section}`, {
                params: apiParams
            });

            console.log("✅ URL Solicitada con éxito:", response.request?.res?.responseUrl || `${response.config.url}?${new URLSearchParams(response.config.params).toString()}`);
            return response.data;
        } catch (e: any) {
            console.error(`Detalle del error en backend:`, e.response?.data?.message || e.message);
            throw e;
        }
    },

    /**
     * Filtra las resoluciones por sección (ej: resoluciones-senave)
     * ¡Añadidos params de paginación que faltaban en tu axios.get!
     */
    async getBySection({ section, page, per_page }: { section: string; page: number; per_page: number }) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/section/${section}`, {
                params: { page, per_page } // <-- Faltaba añadir esto para que respete la paginación de la sección
            });
            return data;
        } catch (e) {
            console.error(`Error en getBySection resoluciones para sección: ${section}`, e);
            throw e;
        }
    },

    /**
     * Filtra las resoluciones por el año de emisión (ej: 2024)
     */
    async getByYear(year: number | string, queries?: ResolutionQueries) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/year/${year}`, {
                params: queries // <-- Opcional: por si quieres paginar los resultados del año
            });
            return data;
        } catch (e) {
            console.error(`Error en getByYear resoluciones para el año: ${year}`, e);
            throw e;
        }
    },

    /**
     * Filtra por tipo de resolución (ej: Interna, Externa)
     */
    async getByType(type: number | string, queries?: ResolutionQueries) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/type/${type}`, {
                params: queries // <-- Opcional: por si quieres paginar los resultados del tipo
            });
            return data;
        } catch (e) {
            console.error(`Error en getByType resoluciones para el tipo: ${type}`, e);
            throw e;
        }
    },

    /**
     * Filtra por el estado de vigencia de la resolución
     */
    async getByStatus(status: string, queries?: ResolutionQueries) {
        try {
            const { data } = await axiosClient.get<ResolutionsResponse>(`${url}/status/${status}`, {
                params: queries // <-- Opcional: por si quieres paginar los resultados del estado
            });
            return data;
        } catch (e) {
            console.error(`Error en getByStatus resoluciones para el estado: ${status}`, e);
            throw e;
        }
    }
}
