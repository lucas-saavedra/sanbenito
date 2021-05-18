<template>
  <main>
    <section class="hero">
      <div class="hero-body2">
        <div class="container">
          <div class="box">
            <Breadcrumb />
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary is-small has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-3">Licitaciones</h3>
          <h1 class="subtitle">
            El Municipio pone a disposición la siguientes Licitaciónes
          </h1>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <v-tabs centered>
            <v-tab>
              Licitaciones
            </v-tab>

            <v-tab>
              Concursos
            </v-tab>

            <v-tab-item>
              <Licits />
            </v-tab-item>

            <v-tab-item>
              <Concurs />
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Licits from "~/components/Licits.vue";
import Concurs from "~/components/Concurs.vue";
import Detalle from "~/components/Detalle.vue";
import UploadFiles from "~/components/UploadFiles";
/* import Add_postulante from "~/components/Add_postulante.vue"; */
export default {
  components: {
    Licits,
    Concurs,
    Detalle,
    UploadFiles
  },
  data() {
    return {
     
    };
  },

  head() {
    return {
      title: "San Benito - Licitaciones"
    };
  }
};
</script>

<style lang="css" scoped>
.card {
  border: 1px solid #cccccc;
  margin: 5px;
}
.content {
  margin: 20px;
}
</style>
