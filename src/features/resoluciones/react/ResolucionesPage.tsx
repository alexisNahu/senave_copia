import React, { useEffect, useState } from 'react';
// Importamos el Provider y el Hook desde tu archivo de contexto
import { ResolucionFilterProvider, useResolucionFilterContext } from './context.tsx';
import SearchForm from './SearchForm.tsx';
import { ResolutionsService } from "../services.ts";
import type { ResolutionItem } from "../models.ts";

interface ResolucionesPageProps {
    initialResoluciones: ResolutionItem[];
    initialMeta: {
        current_page: number;
        last_page: number;
        per_page: number;
    };
    currentPath: string;
}

// 1. Renombramos la función interna (ya NO lleva el 'export default')
function ResolucionesContent({
                                 initialResoluciones,
                                 initialMeta,
                                 currentPath
                             }: ResolucionesPageProps) {

    const { dataFilters, setDataFilters } = useResolucionFilterContext(); // Ahora sí va a encontrar el contexto garantizado

    const [resoluciones, setResoluciones] = useState<ResolutionItem[]>(initialResoluciones);
    const [meta, setMeta] = useState(initialMeta);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (
            dataFilters.current_page === 1 &&
            dataFilters.per_page === initialMeta.per_page &&
            !dataFilters.search &&
            !dataFilters.administration
        ) return;

        const fetchFiltrado = async () => {
            setLoading(true);
            try {
                let response;
                if (dataFilters.search && dataFilters.search.trim() !== "") {
                    response = await ResolutionsService.search(dataFilters.search.trim());
                } else {
                    response = await ResolutionsService.get({
                        page: dataFilters.current_page,
                        per_page: dataFilters.per_page,
                        ...(dataFilters.administration && { type: dataFilters.administration })
                    });
                }

                if (response) {
                    setResoluciones(response.data || []);
                    setMeta(response.meta || { current_page: 1, last_page: 1, per_page: dataFilters.per_page });
                }
            } catch (error) {
                console.error("Error al filtrar las resoluciones de forma asíncrona:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFiltrado();
    }, [dataFilters]);

    const MAX_VISIBLE_PAGES = 10;
    let startPage = Math.max(1, dataFilters.current_page - Math.floor(MAX_VISIBLE_PAGES / 2));
    let endPage = startPage + MAX_VISIBLE_PAGES - 1;

    if (endPage > meta.last_page) {
        endPage = meta.last_page;
        startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
    }
    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 pb-24 relative font-sans">
            <SearchForm currentPath={currentPath} />

            {loading && (
                <div className="absolute inset-x-0 top-40 flex justify-center z-20">
                    <span className="bg-white/90 shadow-md border border-gray-100 px-4 py-2 rounded-full text-xs font-semibold text-gray-500 backdrop-blur-xs">
                        Buscando registros...
                    </span>
                </div>
            )}

            <div className={`transition-opacity duration-200 ${loading ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                {resoluciones.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 border border-gray-100 rounded-lg">
                        <p className="text-gray-500 font-medium text-sm">No se encontraron resoluciones disponibles en este momento.</p>
                    </div>
                ) : (
                    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead>
                            <tr className="bg-gray-100 text-gray-700 font-bold uppercase tracking-wider border-b border-gray-200">
                                <th className="py-4 px-5 text-center w-24">N°</th>
                                <th className="py-4 px-5 text-center w-28">Año</th>
                                <th className="py-4 px-5">Nombre / Descripción de la Resolución</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {resoluciones.map((res) => (
                                <tr key={res.id || res.number} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-5 text-center font-medium text-gray-600 whitespace-nowrap">
                                        {res.number}
                                    </td>
                                    <td className="py-4 px-5 text-center text-gray-600">
                                        {res.year}
                                    </td>
                                    <td className="py-4 px-5 font-medium leading-relaxed">
                                        <a
                                            href={res.file_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#00A240] hover:text-green-700 hover:underline block"
                                        >
                                            {res.title}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {(!dataFilters.search || dataFilters.search.trim() === "") && meta.last_page > 1 && (
                <div className="flex items-center mt-16 text-xs md:text-sm font-bold text-slate-400 w-full select-none">
                    <div className="flex-1 flex justify-end">
                        {dataFilters.current_page > 1 ? (
                            <button
                                type="button"
                                onClick={() => setDataFilters(p => ({ ...p, current_page: p.current_page - 1 }))}
                                className="hover:text-slate-600 text-slate-500 transition-colors uppercase tracking-tighter px-2 cursor-pointer"
                            >
                                &lt; <span className="hidden sm:inline">Anterior</span>
                            </button>
                        ) : (
                            <span className="px-2 opacity-30 cursor-not-allowed">&lt; <span className="hidden sm:inline">Anterior</span></span>
                        )}
                    </div>

                    <div className="flex-none flex justify-center gap-1.5 px-2 md:px-4">
                        {visiblePages.map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() => setDataFilters(p => ({ ...p, current_page: page }))}
                                className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded transition-colors text-xs md:text-sm font-semibold border cursor-pointer ${
                                    page === dataFilters.current_page
                                        ? "bg-[#00A240] text-white border-[#00A240] shadow-sm"
                                        : "bg-slate-50 hover:bg-slate-200 border-slate-200 text-slate-600"
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 flex justify-start">
                        {dataFilters.current_page < meta.last_page ? (
                            <button
                                type="button"
                                onClick={() => setDataFilters(p => ({ ...p, current_page: p.current_page + 1 }))}
                                className="hover:text-slate-600 text-slate-500 transition-colors uppercase tracking-tighter px-2 cursor-pointer"
                            >
                                <span className="hidden sm:inline">Siguiente</span> &gt;
                            </button>
                        ) : (
                            <span className="px-2 opacity-30 cursor-not-allowed"><span className="hidden sm:inline">Siguiente</span> &gt;</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// 2. EXPORT DEFAULT MAESTRO: Encapsula el contenedor con su Provider aquí mismo
export default function ResolucionesPage(props: ResolucionesPageProps) {
    return (
        <ResolucionFilterProvider>
            <ResolucionesContent {...props} />
        </ResolucionFilterProvider>
    );
}
