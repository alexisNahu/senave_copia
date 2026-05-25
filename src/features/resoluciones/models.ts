export interface ResolutionType {
    id: number;
    name: string;
}

export interface Administration {
    id: number;
    name: string;
}

export interface ResolutionStatus {
    active: boolean;
    resolution_status: string;
    resolution_status_label: string;
}

export interface ResolutionItem {
    id: number;
    number: number;
    year: string;
    title: string;
    section: string;
    sections_array: string[];
    file_url: string;
    file_path: string;
    type: ResolutionType;
    document_type: string;
    administration: Administration;
    date: string;
    date_formatted: string;
    status: ResolutionStatus;
    user_id: number;
    ip_address: string;
    created_at: string;
}

export interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

// Interfaz principal para la respuesta de la API
export interface ApiResponse<T> {
    success: boolean;
    data: T[];
    meta: PaginationMeta;
}

// Tipo específico para esta consulta de resoluciones
export type ResolutionsResponse = ApiResponse<ResolutionItem>;
