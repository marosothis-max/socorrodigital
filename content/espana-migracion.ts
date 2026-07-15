import { Tutorial } from "@/types/tutorial"

export const espanaMigracionTutorials: Tutorial[] = [
  {
    id: "cambio-humanitaria-larga-duracion",
    title: "Cambio de residencia por razones humanitarias a residencia de larga duración",
    slug: "cambio-humanitaria-larga-duracion",
    countryId: "espana",
    categoryId: "migracion-espana",
    description:
      "Guía completa para cambiar tu residencia por razones humanitarias a una residencia de larga duración en España",
    difficulty: "intermedio",
    estimatedTime: "30-45 minutos de lectura",
    lastUpdated: new Date("2026-07-15"),
    introduction:
      "Si tienes una residencia por razones humanitarias en España y has cumplido los requisitos necesarios, puedes solicitar el cambio a una residencia de larga duración. Este cambio te permitirá tener una residencia más estable y con más derechos.",
    requirements: [
      "Haber residido legalmente en España durante 5 años de forma continuada",
      "Disponer de medios económicos suficientes",
      "Tener seguro público o privado de enfermedad",
      "No tener antecedentes penales",
      "Tarjeta de residencia por razones humanitarias en vigor",
    ],
    documents: [
      "Impreso de solicitud en modelo oficial (EX-11)",
      "Pasaporte completo en vigor",
      "3 fotografías recientes tamaño carnet",
      "Tarjeta de residencia actual",
      "Certificado de empadronamiento histórico",
      "Justificación de medios económicos (contratos de trabajo, nóminas, declaraciones de la renta)",
      "Justificante del seguro de salud",
      "Certificado de antecedentes penales de tu país de origen apostillado y traducido",
    ],
    where:
      "La solicitud se presenta en la Oficina de Extranjería de tu provincia o en las comisarías de policía habilitadas. Es necesario pedir cita previa.",
    how: "Debes solicitar cita previa a través de la web del Ministerio del Interior, seleccionando 'Certificados y Asignación NIE' y después 'Autorización de residencia de larga duración'.",
    costs: "La tasa actual es de 10,71€ (Modelo 790 Código 012).",
    commonMistakes: [
      "No tener los 5 años completos de residencia continuada",
      "Presentar documentos del país de origen sin apostillar",
      "No traducir oficialmente los documentos extranjeros",
      "No acreditar medios económicos suficientes",
      "Dejar que caduque la tarjeta actual antes de solicitar el cambio",
    ],
    steps: [
      {
        number: 1,
        title: "Verifica que cumples los requisitos",
        content:
          "Antes de iniciar el trámite, asegúrate de que has residido legalmente en España durante 5 años ininterrumpidos. Solicita un certificado de empadronamiento histórico en tu ayuntamiento para verificarlo.",
        tip: "El empadronamiento histórico es fundamental. Guárdalo porque lo necesitarás para la solicitud.",
      },
      {
        number: 2,
        title: "Reúne todos los documentos necesarios",
        content:
          "Comienza a reunir todos los documentos listados anteriormente. Los que procedan de tu país de origen deben estar apostillados y traducidos por traductor jurado.",
        warning:
          "El proceso de apostilla y traducción puede tardar varias semanas. No lo dejes para el último momento.",
      },
      {
        number: 3,
        title: "Descarga y rellena el modelo EX-11",
        content:
          "Descarga el formulario EX-11 desde la página web del Ministerio del Interior. Rellénalo con tus datos personales y la información de tu solicitud.",
        tip: "Puedes rellenarlo a mano con letra clara o en el ordenador antes de imprimirlo.",
      },
      {
        number: 4,
        title: "Paga la tasa del modelo 790",
        content:
          "Descarga el modelo 790 código 012, rellénalo con tus datos y págalo en cualquier banco. El importe actual es de 10,71€.",
      },
      {
        number: 5,
        title: "Solicita cita previa",
        content:
          "Accede a la web de cita previa del Ministerio del Interior y solicita cita para 'Autorización de residencia de larga duración' en la oficina de extranjería más cercana.",
        warning:
          "Las citas pueden tardar semanas o meses según la provincia. Solicítala con antelación.",
      },
      {
        number: 6,
        title: "Acude a tu cita",
        content:
          "El día de tu cita, lleva todos los documentos originales y copias. El funcionario revisará tu expediente y te dará un resguardo de haber presentado la solicitud.",
        tip: "Llega con 15 minutos de antelación y lleva todo organizado en carpetas.",
      },
      {
        number: 7,
        title: "Espera la resolución",
        content:
          "El plazo de resolución es de 3 meses. Si no hay respuesta en ese tiempo, se considera silencio administrativo positivo (aprobación tácita).",
      },
      {
        number: 8,
        title: "Recoge tu nueva tarjeta",
        content:
          "Una vez aprobada, recibirás una notificación para recoger tu nueva tarjeta de residencia de larga duración. Deberás pagar otra tasa (actualmente 15,76€) para recogerla.",
      },
    ],
    downloads: [
      {
        title: "Modelo EX-11",
        description: "Solicitud de autorización de residencia de larga duración",
        url: "https://extranjeros.inclusion.gob.es/ficheros/Modelos_solicitudes/mod_solicitudes2/11-Formulario_CasillasES.pdf",
        type: "pdf",
      },
      {
        title: "Modelo 790 Código 012",
        description: "Tasa para autorización de residencia de larga duración",
        url: "https://sede.policia.gob.es/Tasa790_012/",
        type: "pdf",
      },
    ],
    relatedTutorials: ["renovacion-residencia-larga-duracion", "solicitud-nacionalidad-espanola"],
    tags: ["residencia", "larga duración", "humanitaria", "españa", "extranjería"],
    legalDisclaimer:
      "Esta información es orientativa y se basa en la normativa vigente a fecha de última actualización. No sustituye el asesoramiento legal profesional. Te recomendamos consultar con un abogado de extranjería para casos complejos.",
  },
  {
    id: "cambio-humanitaria-menores",
    title:
      "Residencia de menores extranjeros no nacidos en España",
    slug: "cambio-humanitaria-menores",
    countryId: "espana",
    categoryId: "migracion-espana",
    description:
      "Procedimiento para obtener la residencia de menores extranjeros no nacidos en España",
    difficulty: "intermedio",
    estimatedTime: "30-40 minutos de lectura",
    lastUpdated: new Date("2026-07-15"),
    introduction:
      "Si tu hijo o hija menor de edad nació fuera de España y reside aquí, puede solicitar la residencia de menores extranjeros no nacidos en España. Este trámite permite regularizar la situación del menor de forma estable.",
    requirements: [
      "Ser menor de edad",
      "Pasaporte completo del menor",
      "Acta de nacimiento legalizada y apostillada",
      "Si uno de los representantes no tiene patria potestad, no debe de tener la sentencia (patria potestad apostillada)",
      "Certificado de escolaridad",
      "Tarjeta de residencia del progenitor que hace el trámite",
      "Certificado de empadronamiento colectivo",
      "Certificado de impuesto modelo 790-052 (10,94€)",
    ],
    documents: [
      "Formulario EX-25",
      "Pasaporte completo del menor",
      "Acta de nacimiento legalizada y apostillada",
      "Sentencia de patria potestad apostillada (si aplica)",
      "Certificado de escolaridad",
      "Tarjeta de residencia del progenitor",
      "Certificado de empadronamiento colectivo",
      "Modelo 790-052 pagado (10,94€)",
    ],
    where: "Vía presencial, solicitando cita en la oficina de extranjería de tu comunidad de residencia. También se puede realizar vía telemática a través de la web Mercurio.",
    how: "Se solicita a través del formulario EX-25. Debe solicitarse 60 días antes del vencimiento de la autorización actual (si la tiene). Los padres deben estar vigentes (con residencia en regla).",
    costs: "Tasa modelo 790-052: 10,94€",
    commonMistakes: [
      "No apostillar el acta de nacimiento correctamente",
      "No presentar la sentencia de patria potestad cuando uno de los padres no tiene la custodia",
      "No actualizar el certificado de empadronamiento colectivo",
      "Olvidar el certificado de escolaridad actualizado",
      "No solicitar con suficiente antelación (mínimo 60 días antes del vencimiento)",
    ],
    steps: [
      {
        number: 1,
        title: "Verifica que cumples los requisitos",
        content:
          "Asegúrate de que el menor cumple todos los requisitos: ser menor de edad, tener el pasaporte en vigor, y que al menos uno de los padres tenga residencia legal en España.",
      },
      {
        number: 2,
        title: "Legaliza y apostilla el acta de nacimiento",
        content:
          "Obtén el acta de nacimiento del menor de su país de origen. Debe estar legalizada y apostillada según el Convenio de La Haya.",
        warning:
          "Este proceso puede tardar semanas o meses. Inicia este trámite con mucha antelación.",
      },
      {
        number: 3,
        title: "Si aplica: obtén la sentencia de patria potestad",
        content:
          "Si uno de los representantes (padres) no tiene la patria potestad, no debe presentar la sentencia. Solo se presenta si hay casos especiales de custodia compartida o situaciones legales particulares. Esta sentencia también debe estar apostillada.",
        tip: "Consulta con un abogado si tienes dudas sobre tu situación de patria potestad.",
      },
      {
        number: 4,
        title: "Solicita el certificado de escolaridad",
        content:
          "Acude al colegio o instituto donde estudia el menor y solicita un certificado de escolaridad que acredite que está matriculado y asistiendo regularmente a clases.",
      },
      {
        number: 5,
        title: "Obtén el certificado de empadronamiento colectivo",
        content:
          "Solicita en tu ayuntamiento un certificado de empadronamiento colectivo donde aparezcan todos los miembros de la familia que viven en el domicilio.",
      },
      {
        number: 6,
        title: "Descarga y rellena el formulario EX-25",
        content:
          "Descarga el formulario EX-25 desde la página web del Ministerio del Interior. Rellénalo con los datos del menor y del progenitor que realiza el trámite.",
      },
      {
        number: 7,
        title: "Paga la tasa modelo 790-052",
        content:
          "Descarga el modelo 790-052, rellénalo y págalo en el banco. El importe actual es de 10,94€. Conserva el justificante de pago.",
      },
      {
        number: 8,
        title: "Solicita cita previa",
        content:
          "Puedes solicitar cita de dos formas: presencialmente en la oficina de extranjería de tu comunidad, o vía telemática a través de la web Mercurio.",
        tip: "La vía telemática puede ser más rápida en algunas comunidades. Consulta las opciones disponibles en tu zona.",
      },
      {
        number: 9,
        title: "Acude a la cita o presenta telemáticamente",
        content:
          "Si elegiste la vía presencial, acude a tu cita con todos los documentos originales y copias. Si es telemática, sube todos los documentos escaneados a través de la plataforma web Mercurio.",
        warning:
          "Recuerda que debe solicitarse 60 días antes del vencimiento si el menor ya tiene una autorización previa. Los padres deben estar vigentes (con residencia en regla).",
      },
      {
        number: 10,
        title: "Espera la resolución",
        content:
          "El plazo de resolución es de 3 meses. Si no hay respuesta en ese tiempo, consulta el estado de tu expediente online o en la oficina de extranjería.",
      },
      {
        number: 11,
        title: "Recoge la tarjeta de residencia del menor",
        content:
          "Una vez aprobada la solicitud, recibirás una notificación para recoger la tarjeta de residencia del menor. Deberás pagar otra tasa para la expedición de la tarjeta física.",
      },
    ],
    downloads: [
      {
        title: "Formulario EX-25",
        description: "Solicitud de residencia de menores extranjeros no nacidos en España",
        url: "https://extranjeros.inclusion.gob.es/ficheros/Modelos_solicitudes/mod_solicitudes2/25-Formulario_Casillas_ES.pdf",
        type: "pdf",
      },
      {
        title: "Modelo 790-052",
        description: "Tasa para residencia de menores",
        url: "https://sede.policia.gob.es/Tasa790_012/",
        type: "pdf",
      },
      {
        title: "Web Mercurio (trámite telemático)",
        description: "Plataforma para realizar el trámite online",
        url: "https://sede.administracionespublicas.gob.es/",
        type: "pdf",
      },
    ],
    tags: ["menores", "residencia", "extranjeros", "españa", "extranjería", "escolarización", "no nacidos en España"],
    legalDisclaimer:
      "Esta información es orientativa. Consulta con un abogado especializado en extranjería para casos particulares. Verifica siempre los requisitos actualizados en la web oficial del Ministerio del Interior.",
  },
  {
    id: "solicitud-nacionalidad-espanola",
    title: "Solicitud de nacionalidad española",
    slug: "solicitud-nacionalidad-espanola",
    countryId: "espana",
    categoryId: "migracion-espana",
    description: "Guía completa para solicitar la nacionalidad española por residencia",
    difficulty: "avanzado",
    estimatedTime: "45-60 minutos de lectura",
    lastUpdated: new Date("2026-07-15"),
    introduction:
      "La nacionalidad española es el último paso para integrarte completamente en España. Este proceso requiere haber residido legalmente en España durante 10 años (2 años para ciudadanos de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial o Portugal).",
    requirements: [
      "Haber residido legal y continuadamente en España durante 10 años (2 años para iberoamericanos)",
      "Ser mayor de 18 años",
      "Tener buena conducta cívica",
      "Aprobar los exámenes DELE A2 y CCSE",
      "Acreditar suficiente integración en la sociedad española",
    ],
    documents: [
      "Certificado de nacimiento apostillado",
      "Certificado de antecedentes penales de España",
      "Certificado de antecedentes penales del país de origen apostillado",
      "Certificado de empadronamiento histórico",
      "Certificado DELE A2 (Instituto Cervantes)",
      "Certificado CCSE (conocimientos constitucionales y socioculturales)",
      "Copia completa del pasaporte",
      "Justificante de pago de tasas",
    ],
    where:
      "La solicitud se presenta en el Registro Civil de tu localidad o en el Registro Civil Central de Madrid.",
    how: "Debes pedir cita previa en el Registro Civil y presentar toda la documentación requerida.",
    costs: "Tasa actual: 102€",
    commonMistakes: [
      "No tener los años completos de residencia",
      "Presentar documentos sin apostillar",
      "No aprobar los exámenes DELE A2 y CCSE antes de solicitar",
      "No traducir oficialmente documentos en idiomas extranjeros",
      "Dejar caducar certificados antes de presentar la solicitud",
    ],
    steps: [
      {
        number: 1,
        title: "Verifica que cumples los años de residencia",
        content:
          "Solicita un certificado de empadronamiento histórico para verificar tus años de residencia legal continuada en España.",
        tip: "Para ciudadanos de países iberoamericanos, son solo 2 años. Para el resto, 10 años.",
      },
      {
        number: 2,
        title: "Prepárate para los exámenes DELE y CCSE",
        content:
          "Inscríbete y aprueba el DELE A2 (español) y el CCSE (conocimientos constitucionales). Estos certificados son obligatorios.",
        warning:
          "Los exámenes tienen fechas limitadas. Planifica con meses de antelación para estudiar y hacer el examen.",
      },
      {
        number: 3,
        title: "Obtén el certificado de nacimiento apostillado",
        content:
          "Solicita tu certificado de nacimiento en tu país de origen y haz que lo apostillen según el Convenio de La Haya.",
        tip: "Este proceso puede tardar meses dependiendo de tu país. Hazlo cuanto antes.",
      },
      {
        number: 4,
        title: "Solicita los certificados de antecedentes penales",
        content:
          "Necesitas certificados de antecedentes penales tanto de España como de tu país de origen (apostillado y traducido).",
      },
      {
        number: 5,
        title: "Reúne toda la documentación",
        content:
          "Junta todos los documentos necesarios. Los que estén en idioma extranjero deben estar traducidos por traductor jurado.",
      },
      {
        number: 6,
        title: "Paga la tasa",
        content:
          "Paga la tasa de 102€ en el banco. Conserva el justificante de pago para presentarlo con tu solicitud.",
      },
      {
        number: 7,
        title: "Solicita cita en el Registro Civil",
        content:
          "Pide cita en el Registro Civil de tu localidad o en el Registro Civil Central si no hay oficina cercana.",
      },
      {
        number: 8,
        title: "Presenta tu solicitud",
        content:
          "Acude a tu cita con todos los documentos originales y copias. El funcionario revisará tu expediente y te dará un resguardo.",
        tip: "Lleva todo organizado en carpetas y llega con tiempo.",
      },
      {
        number: 9,
        title: "Espera la resolución",
        content:
          "El plazo legal es de 1 año, pero en la práctica puede tardar entre 1 y 3 años. Puedes consultar el estado de tu expediente online.",
        warning: "Es un proceso largo. Ten paciencia y no desesperes.",
      },
      {
        number: 10,
        title: "Jura la Constitución y recoge tu DNI",
        content:
          "Si es aprobada, te citarán para jurar o prometer la Constitución Española. Después podrás tramitar tu DNI español.",
      },
    ],
    downloads: [
      {
        title: "Información oficial del Ministerio de Justicia",
        description: "Guía completa sobre nacionalidad española",
        url: "https://www.mjusticia.gob.es/es/ciudadania/nacionalidad",
        type: "pdf",
      },
    ],
    relatedTutorials: ["cambio-humanitaria-larga-duracion"],
    tags: ["nacionalidad", "ciudadanía", "españa", "DELE", "CCSE", "registro civil"],
    legalDisclaimer:
      "Esta información es orientativa. La concesión de nacionalidad es una decisión discrecional del Estado español. Consulta con un abogado especializado para tu caso específico.",
  },
  {
    id: "residencia-laboral-cuenta-ajena",
    title: "Residencia laboral por cuenta ajena",
    slug: "residencia-laboral-cuenta-ajena",
    countryId: "espana",
    categoryId: "migracion-espana",
    description: "Cómo obtener una autorización de residencia y trabajo por cuenta ajena en España",
    difficulty: "intermedio",
    estimatedTime: "30-40 minutos de lectura",
    lastUpdated: new Date("2026-07-15"),
    introduction:
      "Si tienes una oferta de trabajo en España, puedes solicitar una autorización inicial de residencia y trabajo por cuenta ajena. Este trámite generalmente lo inicia tu empleador.",
    requirements: [
      "Tener una oferta de trabajo real de una empresa española",
      "No estar irregularmente en España",
      "No tener antecedentes penales",
      "No figurar en situación de prohibición de entrada",
      "Que el puesto de trabajo cumpla requisitos del mercado laboral español",
    ],
    documents: [
      "Modelo de solicitud EX-03",
      "Pasaporte completo en vigor",
      "Certificado de antecedentes penales del país de origen apostillado",
      "Contrato de trabajo o oferta en firme",
      "Documentación de la empresa empleadora",
      "Justificante de pago de tasas",
    ],
    where:
      "La empresa empleadora presenta la solicitud en la Oficina de Extranjería de la provincia donde se vaya a trabajar.",
    how: "El empleador solicita cita previa y presenta la documentación en nombre del trabajador extranjero.",
    costs: "Tasa: 10,71€ (Modelo 790 Código 052)",
    commonMistakes: [
      "Que la empresa no esté al corriente de pagos con Seguridad Social",
      "Contrato con condiciones inferiores al convenio colectivo",
      "No aportar documentos apostillados del país de origen",
    ],
    steps: [
      {
        number: 1,
        title: "Consigue una oferta de trabajo formal",
        content:
          "Tu futuro empleador debe ofrecerte un contrato de trabajo que cumpla con la normativa laboral española.",
      },
      {
        number: 2,
        title: "Reúne tus documentos personales",
        content:
          "Necesitas tu pasaporte en vigor y certificado de antecedentes penales de tu país de origen apostillado y traducido.",
      },
      {
        number: 3,
        title: "La empresa prepara la documentación",
        content:
          "El empleador debe reunir la documentación de la empresa: alta en Seguridad Social, certificados de estar al corriente de pagos, etc.",
      },
      {
        number: 4,
        title: "Rellenar el modelo EX-03",
        content: "El empleador rellena el modelo de solicitud EX-03 con tus datos y los de la empresa.",
      },
      {
        number: 5,
        title: "Pagar la tasa",
        content: "Se debe pagar la tasa del modelo 790 código 052 (10,71€).",
      },
      {
        number: 6,
        title: "La empresa solicita cita y presenta la solicitud",
        content:
          "El empleador pide cita previa en la Oficina de Extranjería y presenta toda la documentación.",
      },
      {
        number: 7,
        title: "Espera la resolución",
        content:
          "El plazo es de 3 meses. Si no hay respuesta, se entiende como denegada (silencio administrativo negativo).",
        warning: "A diferencia de otros trámites, aquí el silencio es negativo.",
      },
      {
        number: 8,
        title: "Si es aprobada, solicita el visado",
        content:
          "Una vez aprobada, debes solicitar el visado de trabajo en el consulado español de tu país de origen.",
      },
      {
        number: 9,
        title: "Entra en España y recoge tu tarjeta",
        content:
          "Una vez en España con el visado, tienes 1 mes para recoger tu tarjeta de residencia y trabajo en la comisaría de policía.",
      },
    ],
    tags: ["residencia", "trabajo", "cuenta ajena", "españa", "autorización laboral"],
    legalDisclaimer:
      "Esta información es orientativa. Cada caso puede tener particularidades. Consulta con un gestor o abogado de extranjería.",
  },
  {
    id: "residencia-arraigo-social",
    title: "Residencia por arraigo social",
    slug: "residencia-arraigo-social",
    countryId: "espana",
    categoryId: "migracion-espana",
    description:
      "Cómo obtener la residencia por arraigo social en España tras 3 años de permanencia continuada",
    difficulty: "intermedio",
    estimatedTime: "35-45 minutos de lectura",
    lastUpdated: new Date("2026-07-15"),
    introduction:
      "El arraigo social permite regularizar tu situación migratoria si has permanecido en España de forma continuada durante al menos 3 años, puedes demostrar vínculos sociales y tienes una oferta de trabajo o medios económicos.",
    requirements: [
      "Haber permanecido continuadamente en España durante 3 años",
      "No tener antecedentes penales",
      "Tener vínculos familiares con residentes o informe de arraigo social",
      "Tener un contrato de trabajo o medios económicos suficientes",
    ],
    documents: [
      "Modelo de solicitud EX-10",
      "Pasaporte completo en vigor",
      "Certificado de empadronamiento histórico (mínimo 3 años)",
      "Informe de arraigo social emitido por la comunidad autónoma",
      "Contrato de trabajo firmado o acreditación de medios económicos",
      "Certificado de antecedentes penales de España y del país de origen",
    ],
    where: "Oficina de Extranjería de tu provincia con cita previa.",
    how: "Solicitas cita previa online y presentas toda la documentación personalmente.",
    costs: "Tasa: 10,71€ (Modelo 790 Código 012)",
    commonMistakes: [
      "No tener los 3 años completos de permanencia continuada",
      "No solicitar el informe de arraigo con antelación (puede tardar meses)",
      "Contrato de trabajo que no cumple requisitos mínimos",
    ],
    steps: [
      {
        number: 1,
        title: "Verifica tus 3 años de permanencia",
        content:
          "Solicita un certificado de empadronamiento histórico que acredite que has vivido en España de forma continuada durante al menos 3 años.",
        tip: "Si has cambiado de domicilio, el empadronamiento histórico mostrará todo tu historial.",
      },
      {
        number: 2,
        title: "Solicita el informe de arraigo social",
        content:
          "Acude a los servicios sociales de tu ayuntamiento o comunidad autónoma para solicitar el informe de arraigo social. Este informe acredita tus vínculos con la sociedad española.",
        warning:
          "El informe puede tardar entre 1 y 6 meses dependiendo de la comunidad. Solicítalo cuanto antes.",
      },
      {
        number: 3,
        title: "Consigue un contrato de trabajo",
        content:
          "Necesitas un contrato de trabajo firmado de al menos 1 año y a tiempo completo, o su equivalente a tiempo parcial (mínimo 30 horas semanales).",
        tip: "El contrato debe cumplir con el convenio colectivo del sector y tener un salario adecuado.",
      },
      {
        number: 4,
        title: "Reúne los certificados de antecedentes penales",
        content:
          "Solicita certificados de antecedentes penales de España y de tu país de origen (este último apostillado y traducido).",
      },
      {
        number: 5,
        title: "Rellena el modelo EX-10",
        content: "Descarga y completa el formulario de solicitud EX-10.",
      },
      {
        number: 6,
        title: "Paga la tasa",
        content: "Paga la tasa de 10,71€ mediante el modelo 790 código 012.",
      },
      {
        number: 7,
        title: "Solicita cita previa",
        content:
          "Pide cita en la Oficina de Extranjería a través de la web del Ministerio del Interior.",
      },
      {
        number: 8,
        title: "Presenta la solicitud",
        content:
          "Acude a tu cita con todos los documentos originales y copias. El funcionario revisará tu expediente.",
      },
      {
        number: 9,
        title: "Espera la resolución",
        content:
          "El plazo es de 3 meses. Si no hay respuesta, se entiende como aprobada por silencio administrativo positivo.",
      },
      {
        number: 10,
        title: "Recoge tu tarjeta de residencia",
        content: "Una vez aprobada, te citarán para recoger tu tarjeta de residencia y trabajo.",
      },
    ],
    tags: ["arraigo", "arraigo social", "residencia", "españa", "extranjería", "regularización"],
    legalDisclaimer:
      "Esta información es orientativa. Cada caso es único. Te recomendamos asesorarte con un abogado de extranjería.",
  },
]
