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
            figure(data-aos='zoom-out')
              img(src='@/assets/curso/tema4/img1.png', alt='imagen de ambiente Mercado según la mercadotecnia', style="width:338px").mx-auto
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


    .row.justify-content-center(data-aos='zoom-out')
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

    p(style='margin-bottom:70px') Teniendo en cuenta lo anterior, podemos determinar que el cliente en salud es la persona que adquiere un servicio que necesita o desea para sí mismo o para otra persona. Es necesario recalcar que nuestro usuario es el motivo principal por el que se crean las instituciones de salud.
    
    .row.mb-5(style='margin-inline:-3rem;background: linear-gradient(to bottom right, #c5f3f9, #e8fcff);')
      .col-lg-12
        .cardContainer.py-5.mb-5
          .cardImage
            figure
              img(src='@/assets/curso/tema4/Tipos-cliente.jpg', alt='imagen de ambiente', style='width:860px;').mx-auto

          .custom-crd.br-left(data-aos='flip-left', data-aos-easing='ease-out-cubic', data-aos-duration='1000')
              h4.mb-4 Tipos de cliente
              p.mb-4 En el diario vivir de nuestras instituciones, manejamos diversidad o tipos de clientes que, si diferenciamos sus rasgos o características, será más fácil saber cómo los tratamos. 
    
    p.mb-5 Podemos clasificar los clientes de la siguiente manera:


    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span(style='font-weight: bold') a
        b Según su nivel de fidelización:
  

    .row.justify-content-center(style='margin-bottom:70px')
      .col-lg-3.vertical-cards--custom
        figure.mb-4(data-aos='zoom-in')
          img(src='@/assets/curso/tema4/icon1.svg', alt='imagen de ambiente', style='width:190px;').mx-auto
        p.text-center.mb-4 #[strong Cliente ocasional: ] sus adquisiciones no tienen una frecuencia establecida.
      .col-lg-3.vertical-cards--custom
        figure.mb-4(data-aos='zoom-in')
          img(src='@/assets/curso/tema4/icon2.svg', alt='imagen de ambiente', style='width:190px;').mx-auto
        p.text-center.mb-4 #[strong Cliente de compra regular:] la mayor parte de las compras las realiza en el establecimiento, pero también hay momentos donde adquiere en otra parte.
      .col-lg-3.vertical-cards--custom
        figure.mb-4(data-aos='zoom-in')
          img(src='@/assets/curso/tema4/icon3.svg', alt='imagen de ambiente', style='width:190px;').mx-auto
        p.text-center.mb-4 #[strong Cliente de compra frecuente: ] normalmente adquiere los productos del establecimiento
      .col-lg-3
        figure.mb-4(data-aos='zoom-in')
          img(src='@/assets/curso/tema4/icon4.svg', alt='imagen de ambiente', style='width:190px;').mx-auto
        p.text-center.mb-4 #[strong Clientes-embajadores: ] son los clientes frecuentes que, además, hacen propaganda con sus conocidos, sobre la calidad de nuestros productos.

    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span(style='font-weight: bold') b
        b Según su comportamiento:


    //- LineaTiempoA debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //LineaTiempoA.color-secundario.mb-5(:datos="datosLineaTiempoA")
    LineaTiempoC.color-secundario(:datos="datosLineaTiempoC" style='margin-bottom:70px')

    ol.lista-ol--cuadro.mb-5.mt-5
      li 
        .lista-ol--cuadro__vineta
          span(style='font-weight: bold') b
        b Según satisfacción :

    .tarjeta.tarjeta--slyder.p-4(style='margin-bottom:60px')
      SlyderA    
        div
          figure
            img(src='@/assets/curso/tema4/slyder1.svg', alt='imagen según su satisfacción: Clientes complacidos', style='width: 830px').mx-auto
        div
          figure
            img(src='@/assets/curso/tema4/slyder2.svg', alt='imagen según su satisfacción: Clientes satisfechos', style='width: 830px').mx-auto
        div
          figure
            img(src='@/assets/curso/tema4/slyder3.svg', alt='imagen según su satisfacción: Clientes indiferentes', style='width: 830px').mx-auto
        div
          figure
            img(src='@/assets/curso/tema4/slyder4.svg', alt='imagen según su satisfacción: Clientes insatisfechos', style='width: 830px').mx-auto
        div
          figure
            img(src='@/assets/curso/tema4/slyder5.svg', alt='imagen según su satisfacción: Clientes rehenes', style='width: 830px').mx-auto

    h3.mb-4 La satisfacción del cliente
    p.mb-4 La satisfacción del cliente es de vital importancia para una organización de salud. De su experiencia, depende que los servicios de la institución sean recomendados a otro usuario. Hay que mencionar además, que el nivel de satisfacción puede ser una de las claves para el aumento de rentabilidad de la organización.
    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/NwkjS1RelyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    p.mb-4 En la actualidad, los usuarios cuentan con diversas entidades (EPS), permitiéndoles escoger cuál de ellas es la mejor para su bienestar. Ahora bien, si obtienen una experiencia de atención satisfactoria, permitirán que aumente la cantidad de usuarios y mejorar la calidad de atención en la EPS.
    p.mb-5 Según Larraín (2012), para lograr la satisfacción del cliente, se deben tener en cuenta las siguientes recomendaciones: 

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos='fade-up')
        .row.p-4(style="background-color: #F5F8FA")
          .col-lg-12.p-4(style='border: 2px solid #825ef5')
            ul.lista-ul
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Desarrollar, en primera instancia, productos o servicios acordes con sus necesidades.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Establecer una comunicación directa con ellos.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Desarrollar encuestas para recolectar opiniones acerca de los usos de esos productos y que sirvan para conocer el grado de satisfacción que tienen.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Utilizar esa información para mejorar los productos y servicios.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Ofrecer acciones para que los propios clientes puedan testear productos antes de sacarlos al mercado, y tener en cuenta esas opiniones para mejorar los productos desarrollados.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Mejorar la experiencia de usuario continuamente, a la hora de facilitar sus compras online, del contacto con atención al cliente, de los envíos, de la respuesta inmediata a problemas que puedan surgir.
      .col-lg-6.align-self-end
        figure.mt-4
          img(src='@/assets/curso/tema4/img14.svg', alt='imagen de ambiente', style='width: 530px').mx-auto
    
    
      
    
    .row.justify-content-center.fondo-tarjeta--tema1V2.p-5
      .col-lg-6.align-self-start
        figure.mb-5
          img(src='@/assets/curso/tema4/img15.svg', alt='imagen de ambiente', style='width: 430px').mx-auto
      .col-lg-6
        .row.p-4(style="background-color: #F5F8FA")
          .col-lg-12.p-4(style='border: 2px solid #825ef5')
            ul.lista-ul(data-aos='fade-up')
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 El valor percibido por los productos no lo determina nunca la empresa, sino los propios consumidores.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Mantener siempre un trato cordial por parte de los empleados hacia los clientes.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 La palabra discusión no debe nunca ponerse en práctica con los consumidores de un negocio; al contrario, deben plantear opciones cuando hay un problema de manifiesto.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 No prometer cosas que no se puedan cumplir y que, a posteriori, resultan un fiasco para el público.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Evitar las esperas lo máximo posible. Si se trata de una tienda online, facilitar los pasos del carrito para una compra accesible. Si es un comercio físico, intentar eliminar las aglomeraciones y colas que cansan a los usuarios.
              li.mb-4
                i.fas.fa-chevron-right
                p.mb-0 Conceder el beneficio de la duda a los clientes. Puede ser que en ocasiones se equivoquen, pero antes de juzgarlos, siempre es mejor poner de manifiesto esta actitud para no crear controversias.

    










</template>

<script>
import LineaTiempoC from '../components/LineaTiempoC'
export default {
  name: 'Tema4',
  components: {
    LineaTiempoC,
  },
  data: () => ({
    // variables de vue
    datosLineaTiempoC: [
      {
        icono: require('@/assets/curso/tema4/icon5.svg'),
        texto:
          ' <b> Cliente amable: </b>su actitud es amigable, asiente con un sí a todo lo que se le dice, pero no muestra claridad en las cosas, por lo que la mejor estrategia es enseñarle pocos productos.',
      },
      {
        //titulo: 'Periodo Mesolítico',
        icono: require('@/assets/curso/tema4/icon6.svg'),
        texto:
          '<b>Cliente entusiasta:</b> es muy conversador y no siempre sus temas tienen que ver con la compra del producto, por lo que el vendedor es quien debe enfocar la conversación en el producto, pero con sutileza. ',
      },
      {
        //titulo: 'Período Paleolítico',
        icono: require('@/assets/curso/tema4/icon7.svg'),
        texto:
          '<b>Cliente reflexivo:</b> le gusta tener las cosas claras y la información completa, antes de realizar cualquier compra, porque es muy organizado. Requiere ser atendido con paciencia, tranquilidad y datos precisos del producto.',
      },
      {
        //titulo: 'Periodo Mesolítico',
        icono: require('@/assets/curso/tema4/icon8.svg'),
        texto:
          '<b>Cliente indeciso:</b> no tiene muy claro si realizar la compra o no, por lo que pregunta mucho. Ante esto, se debe tener paciencia y explicarle todo lo que requiera sin presionarlo.',
      },
      {
        //titulo: 'Periodo Neolítico',
        icono: require('@/assets/curso/tema4/icon9.svg'),
        texto:
          '<b>Cliente tímido:</b> no se acerca mucho y no sostiene miradas con el vendedor. Requiere sentirse en confianza, por lo que no se debe mirar muy fijamente a los ojos, o hacerle preguntas personales.',
      },
      {
        //titulo: 'Período Paleolítico',
        icono: require('@/assets/curso/tema4/icon10.svg'),
        texto:
          '<b>Cliente silencioso:</b> es de pocas palabras, pero muy buen escuchante de todo lo que se le dice. No manifiesta de entrada lo que necesita. Se debe ser amable, darle opciones y mostrar interés.',
      },
      {
        //titulo: 'Periodo Neolítico',
        icono: require('@/assets/curso/tema4/icon11.svg'),
        texto:
          '<b>Cliente discutidor:</b> llega en actitud desafiante y soberbia. Ante este tipo de cliente se debe conservar la calma y evitar a toda costa caer en una discusión con él.',
      },
      {
        //titulo: 'Periodo Mesolítico',
        icono: require('@/assets/curso/tema4/icon12.svg'),
        texto:
          '<b>Cliente orgulloso:</b> es muy bueno con la labia y cree sabérselas todas, por lo que no permite que lo asesoren. Si permite un consejo, se le brinda con certeza y claridad.',
      },
      {
        //titulo: 'Periodo Neolítico',
        icono: require('@/assets/curso/tema4/icon13.svg'),
        texto:
          '<b>Cliente escéptico:</b> es desconfiado y prevenido, por lo que pregunta las ventajas y desventajas del producto, pues teme ser engañado. ',
      },
      {
        //titulo: 'Periodo Neolítico',
        icono: require('@/assets/curso/tema4/icon14.svg'),
        texto:
          '<b>Cliente ocupado:</b> desde el inicio, su saludo va acompañado de un “cuento con poco tiempo”, suele ser impaciente y querer que lo atiendan de inmediato.',
      },
    ],
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
