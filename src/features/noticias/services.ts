// src/services/servicios.ts
import type {Noticias} from "./models.ts";
import {noticias} from "./mock.ts";

// Importamos el mock (ya sea que lo tengas en un archivo .ts o un .json)

export const NoticiasService = {
    /**
     * Obtiene todos los servicios disponibles (útil para la grilla de la Home)
     */
    async getAll(): Promise<Noticias[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(noticias);
            }, 150);
        });
    },

    /**
     * Busca un servicio específico a través de su slug amigable para la URL
     */
    async getBySlug(slug: string): Promise<Noticias | null> {
        return new Promise((resolve, reject) => {
            try {
                const servicio = noticias.find(s => s.slug === slug);

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
