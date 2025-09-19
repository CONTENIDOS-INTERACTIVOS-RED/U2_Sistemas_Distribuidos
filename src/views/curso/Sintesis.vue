<template lang="pug">
  .curso-main-container.creditos-vista
    BannerInterno(subTitulo="SÍNTESIS")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p(data-aos="fade-up").mb-5 La unidad 2: Comunicación y sincronización, se centra en los fundamentos que permiten la interacción confiable y coordinada entre múltiples procesos en un sistema distribuido. Esta unidad aborda los protocolos de comunicación como RPC y REST, que facilitan la interoperabilidad entre componentes ubicados en diferentes nodos, así como los mecanismos de sincronización necesarios para evitar conflictos y garantizar la coherencia en la ejecución de procesos concurrentes.

      p Además, se estudian conceptos clave como la exclusión mutua, la coordinación distribuida, los relojes lógicos y físicos, y los algoritmos de elección, ofreciendo al estudiante una visión integral sobre cómo ordenar eventos y mantener la consistencia en entornos asincrónicos y sin control centralizado.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis.svg', alt='', data-aos="zoom-in")
</template>
