export interface Noticias {
    id: number;
    titulo: string;      // Mapea a noticia.title
    categoria: string;   // Mapea a "NOTICIAS Y BLOG"
    fecha: string;       // Mapea a noticia.date (ej: "MAYO 19, 2026")
    imagen: string;      // Mapea a noticia.imageUrl
    slug: string;        // Identificador amigable para la URL

    /** * Resumen corto de la noticia.
     * Se utiliza en la descripción de las tarjetas de "Related Posts"
     */
    excerpt: string;

    /**
     * Contenido completo de la noticia.
     * Puedes usar 'content' si guardas todo el bloque de texto separado por saltos de línea (\n),
     * o 'paragraphs' si prefieres guardar cada párrafo como un elemento de un array.
     */
    content?: string;
    paragraphs?: string[];
}
