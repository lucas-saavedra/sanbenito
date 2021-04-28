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
           <section>
          <b-tabs position="is-centered" v-model="activeTab">
            <b-tab-item label="Licitaciones">
              
              <div class="select is-primary is-normal">
                <select v-model="estado" v-on:change="fetch_estado(estado)">
                  <option value="vigente" autofocus>Vigente</option>
                  <option value="en_evaluacion">En evaluación</option>
                  <option value="adjudicada">Adjudicada</option>
                </select>
              </div>
              <table class="table is-bordered is-centered">
                <thead>
                  <tr>
                    <th><p>Nº Licitacion</p></th>
                    <th><p>Tipo</p></th>
                    <th><p>Titulo</p></th>
                    <th>Ver</th>
                  </tr>
                </thead>
                <tbody>
                  <Licits
                    v-for="licitacion of licitaciones"
                    v-bind:key="licitacion.id"
                    v-bind:licitacion="licitacion"
                  />
                </tbody>
              </table>
            </b-tab-item>
            <b-tab-item label="Concursos">
              <div class="select is-info is-normal">
                <select v-model="estado" v-on:change="fetch_estado(estado)">
                  <option selected value="vigente">Vigente</option>
                  <option value="en_evaluacion">En evaluación</option>
                  <option value="adjudicada">Adjudicada</option>
                </select>
              </div>
              <table class="table is-bordered is-centered">
                <thead>
                  <tr>
                    <th><p>Nº Concurso</p></th>
                    <th><p>Tipo</p></th>
                    <th><p>Titulo</p></th>
                    <th>Ver</th>
                  </tr>
                </thead>
                <tbody>
                  <Concurs
                    v-for="licitacion of licitaciones"
                    v-bind:key="licitacion.id"
                    v-bind:licitacion="licitacion"
                  />
                </tbody>
              </table>
            </b-tab-item>
          </b-tabs>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Licits from "~/components/Licits.vue";
import Concurs from "~/components/Concurs.vue";
export default {
  components: {
    Licits,
    Concurs
  },
  data() {
    return {
      licitaciones: [],
      estado: "vigente",
      activeTab: 0,
    };
  },
  created() {
    this.fetch_estado('vigente');
  },
  methods: {
    async fetch() {
      const params = {
        estado: "vigente"
      };
      const ip = await this.$axios.$get(
        "http://localhost:3333/api/v1/licitaciones"
      );
      this.licitaciones = ip;
    },
    async fetch_estado(estado) {
      let result = await this.$axios.$get(
        `http://localhost:3333/api/v1/licitaciones/${estado}`
      );
      this.licitaciones = result;
    }
  },

  head() {
    return {
      title: "San Benito - Licitaciones"
    };
  },
  search_estado() {
    this.fetch();
  }
};
</script>

<style>
.select {
  margin: 20px;
}

</style>
