import type { Servicio } from "./models.ts";

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
                    { title: "LISTADO DE EVALUADORES 2025", url: "https://www.senave.gov.py/docs/semillas/proteccionyusovariedades/LISTADO DE EVALUADORES 2025.docx" },
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
        slug: "senave-dtv",
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
                name: "Entidad Comercial",
                slug: "entidad-comercial",
                main_links: [
                    { title: "Requisitos de Registro de Entidades Comerciales", url: "#" },
                    { title: "Proceso de Registro en el TES", url: "#" },
                ],
                sections: [

                    {
                        subtitulo: "FORMULARIOS",
                        docs: [
                            { name: "Nota proforma. Solicitud de Registro de Entidad Comercial ", url: "/documento.pdf" },
                            { name: "Nota proforma. Solicitud de sucursal", url: "/documento.pdf" },
                            { name: "Verificación de plantas fraccionadoras, formuladoras de fertilizantes, biofertilizantes, inoculantes y enmiendas", url: "/documento.pdf" },
                            { name: "Verificación de plantas fraccionadora, formuladoras de plaguicidas de uso agrícola", url: "/documento.pdf" },
                            { name: "Formulario de verificación de depósitos de productos fitosanitarios", url: "/documento.pdf" },
                            {name: "Ficha de verificación previa para la habilitación de vehpiculos para el transporte de agroquímicos", url: "/documento.pdf"},
                            {name: 'Término de compromiso', url: "/documento.pdf"},
                            {name: 'Plán de trabajo para la exportación de arroz', url: "/documento.pdf"}

                        ]
                    }
                ]
            },
            {
                name: "Habilitacón de depósitos",
                slug: "habilitación-depósitos",
                main_links: [
                    {title: 'Requisitos para habilitación de Depósitos (Entidad Comercial A.5)', url: '/documento.pdf'}
                ],
                sections: [
                    {
                        subtitulo: "Formularios",
                        docs: [
                            { name: "Nota proforma. Solicitud de Habilitación de Depósitos", url: "/documento.pdf" },
                            { name: "Formulario de verificación de depósitos de productos fitosanarios", url: "/documento.pdf" }
                        ]
                    }
                ]
            },
            {
                name: "Habilitacón de transporte",
                slug: "habilitacion-transporte",
                main_links: [
                    {title: 'Requisitos para la habilitación de transportes', url: '/documento.pdf'}
                ],
                sections: [
                    {
                        subtitulo: "Formularios",
                        docs: [
                            { name: "Nota proforma. Solicitud de Habilitación de Transpórtes", url: "/documento.pdf" },
                            { name: "Ficha verificacion previa para la habilitación de vehículos para el transporte de agroquímicos", url: "/documento.pdf" }
                        ]
                    }
                ]
            },
            {
                name: "Laboratorios reconocidos/habilitados",
                slug: "laboratorios-reconocidos-habilitados",
                sections: [
                    {
                        subtitulo: "Registro de laboratorios reconocidos ",
                        docs: [
                            { name: "Requisitos. Registro y renovación de laboratorios (internacionales) ", url: "/documento.pdf" },
                        ]
                    },
                    {
                        subtitulo: "Formularios ",
                        docs: [
                            { name: "Nota proforma. Reconocimiento de laboratorio ", url: "/documento.pdf" },
                            { name: 'Solicitud de registro de laboratorios reconocidos'}
                        ]
                    },
                    {
                        subtitulo: 'Registro de laboratorios habilitados (nacionales)',
                        docs: [
                            {name: 'Requisitos. Registro y renovación de laboratorios (nacionales)'}
                        ]
                    },
                    {
                        subtitulo:'Formularios',
                        docs: [
                            {name: 'Nota proforma. Laboratorios habilitados', url: '/documento.pdf'},
                            {name: 'Solicitud de registro de laboratorios habilitados', url: '/documento.pdf'}
                        ]
                    },
                    {
                        subtitulo: 'Registro de laboratorios toxicologia y ecotoxicologia',
                        docs: [
                            {name: 'Requisitos. Registro de laboratorios habilitados (nacionales) de toxicología y ecotoxicología '},
                            {name: 'Solicitud de registro de laboratorios habilitados de acuerdo con BPL de la OCDE '}
                        ]
                    },
                    {
                        subtitulo: 'Profesionales',
                        docs: [
                            {name: 'Trámite de registro de profesionales', url:'/documento.pdf'},
                            {name: 'Nota de solicitud de registro/renovación de asesor técnico'}
                        ]
                    },
                    {
                        subtitulo: "Padrón de Pilotos de aeronaves agrícolas",
                        docs: [
                                    { name: "Requisitos. Piloto aviador agrícola de aeronave tripulada- PAAG", url: "/documento.pdf" },
                                    { name: "Requisitos. Piloto de aeronave pilotada a distancia- P-RPA", url: "/documento.pdf" },
                                    { name: "Marco Normativo", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "DOCUMENTOS GENERALES PARA TODAS LAS CATEGORÍAS",
                        docs: [
                            { name: "FOR-CTE-048 – TABLA DE TIPO DE FORMULACIÓN VS PROPIEDADES FISICO QUIMICAS PARA PRODUCTO FORMULADO", url: "/documento.pdf" },
                            { name: "FOR-CTE-049 – TABLA DE SUSTANCIA ACTIVA GRADO TÉCNICO Y TÉCNICO CONCENTRADO", url: "/documento.pdf" },
                            { name: "FOR-CTE-054 – SOLICITUD PARA PAGO DE SERVICIOS DE REGISTRO DE PRODUCTOS FITOSANITARIOS", url: "/documento.pdf" },
                            { name: "FOR-CTE-055 – Nota proforma para solicitud SOPORTE GRADO TÉCNICO Y GRADO TÉCNICO", url: "/documento.pdf" },
                            { name: "FOR-CTE-056 – Nota proforma para solicitud de PRODUCTOS FITOSANITARIOS", url: "/documento.pdf" },
                            { name: "FOR-CTE-058 – SOLICITUD DE REGISTRO DE PRODUCTOS FITOSANITARIOS DE USO AGRICOLA Y AFINES", url: "/documento.pdf" },
                            { name: "FOR-CTE-004 – CARTA DE COMPROMISO PARA CERTIFICADO DE ORIGEN", url: "/documento.pdf" },
                            { name: "CIRCULAR N° 01-24 – NORMAS DE USO SESAMO", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "CATEGORÍA DEFINITIVO RESOLUCIÓN N° 446/06\n\n1. PRODUCTO FORMULADO\n\nREQUISITOS Y PROCESOS PARA REGISTRO DE PRODUCTOS FORMULADOS",
                        docs: [
                            { name: "FOR-CTE-009 – CHECK LIST PARA REQUISITOS TÉCNICOS DE REGISTRO DE PRODUCTO FORMULADO EN BASE A SUSTANCIA ACTIVA QUIMICA GRADO TÉCNICO EQUIVALENTE", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "PRESENTACIÓN DEL CUERPO III – CUERPO TÉCNICO FORMA FÍSICA",
                        docs: [
                            { name: "FOR-CTE-063 ANEXO IV RESUMEN ESTUDIOS SOLICITADOS EN EL CUERPO III – CUERPO TECNICO PARA EL REGISTRO DE PRODUCTOS FORMULADOS EN BASE A SUSTANCIAS ACTIVAS QUÍMICA GRADO TÉCNICO EQUIVALENTE", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "FORMA DIGITAL",
                        docs: [
                            { name: "FOR-CTE-067 – ANEXO VIII INDICE ESTUDIOS SOLICITADOS EN EL CUERPO III – CUERPO TECNICO PARA EL REGISTRO DE PRODUCTO FORMULADO EN BASE A SUSTANCIA ACTIVA QUIMICA GRADO TECNICO EQUIVALENTE", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "2. SUSTANCIA ACTIVA GRADO TÉCNICO EQUIVALENTE (REGISTRO/ SOPORTE)\n\nREQUISITOS Y PROCESOS PARA REGISTRO GRADO TECNICO/SOPORTE GRADO TÉCNICO",
                        docs: [
                            { name: "FOR-CTE-050 – CHECK LIST PARA REQUISITOS TÉCNICOS DE REGISTRO DE SUSTANCIA ACTIVA QUIMICA GRADO TÉCNICO EQUIVALENTE", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "PRESENTACIÓN DEL CUERPO III – CUERPO TÉCNICO FORMA FÍSICA",
                        docs: [
                            { name: "FOR-CTE-062 – ANEXO III RESUMEN-ESTUDIOS SOLICITADOS EN EL CUERPO III – CUERPO TECNICO-PARA EL REGISTRO DE SUSTANCIA ACTIVA QUIMICA GRADO TÉCNICO EQUIVALENTE", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "FORMA DIGITAL",
                        docs: [
                            { name: "FOR-CTE-066 – ANEXO VII INDICE ESTUDIOS SOLICITADOS EN EL CUERPO III CUERPO TECNICO PARA EL REGISTRO DE SUSTANCIA ACTIVA QUIMICA GRADO TÉCNICO EQUIVALENTE", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "CATEGORÍA DEFINITIVO PRODUCTOS DE AGENTE DE CONTROL BIOLOGICO MICROBIANO (ACBM) RESOLUCIÓN N° 446/06-\nANEXO 6",
                        docs: [
                            { name: "FOR-CTE-068 – SOLICITUD DE REGISTRO DE PRODUCTOS ACBM", url: "/documento.pdf" },
                            { name: "FOR-CTE-006 CHECK LIST BIOLOGICOS", url: "/documento.pdf" }
                        ]
                    }

                ]
            },
            {
                name: "Fertilizantes, inoculantes, biofertilizantes, enmiendas",
                slug: "fertilizantes-inoculantes-biofertilizantes-enmiendas",
                sections: [
                    {
                        subtitulo: "",
                        docs: [
                            { name: "Requisitos. Registro de fertilizantes, biofertilizantes, inoculantes, enmiendas", url: "/documento.pdf" },
                            { name: "Requisitos. Registro de materia prima de fertilizantes", url: "/documento.pdf" },
                            { name: "Renovación de registros de fertilizantes y materia prima", url: "/documento.pdf" },
                            { name: "Información. Proyecto de etiqueta", url: "/documento.pdf" },
                            { name: "Tutorial para solicitud de registro de fertilizantes en el TES", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Solicitudes pos registro",
                        docs: [
                            { name: "Modificación de componentes en la formulación-productos fertilizantes", url: "/documento.pdf" },
                            { name: "Cambio de nombre de fertilizantes", url: "/documento.pdf" },
                            { name: "Cambio de razón social del fabricante/ formulador", url: "/documento.pdf" },
                            { name: "Cambio de categoria de productos fertilizantes, inoculantes, afines", url: "/documento.pdf" },
                            { name: "Cambio de datos en registros de productos fitosanarios y fertilizantes", url: "/documento.pdf" },
                            { name: "Transferencias de registros de productos fertilizantes, inoculantes, afines", url: "/documento.pdf" },
                            { name: "Cancelación de registro", url: "/documento.pdf" }
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
        texto_banner: 'La Dirección de Bioseguridad Agrícola atiende, coordina y organiza las normativas, el seguimiento, operación y vigilancia de las actividades vinculadas a la bioseguridad de la biotecnología moderna del ámbito agrícola, entre ellas la importación y liberación comercial de productos y subproductos de organismos genéticamente modificados (OGM), apoyando la definición de la política nacional y en el fortalecimiento de las capacidades para el acceso a las informaciones relacionadas a los OGM.',
        tipo_layout: "descargas",
        subdepartments: [
            {
                name: "Ley y Decretos",
                slug: 'slug-y-decretos',
                sections: [
                    {
                        subtitulo: "Ley y Decretos",
                        docs: [
                            { name: "Ley N°2309 \"Que aprueba el Protocolo de Cartagena sobre Seguridad de la Biotecnología del Convenio sobre la diversidad biológica\".", url: "/documento.pdf" },
                            { name: "Protocolo de Cartagena sobre Seguridad de la Biotecnología del Convenio sobre la diversidad biológica", url: "/documento.pdf" },
                            { name: "Decreto N° 4753 \"Por el cual se designan centro focal nacional y autoridades nacionales competentes del protocolo de Cartagena sobre seguridad de la biotecnología del Convenio sobre la diversidad biológica\".", url: "/documento.pdf" },
                            { name: "Decreto N°9699 \"Por el cual se crea la Comisión Nacional de Bioseguridad Agropecuaria y Forestal (CONBIO)\".", url: "/documento.pdf" },
                            { name: "Decreto N° 6733 \"Por el cual se aprueba el documento sobre Política y Programa Nacional de Biotecnología Agropecuaria y Forestal del Paraguay\".\">", url: "/documento.pdf" },
                            { name: "Decreto N°9699 \"Por el cual se crea la Comisión Nacional de Bioseguridad Agropecuaria y Forestal (CONBIO)\".", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Resoluciones",
                        docs: [
                            { name: "Resolución N° 283 \"Por la cual se aprueba el procedimiento para la gestión del riesgo en actividades con organismos genéticamente modificados regulados en el ámbito agrícola\".", url: "/documento.pdf" },
                            { name: "Resolución N°925 \"Por la cual se implementa el registro de empresas que operan con organismos genéticamente modificados regulados en el ámbito agrícola\".", url: "/documento.pdf" },
                            { name: "Resolución N°176 \"Por la cual se crea la Dirección de Bioseguridad Agrícola, como dependencia de la Dirección General Técnica del Servicio Nacional de Calidad y Sanidad Vegetal y de Semillas – SENAVE y se modifica el objetivo y las funciones de la Dirección de Semillas\"", url: "/documento.pdf" },
                            { name: "RESOLUCION N° 1348/2019 \"POR LA CUAL SE REGLAMENTA EL DECRETO N° 9.699 DEL 19 DE SETIEMBRE DE 2012, \"QUE CREA LA COMISIÓN NACIONAL DE BIOSEGURIDAD AGROPECUARIA Y FORESTAL (CONBIO)\"", url: "/documento.pdf" },
                            { name: "RESOLUCION N° 1071/2019 \" POR LA CUAL SE REGLAMENTA LA RESOLUCION MAG N° 1030/2019 \" POR LA CUA SE AMPLIA EL INC. C) DEL ARTICULO 31 DE LA RESOLUCION MAG N° 1348 \" POR LA CUAL SE REGLAMENTA EL DECRETO N° 9699 DEL 19 DE SETIEMBRE DE 2012 \"QUE CREA LA COMISION NACIONAL DE BIOSEGURIDAD AGROPECUARIA Y FORESTAL (CONBIO)\", DE FECHA 20 DE DICIEMBRE DE 2012\", DE FECHA 23 DE AGOSTO DE 2019\"", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Lista de servicios",
                        docs: [
                            { name: "RESOLUCION N° 532/2025. \"POR LA CUAL SE ACTUALIZA LOS CONCEPTOS Y LOS MONTOS A PERCIBIR POR PRESTACION DE SERVICIOS POR PARTE DEL SERVICIO NACIONAL DE CALIDAD Y SANIDAD VEGETAL Y DE SEMILLAS (SENAVE). Y SE ABROGA LA RESOLUCION SENAVE N° 881/2019 Y SUS MODIFICATORIAS\".", url: "/documento.pdf" },
                            { name: "RESOLUCION N° 565/2025. \"POR LA CUAL SE MODIFICA EL ANEXO DE LA RESOLCION N° 532/2025 \" POR LA CUAL SE ACTUALIZAN LOS CONCEPTOS Y LOS MONTOS A PERCIBIR POR PRESTACION DE SERVICIOS POR PARTE DEL SERVICIO NACIONAL DE CALIDAD Y SANIDAD VEGETAL Y DE SEMILLAS (SENAVE)L Y SE ABROGA ÑA RESOLUCION 881/2019 Y SUS MODIFICATORIAS\", DE FECHA 19 DE JUNIO DEL 2025.", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Resoluciones CONBIO",
                        docs: [
                            { name: "RESOLUCION 842/2025 \"POR LA CUAL SE APRUEBA EL DOCUMENTO \"FORMULARIO 3: DE CONSULTA PREVUIA PARA PRODUCTOS OBTENIDOSE MEDIANTE NUEVAS TECNICASDE MEJORAMIENTO (NEW BREEDING TECHNIQUES)\"", url: "/documento.pdf" },
                            { name: "RESOLUCION 905/2025. \" POR LA CUAL SE APRUEBA LA UTILIZACION DE LA PLATAFORMA ONLINE \"SISTEMA DE SEGUIMIENTO DE EXPEDIENTES DE LA CONBIO\". OFRECIDA POR LA CAMARA DE FITOSANITARIOS Y FERTILIZANTES (CAFIF). PARA LA COMISION NACIONAL DE BIOSEGURIDA AGROPECUARIA Y FORESTAL (CONBIO)\".", url: "/documento.pdf" }
                        ]
                    }
                ],
            },
            {
                name: "Departamento de Evaluación de Bioseguridad Agrícola (DEBA)",
                slug: "departamento-evaluacion-bioseguridad-agricola-deba",
                sections: [
                    {
                        subtitulo: "",
                        docs: [
                            { name: "Empresas Registradas en el REOGM", url: "/documento.pdf" },
                            { name: "Formularios para inscripción el REOGM", url: "/documento.pdf" },
                            { name: "Eventos Regulados en proceso de evaluación", url: "/documento.pdf" }
                        ]
                    },
                    {
                        subtitulo: "Resoluciones CONBIO de eventos regulados",
                        docs: [
                            { name: "Resolución MAG Nº 826-23 MONSANTO", url: "/documento.pdf" },
                            { name: "Resolución MAG Nº 556-23 INDEAR", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 1198_17_1 POR LA CUAL AUTORIZA A LA FIRMA DOW AGROSCIENCES", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 891 LC Bt11 maíz", url: "/documento.pdf" },
                            { name: "Resolucion MAG N° 890 LC TC1507 maíz", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 814 LC MON1445 y MON531 x MON1445 algodón", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 697 Semillas Bajo Custodia", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 669_15 LC Bt11 x MIR162 x GA21 – GA21 – Combinación de parentales maíz", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 648_15 LC TC1507 x MON810 x NK603 maíz", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 447 soja MON 87701 x MON 8978", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 252 LC MON89034 x TC1507 x NK603 maíz", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 241 LC MIR 162 maíz", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 153 LC MON87701 x MON89788 soja Intacta", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 19 LC NK 603 maíz", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 18 semillas bajo custodia", url: "/documento.pdf" },
                            { name: "Resolucion MAG N 988", url: "/documento.pdf" },
                            { name: "Resolucion MAG N 27_15 Formularios 1 y 2", url: "/documento.pdf" },
                            { name: "Resolución MAG N° 334 ER Maiz MON87427 x MON95379 x MON87411 x MON87427 x MON87419 Y MON87427 x NK603 x MON87419", url: "/documento.pdf" },
                            { name: "Archivo fotográfico de cadena de custodia", url: "/documento.pdf" }
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
                texto: 'Es la Dirección encargada de preservar y/o mejorar la condición fitosanitaria del país,\n' +
                    'contribuyendo a la competitividad de los productos y subproductos vegetales, para su acceso y\n' +
                    'permanencia en los mercados.'
            },
            {
                name: "Departamento de Cuarentena Vegetal",
                slug: "cuarentena-vegetal",
                texto: 'El departamento que tiene como objetivo desarrollar medidas de exclusión y\n' +
                    'prevención para minimizar el riesgo de ingreso de plagas exóticas al país.',
                main_links: [
                    {title: 'Listado de plagas cuarentenarias ausentes del Paraguay', url: '/documento.pdf'},
                    {title: 'Solicitud de Autorizacion de envios de Tránsito de Artículos reglamentarios por el territorio nacional', url: '/documento.pdf'},
                    {title: 'Formulario para Categorización de riesgo de productos y/o subproductos vegetales', url: '/documento.pdf'}
                ],
                sections: [
                    {
                        subtitulo: '',
                        docs: [
                            {
                                name: "Formulario de categorización de riesgo",
                                url: "/documento.pdf"
                            },
                            {
                                name: "Carta compromiso",
                                url: "/documento.pdf"
                            },
                            {
                                name: "Resolución 479/21 \"POR LA CUAL SE ACTUALIZA EL REGLAMENTO TÉCNICO PARA EL ENVASADO Y TRANSPORTE DE FRUTAS Y HORTALIZAS “IN NATURA” QUE SE COMERCIALICEN PARA CONSUMO EN EL PARAGUAY, Y SE ABROGA LA RESOLUCIÒN SENAVE N° 354/12 DE FECHA 20 DE ABRIL DE 2012\".",
                                url: "/documento.pdf"
                            },
                            {
                                name: "Resolución 158/24 \"POR LA CUAL SE ESTABLECEN REQUISITOS FITOSANITARIOS PARA LA IMPORTACIÓN DE MADERAS ASERRADAS DE DISTINTOS ORÍGENES Y ESPECIES FORESTALES, CON SECADOS ARTIFICIAL (SECADO EN HORNO O ESTUFA) DEL SERVICIO NACIONAL DE CALIDAD Y SANIDAD VEGETAL Y DE SEMILLAS (SENAVE)\".",
                                url: "/documento.pdf"
                            },
                            {
                                name: "ESTÁNDAR 3. 7. REQUISITOS FITOSANITARIOS ARMONIZADOS POR CATEGORÍA DE RIESGO PARA EL INGRESO DE ARTÍCULOS REGLAMENTADOS",
                                url: "/documento.pdf"
                            }
                        ]
                    }
                ],

            },
            {
                name: 'Departamento de Vigilancia Fitosanitaria',
                slug: 'vigilancia-fitosanitaria',
                texto: 'El departamento que mantiene actualizado el estado de ocurrencia, incidencia y distribución de plagas de cultivos de importancia económica del país'

            }
        ]
    },
    {
        id: "08",
        title: "Operaciones",
        slug: "direccion-de-operaciones",
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
        slug: "geoestadisticas",
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
                name: "Formularios",
                slug: "operadores",
                sections: [
                    {
                        subtitulo: "",
                        docs: [
                            { code: "FORMULARIO – RESOLUCIÓN N° 830-2022- REGISTRO DE IMPORTADOR DE PRODUCTOS Y SUBPRODUCTOS DE ORIGEN VEGETAL – TRAMITE ELECTRONICO", name: "Inscripción", url: "/documento.pdf" },
                            { name: " FORMULARIO – VIVEROS – RESOLUCIÓN Nº 359-2023", url: '/documento.pdf'},
                            { name: " FORMULARIOS – RESOLUCIÓN Nº 670-22 – SILOS – CENTROS DE ACOPIO Y PUERTYOS DE EMBARQUE", url: '/documento.pdf'},
                            {name: " FORMULARIO DE RESOLUCIÓN 794/14 – POR EL CUAL SE APRUEBA EL PROCEDIMIENTO PARA LA IMPORTACION DE PRODUCTOS VEGETALES POR DESPACHO MENOR (IDM) Y EL FORMULARIO DE REGISTRO DE IMPORTADOR", url: '/documento.pdf'},
                            {name: " SOLICITUD DE REGISTRO DE EMPRESA EXPORTADORA DE ARROZ A MEXICO", url: '/documento.pdf'}
                        ]
                    }
                ]
            },
            {
                name: "Resoluciones Referentes",
                slug: 'resoluciones-referentes',
                sections: [
                    {
                        subtitulo: "",
                        docs: [
                            { code: "RESOLUCIÓN Nº 359/2023 POR LA CUAL SE ACTUALIZAN LIS PROCEDIMIENTOS PARA LA HABILITACION E INSPECCIÓN FITOSANITARIA DE VIVEROS FRUTALES, ORNAMENTALES, MEDICINALES, FORESTALES Y AFINES, Y SE ABROGA LA RESOLUCIÓN Nro. 314/2012 DE FECHA 11 DE ABRIL DEL 2012", name: "Inscripción", url: "/documento.pdf" },
                            { name: " RESOLUCIÓN Nº 146/2023 POR LA CUAL SE CREA EL REGISTRO DE EMPRESAS EXPORTADORAS, PLANTAS DE PROCESAMIENTO O MOLINOS ARROCEROS, CON FINES DE EXPORTACIÓN DE ARROZ A MÉXICO, Y SE ESTABLECEN LOS REQUISITOS Y EL PROCEDIMIENTO RESPECTIVO, EN CUMPLIMIENTO AL PLAN DE TRABAJO PARA LA EXPORTACIÓN DE ARROZ (Oryza sativa) DE PARAGUAY A MÉXICO", url: '/documento.pdf'},
                            { name: " RESOLUCIÓN N° 830/2022 Por la cual se actualizan los requisitos y lineamientos para el registro y habilitación de personas físicas y jurídicas como importador de productos y subproductos de origen vegetal, de fecha 02 de diciembre de 2022.", url: '/documento.pdf'},
                            {name: " FORMULARIO DE RESOLUCIÓN 794/14 – POR EL CUAL SE APRUEBA EL PROCEDIMIENTO PARA LA IMPORTACION DE PRODUCTOS VEGETALES POR DESPACHO MENOR (IDM) Y EL FORMULARIO DE REGISTRO DE IMPORTADOR", url: '/documento.pdf'},
                            {code: 'RESOLUCION NRO 670', name: "POR LA CUAL SE ACTUALIZAN LOS REQUISITOS Y LINEAMIENTOS PARA EL REGISTRO DE SILOS, CENTROS DE ACOPIO Y PUERTOS DE EMBARQUE, DE PRODUCTOS Y SUBPRODUCTOS DE ORIGEN VEGETAL; SE IMPLEMENTA LA MODALIDAD DE TRAMITACIÓN ELECTRÓNICA; Y SE ABROGA LA RESOLUCIÓN SENAVE N° 172/21 DE FECHA 14 DE ABRIL DE 2021", url: '/documento.pdf'},
                            {code:' RESOLUCIÓN Nº 439 ', name: 'POR LA CUAL SE ACTUALIZAN LOS REQUISITOS PARA EL REGISTRO Y HABILITACIÓN DE EMPRESAS APLICADORAS DE TRATAMIENTOS CUARENTENARIOS A EMBALAJES DE MADERA (EMATREM), SEGÚN REQUERIMIENTOS DE LA NORMA INTERNACIONAL DE MEDIDAS FITOSANITARIAS NIMFs Nº 15 “REGLAMENTACIÓN DEL EMBALAJE DE MADERA UTILIZADO EN EL COMERCIO INTERNACIONAL” Y SE ABROGA LA RESOLUCIÓN SENAVE N° 43/05 DE FECHA 13 DE JULIO DE 2005', url: '/documento.pdf'},
                            {code: 'RESOLUCIÓN NRO 839/2019', name: 'POR LA CUAL SE ACTUALIZAN LOS REQUISITOS Y LINEAMIENTOS PARA EL REGISTRO Y HABILITACIÓN DE PERSONAS FÍSICAS Y/O JURÍDICAS COMO IMPORTADOR DE PRODUCTOS Y SUBPRODUCTOS DE ORIGEN VEGETAL, SE IMPLEMENTA LA MODALIDAD DE TRAMITACIÓN ELECTRÓNICA, Y SE ABROGA LA RESOLUCIÓN SENAVE Nº 613/19 DE FECHA 09 DE SETIEMBRE 2019', url: '/documento.pdf'},
                            {code:' RESOLUCIÓN N° 718/19', name: 'POR LA CUAL SE DISPONEN LOS LINEAMIENTOS PARA LA IMPORTACIÓN E INGRESO, ASÍ COMO LAS CONDICIONES PARA LA SIEMBRA Y TOMA DE MUESTRA DE LAS FLORES DEL CANNABIS SP; SE CREA EL REGISTRO DE IMPORTADOR DE CANNABIS SP; Y SE ESTABLECEN LAS CONDICIONES PARA LA INSCRIPCIÓN DE LA VARIEDAD, EN EL MARCO DEL PROGRAMA NACIONAL PARA EL ESTUDIO Y LA INVESTIGACIÓN MÉDICA Y CIENTÍFICA DEL USO MEDICINAL, PREVISTO EN LA LEY N° 6007/17 Y A SU DECRETO REGLAMENTARIO N° 9303/18', url: '/documento.pdf'},
                            {code:' RESOLUCIÓN N° 718/19', name: 'POR LA CUAL SE DISPONEN LOS LINEAMIENTOS PARA LA IMPORTACIÓN E INGRESO, ASÍ COMO LAS CONDICIONES PARA LA SIEMBRA Y TOMA DE MUESTRA DE LAS FLORES DEL CANNABIS SP; SE CREA EL REGISTRO DE IMPORTADOR DE CANNABIS SP; Y SE ESTABLECEN LAS CONDICIONES PARA LA INSCRIPCIÓN DE LA VARIEDAD, EN EL MARCO DEL PROGRAMA NACIONAL PARA EL ESTUDIO Y LA INVESTIGACIÓN MÉDICA Y CIENTÍFICA DEL USO MEDICINAL, PREVISTO EN LA LEY N° 6007/17 Y A SU DECRETO REGLAMENTARIO N° 9303/18', url: '/documento.pdf'},
                            {name: 'POR LA CUAL SE APRUEBA EL PROCEDIMIENTO PARA LA IMPORTACIÓN DE PRODUCTOS VEGETALES POR DESPACHO MENOR (IDM) Y EL FORMULARIO DE REGISTRO DE IMPORTADOR', code: ' RESOLUCIÓN 794/14', url:'/documento.pdf'}
                        ]
                    }
                ]
            }
        ]
    }
];
