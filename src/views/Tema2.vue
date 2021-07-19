<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Política de Atención Integral en Salud (PAIS)
    
    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-4 Teniendo presente que la salud y la vida de los seres humanos son el eje central del Estado, se hace necesario construir una red de servicios que responda a los derechos universales de la salud, con equidad, calidad y humanismo que se fundamenten en un contrato social para la salud, a nivel nacional, pero con énfasis primordial a nivel municipal, para fortalecer la gestión territorial de la salud.
        p.mb-4 Es así como la búsqueda del acceso universal de la salud en el marco de garantizar el ejercicio del derecho a la salud, se debe caracterizar por crear condiciones para (Werner, Palma, Echavarría y Rosales, s.f. p.5): 
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/img1.svg", alt="imagen de ambiente", style="width:406;").mx-auto

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img2.svg', alt='AvatarTop', style="width:60px")
          .tarjeta.color-secundario(style="background-color: #7e5ee312")
            .p-4.py-5
              p.mb-0 Mejorar e incrementar la disponibilidad de servicios públicos de salud, así como de programas específicos dirigidos a atender a la comunidad, la familia y las personas, de acuerdo con el perfil de salud y prioridades vigentes; con este fin, el Ministerio de Salud deberá contar con una cantidad suficiente de establecimientos. 
      
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img3.svg', alt='AvatarTop', style="width:60px")
          .tarjeta.color-secundario(style="background-color: #7e5ee312")
            .p-4.py-5
              p.mb-0 Crear condiciones de accesibilidad de servicios de salud a todos y todas sin discriminación alguna, con accesibilidad geográfica, económica y cultural, cumpliendo con el mandato constitucional y del código de salud de gratuidad de los servicios, y proporcionando a la población la información necesaria para el cuidado de su salud y la elegibilidad de los servicios que requiera.

      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img4.svg', alt='AvatarTop', style="width:60px")
          .tarjeta.color-secundario(style="background-color: #7e5ee312")
            .p-4.py-5
              p.mb-0  Aceptabilidad de servicios de salud, los cuales deberán ser respetuosos de la ética médica y culturalmente apropiados, a la par que sensibles a los requisitos del género y el ciclo de vida.
      
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img5.svg', alt='AvatarTop', style="width:60px")
          .tarjeta.color-secundario(style="background-color: #7e5ee312")
            .p-4.py-5
              p.mb-0 Calidad. Los establecimientos y servicios de salud deberán ser apropiados desde el punto de vista científico y médico y ser de buena calidad, garantizando un trato digno, procedimientos adecuados y resolución de los problemas de salud.

    .row.justify-content-center
      .col-lg-10
        p.mb-4.text-center Es así como el Gobierno de Colombia, por medio de la resolución 0429 del 2016, anunció la Política de Atención Integral en Salud – PAIS.


    .row.justify-content-center.fondo-tarjeta--tema2.mb-5
      .col-lg-10
        .row
          .col-lg-5.mb-4
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='imagen de ambiente', style="width:382px").mx-auto
          .col-lg-6.align-self-center
            p.mb-4 
              b El objetivo de la PAIS está dirigido hacia la generación de las mejores condiciones de la salud de la población, mediante la regulación de la intervención de los integrantes sectoriales e intersectoriales, responsables de garantizar la atención de la promoción, prevención, diagnóstico, tratamiento, rehabilitación y paliación, en condiciones de accesibilidad, aceptabilidad, oportunidad, continuidad, integralidad y capacidad de resolución.

    p.mb-5 La siguiente imagen nos presenta cuáles son los beneficios de la PAIS.
    h4.text-center.mb-5 Beneficios de la PAIS

    .row.justify-content-center.fondo-tarjeta--temaV2.mb-5
      .col-lg-10
        figure(style='margin-bottom: 100px')
          img(src='@/assets/curso/tema2/img7.svg', alt='Beneficios de la Política de Atención Integral en Salud ', style="").mx-auto
        figure
          img(src='@/assets/curso/tema2/img8.svg', alt='Beneficios de la Política de Atención Integral en Salud Otros Benedicios', style="").mx-auto

    p.mb-4 Para ampliar la información, descargue el PDF de la Resolución 0429 de 2016, por medio de la cual se adopta la Política de Atención Integral de Salud.
    .row.mb-5
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo2_CF1_Resolucion429.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 0429 de 2016


    separador
    #t_2_1.titulo-segundo
      .h2 2.1 Modelo de Atención Integral en Salud (MIAS) 
    

    .row.justify-content-center
      .col-lg-11
        .bloque-texto-a.color-primario.ps-3.mb-5.pe-4.pt-3.pb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure.py-3
                img(src='@/assets/curso/tema1/tema1-3/img3.svg' alt='imagen ambiental', style='width: 144px;').mx-auto
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p La Política Integral de Atención en Salud (PAIS), comprende un componente operativo, que consiste en el Modelo de Atención Integral en Salud (MIAS), el cual se constituye en el marco para la organización y coordinación de actores e instituciones, para garantizar que los ciudadanos accedan a servicios seguros, accesibles y humanizados.

    
    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Modelo de Acción Integral Territorial (MAITE)

    p.mb-4 Posterior a ello, surge la Resolución 2626 del 2019, que tiene por objeto modificar la Política de Atención Integral de Salud (PAIS) y adoptar el Modelo de Acción Integral Territorial (MAITE) para su implementación.

    p.mb-4 El MAITE es el conjunto de acciones y herramientas que, por medio de acuerdos interinstitucionales y comunitarios orienta, de forma articulada, la gestión de los integrantes del sistema de salud en el territorio, para responder a las prioridades de salud de la población y contribuir al mejoramiento de la salud, la satisfacción de las expectativas de los ciudadanos y la sostenibilidad del sistema, bajo el liderazgo del departamento o distrito.

    p.mb-5 En la siguiente imagen podemos estudiar cuáles son sus objetivos:

    

    .row.justify-content-center.fondo-tarjeta--tema2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Objetivos MAITE
        figure.mb-4(style='')
          img(src='@/assets/curso/tema2/img9.svg', alt='Objetivos MAITE', style="").mx-auto

    p.mb-4 Para ampliar la información, descargue el PDF de la Resolución 2626 de 2019, por la cual se modifica la Política de Atención Integral en Salud (PAIS) y se adopta el Modelo de Acción Integral Territorial (MAITE).

    .row.mb-5
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo3_CF1_Resolucion2626.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 2626 de 2019



</template>

<script>
export default {
  name: 'Tema2',
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
