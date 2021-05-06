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
            <v-tab @click="tipo = 'licitacion'">
              Licitaciones
            </v-tab>

            <v-tab @click="tipo = 'concurso'">
              Concursos
            </v-tab>

            <v-tab-item>
              <Licits></Licits>
            </v-tab-item>

            <v-tab-item>
              <Concurs ></Concurs>
            </v-tab-item>
          </v-tabs>

          <!--  <div class="modal-card">
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="e.g Alex Smith"
                  v-model="password"
                />
              </div>
            </div> -->

          <!--  <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                  required
                  v-model="email"
                />
              </div>
            </div>
            <input type="file" ref="file" v-on:change="selectFile()">
            <button @click="agregar_postulante()">Guardar</button> -->

          <!-- </div> -->
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
      licitaciones: [],
      estado: "vigente",
      activeTab: 0,
      modal: true,
      tipo: "",
      postulante: true,
      condition: true,
      currentLicitacion: [],
      password: "",
      email: "",
      selectedFiles: null
    };
  },
  created() {
    this.fetch_estado("vigente");
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
    },
    showModal(id) {
      this.fetchOne(id);
    },
    async fetchOne(id) {
      let result = await this.$axios.$get(
        `http://localhost:3333/api/v1/licitaciones/id/${id}`
      );
      this.currentLicitacion = result;
      this.modal = true;
      console.log(this.currentLicitacion, "L");
    },

    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    }
    /* async agregar_postulante() {
    let formData = new FormData();
    this.currentFile = this.selectedFiles.item(0);
    formData.append("file", this.currentFile);
    formData.append( 'email': this.email);
    formData.append( 'password': this.password);
    this.currentFile = this.selectedFiles.item(0);
    let response = await this.$axios.post("http://localhost:3333/api/v1/users"
    {headers:{ 'Content-Type':'multipart/form-data',}}
    )
    console.log(response.data);
  } */
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

<style lang="css" scoped>
.card {
  border: 1px solid #cccccc;
  margin: 5px;
}
.content {
  margin: 20px;
}
</style>
