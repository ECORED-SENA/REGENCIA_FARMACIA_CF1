<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.mb-4
      .col-lg-6
        p.mb-4 El Sistema General de Seguridad Social en Colombia, fue creado de forma general y está regido por el Gobierno colombiano y por intermediarios como el Ministerio de Salud y Protección Social; tema de carácter universal, fundado con el propósito de garantizar el acceso a la seguridad social de todos los colombianos.
        p.mb-4 En este orden de ideas, el artículo 48 de la Constitución Política de Colombia se refiere a la seguridad social como un servicio público de carácter obligatorio que se prestará bajo el control del Estado, basado en los principios de universalidad, eficiencia y solidaridad, y es enfático al afirmar que no se podrán destinar ni utilizar recursos de las instituciones de la seguridad social, para otros fines.
        .cajon.color-secundario.p-4(style='margin-bottom:30px;')
          p En este componente formativo, se abordarán diferentes temas relacionados con el Sistema de Seguridad Social en Colombia, con los principios y obligaciones del Estado, los modelos de atención en salud, los clientes, entre otros; temas que permitirán identificar y entender el concepto exacto en pro de un mejoramiento continuo, tanto individual como colectivo.
        
        p.text-center #[strong ¡Muchos éxitos en este proceso de aprendizaje!]
      .col-lg-6.align-self-center
        figure.mb-5
          img(src="@/assets/curso/intro.svg", alt="Imagen que acompaña", style='width:664px;').mx-auto
      



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
