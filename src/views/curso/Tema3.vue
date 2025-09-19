<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Relojes lógicos y físicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.bg-color-6.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-4.order-lg-2
            p.mb-0 En los sistemas distribuidos, los relojes físicos se refieren a los temporizadores reales de los dispositivos, generalmente sincronizados mediante protocolos como NTP, pero susceptibles a errores de precisión y desfases entre nodos. Por su parte, los relojes lógicos son mecanismos abstractos diseñados para mantener el orden causal de los eventos sin depender del tiempo real. Estos últimos, como los relojes de Lamport o vectoriales, permiten establecer relaciones de precedencia entre acciones distribuidas, lo cual es fundamental para la coordinación y consistencia en sistemas donde el tiempo absoluto no puede ser garantizado (Muñoz Escoí, 2013).
          .col-lg-3(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema3/1.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Problema del tiempo en sistemas distribuidos
    
    p.mb-5 La gestión del tiempo es un componente crítico en la arquitectura de sistemas distribuidos, ya que permite coordinar procesos, registrar eventos y mantener la coherencia entre nodos geográficamente dispersos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.text-white
            h2.mb-4(data-aos="flip-up") Problema del tiempo en sistemas distribuidos
            p.mb-4(data-aos="fade-right") En el PDF <b>Problema del tiempo en sistemas distribuidos</b>, se analiza en profundidad cómo la ausencia de un reloj global unificado y la variabilidad de la red dificultan establecer un orden cronológico confiable entre eventos que ocurren en distintos puntos del sistema. Esta problemática se explora desde sus causas técnicas hasta sus implicaciones prácticas, incluyendo soluciones como los protocolos de sincronización de relojes, ofreciendo así una base sólida para comprender uno de los desafíos más fundamentales en el diseño de entornos distribuidos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Problema del tiempo en sistemas distribuidos.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Relojes físicos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Un reloj físico se refiere a un mecanismo de hardware o software que proporciona una medida continua del tiempo real. Estos relojes, presentes en cada nodo de un sistema distribuido, permiten asignar marcas de tiempo a los eventos, calcular duraciones, programar tareas y ordenar secuencias temporales (Muñoz Escoí, 2013).
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En los sistemas centralizados, los relojes físicos funcionan como referencia única para todos los procesos. No obstante, en los sistemas distribuidos, cada nodo mantiene su propio reloj físico independiente, lo que introduce una serie de desafíos relacionados con la sincronización, la coherencia temporal y el orden de eventos.
    
    h2(data-aos="fade-left") Características de los relojes físicos
    p.mb-5 Cada reloj físico en un nodo distribuido posee las siguientes propiedades:

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/5.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="9%" y="35.5%" numero="+")
                h5 1. Autonomía
                p Funciona de manera local, sin conexión constante a un reloj central.
    
              .bg-color-white.box-shadow.p-3(x="27%" y="21%" numero="+")
                h5 2. Deriva
                p Su frecuencia puede desviarse con respecto a un patrón ideal, debido a temperatura, envejecimiento del cristal o interferencias.
    
              .bg-color-white.box-shadow.p-3(x="59%" y="17%" numero="+")
                h5 3. Precisión
                p Representa el grado, de acuerdo con la hora real.
    
              .bg-color-white.box-shadow.p-3(x="75%" y="35%" numero="+")
                h5 4. Precisión
                p Indica la cercanía al tiempo estándar universal (UTC).
    
              .bg-color-white.box-shadow.p-3(x="90.5%" y="42%" numero="+")
                h5 5. Resolución
                p Representa el menor intervalo que puede medir (por ejemplo, milisegundos, microsegundos).
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En sistemas distribuidos, estas propiedades pueden variar significativamente entre nodos, afectando la posibilidad de confiar plenamente en los relojes físicos para tareas coordinadas.
    
    h2(data-aos="fade-left").mb-5 El problema de los relojes no sincronizados

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En un sistema distribuido típico, los relojes físicos de los distintos nodos no están perfectamente sincronizados, por lo que dos eventos que suceden en diferentes máquinas pueden presentar marcas de tiempo erróneas o contradictorias (MRCET, 2019).
    
        .bg-color-12.p-5(data-aos="fade-left")
          h5 Ejemplo ilustrativo:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Nodo A registra el evento X a las 10:00:01.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Nodo B registra el evento Y a las 10:00:00.500.
          p Según las marcas de tiempo, Y ocurrió antes que X. Sin embargo, si el reloj de B está desfasado 1 segundo con respecto a A, el orden real de los eventos podría ser el opuesto.
          p.mb-0 Este tipo de situaciones puede producir inconsistencias, errores de análisis, registros falsamente ordenados o decisiones incorrectas en sistemas críticos.
    
    h2(data-aos="fade-left") Mecanismos de sincronización de relojes físicos
    p.mb-5 Para mitigar los efectos de los relojes desincronizados, se utilizan protocolos de sincronización de tiempo, que permiten a los nodos ajustar periódicamente sus relojes con respecto a una fuente confiable.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="NTP (<em>Network Time Protocol</em>)")
            p Es el protocolo más ampliamente utilizado en Internet, para sincronizar los relojes de computadoras con servidores de referencia conectados a relojes atómicos o GPS (MRCET, 2019).
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Utiliza un algoritmo jerárquico en capas (estratos).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Ajusta la hora local mediante interpolación, compensando el retardo de red.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Precisión típica de 1 a 50 ms.
            p <b>Ejemplo</b>. Un sistema distribuido con 10 servidores consulta periódicamente un servidor NTP central (estrato 1) para alinear sus relojes. Aunque no se garantiza precisión perfecta, el error se mantiene dentro de un margen aceptable para aplicaciones comunes.
          .div(titulo="PTP (<em>Precision Time Protocol</em>)")
            p Protocolo diseñado para entornos que requieren alta precisión temporal, como automatización industrial, redes eléctricas y mercados financieros.
            h5 Características
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Puede lograr sincronización en el orden de microsegundos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Requiere hardware especializado (soporte de timestamping en red).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Utiliza mensajes SYNC y FOLLOW_UP para calibrar diferencias.
            p <b>Ejemplo de aplicación</b>. En un sistema de transacciones bursátiles, donde cada operación debe registrarse con exactitud absoluta, se utiliza PTP para garantizar que todos los servidores tengan un desfase inferior a 100 microsegundos respecto a un reloj maestro GPS.
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        h2(data-aos="fade-left") Limitaciones de los relojes físicos
        p.mb-5 A pesar de los avances tecnológicos, los relojes físicos en sistemas distribuidos presentan limitaciones inherentes:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/9.svg" alt="" style="width: 90px")
              h5.text-center Nunca se logra sincronización perfecta
              p.mb-0.text-center Siempre existe una desviación, aunque mínima.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/10.svg" alt="" style="width: 90px")
              h5.text-center Dependencia del estado de la red
              p.mb-0.text-center Congestión, pérdida de paquetes y latencia afectan la sincronización.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/11.svg" alt="" style="width: 90px")
              h5.text-center Puntos únicos de fallo
              p.mb-0.text-center Si un servidor NTP falla, múltiples nodos podrían desincronizarse simultáneamente.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 90px")
              h5.text-center No detectan causalidad lógica
              p.mb-0.text-center Un reloj físico puede marcar que el evento B ocurre antes que A, aunque B dependiera de A.

        .bg-full-width.bg-color-4.mb-5
          .px-4.px-md-5.py-4.text-white
            p.mb-0 Estas limitaciones motivan el uso de relojes lógicos como complemento para garantizar un orden de eventos coherente desde el punto de vista causal (MRCET, 2019).
    
    h2(data-aos="fade-left").mb-5 Uso combinado de relojes físicos y lógicos

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.px-4.py-5(data-aos="fade-left")
          p.mb-0 En la práctica, muchos sistemas distribuidos combinan el uso de relojes físicos sincronizados (NTP/PTP) con estructuras lógicas (Lamport, relojes vectoriales). Esto permite aprovechar lo mejor de ambos enfoques:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Los relojes físicos se usan para mediciones reales y timestamps comprensibles.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Los relojes lógicos aseguren coherencia causal y orden interno entre procesos.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Relojes lógicos de Lamport
    
    p.mb-5 La sincronización y el orden de eventos son aspectos fundamentales en el diseño de sistemas distribuidos, donde múltiples procesos actúan de manera concurrente sin compartir un reloj global.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Relojes lógicos de Lamport
            p.mb-4(data-aos="fade-right") En el PDF Relojes lógicos de Lamport, se presenta una solución clásica y ampliamente utilizada para establecer un orden lógico entre eventos en estos entornos. A través de conceptos como la relación “ocurrió antes qué” y el funcionamiento del algoritmo de relojes lógicos, el documento permite comprender cómo se puede preservar la causalidad sin depender del tiempo físico. El texto ofrece además ejemplos prácticos, propiedades clave, aplicaciones reales y limitaciones de este enfoque, brindando una base sólida para comprender los desafíos y soluciones en la coordinación de procesos distribuidos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relojes lógicos de Lamport.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='')

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Relojes vectoriales     
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En sistemas distribuidos, donde múltiples procesos se ejecutan de forma autónoma en diferentes nodos y se comunican únicamente mediante el intercambio de mensajes, comprender el orden de los eventos es esencial para mantener la consistencia, depurar errores, detectar condiciones de carrera y coordinar acciones. Sin embargo, en ausencia de un reloj físico global confiable, establecer el orden real entre los eventos se convierte en un reto técnico (Muñoz Escoí, 2013).
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Si bien los relojes lógicos de Lamport permiten identificar relaciones de causalidad, estos no pueden distinguir entre eventos concurrentes e independientes. Para superar esta limitación, se introdujo una extensión más precisa: los relojes vectoriales, capaces de capturar tanto la causalidad completa como la concurrencia entre eventos.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema3/16.svg" data-aos="zoom-in" style="width: 90px")
    
    h2(data-aos="fade-left").mb-5 ¿Qué es un reloj vectorial?

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/17.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Un reloj vectorial es una estructura lógica que permite a cada proceso en un sistema distribuido, llevar un registro no solo de su propio progreso, sino también del conocimiento que posee sobre el avance de los demás procesos. A diferencia de los relojes lógicos escalares, los relojes vectoriales representan el tiempo como un vector de enteros, donde cada posición corresponde a un proceso del sistema.

    h2(data-aos="fade-left").mb-5 Definición formal:

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.px-4.py-5(data-aos="fade-left")
          p En un sistema con n procesos, cada proceso Pᵢ mantiene un vector Vᵢ[1..n], donde:
          ul.lista-ul--color.ms-3.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Vᵢ[i] representa el número de eventos ejecutados localmente por Pᵢ.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Vᵢ[j] representa el número de eventos del proceso Pⱼ que Pᵢ conoce que han ocurrido.
    
    h2(data-aos="fade-left") Reglas de actualización de un reloj vectorial
    p.mb-5 Cada proceso actualiza su vector, de acuerdo con los siguientes principios:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/19.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Evento local (cálculo interno, lectura o escritura local).")
            p Antes de ejecutar el evento, el proceso incrementa su propia posición en el vector:  Vᵢ[i] ← Vᵢ[i] + 1.
    
          .div(titulo="Envío de mensaje")
            p Antes de enviar un mensaje, el proceso incrementa su vector como si fuera un evento local y adjunta una copia del vector al mensaje.
    
          .div(titulo="Recepción de mensaje")
            p Al recibir un mensaje con vector Vm, el proceso actualiza su vector de la siguiente manera: para cada posición k, se realiza:  Vᵢ[k] ← max(Vᵢ[k], Vm[k])
            p Luego, incrementa su propio contador:  Vᵢ[i] ← Vᵢ[i] + 1.
    
    h2(data-aos="fade-left").mb-5 Comparación de relojes vectoriales

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.px-4.py-5(data-aos="fade-left")
          p.mb-0 Para determinar la relación entre dos eventos a y b (con vectores V(a) y V(b)):
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se dice que a → b (a ocurre antes que b) si V(a)[k] ≤ V(b)[k] para todo k y al menos una desigualdad es estricta.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Si V(a) y V(b) no son comparables (es decir, V(a)[i] > V(b)[i] en algún índice i y V(a)[j] < V(b)[j] en otro índice j), entonces los eventos son concurrentes.
    
    h2(data-aos="fade-left") Ejemplo ilustrativo con tres procesos
    p.mb-5 Suponiendo tres procesos: P1, P2 y P3. Todos comienzan con su vector en [0, 0, 0].

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            h5 Evento local en P1.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 P1 ejecuta un evento local: V1 = [1, 0, 0].
          .div(titulo="Paso 2")
            h5 P1 envía mensaje a P2.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Antes del envío: V1 = [2, 0, 0].
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 El mensaje contiene [2, 0, 0].
          .div(titulo="Paso 3")
            h5 P2 recibe mensaje de P1.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 P2 actualiza su vector tomando el máximo: V2 = [2, 1, 0] (su contador se incrementa en 1 después de la fusión).
          .div(titulo="Paso 4")
            h5 P2 ejecuta un evento local.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 V2 = [2, 2, 0].
          .div(titulo="Paso 5")
            h5 P3 ejecuta evento local.
            p V3 = [0, 0, 1].
            p Ahora, si se compara:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 V1 = [2, 0, 0].
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 V3 = [0, 0, 1].
            p Estos vectores no son comparables ⇒ los eventos son concurrentes.
    
    h2(data-aos="fade-left") Aplicaciones de relojes vectoriales
    p.mb-5 Los relojes vectoriales tienen aplicaciones fundamentales en la implementación de sistemas distribuidos confiables y eficientes:
  
    .row.justify-content-center.align-items-center.bg-color-3.mb-5.bg-full-width
      .col-lg-12
        .row.justify-content-center.align-items-center.px-5.py-5.py-lg-0
          .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Detección de condiciones de carrera en memoria distribuida.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Reconstrucción de líneas de tiempo causales en sistemas de monitoreo y depuración.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Control de versiones en sistemas de archivos distribuidos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Algoritmos de replicación con orden causal en bases de datos y colas de mensajes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Algoritmos de captura de <em>snapshots</em> consistentes, donde se requiere conocer qué procesos se han influenciado entre sí.
          .col-lg-4(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/22.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
          
    h2(data-aos="fade-left").mb-5 Ventajas y desventajas

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/23.png")
            .col-lg-7
              h5 Ventajas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Detectan la concurrencia real entre eventos.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Permiten reconstruir el grafo de causalidad completo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Son deterministas y no dependen del tiempo físico.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-7
              h5 Desventajas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Su complejidad en espacio crece con el número de procesos (O(n) por vector).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mayor costo en mensajes al incluir vectores grandes.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Difíciles de escalar a sistemas con miles de nodos sin optimizaciones.
          
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Comparación con relojes de Lamport
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-4 Característica
            th.text-center.text-white.bg-color-4 Relojes de Lamport
            th.text-center.text-white.bg-color-4 Relojes Vectoriales
        tbody.bg-color-8
          tr
            td Tipo de estructura.
            td Escalar (un número).
            td Vector (una lista).
          tr
            td Detectan causalidad completa.
            td No.
            td Sí.
          tr
            td Detectan eventos concurrentes.
            td No.
            td Sí.
          tr
            td Complejidad espacial.
            td Baja.
            td Moderada (O(n)).
          tr
            td Orden total entre eventos.
            td No garantizado.
            td No, pero más informativo.
          tr
            td Ideal para.
            td Sistemas sencillos.
            td Análisis detallado de eventos.

    #t_3_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.5] Comparación y aplicaciones prácticas
    
    p.mb-5 La comprensión y comparación de mecanismos de ordenamiento lógico es crucial en el análisis de eventos dentro de sistemas distribuidos.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Comparación y aplicaciones prácticas
            p.mb-4(data-aos="fade-right") En el PDF Comparación y aplicaciones prácticas, se exploran las diferencias clave entre los relojes de Lamport y los relojes vectoriales, resaltando sus enfoques conceptuales, capacidades técnicas y escenarios de uso más adecuados. A través de una tabla comparativa clara y múltiples casos aplicados, se profundiza en cómo cada tipo de reloj aborda los retos de causalidad, concurrencia y coordinación entre procesos distribuidos, permitiendo a los lectores identificar las ventajas y limitaciones de cada uno según el contexto. Este recurso resulta fundamental para quienes buscan optimizar el rendimiento, la consistencia y la trazabilidad en entornos distribuidos complejos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_10.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Comparación y aplicaciones prácticas.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/25.png', alt='')




    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Distributed%20Systems.%20Principles%20and%20Paradigms.pdf " target="_blank" rel="noopener noreferrer") Tanenbaum, A. S., & van Steen, M. (2018). Distributed Systems: Principles and Paradigms (3ª ed.).
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dipach.github.io/physical-vs-logical-clocks/ " target="_blank" rel="noopener noreferrer") Codotomy. (2025, mayo 7). Physical vs logical clocks in distributed systems. Codotomy. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3GdCkBNrHyI&t=279s" target="_blank" rel="noopener noreferrer") Cloud Native México. (2018, 11 de octubre). Meetup 5: Introducción al algoritmo Raft.  [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué se logra al emplear algoritmos de sincronización en sistemas distribuidos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evitar el uso de relojes lógicos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Coordinar el orden de ejecución de eventos entre nodos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminar la necesidad de exclusión mutua',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reemplazar el envío de mensajes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué ventaja tiene el uso de HTTPS en servicios REST en entornos distribuidos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Acelera la transmisión de datos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Proporciona confidencialidad e integridad en la comunicación',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reduce el tamaño de los mensajes',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evita la necesidad de autenticación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué problema se presenta si no se aplica exclusión mutua correctamente?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Alta disponibilidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reducción de la carga del sistema',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Condiciones de carrera',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Sincronización de relojes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué ocurre si dos eventos tienen relojes vectoriales no comparables?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Uno ocurrió antes que el otro',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Hay un error en la comunicación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Son concurrentes',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Fueron generados por el mismo proceso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué función cumple un coordinador en un sistema distribuido?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Garantiza la conectividad de red',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Centraliza decisiones y controla recursos críticos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Sustituye a todos los procesos inactivos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Reemplaza el reloj físico del sistema',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
