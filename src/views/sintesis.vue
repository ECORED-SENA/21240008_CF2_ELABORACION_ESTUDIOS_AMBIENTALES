<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El objetivo principal de este componente formativo es entregar las herramientas y conocimientos necesarios para saber la ruta que debe seguir el ente natural o jurídico antes las autoridades ambientales correspondientes, con lo anterior y teniendo las bases para construir dicho documento se podrá dar cumplimiento a lo requerido por la legislación ambiental colombiana y con el fin de cumplir con los Objetivos de Desarrollo Sostenible al minimizar y mitigar impactos negativos que pueda generar la actividad para la que se esté solicitando dicho trámite.
    p.mb-5 A continuación se presenta una síntesis de lo estudiado anteriormente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(data-aos="zoom-in")(src="@/assets/curso/temas/sintesis.svg", alt="alt")


</template>

<script>
export default {
  name: 'Sintesis',
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
