<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En el marco de los sistemas distribuidos, la comunicación efectiva y la sincronización precisa entre procesos, representan pilares esenciales para lograr el funcionamiento coordinado de múltiples componentes distribuidos en diferentes nodos. Esta unidad está orientada a proporcionar al estudiante una comprensión profunda de los mecanismos y fundamentos que permiten la interacción fiable entre procesos, abordando tanto los protocolos de comunicación como los métodos para ordenar y coordinar eventos en entornos asincrónicos y heterogéneos.
    
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El propósito central de esta unidad es que el estudiante desarrolle competencias para analizar, seleccionar y aplicar protocolos de comunicación, adecuados al contexto de sistemas distribuidos, comprendiendo las diferencias entre modelos como RPC (<em>Remote Procedure Call</em>) y REST (<em>Representational State Transfer</em>). Asimismo, se explora cómo estas tecnologías posibilitan la invocación de servicios distribuidos, facilitando la interoperabilidad entre componentes que residen en ubicaciones físicas diferentes.
        p Una segunda línea temática aborda la sincronización de procesos, elemento indispensable para garantizar la coherencia en la ejecución distribuida, evitar condiciones de carrera y administrar el acceso ordenado a recursos compartidos. En este ámbito, se estudian las estrategias de exclusión mutua, la coordinación distribuida y los algoritmos de elección, reconociendo su importancia en entornos donde no existe un reloj global ni un control centralizado.

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/3.svg", data-aos="zoom-in")
          .col-lg-9
            .bg-color-3.p-4(data-aos="fade-left").mb-5
              p.mb-0 Otro eje fundamental de la unidad lo constituye el análisis de relojes lógicos y físicos, herramientas conceptuales que permiten establecer relaciones temporales entre eventos distribuidos. Se introducen los relojes de Lamport, los relojes vectoriales y los desafíos inherentes al problema del tiempo en redes distribuidas, mostrando cómo estos mecanismos contribuyen a mantener la causalidad y el orden en la ejecución de procesos concurrentes.
            p(data-aos="fade-left") La estructura de esta unidad contempla tres temas principales:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
              h5.text-center Tema 1
              p.mb-0.text-center Se profundiza en los protocolos de comunicación, incluyendo su funcionamiento, casos de uso y ventajas comparativas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
              h5.text-center Tema 2
              p.mb-0.text-center Se abordan los fundamentos de la sincronización de procesos, destacando los problemas clásicos y las soluciones propuestas en el ámbito distribuido.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/6.svg" alt="" style="width: 90px")
              h5.text-center Tema 3
              p.mb-0.text-center Se examinan los conceptos de tiempo lógico y físico, proporcionando al estudiante herramientas para razonar sobre el orden de los eventos y detectar inconsistencias temporales.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/7.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Durante el desarrollo de esta unidad, el estudiante participará en el análisis de diagramas, ejercicios prácticos y simulaciones que refuercen la comprensión de los conceptos. Se fomenta una perspectiva crítica que permita evaluar los mecanismos de comunicación y sincronización no solo desde el punto de vista técnico, sino también considerando su impacto en la confiabilidad, escalabilidad y desempeño de los sistemas distribuidos.
    
        .bg-color-1.px-4.py-5(data-aos="fade-left")
          p.mb-0 Al finalizar esta unidad, se espera que el estudiante cuente con una visión integrada de los desafíos y soluciones que implican la comunicación y sincronización en sistemas distribuidos, y que sea capaz de aplicar dichos conocimientos en el diseño de arquitecturas robustas y eficientes que respondan a las necesidades actuales del desarrollo de software distribuido.
        
            

</template>
