<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-between.align-items-stretch
      .col-lg-8
        .cajon-b.color-primario
          p(data-aos="fade-down") El mundo enfrenta un reto muy grande, y es tener la capacidad de reaccionar y adaptarse a los cambios que se requieren a nivel individual y como sociedad frente al cambio climático y las consecuencias que puede traer a la comunidad y al contexto en el que se vive. 

          p(data-aos="fade-down") Por esa razón, se hace necesario antes de iniciar un proyecto, obra o actividad que impacte a ambos componentes, realizar estudios ambientales que permitan identificar con anterioridad las consecuencias de este, por lo anterior el Ministerio de Medio Ambiente en Colombia ha diseñado una serie de términos de referencias que se deben seguir con el fin de alcanzar los Objetivos de Desarrollo Sostenible que tiene el país y que están definidos en la Agenda 2030.

        p(data-aos="fade-down") Por esta razón, se invita a revisar el siguiente video donde se hace una síntesis del contenido e importancia del tema en la actualidad.
      .col-lg-4.my-2
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img1.png', alt='')       

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/XAZiJnUxRl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
