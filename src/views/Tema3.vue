<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Sistemas de Información Geográfica

    .bg-img5.mt-5.p-5(data-aos="fade-left") 
      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img48.svg', alt='')           
      .row.justify-content-center.align-items-center
        .col-lg-8
          

          p(data-aos="fade-down").mt-5 Gracias a los mapas se pueden comunicar y transmitir diversos volúmenes de información de una forma clara, donde por medio de ellos se puede captar e interpretar el contenido deseado, para así, por medio del análisis llegar a una conclusión sobre cualquier tipo de investigación o necesidad y en cualquier ámbito: personal, profesional, laboral, etc. 

    Separador 
    #t_3_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.1 Definición, aplicación y componentes de un SIG 

    p(data-aos="fade-down") Ahora se puede conocer qué es un Sistema de Información Geográfica (SIG), el cual opera por medio de mapas donde se pueden identificar diferentes variables, tales como:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img49.svg', alt='')
      .col-lg-3.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img50.svg', alt='')
      .col-lg-3.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img51.svg', alt='')
      .col-lg-3.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img52.svg', alt='')     

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="flip-down").p-5.color-grad-green.mb-0 De igual manera cabe resaltar que el #[i software] y #[i hardware] unidos a los mapas, permiten ver una representación gráfica del contexto estudiado.#[br]#[br]
          span Por otro lado, se encuentran diferentes aplicaciones en los SIG, por lo que también están en constante evolución, por lo anterior, la relación entre ellos es vital para que cobren sentido como herramientas que sirvan para diversos casos. A continuación, se presentan las principales aplicaciones:
      .col-lg-3.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img53.svg', alt='') 

    ImagenInfografica.color-primario.mt-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img54.svg', alt='')     

      .tarjeta.color-acento-botones.p-3(x="22.8%" y="22%" numero="")
        .h5.mb-2 Planificación hidrológica
        p Ha servido para planificar y gestionar los recursos hídricos, para luego generar el análisis y la evaluación de estos. 

      .tarjeta.color-acento-botones.p-3(x="27.8%" y="46%" numero="")
        .h5.mb-2 Agricultura y medio ambiente
        p Se pueden optimizar los recursos del suelo y agua, así como: la planificación de los sistemas de producción. 

      .tarjeta.color-acento-botones.p-3(x="43%" y="63%" numero="")
        .h5.mb-2 #[i Geomarketing]
        p Se ha usado para crear campañas de #[i marketing], puesto que es indispensable la información geográfica, la cual suministra bases de datos de clientes para determinar cuál es la estrategia óptima.         

      .tarjeta.color-acento-botones.p-3(x="61.6%" y="60.3%" numero="")
        .h5.mb-2 Planes de emergencia
        p Se crean mapas para saber cómo actuar en caso de catástrofes, tales como:  incendios forestales, inundaciones o terremotos, etc.  

      .tarjeta.color-acento-botones.p-3(x="73.5%" y="43%" numero="")
        .h5.mb-2 Educación e investigación
        p Permiten incentivar en los estudiantes un pensamiento geográfico por medio de la investigación y comprensión de los diferentes factores.         

      .tarjeta.color-acento-botones.p-3(x="77%" y="22%" numero="")
        .h5.mb-2 Sector salud
        p Los SIG permiten conocer cuáles servicios de salud se ofertan en cierto sector en específico, de igual manera, pueden dar a conocer algún factor de riesgo en una determinada zona.           

    p(data-aos="fade-left").mt-5 Un SIG está compuesto por varios componentes, cada uno de ellos cumple una función para determinar la cartografía que se debe utilizar en un proyecto o actividad que se esté desarrollando. Para entender las relaciones entre los SIG, es necesario tener en cuenta diferentes características, las cuales se pueden relacionar entre sí:

    .tarjeta.tarjeta--gris.p-4.mt-5(data-aos="fade-left")
      LineaTiempoC.color-secundario(text-small)
        .row.justify-content-center.align-items-center(titulo="Personal")
          .col-lg-10
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img55.jpg', alt='')
            p.mt-4 Debe estar capacitado en aplicaciones del manejo de las herramientas SIG. 

        .row.justify-content-center.align-items-center(titulo="Organización")
          .col-lg-10
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img56.jpg', alt='')
            p.mt-4 Estructura y organización del personal para ejecutar correctamente las actividades. 

        .row.justify-content-center.align-items-center(titulo="Información geográfica")
          .col-lg-10
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img57.jpg', alt='')
            p.mt-4 Debe estar ubicada espacialmente, actualizada y completa, para que así sea útil en las aplicaciones.

        .row.justify-content-center.align-items-center(titulo="Normas, procedimientos y metodologías")
          .col-lg-10
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img58.jpg', alt='')
            p.mt-4 Deben tener detalles y estar probadas.

        .row.justify-content-center.align-items-center(titulo="<i>Software</i>")
          .col-lg-10
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img59.jpg', alt='')
            p.mt-4 Se basa en los tres puntos anteriores, por lo que requiere de datos, que se convierten en información, para la toma de decisiones.

        .row.justify-content-center.align-items-center(titulo="<i>Hardware</i>")
          .col-lg-10
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img60.jpg', alt='')
            p.mt-4 Este tiene relación directa con la cantidad de datos que se manejan, con el fin de que estos arrojen la información requerida en un momento dado, por ejemplo: para diseñar un plan de emergencias o para ser utilizado en educación.  

    p(data-aos="fade-down").mt-5 Por último, los SIG están inmersos en el diario vivir, pueden servir para diferentes investigaciones tanto personales como laborales, como, por ejemplo: investigar la contaminación de una zona determinada o una investigación laboral como una campaña de mercadeo para una empresa que busca conocer al detalle información sobre sus clientes.

    Separador 
    #t_3_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.2 Métodos de medición y técnicas de presentación cartográfica  

    .bg-img7.p-5(data-aos="zoom-in-down")
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          .bloque-texto-b.color-primario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h5 Es importante entender y aplicar los conceptos básicos de las técnicas y las mediciones cartográficas, para así, poder conocer los elementos que integran el proceso de medición y las diferentes técnicas que permiten tener confiabilidad y validez mediante la comprensión de los distintos elementos. Por otro lado, existen varios tipos de técnicas que se pueden usar en la cartografía convencional, las cuales se mencionan a continuación: #[br]
              p.mb-0 (Alonso, 2006), 
              i.fas.fa-quote-right
        
    AcordionA.mt-5(data-aos="fade-left")(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center.align-items-center(titulo="Mediciones")
        .col-lg-11
          p Medición de direcciones, distancias y áreas mediante procedimientos manuales (regla y semicírculo) o mecánicos más o menos sofisticados (curvímetros y planímetros).       
      .row.justify-content-center.align-items-center(titulo="Combinación de mapas")
        .col-lg-11
          p Mediante la técnica de los transparentes, la cual consiste en dibujar los mapas en papel traslúcido y, aplicando luz por detrás, buscar las áreas que cumplen un conjunto de criterios.        
      .row.justify-content-center.align-items-center(titulo="Muestreo por cuadrícula")
        .col-lg-11
          p Esta consiste en la superposición de una cuadrícula sobre el mapa asignándole a cada celdilla un valor representativo de determinado fenómeno (por ejemplo, la altitud media calculada a partir de las curvas de nivel). De este modo se generan varias capas con diferentes variables que permitirían un análisis de la distribución espacial de las mismas y sus relaciones.        

    Separador 
    #t_3_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 3.3 Simbología y escalas de mapas 
    p(data-aos="fade-down") La simbología en los mapas se basa en la que está reglamentada por la Federación Internacional de Orientación (I.O.F.), en esta se pueden diferenciar tres tipos de símbolos: los lineales, los puntuales y los de área, algunos ejemplos se presentan a continuación:

    img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img61.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img62.svg', alt='')

    p(data-aos="fade-down").mt-5 Cabe resaltar que con los símbolos se usan varios colores, como se observa a continuación en la figura:    
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5        
        .titulo-sexto.color-acento-contenido
          h5 Figura 3. 
          span Simbología y colores utilizada en un SIG
    img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img63.svg', alt='')
    p(data-aos="fade-down").mt-5 Ahora bien, una escala es una relación proporcional de medida que hay en un terreno y que hace referencia a un mapa, por lo que es importante definir el uso del mapa, lo anterior determina la escala, y esto se basa el nivel de detalles que se necesiten. Las escalas se dividen en 3 categorías, las cuales se encuentran descritas en la siguiente figura: 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5        
        .titulo-sexto.color-acento-contenido
          h5 Figura 4. 
          span Categorías de las escalas
    img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img64.svg', alt='')
    p(data-aos="fade-down").mt-5 Gracias a los diferentes tipos de escalas, se ofrece una proyección exacta de lo que se quiere obtener y así contar con diferentes puntos de vista desde diferentes ángulos de manera clara, sencilla y resumida.

    Separador     

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

<style lang="sass"></style>
