<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Términos de referencia de estudios ambientales
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p(data-aos="fade-down") Los términos de referencia son documentos previos que definen el contenido, alcance y métodos para tener en cuenta en la elaboración del estudio ambiental. Estos están disponibles en la página del Ministerio de Medio Ambiente para el ejecutor del proyecto y deben ser aplicados a los estudios ambientales de proyectos:
        .list.mt-3(data-aos="fade-down")
          .list__item
            .list__item__icon(data-aos="zoom-in") 
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            p(data-aos="fade-down") Agrícolas.
        .list.mt-1(data-aos="fade-down")
          .list__item
            .list__item__icon(data-aos="zoom-in") 
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            p(data-aos="fade-down") Construcción.
        .list.mt-1(data-aos="fade-down")
          .list__item
            .list__item__icon(data-aos="zoom-in") 
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            p(data-aos="fade-down") Industria.
        .list.mt-1(data-aos="fade-down")
          .list__item
            .list__item__icon(data-aos="zoom-in") 
              img(src='@/assets/curso/temas/v1.svg', alt='')
          .list__txt
            p(data-aos="fade-down") Servicios

    Separador 
    #t_1_1.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.1 Definiciones, tipos y clasificación
    .bg-img1.p-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center
        .col-lg-8 
          p(data-aos="fade-down") En esta sección se mostrarán los términos básicos para poder entender con más profundidad, los términos de referencia, por lo que es importante recalcar que estos lineamientos ayudarán a definir las correspondientes medidas de prevención, corrección, compensación y mitigación de los impactos en el área de influencia. 

          p(data-aos="fade-down").mb-0 Para ampliar su conocimiento sobre estudios ambientales, se hace necesario que comprenda algunas definiciones, que son muy importantes a la hora de realizar un proceso como este, por lo cual se invita a revisar el siguiente recurso de aprendizaje:

        .col-lg-2.my-2
          img(data-aos="zoom-in")(src='@/assets/curso/temas/img5.svg', alt='') 

    .row.justify-content-start.align-items-center.mt-5
      .col-lg-5
        p(data-aos="zoom-in-left").title-green.p-2 Definición y clasificación de los trámites ambientales      

    .bg-img2.mt-5(data-aos="fade-down")
      .row.justify-content-center.align-items-stretch(data-aos="fade-left")
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img7.jpg')})`}")
                h3.text-center.p-flip_img Generalidades 
              .tarjeta-flip__contenido.p-3
                h5 Generalidades 
                p Este es el inicio de la presentación del proyecto al que se le realizará el estudio ambiental y debe incluir introducción, objetivos, antecedentes, alcance y la metodología a utilizar.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img8.jpg')})`}")
                h3.text-center.p-flip_img Descripción del proyecto               
              .tarjeta-flip__contenido.p-3
                h5 Descripción del proyecto
                p En este apartado se incluirá la localización y características del proyecto, tales como: las actividades del proyecto, vías de acceso, insumos, costos y cronograma del proyecto.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img9.jpg')})`}")
                h3.text-center.p-flip_img Área de influencia                
              .tarjeta-flip__contenido.p-3
                h5 Área de influencia 
                p Se deben tener en cuenta las consideraciones técnicas, definiciones, identificación y delimitaciones del área.   

      .row.justify-content-center.align-items-stretch.mt-4(data-aos="fade-left")
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img10.jpg')})`}")
                h3.text-center.p-flip_img Caracterización del área de influencia               
              .tarjeta-flip__contenido.p-3
                h5 Caracterización del área de influencia
                p En esta parte se tienen en cuenta todos los componentes ambientales, económicos y socioculturales, además de los servicios ecosistémicos en el área.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img11.jpg')})`}")
                h3.text-center.p-flip_img Zonificación ambiental                
              .tarjeta-flip__contenido.p-3
                h5 Zonificación ambiental 
                p Esta es la organización y análisis de la información que se tiene del área del proyecto, de donde sale un diagnóstico del estado del ambiente.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img12.jpg')})`}")
                h3.text-center.p-flip_img Demanda, uso, aprovechamiento o afectación de recursos naturales               
              .tarjeta-flip__contenido.p-3
                h5 Demanda, uso, aprovechamiento o afectación de recursos naturales
                p En esta sección se tienen en cuenta:  aguas superficiales y subterráneas, vertimientos, ocupación de cauces, aprovechamiento forestal, emisiones atmosféricas y las fuentes de generación de ruido.   

      .row.justify-content-center.align-items-stretch.mt-4(data-aos="fade-left")
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img13.jpg')})`}")
                h3.text-center.p-flip_img Evaluación ambiental               
              .tarjeta-flip__contenido.p-3
                h5 Evaluación ambiental 
                p Se realiza una identificación y evaluación de impactos para un escenario sin y con proyecto. 

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img14.jpg')})`}")
                h3.text-center.p-flip_img Zonificación de manejo ambiental del proyecto               
              .tarjeta-flip__contenido.p-3
                h5 Zonificación de manejo ambiental del proyecto
                p Se toman en cuenta al iniciar la zonificación ambiental y la evaluación de impactos para determinar esta zonificación, además se deben tener en cuenta el resultado las áreas de intervención, con restricciones y las áreas de exclusión del área.

        .col-sm-6.col-xl-3.mb-4.mb-sm-0
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/img15.jpg')})`}")
                h3.text-center.p-flip_img Planes y programas                
              .tarjeta-flip__contenido.p-3
                h5 Planes y programas
                p Contempla los programas de manejo ambiental, el plan de seguimiento y monitoreo, plan de gestión del riesgo y el plan de cierre.   

    p.mt-5(data-aos="fade-down") La clasificación que se muestra a continuación en la figura 1, se encuentra plasmada en el portal de la ANLA, y allí mismo dispone de los documentos referentes junto con la resolución que expide estos términos, por lo tanto, es importante resaltar que ha evolucionado en el tiempo y se han incluido más áreas de influencia en cada subcategoría de actividades a ejecutar.  

    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Clasificación de los términos de referencia   
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img16.svg', alt='')
        figcaption.mt-3 Nota. Contenidos consolidados por el autor de documentos de la ANLA.  
              
    Separador 
    #t_1_2.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.2 Principios aplicables                    
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img17.jpg', alt='')
    p.mt-5(data-aos="fade-down") La participación ciudadana en materia ambiental se puede definir como: un proceso mediante el cual se integra al ciudadano, en forma individual o colectiva, en la toma de decisiones, la fiscalización, control y ejecución de las acciones que incumben a la gestión ambiental.
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img17_1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p(data-aos="fade-down") Los principios aplicables son aquellas guías o ideas que recogen las disposiciones para orientar a la sociedad y así proteger el derecho a un ambiente sano y equilibrado, buscando proteger a todos los organismos vivos. 
            br
            br
            p(data-aos="fade-down") De esta manera, se identifica que no se encuentra un consenso de una lista detallada y cerrada de los principios fundacionales del derecho ambiental. 

        p.mt-5(data-aos="fade-down") Por otro lado, el medio ambiente es patrimonio común, por ello cada ciudadano tiene derechos y deberes con su cuidado, y está en la obligación de proteger los recursos naturales y hacer buenos usos de los servicios ambientales que el planeta ofrece, con lo cual se consigue un equilibrio y se podrá alcanzar desarrollo sostenible pactado por Colombia en la Agenda 2030 de la UNESCO. 

        .tarjeta.color-primario.p-3.mt-5(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.text-white Para profundizar sobre la importancia de la participación ciudadana en la planeación, ejecución y control de proyectos de alto impacto social que afecten el contexto o la comunidad, se invita a ver el video de la ANLA “Balance Audiencia Pública Ambiental, Ejecución de obras de construcción y operación del Aeropuerto el Dorado en Bogotá”, ubicado en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco.bg-boton(href="https://www.youtube.com/watch?v=vuMVwLjPmeY" target="_blank")
                    span Ver video
                    i.fas.fa-play-circle     

    Separador 
    #t_1_3.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.3 Metodología utilizada en Colombia    
    p(data-aos="fade-down") Para la elaboración del estudio ambiental, el interesado se debe basar en los criterios incluidos en la metodología general para la presentación de estudios ambientales, expedida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial. Así mismo, se requiere presentar las diferentes metodologías utilizadas para cada área específica que se busque evaluar incluyendo los procedimientos de:

    img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img18.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8
        p(data-aos="flip-down").p-3.color-grad-green.mb-0 Es por esto, que la Metodología General para la Elaboración y Presentación de Estudios Ambientales se constituye en un instrumento de apoyo; una guía donde se pretenden plasmar los lineamientos generales para orientar a quienes los elaboran antes de iniciar un proyecto, obra o actividades sujetas a licenciamiento ambiental, esto se hace con el fin de que dichos estudios contengan la información necesaria, relevante y suficiente para que las autoridades ambientales puedan tomar decisiones frente al desarrollo y ejecución de los proyectos en mención.
      .col-lg-3.my-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img19.svg', alt='')

    Separador 
    #t_1_4.titulo-segundo.color-primario(data-aos="zoom-in-left")
      h2 1.4 Requisitos para aplicar un Estudio de Impacto Ambiental 
    p(data-aos="fade-down") Los requisitos para poder aplicar un estudio ambiental según la ANLA se pueden referenciar en siete (7) pasos, los cuales se resumen a continuación.
    .bg-img3.mt-5.p-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center
        .col-lg-10
          LineaTiempoD.color-primario
            .row.justify-content-center.align-items-center(numero="1" titulo="Proceso de tamizado")
              .col-lg-8 
                p Diagnosticar si los impactos del proyecto a desarrollar son suficientemente graves para desarrollar el EIA.       
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img21.svg', alt='')

            .row.justify-content-center.align-items-center(numero="2" titulo="Proceso de selección")
              .col-lg-8 
                p Identificar la base de análisis y establecer límites del EIA, para describir las alternativas del proyecto.       
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img22.svg', alt='')

            .row.justify-content-center.align-items-center(numero="3" titulo="Evaluación de impacto y mitigación")
              .col-lg-8 
                p Evaluar los impactos ambientales, económicos y socioculturales del proyecto para identificar medidas de mitigación.        
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img23.svg', alt='')

            .row.justify-content-center.align-items-center(numero="4" titulo="Manejo de impactos")
              .col-lg-8 
                p Disponer programas necesarios para las medidas de mitigación y otros riesgos del proyecto.   
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img24.svg', alt='')

            .row.justify-content-center.align-items-center(numero="5" titulo="Informe de evaluación de impacto")
              .col-lg-8 
                p Reunir toda la información, en un documento bien estructurado, asegurándose que contenga todos los componentes.      
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img25.svg', alt='')

            .row.justify-content-center.align-items-center(numero="6" titulo="Revisión y licenciamiento")
              .col-lg-8 
                p La autoridad designada revisa el informe de EIA.    
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img26.svg', alt='')

            .row.justify-content-center.align-items-center(numero="7" titulo="Monitoreo")
              .col-lg-8 
                p Asegurar que las medidas de prevención, mitigación y planes de contingencia se apliquen correctamente en el proyecto.  
              .col-lg-4
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img27.svg', alt='') 
                
    .bg-img4.p-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-10    
          p(data-aos="fade-down") Después de tener en cuenta los requisitos para un estudio ambiental, es importante aclarar que:

          p(data-aos="fade-down") El interesado en obtener la licencia ambiental debe presentar la petición por escrito ante la autoridad Ambiental competente, con la que se busca que la entidad del estado determine si el proyecto obra u actividad requiere o no de la elaboración y presentación del diagnóstico ambientales alternativas.

          .tarjeta.color-primario.p-3.mt-5(data-aos="flip-down")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/video.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-small.text-white Para profundizar en su aprendizaje, se invita a revisar el video: “Términos de referencia para la elaboración del estudio de impacto ambiental”, el cual se encuentra en la sección de material complementario.
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco.bg-boton(href="https://www.youtube.com/watch?v=dnY8MfggFNU" target="_blank")
                      span Ver video
                      i.fas.fa-play-circle   
    Separador 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
