import type { Servicio } from "../models.ts";

// URL de la imagen panorámica común para el banner principal
const BANNER_URL = "https://www.senave.gov.py/wp-content/uploads/2024/10/bioseguridad-1024x259.jpg";

export const serviciosMock: Servicio[] = [
    {
        id: "01",
        title: "Semillas",
        slug: "semillas",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/08/semillas.png",
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Departamento de Protección y Uso de Variedades (DPUV)",
                slug: "dpuv",
                main_links: [
                    { title: "LISTADO DE EVALUADORES 2025", url: "/documento.pdf" },
                    { title: "ANEXO I – LISTADO DE POBLACIONES CRIOLLAS Y NATIVAS. Julio 2024", url: "/documento.pdf" },
                    { title: "Tasas", url: "/documento.pdf" }
                ],
                bulletins: [
                    { title: "Boletín Mayo 2026 (PDF)", type: "pdf", url: "/documento.pdf" },
                    { title: "Boletín Mayo 2026 (Excel)", type: "excel", url: "/documento.pdf" }
                ],
                sections: [
                    {
                        subtitulo: "PROCEDIMIENTOS",
                        docs: [
                            { code: "PRO-DPUV-100", name: "Procedimiento RNCP", url: "/documento.pdf" },
                            { code: "PRO-DPUV-003", name: "Registro Nacional de Cultivares Comerciales (RNCC)", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "FORMULARIOS",
                        docs: [
                            { code: "FOR-DPUV-100", name: "SOLICITUD DE INSCRIPCION EN EL RNCP.", url: "/documento.pdf" },
                            { code: "FOR-DPUV-004", name: "Solicitud de Inscripción de RNCC", url: "/documento.pdf" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "02",
        title: "Calidad, Inocuidad y Agricultura Orgánica",
        texto_banner: "Objetivo: Establecer las normas de calidad, inocuidad, y del sistema de producción orgánica, de los productos y subproductos vegetales y velar por el fiel cumplimiento de las mismas, a fin de minimizar los riesgos para la salud humana, animal, las plantas y el medio ambiente, tanto en los productos nacionales y de importación.",
        slug: "calidad-inocuidad-y-agricultura-organica",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/08/calidadeino.png",
        tipo_layout: "informativa",
        // Se agregan los departamentos visualizados en la interfaz
        subdepartments: [
            { name: "Departamento de Calidad e Inocuidad de vegetales", slug: "dci" },
            { name: "Departamento de Trazabilidad Vegetal", slug: "dtv" },
            { name: "Departamento de Agricultura Orgánica", slug: "dao" }
        ],
        informacion_general: [
            {
                titulo_bloque: "Dirección de Calidad, Inocuidad y Agricultura Orgánica (DICAO)",
                parrafos: [
                    "La DICAO es la encargada de garantizar la calidad e inocuidad de los productos vegetales.",
                    "Monitorea residuos de plaguicidas para resguardar la salud de los consumidores."
                ],
                enlaces_utiles: [
                    { texto: "Registro de Empresas Certificadoras Orgánicas (PDF)", url: "/documento.pdf" },
                    { texto: "Manual de Buenas Prácticas Agrícolas (BPA)", url: "/documento.pdf" }
                ]
            }
        ]
    },
    {
        id: "03",
        title: "SENAVE-DTV",
        slug: "sistema-de-trazabilidad-vegetal",
        image_url: BANNER_URL,
        icono_url: "https://www.senave.gov.py/wp-content/uploads/2025/02/trazabillidad.png",
        tipo_layout: "informativa",
        subdepartments: [
            { name: "Rubros sujetos a la emisión de DTVe", slug: "rubros" },
            { name: "Actores Incorporados dentro del Sistema de Trazabilidad Vegetal", slug: "actores" },
            { name: "Listado de DTVe Emitidos", slug: "listado" },
            { name: "Informes de DTVe Emitidos", slug: "informes" },
            { name: "Videos DTVe", slug: "videos" }
        ]
    },
    {
        id: "04",
        title: "Agroquímicos",
        slug: "agroquimicos",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/08/agroquimicos.png",
        tipo_layout: "descargas",
        informacion_general: [
            {
                titulo_bloque: "Dirección de Agroquímicos e Insumos Agrícolas (DAG)",
                parrafos: [
                    "La unidad tiene como objetivo: Establecer y velar por el cumplimiento de las normas, la calidad y eficacia de los productos fitosanitarios, fertilizantes, biofertilizantes, inoculantes y enmiendas como insumos agrícolas, así como el manejo y uso seguro de plaguicidas y la gestión de los residuos de insumos agrícolas.",
                ]
            }
        ],
        subdepartments: [
            {
                name: "Unidades dependientes",
                slug: "unidades-dag",
                main_links: [
                    { title: "Departamento de Control y Evaluación de Insumos Agrícolas (DCEI)", url: "#" },
                    { title: "Departamento de Evaluación y Mitigación de Riesgos de los Plaguicidas (DEyMRP)", url: "#" },
                    { title: "Departamento de Divulgación y Manejo Seguro de los Plaguicidas (DDyMSP)", url: "#" },
                    { title: "Comisión Técnica Evaluadora (CTE)", url: "#" }
                ]
            },
            {
                name: "Categorías de Servicios",
                slug: "categorias-servicios",
                sections: [
                    {
                        subtitulo: "Entidad comercial",
                        docs: [
                            { name: "Requisitos de Registro de Entidades Comerciales", url: "/documento.pdf" },
                            { name: "Proceso de Registro en el TES", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Habilitación de depósitos",
                        docs: [
                            { name: "Requisitos para habilitación de Depósitos", url: "/documento.pdf" },
                            { name: "Formulario de verificación de depósitos", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Productos fitosanitarios",
                        docs: [
                            { code: "FOR-CTE-048", name: "TABLA DE TIPO DE FORMULACIÓN VS PROPIEDADES FISICO QUIMICAS", url: "/documento.pdf" },
                            { code: "FOR-CTE-054", name: "SOLICITUD PARA PAGO DE SERVICIOS", url: "/documento.pdf" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "05",
        title: "Laboratorios",
        slug: "laboratorios",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/08/labora.png",
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Servicios de Análisis de Laboratorio",
                slug: "servicios-laboratorio",
                sections: [
                    {
                        subtitulo: "TARIFAS Y FORMULARIOS",
                        docs: [
                            { code: "FOR-LAB-02", name: "Solicitud de Análisis de Muestras", url: "/documento.pdf" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "06",
        title: "Bioseguridad Agrícola",
        slug: "bioseguridad-agricola",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/10/iconos-senave-biose.png",
        texto_banner: 'La Dirección de Bioseguridad Agrícola atiende, coordina y organiza las normativas...',
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Dirección de Bioseguridad",
                slug: "direccion-bioseguridad",
                sections: [
                    {
                        subtitulo: "LEY Y DECRETOS",
                        docs: [
                            { code: "Ley Nº 2309", name: "Protocolo de Cartagena", url: "/documento.pdf" }
                        ]
                    }
                ]
            }
        ],
        tabla: [
            {
                titulo: "RESOLUCIONES CONBIO",
                headers: ["Año", "Resolución MAG Nº", "Especie", "Descripción"],
                rows: [
                    { "Año": "2026", "Resolución MAG Nº": "43", "Especie": "SOJA", "Descripción": "ACUMULACIÓN DE EVENTOS", "url": "/documento.pdf" }
                ]
            }
        ]
    },
    {
        id: "07",
        title: "Protección Vegetal",
        slug: "proteccion-vegetal",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/09/iconos-senave-protecvege.png",
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Departamento de Sanidad Vegetal",
                slug: "sanidad-vegetal",
                sections: [
                    {
                        subtitulo: "MANUALES",
                        docs: [
                            { code: "MAN-SV-01", name: "Manual de Vigilancia", url: "/documento.pdf" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "08",
        title: "Operaciones",
        slug: "operaciones",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/09/iconos-senave-operaciones.png",
        tipo_layout: "informativa",
        informacion_general: [
            {
                titulo_bloque: "Coordinación de Operaciones",
                parrafos: ["Gestión y fiscalización en puntos de ingreso."],
                enlaces_utiles: [{ texto: "Listado de Oficinas", url: "/documento.pdf" }]
            }
        ]
    },
    {
        id: "09",
        title: "Geo-Estadísticas",
        slug: "geo-estadisticas",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/09/iconos-senave-geo.png",
        tipo_layout: "informativa",
        informacion_general: [
            {
                titulo_bloque: "Datos Espaciales",
                parrafos: ["Mapas de distribución de cultivos."],
                enlaces_utiles: [{ texto: "Reporte Estadístico", url: "/documento.pdf" }]
            }
        ]
    },
    {
        id: "10",
        title: "Capacitaciones",
        slug: "capacitaciones",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/09/capacitaciones.png",
        tipo_layout: "informativa",
        informacion_general: [
            {
                titulo_bloque: "Formación Continua",
                parrafos: ["Cursos para ingenieros y productores."],
                enlaces_utiles: [{ texto: "Cronograma", url: "/documento.pdf" }]
            }
        ]
    },
    {
        id: "11",
        title: "Normativas",
        slug: "normativas",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/08/normativas.png",
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Marco Legal",
                slug: "marco-legal",
                sections: [
                    {
                        subtitulo: "RESOLUCIONES",
                        docs: [{ code: "RES-123", name: "Aranceles", url: "/documento.pdf" }]
                    }
                ]
            }
        ]
    },
    {
        id: "12",
        title: "Unidad de Registros",
        slug: "unidad-de-registros",
        image_url: BANNER_URL,
        icono_url: "https://actimedia.top/demo/senave/wp-content/uploads/2024/09/registro.png",
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Registro Nacional",
                slug: "operadores",
                sections: [
                    {
                        subtitulo: "REQUISITOS",
                        docs: [{ code: "REQ-01", name: "Inscripción", url: "/documento.pdf" }]
                    }
                ]
            }
        ]
    }
];
