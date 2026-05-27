import React, { createContext, type ReactNode, useContext, useState } from 'react';

interface FilterType {
    current_page: number;
    per_page: number;
    search?: string;
    administration?: string; // Mantengo este campo por si usas el filtro superior de la captura
    section: string;
}

interface ContextType {
    dataFilters: FilterType;
    setDataFilters: React.Dispatch<React.SetStateAction<FilterType>>;
}

export const defaultPaginationOptions: FilterType = {
    current_page: 1,
    per_page: 10, // Por defecto 10 entradas como pide la UI
    search: "",
    administration: "",
    section: ""
};

const Context = createContext<ContextType | undefined>(undefined);

export const ResolucionFilterProvider = ({ children }: { children: ReactNode }) => {
    const [dataFilters, setDataFilters] = useState<FilterType>(defaultPaginationOptions);

    return (
        <Context.Provider value={{ dataFilters, setDataFilters }}>
            {children}
        </Context.Provider>
    );
};

export const useResolucionFilterContext = () => {
    const context = useContext(Context);
    if (!context) throw new Error("useResolucionFilterContext debe usarse dentro de ResolucionFilterProvider");
    return context;
};
