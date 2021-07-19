<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Plan Nacional de Desarrollo
    
    .row.fondo-tarjeta--tema3.mb-5
      .row(style='margin-top:80px')
        .col-lg-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img1.png', alt='iamgen de ambiente', style="width:377px").mx-auto
        .col-lg-8
          .row
            .col-lg-9
              .cajon.color-secundario.p-4.mb-4(style='')
                p Un aporte sustantivo para garantizar la equidad y sostenibilidad financiera del sistema de salud es el artículo 138 del Proyecto de Ley del Plan Nacional de Desarrollo 2018- 2022 “Solidaridad del Sistema de Salud”.
          p La Ley del PND amplía la afiliación al régimen subsidiado, al incluir a la población no pobre y no vulnerable, que no cuenta con capacidad de pago para asumir una contribución plena. En primer lugar, el artículo ratifica el subsidio pleno de aseguramiento en salud para la población que, según el SISBEN, sea clasificada como pobre y vulnerable. En segundo lugar, y en aras de avanzar hacia la universalidad del aseguramiento en condiciones de equidad y sostenibilidad, el artículo da lugar al subsidio parcial a la población no pobre y no vulnerable, de acuerdo con su capacidad de pago, conforme a la clasificación del SISBEN. El subsidio parcial es una alternativa para que las personas que no son pobres y vulnerables pero que tampoco alcanzan a cotizar totalmente al sistema de salud, mantengan su afiliación. Adicionalmente, este artículo permite afiliar a nuevas personas excluidas del sistema. Aquellas personas que no están afiliadas porque, por un lado, no cumplen con las condiciones para estar en el régimen contributivo y, por otro lado, reciben algunos ingresos que les impide estar en el régimen subsidiado (PND, s.f.).

    p.mb-5 Bajo el liderazgo del Ministerio de Salud y Protección Social y el apoyo técnico del DNP en materia del uso y aplicación del SISBEN, el Gobierno está trabajando en el diseño operativo de esta contribución, la cual contribuirá a la universalización del aseguramiento en salud en condiciones de equidad, eficiencia y solidaridad.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-secundario.p-4.mb-5(style='background: linear-gradient(0deg,#81D4FA,#7E5EE3)')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1.text-white Departamento Nacional de Planeación
                  p.text-white Visite el enlace para conocer lo que dice el Departamento Nacional de Planeación, sobre cómo estamos, objetivos, qué vamos a hacer (estrategias) y metas.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.dnp.gov.co/DNPN/Plan-Nacional-de-Desarrollo/Paginas/Pilares-del-PND/Equidad/Salud-para-todos-con-calidad-y-eficiencia.aspx" target="_blank")
                    span.px-3 Ver
                    i.fas.fa-link




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
