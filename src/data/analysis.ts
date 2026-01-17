export const analysisData = {
  methodology: {
    title: "1. Planteamiento Metodológico del Ejercicio",
    description: "Este documento es el resultado de un ejercicio de análisis crítico y comparativo realizado sobre los planes de gobierno de siete candidatos presidenciales (denominados A, B, C, D, E, F y G) en dos ejes fundamentales para el desarrollo nacional: Educación y Seguridad.",
    fullMetodology: "El análisis se ejecutó bajo un enfoque de Realismo Administrativo y Fiscal. En lugar de evaluar las propuestas únicamente por su deseabilidad teórica o retórica política, se sometieron a un \"filtro de viabilidad\" basado en la realidad costarricense de enero de 2026. Para cada candidato y sector, se evaluaron tres dimensiones con una escala de calificación del 1 al 10:",
    criteria: [
      {
        name: "Viabilidad",
        description: "¿Es lograble operativa, financiera y legalmente en un periodo de 4 años? Se consideraron restricciones como la Regla Fiscal, la burocracia legislativa, la capacidad instalada (ej. Escuela de Policía) y la resistencia gremial."
      },
      {
        name: "Relevancia",
        description: "¿La propuesta ataca las causas raíz de la crisis (ej. 'apagón educativo', crimen organizado, narcotráfico) o son medidas cosméticas?"
      },
      {
        name: "Claridad",
        description: "¿Existe una ruta clara del cómo se va a ejecutar (mecanismos, fuentes de financiamiento, tecnología) o son generalidades discursivas?"
      }
    ]
  },
  context: {
    education: {
      title: "A. Estatus: EDUCACIÓN (El 'Apagón Educativo')",
      subtitle: "La crisis silenciosa que hipoteca el futuro.",
      state: [
        "**Rezago histórico:** Los informes más recientes (Estado de la Educación 2025) confirman que no se ha logrado revertir el \"apagón educativo\". Los estudiantes de 15 años muestran competencias de lectura y matemáticas equivalentes a niveles de primaria.",
        "**Desfinanciamiento:** La inversión educativa ha caído sistemáticamente. En 2025 se consolidó un presupuesto cercano al **4.9% del PIB**, muy lejos del mandato constitucional del 8%. Esto se traduce en menos becas, deterioro grave de infraestructura (órdenes sanitarias en cientos de centros) y recortes en transporte y comedores.",
        "**Brecha Digital y de Idiomas:** Tras la eliminación de programas como el de Informática Educativa (PRONIE) hace unos años, no se ha logrado implementar una alternativa sólida que cubra esa necesidad tecnológica universalmente."
      ],
      causes: [
        "La \"Tormenta Perfecta\": La combinación de huelgas pasadas, la pandemia (2020-2022) y la aplicación estricta de la Regla Fiscal que limitó la inversión social.",
        "**Gestión Errática:** Falta de una política de estado a largo plazo (\"Ruta de la Educación\" poco clara), con cambios constantes en métodos de evaluación y currículo que desorientan a docentes y alumnos."
      ],
      currentStatus: "Costa Rica está graduando a una generación con \"pobreza de aprendizajes\". Las universidades públicas alertan que los estudiantes de primer ingreso requieren nivelaciones masivas. El sistema funciona como un \"embudo\" que excluye a los más vulnerables, alimentando la informalidad laboral."
    },
    security: {
      title: "B. Estatus: SEGURIDAD (La Crisis de Violencia)",
      subtitle: "La crisis ruidosa que cambió la dinámica social.",
      state: [
        "**Meseta de Violencia Alta:** Tras el récord histórico de 2023 (907 homicidios), los años 2024 y 2025 cerraron con cifras muy similares (alrededor de 870-880 homicidios anuales). Aunque dejó de crecer exponencialmente, el país se ha \"estabilizado\" en una tasa epidémica de **~16-17 homicidios por cada 100,000 habitantes**.",
        "**Narcotráfico y Crimen Organizado:** El 70% de estos crímenes siguen vinculados a ajustes de cuentas y disputas territoriales de bandas narco. Costa Rica dejó de ser solo bodega para consolidarse como centro de operaciones y consumo local.",
        "**Impacto Geográfico:** La violencia ya no es exclusiva de Limón o Puntarenas; ha penetrado fuertemente en barrios de San José y zonas rurales de Guanacaste."
      ],
      causes: [
        "**Penetración del Crimen Organizado:** Los carteles internacionales pagan con droga en suelo tico, lo que genera un mercado interno de microtráfico por el que se matan las bandas locales.",
        "**Debilitamiento del Tejido Social:** La falta de empleo y oportunidades en zonas costeras y marginales convierte al crimen organizado en el \"empleador\" más atractivo para los jóvenes.",
        "**Respuesta Reactiva vs. Preventiva:** El enfoque de los últimos años (\"Costa Rica Segura Plus\" y políticas de mano dura) se ha centrado en más policías y leyes más severas (represión), pero la inversión en prevención real ha sido insuficiente."
      ],
      currentStatus: "El país ha \"normalizado\" la violencia. La ciudadanía vive con mayor miedo y ha cambiado sus hábitos (menos salidas nocturnas, más seguridad privada). El sistema judicial y carcelario está colapsado ante la cantidad de detenidos, generando un efecto de \"puerta giratoria\"."
    }
  },
  candidates: [
    {
      id: "A",
      name: "Candidato A",
      subtitle: "Claudia Dobles",
      slug: "claudia-dobles-analisis",
      education: {
        note: 7.0,
        verdict: "Propuesta de \"reconstrucción lenta\". Es la más sensata si se quiere arreglar el sistema desde los cimientos (currículo, docentes, infraestructura digital), pero carece de \"dientes\" financieros.",
        viability: { score: 5, detail: "Aumentar un 1.15% del PIB acumulado es una cantidad de dinero monstruosa sin fuente clara. Prometer conectividad universal ignora fallos históricos de FONATEL." },
        relevance: { score: 9, detail: "Ataca la raíz del \"Apagón Educativo\" (lectura/matemática). La propuesta de equipos psicosociales en los \"100 distritos más vulnerables\" es vital para la seguridad preventiva." },
        clarity: { score: 7, detail: "Tienen claro el *qué* (STEAM, SABER), pero abusan de verbos suaves y dependen de un \"Acuerdo Nacional\"." },
        factualSummary: "Propone un aumento gradual del presupuesto (acumulado 1.15% del PIB en 4 años) sin prometer el 8% inmediato. Enfocada en un \"Acuerdo Nacional\", transformación digital (plataforma SABER), infraestructura sostenible y enfoque STEAM. Plantea equipos psicosociales en los 100 distritos más vulnerables, revisión de currículo (lectura/mate) y modernización de evaluación docente (no punitiva)."
      },
      security: {
        note: 6.6,
        verdict: "Propuesta de \"Ordenamiento del Estado\". Un diagnóstico maduro sobre la necesidad de leyes, pero frágil por su dependencia legislativa.",
        viability: { score: 4, detail: "Prometer 4.000 policías nuevos choca con la Regla Fiscal y capacidad de reclutamiento. Depende de aprobar muchas leyes nuevas." },
        relevance: { score: 9, detail: "La Ley de Capitales Emergentes y la reforma a la DIS son claves para atacar el dinero y la inteligencia del narco." },
        clarity: { score: 7, detail: "Conocimiento técnico alto (POP, protocolos), agenda legislativa clara, pero falta detalle operativo en la coordinación interinstitucional." },
        factualSummary: "Promete crear una Política Nacional de Seguridad y un Sistema Nacional bajo el Consejo de Seguridad Presidencial. Propone recuperar megaoperativos, control y trazabilidad de armas, crear un Centro de Mando y Control, y aumentar en 4.000 los oficiales de policía. Incluye reformas legales como la Ley de Capitales Emergentes y modernización de la DIS."
      }
    },
    {
      id: "B",
      name: "Candidato B",
      subtitle: "Alvaro Ramos",
      slug: "alvaro-ramos-analisis",
      education: {
        note: 4.5,
        verdict: "Propuesta de \"Corte Populista-Gremial\". Suena \"bonita\" para el trabajador del MEP, pero ofrece poco para el aprendizaje real del estudiante.",
        viability: { score: 3, detail: "Prometer eliminar elementos legales de salario y pago de recargos implica reformar la Ley de Empleo Público, chocando con la sostenibilidad fiscal." },
        relevance: { score: 6, detail: "Acierta en Primera Infancia (0-6 años). Falla al proponer revisar los 200 días lectivos (guiño sindical) en medio de un apagón educativo." },
        clarity: { score: 5, detail: "Exceso de retórica (\"Pacto multisectorial\") y ambigüedad en costos salariales." },
        factualSummary: "Busca restablecer la inversión al 8% del PIB gradualmente. Propone un \"Pacto multisectorial\" al 2050. Énfasis en Primera Infancia (0-6 años), revisión de los 200 días lectivos, y una política salarial \"justa\" que revise el salario global y elimine trabas para pago de recargos. Propone una Ley Marco de Formación para la Empleabilidad."
      },
      security: {
        note: 4.8,
        verdict: "Propuesta de \"Populismo Numérico y Social\". Intenta quedar bien con todos pero no focaliza la fuerza.",
        viability: { score: 3, detail: "Prometer 6.000 policías es materialmente imposible (infraestructura y finanzas). Prometer reparar exactamente 2.062 vehículos es micromanejo irreal." },
        relevance: { score: 6, detail: "Acierta con \"Patrullas Fucsia\" (género) y control de puertos. Falla con ocurrencias como \"Bailando para vivir\" o \"aulas contenedor\"." },
        clarity: { score: 5, detail: "Confusión de roles institucionales y exceso de detalle numérico que da falsa precisión." },
        factualSummary: "Creación de 6.000 nuevas plazas policiales. Puesta en operación de un Centro C5. Compra de 100 vehículos y reparación de 2.062 patrullas. Creación de \"Patrullas Fucsia\" para violencia intrafamiliar. Enfoque social con programas como \"Bailando para vivir\" y conversión de contenedores decomisados en aulas móviles. Atención a salud mental en CCSS."
      }
    },
    {
      id: "C",
      name: "Candidato C",
      subtitle: "Laura Fernández",
      slug: "laura-fernandez-analisis",
      education: {
        note: 7.8,
        verdict: "Propuesta de \"Shock Modernizador\". El mejor plan técnico, pero el más difícil políticamente por tocar FEES y Juntas de Educación.",
        viability: { score: 6, detail: "Presupuesto universitario \"por resultados\" desatará guerra política. Reconvertir colegios académicos a técnicos es caro y lento." },
        relevance: { score: 9, detail: "Transformar 50 colegios a técnicos ataca desempleo y seguridad. Pruebas estandarizadas tempranas son urgentes." },
        clarity: { score: 8, detail: "Metas cuantificables (600 aulas, 50 colegios) permiten auditoría. Ruta clara sobre mala gestión." },
        factualSummary: "Modernización con enfoque en competitividad. Plan de intervención en zonas rurales/costeras. Transformación digital (SABER, equipamiento). Inglés alineado al Marco Común Europeo con certificaciones internacionales. Transformación de 50 colegios académicos en técnicos y creación de 10 colegios científicos. Reforma al marco de las Juntas Educativas. Presupuesto universitario basado en resultados."
      },
      security: {
        note: 7.5,
        verdict: "Propuesta de \"Modernización Forzada\". Brillante en tecnología y ciberseguridad, pero su obsesión con reformar el Poder Judicial consumirá su capital político.",
        viability: { score: 5, detail: "Modificar elección de magistrados es políticamente un Everest. Construir cárcel de máxima seguridad toma años. Integrar seguridad privada es muy viable." },
        relevance: { score: 9, detail: "Único con enfoque serio en Ciberseguridad and Cibercomando. Ataca la \"puerta giratoria\" judicial." },
        clarity: { score: 8.5, detail: "Muy tecnológicos (C7i, ISO 27001). Claros en que buscarán financiamiento externo." },
        factualSummary: "Reforma judicial profunda (elección de magistrados por 10 años, rendición de cuentas). Creación de un Centro Nacional de Mando y Control (C7i) interconectando radares y escáneres. Énfasis masivo en Ciberseguridad (Ley Marco, Cibercomando, CSIRT). Integración de la seguridad privada (20.000 agentes) en la red de vigilancia. Construcción de cárcel de máxima seguridad."
      }
    },
    {
      id: "D",
      name: "Candidato D",
      subtitle: "Juan C. Hidalgo",
      slug: "juan-c-hidalgo-analisis",
      education: {
        note: 6.5,
        verdict: "Propuesta de \"Reingeniería Financiera e Institucional\". Creativa (fondos de pensiones), pero depende de reformas legales complejas.",
        viability: { score: 4, detail: "Usar fondos de pensiones para infraestructura es un campo minado legal y político. Crear ente autónomo (SNACE) requiere batalla legislativa." },
        relevance: { score: 9, detail: "Diagnóstico honesto (Cruzada por Lectoescritura). Fin a la \"Mutilación Horaria\" es vital para la equidad." },
        clarity: { score: 7, detail: "Mecanismos claros (SNACE, Fondos Pensiones), pero la \"Cruzada Nacional\" puede quedarse en marketing si no es vinculante." },
        factualSummary: "Declara la crisis educativa más seria de la historia. Propone una \"Cruzada Nacional por la Lectoescritura\". Reforma legal para usar fondos de pensiones en infraestructura. Creación de un ente autónomo de evaluación (SNACE). Eliminación de la \"mutilación horaria\" en escuelas. Unificación de sistemas de becas y comedores."
      },
      security: {
        note: 6.5,
        verdict: "Propuesta de \"Disrupción Financiera y Geopolítica\". Ideas operativas excelentes (Europa en Moín) pero financiamiento ilusorio (venta del BCR).",
        viability: { score: 3.5, detail: "Basar el presupuesto en la venta del BCR y legalización de cannabis es un suicidio político en la Asamblea actual. Promesa de 6.500 policías es populista." },
        relevance: { score: 8.5, detail: "Alianza con la Unión Europea para cuidar puertos es pragmatismo puro. Cárceles especializadas son necesarias." },
        clarity: { score: 8, detail: "Mecanismos muy específicos, aunque inviables políticamente." },
        factualSummary: "Financiamiento extraordinario mediante venta de activos (BCR) y legalización de cannabis recreativo. Creación de un Fondo de Seguridad Nacional. Aumento de 6.500 policías. Acuerdo con la Unión Europea para contingente policial en Moín. Creación de Agencia de Inteligencia contra Crimen Organizado. Cárceles exclusivas para crimen organizado."
      }
    },
    {
      id: "E",
      name: "Candidato E",
      subtitle: "Ariel Robles",
      slug: "ariel-robles-analisis",
      education: {
        note: 3.5,
        verdict: "Propuesta de \"Reivindicación Gremial e Ideológica\". Mira hacia adentro del sistema (empleados), no hacia los resultados de los estudiantes.",
        viability: { score: 2, detail: "Depende enteramente de aprobar leyes en minoría legislativa. Guerra con sector productivo (Educación Dual) y privado. Financiamiento vía eliminación de exoneraciones es riesgoso." },
        relevance: { score: 4, detail: "Diagnóstico sesgado (culpa al neoliberalismo). Prioridades ideológicas (sindicalismo en aulas). Rescatable: becas rurales." },
        clarity: { score: 5, detail: "Claros en números de expediente legislativo, pero confusos en ejecución (\"auditorías sociales\", \"mesas\")." },
        factualSummary: "Auditoría social de la educación. Alcanzar el 8% del PIB definiendo cálculo y nuevas fuentes (eliminar exoneraciones). Defensa del FEES y negociación quinquenal. Becas para zonas rurales. Fortalecimiento de la enseñanza de sindicalismo y cooperativismo. Reformas para regular tarifas de universidades privadas y limitar la educación dual para que no sea \"mano de obra barata\"."
      },
      security: {
        note: 4.6,
        verdict: "Propuesta de \"Desarme y Prevención Social\". \"Buenas intenciones\" que ignoran la naturaleza depredadora del crimen organizado actual.",
        viability: { score: 3, detail: "Laberinto legislativo. Choque con la policía por enfoque \"desmilitarizado\" y formación en universidades." },
        relevance: { score: 4, detail: "Diagnóstico de largo plazo correcto (prevención), pero nulo para la emergencia actual. Mensaje de \"penas proporcionales\" puede incentivar impunidad." },
        clarity: { score: 7, detail: "Claridad ideológica total (garantismo), pero exceso de burocracia en la propuesta (\"mesas de diálogo\")." },
        factualSummary: "Enfoque preventivo y de derechos humanos. Desmilitarización de la formación policial (pasarla a UNED/CONARE). Justicia Restaurativa y penas proporcionales para delitos no violentos. Regulación del cannabis con enfoque de salud pública. Reforma a la Ley de Armas para limitar portación. Uso de impuestos a personas jurídicas para prevención comunitaria."
      }
    },
    {
      id: "F",
      name: "Candidato F",
      subtitle: "Jose Aguilar B.",
      slug: "jose-aguilar-b-analisis",
      education: {
        note: 7.9,
        verdict: "Propuesta de \"Shock de Eficiencia Empresarial\". Pragmática y orientada a la economía, pero con riesgos de viabilidad sindical.",
        viability: { score: 6, detail: "Evitar traslados docentes (\"arraigo\") generará huelgas. Alianzas Público-Privadas son viables pero requieren agilidad." },
        relevance: { score: 9, detail: "Lectoescritura con herramientas probadas (Glifing). Vínculo fuerte con empleo (\"Reskilling\") e Primera Infancia + IA." },
        clarity: { score: 8.5, detail: "Obsesión por la data y hoja de ruta definida (Estándares OCDE)." },
        factualSummary: "Declaratoria de emergencia nacional. Uso de evidencia y datos (Plataforma SABER + IA). Alianzas público-privadas para infraestructura. Observatorio del mercado laboral y programas de \"Reskilling/Upskilling\". Uso de metodología Glifing para lectoescritura. Bilingüismo certificado. Acompañamiento de la OCDE y modelos de Finlandia/Corea."
      },
      security: {
        note: 7.8,
        verdict: "Propuesta de \"Mano Dura Inteligente\". El plan más moderno y ejecutivo (C5, Vicepresidencia), pero depende de conseguir dinero extra.",
        viability: { score: 6, detail: "Depende de un \"Presupuesto Extraordinario\" aprobado por el Congreso. Integrar datos (C5) es técnicamente viable pero políticamente difícil." },
        relevance: { score: 9, detail: "Focalización en 20 distritos y bloqueo de cárceles. Urbanismo táctico es barato y efectivo." },
        clarity: { score: 8.5, detail: "Detalle técnico alto (ANPR, visión térmica). Jerarquía clara (Vicepresidencia)." },
        factualSummary: "Liderazgo desde Casa Presidencial (Vicepresidencia). Implementación de Centro de Comando C5 (integración de cámaras y 911). Control territorial en los 20 distritos más violentos en 100 días. Bloqueo total de comunicaciones en cárceles con drones. Alianzas internacionales (Israel, Holanda, Colombia). Urbanismo táctico para recuperación de espacios."
      }
    },
    {
      id: "G",
      name: "Candidato G",
      subtitle: "Natalia Diaz",
      slug: "natalia-diaz-analisis",
      education: {
        note: 8.2,
        verdict: "Propuesta de \"Rescate Social y Laboral\". El plan más \"callejero\" y ejecutable a corto plazo, centrado en empleo rápido.",
        viability: { score: 7, detail: "Uso de recursos del INA es altamente viable. \"Jornadas extra\" en MEP es complejo financieramente. Infraestructura ágil para Juntas es correcto." },
        relevance: { score: 8.5, detail: "Vínculo Educación-Seguridad (iluminación, entornos). Empleabilidad real medida en colocación laboral. Foco en mujeres jefas de hogar." },
        clarity: { score: 9, detail: "Detalle granular de puestos vacantes y mecanismos (\"bootcamps\", semáforo de infraestructura)." },
        factualSummary: "Concepto de \"Escuelas Dignas\" como prevención del crimen (infraestructura segura e iluminada). Uso intensivo del INA para inserción laboral rápida (90 días). Mapeo de vacantes semestral. Aulas móviles y sedes satélite en zonas costeras. Prioridad a mujeres jefas de hogar. Jornadas extra para nivelación en lo básico."
      },
      security: {
        note: 7.7,
        verdict: "Propuesta de \"Soberanía y Mano Firme\". Entiende la psicología del policía y del ciudadano, pero arriesga choques legales en migración.",
        viability: { score: 6, detail: "Política migratoria de \"deportación inmediata\" choca con Sala IV. Recuperación de cuarterías es viable operativamente pero compleja socialmente." },
        relevance: { score: 9, detail: "Foco único en Cuarterías (base del crimen urbano) y control marítimo (economía azul)." },
        clarity: { score: 8, detail: "Lenguaje directo y sin eufemismos. Prevención estructurada ligada a empleo técnico." },
        factualSummary: "Control total de fronteras y política migratoria estricta (\"el que viene a delinquir se va\"). Recuperación de espacios públicos y específicamente de \"cuarterías ilegales\". Patrullaje marítimo para proteger economía azul. Dignificación policial (salarios, equipamiento). Prevención inteligente vinculada a empleo y cultura en barrios."
      }
    }
  ],
  conclusions: {
    summary: "El país atraviesa una \"doble crisis estructural\". Por un lado, una crisis de violencia que, aunque se ha estancado levemente, mantiene niveles históricos de homicidios. Por otro, una crisis educativa silenciosa pero devastadora, catalogada como la peor en 40 años, que está erosionando la base de capital humano del futuro.",
    hallazgos: [
      "**Crisis de Violencia:** Tras el récord histórico de 2023, los años 2024 y 2025 cerraron con cifras similares (~870-880 homicidios anuales). El país se ha \"estabilizado\" en una tasa epidémica.",
      "**Apagón Educativo:** Los estudiantes de 15 años muestran competencias de lectura y matemáticas equivalentes a niveles de primaria. La inversión ha caído al 4.9% del PIB.",
      "**Crimen Organizado:** El 70% de los crímenes están vinculados a ajustes de cuentas. Costa Rica es ahora centro de operaciones y consumo local.",
      "**Generación Excluida:** Se está graduando a una generación con \"pobreza de aprendizajes\", lo que alimenta la informalidad laboral."
    ]
  }
};
