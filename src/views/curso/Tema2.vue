<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Sincronización de procesos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La sincronización de procesos en sistemas distribuidos representa un mecanismo esencial mediante el cual múltiples componentes cooperan y coordinan sus acciones para lograr un comportamiento coherente y ordenado. A diferencia de los entornos centralizados, en los sistemas distribuidos no existe un reloj global ni memoria compartida, por lo que cada proceso debe utilizar protocolos específicos para acordar el momento exacto en que deben ejecutarse ciertas tareas o acceder a recursos comunes. Esta coordinación asegura que se respeten dependencias lógicas, se eviten conflictos y se mantenga la integridad del sistema, incluso en presencia de latencias, fallos o comunicaciones asincrónicas (Muñoz Escoí, 2013).

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Introducción a la sincronización en sistemas distribuidos
    
    p.mb-5 Para el estudio de esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Exclusión mutua en sistemas distribuidos
    
    p.mb-5 El control del acceso concurrente a recursos compartidos es un desafío central en el diseño de sistemas distribuidos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Exclusión mutua en sistemas distribuidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Exclusión mutua en sistemas distribuidos</b>, se presentan los fundamentos, requisitos y principales algoritmos que permiten garantizar que solo un proceso acceda a una sección crítica en un momento dado. A través de ejemplos prácticos y comparaciones detalladas, se analizan soluciones como Ricart-Agrawala, Token Ring y el algoritmo de Raymond, destacando sus ventajas, limitaciones y escenarios de aplicación. Este estudio es esencial para comprender cómo se mantiene la coherencia y se evita la corrupción de datos en entornos distribuidos sin memoria compartida ni relojes globales sincronizados.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Exclusión mutua en sistemas distribuidos.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Relojes lógicos y orden de eventos     
    

    .row.justify-content-center.align-items-center.bg-color-1.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.p-4
            p Uno de los desafíos más fundamentales en sistemas distribuidos es la ausencia de una noción global del tiempo. A diferencia de los sistemas centralizados, donde los procesos comparten un reloj común, en entornos distribuidos cada nodo mantiene su propio reloj local, y debido a retrasos, latencias y diferencias físicas, estos relojes no están perfectamente sincronizados (Muñoz Escoí, 2013).
            p.mb-0 Esta falta de un tiempo absoluto confiable hace imposible, en muchos casos, determinar con certeza cuál de los dos eventos ocurrió primero si provienen de nodos distintos. Por tanto, establecer un orden coherente de eventos se convierte en una necesidad crítica para mantener la consistencia, la causalidad y la coordinación entre procesos.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Relojes lógicos: concepto general
        p.mb-5(data-aos="fade-left") Para resolver este problema, se introdujo el concepto de relojes lógicos, un enfoque que no busca medir el tiempo real, sino ordenar eventos de forma lógica, es decir, determinar la relación de anterioridad o simultaneidad entre ellos.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un reloj lógico asigna una marca numérica a cada evento de un sistema distribuido, siguiendo reglas que preservan la relación causal entre eventos (Muñoz Escoí, 2013). Estos relojes permiten identificar cuándo un evento ocurrió antes, ocurrió después o no está relacionado causalmente con otro.

    .row.justify-content-center.align-items-center.bg-color-6.mb-5.bg-full-width
      .col-lg-12
        .row.justify-content-center.align-items-center.px-5.py-4.py-lg-0
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            h4 La relación de causalidad: “happened-before” (→)
            p El concepto central detrás de los relojes lógicos, es la relación de “ocurrió antes que” (denotada como →), propuesta por Leslie Lamport en 1978. Esta relación se define así:
            p 1.	Si dos eventos ocurren en el mismo proceso y a ocurre antes que b, entonces a → b.
            p 2.	Si un proceso P1 envía un mensaje m y P2 lo recibe, entonces send(m) → receive(m).
            p 3.	Si a → b y b → c, entonces a → c (transitividad).
            p Dos eventos que no están relacionados por → se consideran concurrentes, lo que significa que podrían haber ocurrido en cualquier orden, y no existe una dependencia directa entre ellos.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Coordinación y elecciones en entornos distribuidos
    
    p.mb-5 La coordinación efectiva entre procesos autónomos es un aspecto esencial en el funcionamiento de los sistemas distribuidos, especialmente cuando se requiere tomar decisiones conjuntas, sincronizar tareas o asignar responsabilidades.
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Coordinación y elecciones en entornos distribuidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Coordinación y elecciones en entornos distribuidos</b>, se abordan los principales mecanismos y algoritmos que permiten a estos sistemas organizarse sin depender de un control centralizado. A través del estudio de estrategias como elecciones de líderes, quórums y consensos distribuidos, se ofrece una visión completa sobre cómo se logra la coherencia operativa incluso ante fallos o condiciones de red adversas, lo que resulta clave para la estabilidad y eficiencia de las arquitecturas distribuidas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Coordinación y elecciones en entornos distribuidos.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')
    
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Casos prácticos y desafíos actuales
    
    p.mb-5 El estudio de casos prácticos y desafíos actuales permite comprender cómo los sistemas distribuidos son aplicados en contextos reales y cómo enfrentan problemáticas emergentes asociadas a la escalabilidad, sincronización, seguridad y resiliencia.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Casos prácticos y desafíos actuales
            p.mb-4(data-aos="fade-right") En el PDF <b>Casos prácticos y desafíos actuales</b>, se analizan ejemplos concretos como sistemas de archivos distribuidos, redes sociales, bases de datos no centralizadas y arquitecturas de microservicios, destacando tanto sus características técnicas como los retos que enfrentan actualmente. Este análisis ofrece una visión crítica y actualizada sobre la evolución y complejidad de los entornos distribuidos en escenarios de alto impacto y demanda tecnológica.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Casos prácticos y desafíos actuales.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')






    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/101803 " target="_blank" rel="noopener noreferrer") Robledo Sosa, C. (2002). Redes de computadoras: ( ed.). Instituto Politécnico Nacional. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://sistemasdistribuidosgrupo10.blogspot.com/p/sincronizacion-en-sistemas-distribuidos.html  " target="_blank" rel="noopener noreferrer") Sistemas Distribuidos Grupo 10. (s. f.). Sincronización en sistemas distribuidos. Blogger. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=uyd5mmweGWQ " target="_blank" rel="noopener noreferrer") Infraestructura - Linux - Programación. (2022, 22 de noviembre). 30 InfraComp Comunicación entre Procesos Sockets TCP.  [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
