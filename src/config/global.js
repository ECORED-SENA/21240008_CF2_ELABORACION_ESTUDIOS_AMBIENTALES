export default {
  global: {
    componenteFormativo: 'Estudios ambientales aplicados a proyectos',
    descripcionCurso:
      'Los estudios ambientales son realizados teniendo en cuenta los términos de referencia expedidos por el Ministerio de Medio Ambiente. Este documento da las pautas que debe llevar un estudio ambiental como lo son las condiciones económicas, técnicas y legales para finalmente presentar una propuesta acorde a la actividad en la que se esté ejecutado el estudio ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Términos de referencia de estudios ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definiciones, tipos y clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios aplicables',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Metodología utilizada en Colombia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Requisitos para aplicar un Estudio de Impacto Ambiental',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Trámites ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y clasificación de los trámites ambientales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de procedimientos en estudios ambientales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Requisitos y normatividad aplicada a los trámites ambientales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de información geográfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición, aplicación y componentes de un SIG',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Métodos de medición y técnicas de presentación cartográfica',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Simbología y escalas de mapas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Planificación y estructura del trámite ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Conceptos y fundamentación del trámite',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Métodos y herramientas utilizadas',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alonso. (2006). Técnicas de análisis de cartografía convencional.',
      link: 'https://www.um.es/geograf/sigmur/temariohtml/node12_mn.html',
    },
    {
      referencia:
        'ANLA (2018). Nuevas herramientas para facilitar trámites a los usuarios.',
      link:
        'http://portal.anla.gov.co/noticias/nuevas-herramientas-facilitar-tramites-usuarios',
    },
    {
      referencia: 'ANLA (2019). ABC del licenciamiento.',
      link: 'http://portal.anla.gov.co/paso-paso',
    },
    {
      referencia: 'ANLA. (2021). Trámite y servicios.',
      link: 'https://www.anla.gov.co/tramites-y-servicios',
    },
    {
      referencia: 'CAR. (2015). Licencia Ambiental.',
      link: 'https://www.car.gov.co/vercontenido/1159',
    },
    {
      referencia: 'Corte Constitucional de Colombia. 2021. Sentencia C-145/21',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2021/C-145-21.htm',
    },
    {
      referencia:
        'Flórez. D. y Fernández. D. (2017). Los sistemas de información geográfica. Una revisión. Universidad de la Amazonia.',
      link:
        'http://www.udla.edu.co/revistas/index.php/fagropec/article/view/708/728',
    },
    {
      referencia: 'ISO14001. 2015. Procedimientos ambientales.',
      link:
        'https://www.nueva-iso-14001.com/2015/05/iso-14001-los-procedimientos-ambientales/',
    },
    {
      referencia: 'Ministerio de Educación. (2012). ¿Qué es un SIG?',
      link: 'https://www.mineducacion.gov.co/1621/article-190610.html',
    },
  ],
  glosario: [
    {
      termino: 'Estudio de impacto ambiental',
      significado:
        'Es el instrumento básico para la toma de decisiones sobre los proyectos, obras o actividades que requieren licencia ambiental y se exigirá en todos los casos en que de acuerdo con la ley y el presente reglamento se requiera. Impacto ambiental: cualquier alteración en el medio biótico, abiótico, socioeconómico, que sea adverso o beneficioso, total o parcial, que pueda ser atribuida al desarrollo de un proyecto, obra o actividad. (Artículo 2.2.2.3.1.1 del decreto 1076 de 2015)',
    },
    {
      termino: 'Licencia ambiental',
      significado:
        'Es la autorización que otorga la autoridad ambiental competente para la ejecución de un proyecto, obra o actividad, que de acuerdo con la ley y los reglamentos, pueda producir deterioro grave a los recursos naturales renovables o al medio ambiente o introducir modificaciones considerables o notorias al paisaje; la cual sujeta al beneficiario de esta, al cumplimiento de los requisitos, términos, condiciones y obligaciones que la misma establezca en relación con la prevención, mitigación, corrección, compensación y manejo de los efectos ambientales del proyecto, obra o actividad autorizada.(ANLA)',
    },
    {
      termino: 'Servicios ecosistémicos',
      significado:
        'Son aquellos procesos y funciones de los ecosistemas que son percibidos por el humano como un beneficio (de tipo ecológico, cultural o económico) directo o indirecto. Incluyen aquellos de aprovisionamiento, como comida y agua; servicios de regulación, como la regulación de las inundaciones, sequías, degradación del terreno y, enfermedades; servicios de sustento como la formación del sustrato y el reciclaje de los nutrientes; y servicios culturales, ya sean recreacionales, espirituales, religiosos u otros beneficios no materiales. (MINAMBIENTE, 2012)',
    },
    {
      termino: 'Términos de referencia',
      significado:
        'Son los lineamientos generales que la autoridad ambiental señala para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante la autoridad ambiental competente. El solicitante de la licencia ambiental deberá utilizar los términos de referencia, de acuerdos con las condiciones específicas del proyecto, obra o actividad que pretende desarrollar (ANLA).',
    },
    {
      termino: 'Valoración económica ambiental',
      significado:
        'Asignación de valores cuantitativos a los bienes y servicios proporcionados por recursos naturales, independientemente de si existen o no precios de mercado que ayuden a hacerlo. (Convención Ramsar, 1997)',
    },
  ],
  complementario: [
    {
      texto:
        'ANLA. (2021). Audiencia pública ambiental, ¨ Ejecución de obras Construcción y operación del Aeropuerto el Dorado¨ [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vuMVwLjPmeY&t=16s',
    },
    {
      texto:
        'Valencia M. (2021). Términos de referencia para la elaboración del estudio de impacto ambiental [Video].  YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dnY8MfggFNU',
    },
    {
      texto: 'ANLA. (2021). Listado de Normativa ambiental.',
      tipo: 'Artículo',
      link: 'http://portal.anla.gov.co/normativa/historial-normativa-ambiental',
    },
    {
      texto: 'Corte Constitucional. Sentencia C-145 de 2021.',
      tipo: 'Artículo',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2021/C-145-21.htm',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Daniela Reinoso',
        cargo: 'Experta',
        centro: 'Centro Agropecuario La Granja',
      },
      {
        nombre: 'Ana Vela Rodriguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de gestión Industrial Regional Bogotá- Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes Rosa ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
