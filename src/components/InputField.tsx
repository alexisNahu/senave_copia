import React, { useEffect, useState } from 'react';

interface Props {
    onFilter: (val: string) => void;
    label?: string;
    placeholder?: string;
    value: string;
}

function InputField({
                        onFilter,
                        label,
                        placeholder = "Buscar...",
                        value
                    }: Props) {
    // 1. Creamos un estado local para que el tipeo sea instantáneo y fluido
    const [localValue, setLocalValue] = useState(value);

    // 2. Sincronizamos el estado local si el padre limpia los filtros externamente
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    // 3. Aplicamos el Debounce: Espera 350ms después de que el usuario deje de escribir
    useEffect(() => {
        const handler = setTimeout(() => {
            onFilter(localValue);
        }, 350);

        return () => {
            clearTimeout(handler); // Limpia el timeout si el usuario sigue tipeando
        };
    }, [localValue]);

    return (
        <div className="flex flex-col gap-1.5 relative w-full">
            {label && (
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {label}
                </label>
            )}

            <input
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)} // Muta el estado local rápido
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A240] focus:border-[#00A240] outline-none transition-all bg-white text-sm h-[46px]"
                autoComplete="off"
            />
        </div>
    );
}

export default InputField;
