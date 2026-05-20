// src/services/servicios.ts
import type { Servicio } from "../models.ts";
import {serviciosMock} from "./mock.ts";

// Importamos el mock (ya sea que lo tengas en un archivo .ts o un .json)

export const ServiciosService = {
    /**
     * Obtiene todos los servicios disponibles (útil para la grilla de la Home)
     */
    async getAll(): Promise<Servicio[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(serviciosMock);
            }, 150);
        });
    },

    /**
     * Busca un servicio específico a través de su slug amigable para la URL
     */
    async getBySlug(slug: string): Promise<Servicio | null> {
        return new Promise((resolve, reject) => {
            try {
                const servicio = serviciosMock.find(s => s.slug === slug);

                if (!servicio) {
                    resolve(null);
                    return;
                }

                resolve(servicio);
            } catch (error) {
                reject(new Error(`Error al recuperar el servicio con slug: ${slug}. ${error}`));
            }
        });
    }
};
