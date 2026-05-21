export interface DescargaDocumento {
    code?: string;
    name: string;
    url?: string;
}

export interface SeccionDocumentos {
    main_links?: { title: string; url: string }[];
    subtitulo: string;
    docs: DescargaDocumento[];
}

export interface SubDepartamento {
    name: string;
    slug: string;
    texto?: string;
    main_links?: { title: string; url: string }[];
    bulletins?: { title: string; type: 'pdf' | 'excel'; url: string }[];
    sections?: SeccionDocumentos[];
}

export interface BloqueInformativo {
    titulo_bloque?: string;
    parrafos: string[];
    enlaces_utiles?: { texto: string; url: string }[];
}

export interface TablaInformativa {
    titulo: string;
    headers: string[];
    rows: {
        [key: string]: string;
    }[];
}

export interface Servicio {
    id: string;
    title: string;
    image_url: string;
    icono_url: string;
    slug: string;
    tipo_layout: 'descargas' | 'informativa';
    texto_banner?: string;
    subdepartments?: SubDepartamento[]; // Para Semillas, Agroquímicos, etc.
    informacion_general?: BloqueInformativo[]; // Para Calidad, Inocuidad, etc.
    tabla?: TablaInformativa[];
}
