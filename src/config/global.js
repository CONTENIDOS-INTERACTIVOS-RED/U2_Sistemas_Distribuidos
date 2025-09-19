export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Comunicación y sincronización',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Protocolos de comunicación (RPC, REST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Introducción a los protocolos de comunicación en sistemas distribuidos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Llamada a procedimiento remoto (RPC)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Servicios web y arquitectura REST',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Comparación entre RPC y REST',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Seguridad y buenas prácticas en la comunicación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sincronización de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a la sincronización en sistemas distribuidos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Exclusión mutua en sistemas distribuidos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relojes lógicos y orden de eventos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Coordinación y elecciones en entornos distribuidos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Casos prácticos y desafíos actuales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Relojes lógicos y físicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Problema del tiempo en sistemas distribuidos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Relojes físicos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Relojes lógicos de Lamport',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Relojes vectoriales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Comparación y aplicaciones prácticas',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Muñoz Escoí, F. D. (2013). Concurrencia y sistemas distribuidos: ( ed.). Editorial de la Universidad Politécnica de Valencia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57365',
    },
    {
      referencia:
        'Coulouris, G., Dollimore, J., & Kindberg, T. (2012). Distributed Systems: Concepts and Design (5th ed.). ',
      link:
        'https://ftp.utcluj.ro/pub/users/civan/CPD/3.RESURSE/6.Book_2012_Distributed%20systems%20_Couloris.pdf ',
    },
    {
      referencia:
        'Muñoz Escoí, F. D. (2013). Concurrencia y sistemas distribuidos: ( ed.). Editorial de la Universidad Politécnica de Valencia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57365',
    },
    {
      referencia:
        'Pérez Rojas, J. (2006). Un nuevo algoritmo distribuido de exclusión mutua que minimiza el intercambio de mensajes: ( ed.). Red Revista de Facultad de Ingeniería.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/12257',
    },
    {
      referencia:
        'Muñoz Escoí, F. D. (2013). Concurrencia y sistemas distribuidos: ( ed.). Editorial de la Universidad Politécnica de Valencia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57365',
    },
    {
      referencia: 'MRCET. (2019). Distributed systems notes.  ',
      link:
        'https://mrcet.com/downloads/digital_notes/CSE/III%20Year/DISTRIBUTED%20SYSTEMS%20NOTES.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Causalidad',
      significado:
        'Relación lógica entre dos eventos en un sistema distribuido, donde uno de ellos influye directamente en la ocurrencia del otro. Se representa mediante la relación “ocurrió antes que” y es esencial para establecer un orden consistente de eventos.',
    },
    {
      termino: 'Concurrencia',
      significado:
        'Condición en la que dos o más eventos ocurren de forma independiente en procesos distintos, sin una relación causal directa entre ellos. En sistemas distribuidos, la concurrencia es una propiedad inherente que debe ser identificada y controlada adecuadamente.',
    },
    {
      termino: 'Coordinador',
      significado:
        'Proceso o nodo que, tras un mecanismo de elección, asume temporalmente el control de ciertas operaciones críticas, como la asignación de recursos, la toma de decisiones o la sincronización entre procesos en un entorno distribuido.',
    },
    {
      termino: 'Elección de líder',
      significado:
        'Algoritmo o protocolo que permite seleccionar un proceso entre varios candidatos para que actúe como coordinador dentro del sistema. Es fundamental para garantizar coherencia en tareas como la sincronización, la replicación o la toma de decisiones.',
    },
    {
      termino: 'Exclusión mutua',
      significado:
        'Mecanismo que impide que dos o más procesos accedan simultáneamente a una sección crítica del sistema o a un recurso compartido, asegurando la integridad de los datos y evitando condiciones de carrera.',
    },
    {
      termino: 'Mensaje',
      significado:
        'Unidad de comunicación intercambiada entre procesos distribuidos. Los mensajes pueden contener datos, marcas de tiempo o vectores, y son fundamentales para coordinar acciones, propagar información y establecer relaciones causales.',
    },
    {
      termino: 'Reloj físico',
      significado:
        'Temporizador basado en hardware presente en cada nodo de un sistema distribuido. Aunque proporciona marcas de tiempo reales, está sujeto a desincronización debido a la deriva de los relojes, lo que limita su fiabilidad sin protocolos de ajuste.',
    },
    {
      termino: 'Reloj lógico de Lamport',
      significado:
        'Estructura de tiempo escalar que permite asignar marcas crecientes a eventos en un sistema distribuido, preservando la relación causal entre ellos. No permite detectar eventos concurrentes.',
    },
    {
      termino: 'Reloj vectorial',
      significado:
        'Representación lógica del tiempo como un vector de enteros, donde cada elemento refleja el conocimiento de un proceso sobre los eventos de todos los demás. Permite detectar tanto relaciones causales como concurrencias.',
    },
    {
      termino: 'RPC (<em>Remote Procedure Call</em>)',
      significado:
        'Mecanismo de comunicación que permite a un proceso invocar un procedimiento alojado en otro nodo como si fuera local. Facilita la abstracción de la red y es ampliamente utilizado en arquitecturas cliente-servidor.',
    },
    {
      termino: 'Sincronización',
      significado:
        'Conjunto de técnicas que permiten coordinar la ejecución de procesos distribuidos para garantizar la coherencia, el acceso controlado a recursos y el orden adecuado de los eventos en ausencia de un reloj global.',
    },
    {
      termino: 'Tiempo lógico',
      significado:
        'Concepto que reemplaza el tiempo físico en sistemas distribuidos, utilizando estructuras como relojes lógicos o vectoriales para establecer un orden coherente de eventos basado en la causalidad, sin depender de una medida de tiempo real.',
    },
  ],
}
