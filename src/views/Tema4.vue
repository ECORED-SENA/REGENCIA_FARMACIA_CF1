<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Mercado y mercadeo en salud 

    .row.justify-content-center.fondo-tarjeta--tema2.mb-5
      .col-lg-11
        .row
          .col-lg-5.mb-4
            figure
              img(src='@/assets/curso/tema4/img1.svg', alt='imagen de ambiente Mercado según la mercadotecnia', style="width:338px").mx-auto
          .col-lg-7.align-self-center
            h4.mb-4 Mercado según la mercadotecnia:
            p.mb-4.px-3 Es el conjunto de consumidores que quieren, pueden y están dispuestos a comprar o vender un producto ofertado. En el ámbito de salud, este se caracteriza porque las personas que ofrecen sus productos o servicios pueden competir, sin ningún problema, por los consumidores de estos; y los consumidores, al mismo tiempo, pueden elegir qué clase de prestaciones o productos van a elegir.

    p.mb-4 En este orden de ideas:


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/img2.svg', alt="Mercado, proveedor y cliente").mx-auto

      .tarjeta.tarjeta--blanca.p-3(x="22%" y="24%")
        .h5.mb-2 Proveedor
        p Tiene la meta de conservarse rentable y obtener ganancias que le permita continuar con el proceso de venta del producto o prestación de los servicios.
        

      .tarjeta.tarjeta--blanca.p-3(x="73%" y="60%")
        .h5.mb-2 Consumidor
        p Busca comprar bienes, productos o servicios con el fin de satisfacer necesidades conforme a sus posibilidades adquisitivas.

      .tarjeta.tarjeta--blanca.p-3(x="48%" y="5%")
        .h5.mb-2 Mercado
        p Es el punto en donde se encuentran el consumidor, y el proveedor. 


    .row.justify-content-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p En la actualidad, el mercadeo es considerado como una estrategia para incrementar las ventas, que combinado con la publicidad, con la excelencia del producto, un buen precio y ofrecer un buen servicio, de seguro proyecta los mejores resultados de la organización.

    p.mb-4 Según Peñaloza, Prieto y Rodríguez (2012 p.21):

    p.mb-4 El mercadeo en salud surge como respuesta a las necesidades de ejecutar programas con alto grado de calidad, sustentados en herramientas de mayor precisión en la ubicación de los pacientes según sus características demográficas, geográficas y epidemiológicas; todo esto para diseñar ofertas que tengan un alto impacto en el manejo de los programas de promoción de la salud, prevención de la enfermedad y bienestar de las poblaciones. 


    separador
    #t_4_1.titulo-segundo
      .h2 4.1 Estrategias de mercadeo en salud
    

    .row.justify-content-center(style='margin-bottom:60px')
      .col-lg-8.align-self-center
        .bloque-texto-d.color-secundario.p-2
          .bloque-texto-d__texto.mb-2.mt-4
            i.fas.fa-quote-left
            span.text-regular La planeación estratégica en mercadeo, es una técnica gerencial que obedece a un proceso dinámico, con el cual se pretende ordenar los objetivos y acciones estratégicas de la organización, para satisfacer los mercados en un ambiente competitivo a lo largo del tiempo
            i.fas.fa-quote-right
            .h4.mb-0.text-end.mt-2 Peñaloza, Prieto y Rodríguez, 2012, p.25

    .row.justify-content-center(style='margin-bottom:30px')
      .col-lg-5
        figure.mb-4
              img(src='@/assets/curso/tema4/img3.svg', alt='imagen de ambiente', style="width:588px").mx-auto
      .col.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 El nacimiento del enfoque social de la mercadotecnia se relaciona con todo el tema de salud. Los primeros proyectos fueron contra el mercadeo de cigarrillo y alcohol y luego se trataron temas de nutrición y planificación familiar.

    p.mb-5 La visión de la mercadotecnia, en cuanto a la actividad sanitaria, no se quedó solo en la promoción de salud y fomentar estilos de vida saludables, sino que también acoge la calidad de los servicios de salud, el uso racional de recursos y el planteamiento y contribución para solucionar los distintos problemas de salud pública que se generan como consecuencia de la inequidad. El alto grado de competitividad, al que conduce la universalización, requiere que el mercadeo se presente como una herramienta que dirija el desarrollo hacia el bienestar, el consumo con ética y al desarrollo sostenible.

    .row.justify-content-center.mb-3
      .col-lg-11
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img4.jpg')})`}")
          .bloque-texto-g__texto.p-4
            i.fas.fa-quote-right.mb-5.mt-4(style="color: #00BCD4 !important ;font-size:35px !important")
            p.mb-4 “Se puede afirmar que la mercadotecnia constituye una nueva perspectiva para la gerencia de la salud, ya que al apropiarse de ella como una herramienta que permite llevar al mercado medicamentos, instrumental médico, y tecnología, ofrecer y reorientar servicios, diseñar y poner en marcha programas de salud, concilia los objetivos y propósitos de la institución sanitaria con los del usuario, consumidor y paciente, para así lograr sus fines” (Peñaloza, Prieto y Rodríguez, 2012, p.25).
            p.text-end.mb-4
              b (Peñaloza, Prieto y Rodríguez, 2012, p.25


    p.mb-5 Las estrategias de mercadeo en salud abarcan la cultura organizacional (historia, hechos, conquistas, creencias, valores, filosofías de trabajo, etc.) y la plataforma estratégica que tenga la organización. Además, influyen en aspectos como:

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-secundario
        .row.justify-content-center(titulo="El ambiente")
          .col-auto.align-self-end
            figure.mb-4
              img(src='@/assets/curso/tema4/img5.svg', alt='imagen de ambiente', style='width:433px').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center.mt-5
            p El mercadeo maneja dos ambientes, el interno y el externo; la mercadotecnia está orientada al externo y, por lo tanto, el ambiente que la rodea determina sus éxitos o sus fracasos. El ambiente de la mercadotecnia es la suma de las fuerzas y entidades que lo cercan y que pueden afectar la planificación de la mercadotecnia de un producto determinado. Este ambiente está conformado por estratos: el organizacional, que compromete a cada uno de los departamentos, oficinas, divisiones y canales de la organización; el del mercado, que es el que compromete a todos los compradores actuales y en potencia, del producto; el del macroambiente, que se refiere a situaciones externas a la empresa, como la economía, la tecnología, la legislación y la cultura, las cuales afectan las transacciones de la firma del mercado; y el Estrato del medio exterior, que  son los fenómenos del medio exterior que pueden afectar, de alguna manera, a la empresa. 
        
        .row.justify-content-center(titulo="La competitividad")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img6.svg', alt='imagen de ambiente', style='width:420px').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p Es una dinámica estratégica que utilizan las empresas con el propósito de mantenerse activos en el mercado, crecer y desarrollarse en los diferentes mercados.

        .row.justify-content-center(titulo="Estrategia")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img7.svg', alt='imagen de ambiente', style='width:258px').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p  Estas muestran el camino por el cual la empresa busca lograr los objetivos planteados y estas pueden ser de corto, mediano y largo plazo.
        
        .row.justify-content-center(titulo="Misión")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img8.svg', alt='imagen de ambiente', style='width:250px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p Es por medio de esta que se plantean los objetivos y metas puntuales con los que se guiará a la organización.
        
        .row.justify-content-center(titulo="Visión")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img9.svg', alt='imagen de ambiente', style='width:285px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p esta muestra hacia dónde se encamina la organización y, en un tiempo determinado, en qué se debe convertir, teniendo presente todos los diferentes escenarios que en el camino, y a futuro, pueden aparecer.
        
        .row.justify-content-center(titulo="Objetivos")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img10.svg', alt='imagen de ambiente', style='width:245px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p La definición de estos son el eje central del marketing, ya que marcan las metas a alcanzar y cómo alcanzarlas; por lo tanto, deben ser factibles y realistas.
        
        .row.justify-content-center(titulo="Metas")
          .col-md-4
            figure.mb-4
              img(src='@/assets/curso/tema4/img11.svg', alt='imagen de ambiente', style='width:314px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p Se refiere a cuantificar los objetivos planteados que se pretenden alcanzar en un tiempo determinado. Estas cumplen tres funciones principales dentro de la empresa: establecer el estado futuro anhelado que la empresa quiere alcanzar, proporcionar una razón principal para la existencia de la empresa, y proporcionar un conjunto de estándares con los que se puede contrastar el rendimiento organizativo.

        
        .row.justify-content-center(titulo="Calidad")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img12.svg', alt='imagen de ambiente', style='width:257px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p La Calidad de la Atención de Salud se entenderá como la provisión de servicios accesibles y equitativos, con un nivel profesional óptimo, que tiene en cuenta los recursos disponibles y logra la adhesión y satisfacción del usuario” (Peñaloza, Prieto y Rodríguez, 2012, p.30).
        
        .row.justify-content-center(titulo="Servicio")
          .col-md-4
            figure
              img(src='@/assets/curso/tema4/img13.svg', alt='imagen de ambiente', style='width:258px;').mx-auto
          
          .col-md-7.mb-4.mb-md-0.align-self-center
            p En esta estrategia se deben tener presentes dos componentes: el primero tiene que ver con la actividad como tal, y el segundo a la forma como se realiza dicha actividad. Ambos componentes están correlacionados de forma recíproca y configuran el valor global identificado con la actividad ofertada.
        

    
    separador
    #t_4_2.titulo-segundo
      .h2 4.2 Cliente
    
    p.mb-4 En el Diccionario de Marketing, de Cultural S.A., encontramos que “cliente” es un término que define a la persona u organización que realiza una compra. Puede estar comprando en su nombre, y disfrutar personalmente del bien adquirido, o comprar para otro, como el caso de los artículos infantiles. Resulta la parte de la población más importante de la compañía.

    p.mb-4 Teniendo en cuenta lo anterior, podemos determinar que el cliente en salud es la persona que adquiere un servicio que necesita o desea para sí mismo o para otra persona. Es necesario recalcar que nuestro usuario es el motivo principal por el que se crean las instituciones de salud.
    
    
    .h3.mb-4 Tipos de cliente
    p.mb-4 En el diario vivir de nuestras instituciones, manejamos diversidad o tipos de clientes que, si diferenciamos sus rasgos o características, será más fácil saber cómo los tratamos. 
    p Podemos clasificar los clientes de la siguiente manera:


</template>

<script>
export default {
  name: 'Tema4',
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
