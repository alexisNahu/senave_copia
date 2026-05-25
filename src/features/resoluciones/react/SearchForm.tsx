import React from 'react';
import InputField from '../../../components/InputField.tsx'; // Tu InputField reutilizable con debounce interno
import { defaultPaginationOptions, useResolucionFilterContext } from './context.tsx';

interface SearchFormProps {
    currentPath?: string; // Opcional por retrocompatibilidad, ya no se usa para redirigir
}

export default function SearchForm({ currentPath }: SearchFormProps) {
    const { dataFilters, setDataFilters } = useResolucionFilterContext();

    // Mismo método manejador de cambios parciales sin tocar la URL
    const handleInputChange = (update: Partial<typeof dataFilters>) => {
        setDataFilters((prev) => ({
            ...prev,
            ...update,
            current_page: 1 // Forzamos regreso a la página 1 al alterar cualquier filtro
        }));
    };

    const handleClear = () => {
        setDataFilters(defaultPaginationOptions);
    };

    // Administraciones mockeadas (si usas este filtro según tu diseño)
    const administrations = [
        { id: "11", name: "Ing. Agr. Pastor Soria" },
        { id: "12", name: "Ing. Agr. Luis Ramiro Samaniego Montiel" }
    ];

    return (
        <div className="bg-white p-6 rounded-xl border shadow-sm space-y-6 mb-6 font-sans text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">

                {/* Input Automático por Texto usando tu componente */}
                <InputField
                    label="Buscar Resolución"
                    placeholder="N° o palabra clave..."
                    value={dataFilters.search || ""}
                    onFilter={(val:any) => handleInputChange({ search: val })}
                />

                {/* Selector de Administración */}
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Administración
                    </label>
                    <div className="relative">
                        <select
                            value={dataFilters.administration || ""}
                            className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-3 pr-10 h-[46px] text-sm text-gray-700 focus:outline-none focus:border-[#00A240] focus:ring-1 focus:ring-[#00A240] appearance-none cursor-pointer"
                            onChange={(e) => handleInputChange({ administration: e.target.value })}
                        >
                            <option value="">Todas las administraciones</option>
                            {administrations.map((admin) => (
                                <option key={admin.id} value={admin.id}>
                                    {admin.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Selector de Entradas por página (per_page) */}
                <div className="flex flex-col gap-2 w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Mostrar Entradas
                    </label>
                    <select
                        value={dataFilters.per_page}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 h-[46px] text-sm text-gray-700 focus:outline-none focus:border-[#00A240] focus:ring-1 focus:ring-[#00A240] cursor-pointer"
                        onChange={(e) => handleInputChange({ per_page: Number(e.target.value) })}
                    >
                        {[10, 15, 25, 50].map((size) => (
                            <option key={size} value={size}>
                                {size} registros
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            {/* Botón de Limpieza idéntico a Contratos */}
            <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
                <button
                    onClick={handleClear}
                    type="button"
                    className="px-4 py-2 text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                    Limpiar filtros
                </button>
            </div>
        </div>
    );
}
