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
          <!-- <tabs></tabs> -->

          <!--  <b-tabs type="is-toggle" expanded>
            <b-tab-item label="Vigentes"> -->

          <button @click="visible = true">Saludar</button>

          <div v-show="visible">
              <table class="table is-bordered is-centered">
            <thead>
              <tr>
                <th><p>Nº Licitacion</p></th>
                <th><p>Tipo</p></th>
                <th><p>Titulo</p></th>
                <th>Ver</th>
              </tr>
            </thead>
            <tbody v-for="licitacion in licitaciones" v-bind:key="licitacion.id">
              <tr>
                <td>
                  <b-tag type="is-primary">
                    {{ licitacion.licitacion_n }} / {{ licitacion.fecha }}
                  </b-tag>
                </td>
                <td>
                  <p>{{ licitacion.tipo }}</p>
                </td>
                <td id="titulo">{{ licitacion.titulo }}</td>
                <td><b-button icon-left="eye"></b-button></td>
              </tr>
            </tbody>
          </table>
          </div>
        
         <!--    </b-tab-item>
            <b-tab-item label="Adjudicadas"></b-tab-item>
            <b-tab-item label="En Evaluacion"></b-tab-item>
          </b-tabs> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Tabs from "~/components/Tabs.vue";

export default {
  components: {
    Tabs
  },
  data() {
    return {
      licitaciones: null,
      visible: false
    };
  },

  head() {
    return {
      title: "San Benito - Licitaciones"
    };
  },

  created() {
    axios
      .get(`http://localhost:3333/api/v1/licitaciones/`)
      .then(licitaciones => {
        this.licitaciones = licitaciones.data;
      });
  }
};
</script>

<style scoped>
.card:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  border: 1px solid #cccccc;
  background-color: white;
}
p {
  color: #4c5656;
  margin: 5px;
  z-index: 1000;
  transition: color 0.3s ease-out;
  text-align: center;
  text-transform: capitalize;
}
#titulo {
  text-transform: lowercase;
}
#titulo::first-letter {
  text-transform: uppercase;
}
.card {
  border: 1px solid #cccccc;
  margin: 5px;
}
.button {
  margin: auto;
}
</style>
