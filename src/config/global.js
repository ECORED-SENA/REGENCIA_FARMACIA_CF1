export default {
  global: {
    componenteFormativo: 'Sistema General de Seguridad Social',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia orientar al usuario, referentes a la normatividad legal vigente del Sistema General de Seguridad Social, la cual está regida por el Gobierno colombiano y por intermediarios como el Ministerio de Salud y Protección Social, con el fin que los aprendices se enfoquen en identificar las necesidades y expectativas de los usuarios que asisten al servicio de salud.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        titulo: 'Sistema General de Seguridad Social Integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Obligaciones del Estado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evaluación de indicadores',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sujetos de especial protección constitucional',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Mecanismos de protección del derecho fundamental a la salud',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política de Atención Integral en Salud (PAIS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelo de Atención Integral en Salud (MIAS)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelo de Acción Integral Territorial (MAITE)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan Nacional de Desarrollo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mercado y mercadeo en salud ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estrategias de mercadeo en salud',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Cliente',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
        'Corte Constitucional. (2017). Sentencia T-293 del 2017 Sujetos de especial protección.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=74261&dt=S',
    },
    {
      referencia: 'DNP. (2020). Seguridad Social Integral. ',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-social/subdireccion-de-empleo-y-seguridad-social/Paginas/Seguridad-Social-Integral.aspx',
    },
    {
      referencia: 'Komiya, A. (2015). CreceNegocios. ',
      link:
        'https://www.crecenegocios.com/que-es-el-servicio-al-cliente-y-cual-es-su-importancia/',
    },
    {
      referencia:
        'Larraín Cortés, A. (2012). Diseño de una propuesta de mejoramiento de la calidad de servicio en una empresa del rubro automotriz.',
      link: 'http://repositorio.uchile.cl/handle/2250/104405',
    },
    {
      referencia:
        'Ministerio de Salud (2015). Ley 1751. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/ley-1751-de-2015.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (2016). Por medio de la cual se adopta la Política de Atención Integral en Salud. Resolución 0429.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200429%20de%202016.pdf',
    },
    {
      referencia:
        'Ministerio de salud, Por la cual se modifica la Política de Atención Integral en Salud -PAIS y se adopta el Modelo de Acción Integral Territorial-MAITE. Resolución 2626. Colombia 2019.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2626-de-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones. Ley 100. Colombia 1993. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-100-de-1993.pdf',
    },
    {
      referencia:
        'Werner, Palma, Echavarría y Rosales, (s.f.). Modelo de Atención Integral en Salud. Ministerio de Salud y Asistencia Social.',
      link: 'https://www.paho.org/gut/dmdocuments/Modelo_de_atencion_MPAS.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención personalizada',
      significado:
        'la atención personalizada es la atención directa o personal que toma en cuenta las necesidades, gustos y preferencias particulares del cliente. Se da, por ejemplo, cuando un mismo trabajador atiende a un cliente durante todo el proceso de compra, cuando se le brinda al cliente un producto diseñado especialmente, de acuerdo con sus necesidades, gustos y preferencias particulares, etc.',
    },
    {
      termino: 'Cliente externo',
      significado:
        'es la persona que se puede denominar consumidor y que busca satisfacer una necesidad.',
    },
    {
      termino: 'Cliente interno',
      significado:
        'es aquella persona que se desempeña como colaborador de la organización.',
    },
    {
      termino: 'Cliente',
      significado:
        'es aquella persona que adquiere un bien o servicio por medio de una transacción financiera.',
    },
    {
      termino: 'EPS',
      significado: ' Empresa Promotora de Salud.',
    },
    {
      termino: 'IPS',
      significado: ' Instituto Prestador de Salud.',
    },
    {
      termino: 'Maite',
      significado: ' Modelo de Acción Integral Territorial.',
    },
    {
      termino: 'Misión',
      significado:
        'es lo que se realiza para alcanzar el propósito en un periodo de tiempo.',
    },
    {
      termino: 'PAIS',
      significado: ' Política de Atención Integral en Salud.',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'se entiende por servicio al cliente o servicio de atención al cliente, a los métodos que emplea una empresa para ponerse en contacto con su clientela, para garantizar, entre otras cosas, que el bien o servicio ofrecido llegue a sus consumidores y sea empleado de manera correcta.',
    },
    {
      termino: 'Seguridad',
      significado:
        'hace referencia a la seguridad que existe en el local y que, por lo tanto, se le da al cliente al momento de visitarlo. Por ejemplo, cuando se cuenta con suficiente personal de seguridad, cuando se tienen claramente marcadas las zonas de seguridad, cuando se tienen claramente señalizadas las vías de escape, cuando se cuenta con botiquines médicos, etc.',
    },
    {
      termino: 'Visión',
      significado:
        'es la realidad que le gustaría ver a la empresa en torno al mundo, sus clientes y ella misma.',
    },
  ],
  complementario: [
    {
      texto:
        'Fucsalud. (2018). Sistema General de Seguridad Social (Video). Vimeo.',
      tipo: 'Video',
      link: 'https://vimeo.com/228217305',
    },
    {
      texto:
        'Sistema Integral de Información de la Protección Social (SISPRO). (s.f.). ¿Qué es SISPRO? ',
      tipo: 'Página web',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
    {
      texto:
        'Superintendencia Financiera de Colombia. (s.f.). Superintendencia Financiera de Colombia.',
      tipo: 'Página web',
      link: 'https://www.superfinanciera.gov.co/jsp/index.jsf',
    },
    {
      texto:
        'Serranosqui Plus. (2018). Constitución Política de Colombia – (Fundamentos de Administración Pública)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tDUOKWTeoYs',
    },
    {
      texto: 'Lenis, M. (2016). Ley estatutaria en salud. ',
      tipo: 'Artículo - presentacion',
      link: 'https://prezi.com/jvfvnkn0zd1p/ley-1751-de-2015/',
    },
    {
      texto: 'Rueda, J. (2017). Ley 1751 de 2015 (Video). Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WBXc_GZLEa0',
    },
    {
      texto:
        'Ámbito Jurídico. (2015). Lo que usted debe saber sobre la Ley Estatutaria de Salud. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8OTicDh_JYc&ab_channel=%C3%81mbitoJur%C3%ADdico',
    },
    {
      texto:
        'MinSaludCol. (2018). Presentación de la Política de Atención Integral en Salud.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AD9GoqohIuQ',
    },
    {
      texto: 'Vargas, L. (2020). Resolución 2626 e 2019.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n6bE2uy_Dr0',
    },
    {
      texto: 'Jaime, D. (2013). Tipos de clientes.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hixQG0y7nuI',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Ayala Pardo',
        cargo: 'Experta temática',
        centro: 'Regional Antioquia Centro de Servicios de Salud.',
      },
      {
        nombre: 'Oscar Meza',
        cargo: 'Experto temático',
        centro: 'Regional Atlántico Centro de Comercio y Servicios.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional – Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Sandra Carolina Duran Lopez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
