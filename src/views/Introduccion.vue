<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        <iframe width="853" height="480" src="https://www.youtube.com/embed/hVnsxgiLT-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    .row.mb-2
      .col-lg-7.align-self-center     
        .cajon.color-secundario.p-4
          p.mb-0 En este componente formativo, se abordarán diferentes temas relacionados con el Sistema de Seguridad Social en Colombia, con los principios y obligaciones del Estado, los modelos de atención en salud, los clientes, entre otros; temas que permitirán identificar y entender el concepto exacto en pro de un mejoramiento continuo, tanto individual como colectivo.

      .col-lg-5.align-self-center
        figure.mb-2
          img(src="@/assets/curso/intro.svg", alt="Imagen que acompaña", style='width:320px;').mx-auto
      
    p.ps-4 #[strong ¡Muchos éxitos en este proceso de aprendizaje!]


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
