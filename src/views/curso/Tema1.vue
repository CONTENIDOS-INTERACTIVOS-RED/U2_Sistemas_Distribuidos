<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Protocolos de comunicación (RPC, REST)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los protocolos de comunicación como RPC (Remote Procedure Call) y REST (Representational State Transfer), permiten la interacción entre componentes distribuidos a través de una red. RPC simula una llamada local a una función remota, ocultando la complejidad de la red y facilitando la programación distribuida orientada a procedimientos. En cambio, REST se basa en el protocolo HTTP y en operaciones estándar (GET, POST, PUT, DELETE) sobre recursos identificados por URLs, promoviendo una arquitectura ligera, escalable y ampliamente adoptada en servicios web modernos. Ambos enfoques cumplen el propósito de conectar procesos remotos, pero difieren en estilo, flexibilidad y casos de uso (Muñoz Escoí, 2013).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Introducción a los protocolos de comunicación en sistemas distribuidos
    
    p.mb-5 La comprensión de los protocolos de comunicación es esencial para garantizar la interoperabilidad, confiabilidad y eficiencia en entornos donde múltiples procesos deben interactuar a través de redes distribuidas.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Introducción a los protocolos de comunicación en sistemas distribuidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Introducción a los protocolos de comunicación en sistemas distribuidos</b>, se presentan los conceptos fundamentales, las características deseables y las principales clasificaciones de estos protocolos, además de ejemplos representativos como RPC, gRPC o MQTT. Este contenido ofrece una base sólida para entender cómo se establecen y gestionan las interacciones entre componentes en sistemas distribuidos modernos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Introducción a los protocolos de comunicación en sistemas distribuidos.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Llamada a procedimiento remoto (RPC)     
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 La llamada a procedimiento remoto (RPC, por sus siglas en inglés Remote Procedure Call), constituye uno de los mecanismos más fundamentales para la comunicación entre procesos en sistemas distribuidos. Su esencia radica en permitir que un programa invoque una función que se ejecuta en un espacio de memoria diferente, incluso en una máquina distinta, como si se tratara de una función local (Muñoz Escoí, 2013).
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Este modelo busca abstraer la complejidad de la red, permitiendo que el desarrollador se enfoque en la lógica del negocio en lugar de los detalles de transporte, serialización y comunicación subyacentes. La idea central es que el código que llama a una función remota no necesita preocuparse por los detalles de red; el sistema RPC se encarga de traducir la invocación a un mensaje, enviarlo, recibir la respuesta y retornarla de forma transparente.

    h2(data-aos="fade-left") Arquitectura básica de RPC
    p.mb-5 La arquitectura de RPC está compuesta por los siguientes elementos:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Cliente" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Cliente
            p El proceso que solicita la ejecución del procedimiento remoto.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Servidor" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Servidor
            p El proceso que expone el procedimiento que será ejecutado de manera remota.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Stubs (cliente y servidor)" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 <em>Stubs</em> (cliente y servidor)
            p Funciones generadas automáticamente que hacen de intermediarios. El stub cliente convierte una llamada local en un mensaje de red (serialización o <em>marshalling</em>). El stub servidor deserializa el mensaje (<em>unmarshalling</em>) y ejecuta la función real.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="<em>Middleware</em> de RPC" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 <em>Middleware</em> de RPC
            p Sistema que transporta el mensaje entre cliente y servidor, gestiona conexiones, reintentos y errores.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Proceso de una llamada RPC
    p.mb-5 El proceso general de una llamada a procedimiento remoto, consta de los siguientes pasos:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p El cliente invoca una función local (stub del cliente).
    
          .div(titulo="Paso 2")
            p El <em>stub</em> cliente convierte los parámetros en un formato de red (<em>marshalling</em>).
    
          .div(titulo="Paso 3")
            p El mensaje se envía a través del <em>middleware</em>.
    
          .div(titulo="Paso 4")
            p En el lado del servidor, el <em>stub</em> servidor recibe el mensaje, hace un <em>marshalling</em> y llama a la función real.
          .div(titulo="Paso 5")
            p El resultado es devuelto al <em>stub</em> servidor.
    
          .div(titulo="Paso 6")
            p El <em>stub</em> servidor realiza <em>marshalling</em> del resultado y lo envía al cliente.
    
          .div(titulo="Paso 7")
            p El <em>stub</em> cliente hace un <em>marshalling</em> y devuelve el valor a la función original.

    p Este proceso busca que la experiencia del programador sea indistinguible de una llamada local, aunque internamente se efectúe una compleja operación distribuida.
    p.mb-5 Ventajas y desventajas del modelo RPC:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7
              h5 Ventajas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Transparencia de ubicación: el cliente no necesita saber dónde está el servidor.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Facilidad de desarrollo: se mantiene el paradigma de programación tradicional.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Automatización del proceso de comunicación mediante stubs.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Lenguaje agnóstico (en ciertas implementaciones modernas).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7
              h5 Desventajas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Fragilidad ante fallos de red.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 La llamada no es verdaderamente transparente en cuanto a tiempo de ejecución.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Problemas con la semántica de errores y excepciones remotas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Dificultades con la interoperabilidad si no se siguen estándares.

    h2(data-aos="fade-left").mb-5 Ejemplo: RPC en Python con xmlrpc.server


    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
      .col-lg
        p Una forma sencilla de implementar RPC es mediante el módulo xmlrpc de Python. A continuación, se presenta un ejemplo básico:
        p.mb-0 Servidor (server.py):
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span RPC en Python -  xmlrpc.server
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
        p Cliente (client.py):
    
    .titulo-figura.mb-4
      h5 Figura 2.
      span RPC en Python -  client.py
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
        p En este ejemplo, el cliente invoca la función sumar() de forma remota sin preocuparse de cómo se transporta el mensaje, gracias a la infraestructura de XML-RPC.

    h2(data-aos="fade-left").mb-5 RPC moderno: gRPC


    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
      .col-lg
        p En entornos modernos, se prefiere el uso de gRPC, una evolución del modelo RPC basada en HTTP/2 y Protocol Buffers (Muñoz Escoí, 2013). gRPC es altamente eficiente, multiplataforma, y permite definir servicios usando archivos .proto.
        p.mb-0 Ejemplo de definición de servicio en gRPC:
    
    .titulo-figura.mb-4
      h5 Figura 3.
      span Ejemplo RPC moderno 
    .row.justify-content-center.align-items-center.mb-5.bg-color-9.p-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
        p Este archivo luego se compila para generar stubs en múltiples lenguajes (Python, Java, Go, etc.), facilitando la interoperabilidad.

    h2(data-aos="fade-left").mb-5 Consideraciones en el uso de RPC en sistemas distribuidos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5 Al integrar RPC en una arquitectura distribuida, es esencial considerar:
        .bg-color-10.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Tolerancia a fallos</b>: implementar reintentos, timeouts y detección de fallos del servidor.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Seguridad</b>: cifrado de datos (TLS), autenticación y autorización.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Versionamiento de interfaces</b>: evitar que cambios rompan la compatibilidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Desacoplamiento</b>: evitar dependencia fuerte entre cliente y servidor.
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Por estas razones, en arquitecturas modernas se utiliza gRPC junto a herramientas como API Gateway, Kubernetes o sistemas de descubrimiento de servicios.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Servicios web y arquitectura REST
    
    p.mb-5 La arquitectura REST ha revolucionado la forma en que las aplicaciones distribuidas se comunican a través de la web, ofreciendo una alternativa ligera, escalable y eficiente frente a modelos más complejos como SOAP.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Servicios web y arquitectura REST
            p.mb-4(data-aos="fade-right") En el PDF <b>Servicios web y arquitectura REST</b>, se analizan los fundamentos de esta arquitectura, sus principios esenciales, ventajas y limitaciones, así como ejemplos prácticos para el diseño de interfaces de programación de aplicaciones (APIs). Este contenido permite comprender cómo estructurar servicios web modernos que respondan a las necesidades de interoperabilidad y rendimiento en entornos distribuidos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Servicios web y arquitectura REST.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Comparación entre RPC y REST
    
    p.mb-5 La comunicación entre componentes en sistemas distribuidos es clave para garantizar su funcionalidad y eficiencia.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Comparación entre RPC y REST
            p.mb-4(data-aos="fade-right") En el PDF <b>Comparación entre RPC y REST</b>, se analizan dos enfoques ampliamente utilizados para este propósito: Remote Procedure Call (RPC) y Representational State Transfer (REST). A través de una revisión detallada de sus principios, características, ventajas, desventajas y contextos de aplicación, este documento ofrece herramientas conceptuales y prácticas para comprender cómo y cuándo utilizar cada uno. Esta comparación resulta fundamental para diseñar arquitecturas distribuidas robustas, eficientes y adaptadas a las necesidades de interoperabilidad actuales
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparación entre RPC y REST.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Seguridad y buenas prácticas en la comunicación
    
    p.mb-5 La protección de la información es un pilar fundamental en el diseño de sistemas distribuidos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Seguridad y buenas prácticas en la comunicación
            p.mb-4(data-aos="fade-right") En el PDF <b>Seguridad y buenas prácticas en la comunicación</b>, se abordan los principios clave, los mecanismos técnicos y las recomendaciones prácticas para garantizar la confidencialidad, integridad y disponibilidad de los datos que circulan entre los componentes de un sistema. A través de ejemplos concretos y amenazas comunes, se exploran estrategias como el cifrado, la autenticación, el uso de protocolos seguros y la gestión de tokens de acceso, proporcionando una base sólida para implementar comunicaciones resilientes frente a riesgos cada vez más sofisticados.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Seguridad y buenas prácticas en la comunicación.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/62455 " target="_blank" rel="noopener noreferrer") Molina Robles, F. J. & Polo Ortega, E. (2015). Servicios en red: ( ed.). RA-MA Editorial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://aws.amazon.com/es/compare/the-difference-between-rpc-and-rest/ " target="_blank" rel="noopener noreferrer") Amazon Web Services. (s. f.). RPC frente a REST: diferencia entre arquitecturas de API. AWS.



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=1Y9xcu7uLac " target="_blank" rel="noopener noreferrer") Cárdenas, L. (2022, 12 de agosto). gRPC ¿Qué es?.  [Vídeo]. YouTube.



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
