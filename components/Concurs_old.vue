<template>
  <v-card flat>
    <div>
      <div class="select is-info is-normal">
        <select v-model="estado" v-on:change="fetch_estado(estado)">
          <option value="vigente" autofocus>Vigente</option>
          <option value="en_evaluacion">En evaluación</option>
          <option value="adjudicada">Adjudicada</option>
        </select>
      </div>
      <table class="table is-bordered is-centered" v-if="modal">
        <thead>
          <tr>
            <th><p>Nº Concurso</p></th>
            <th><p>Titulo</p></th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="concurso in concursos" :key="concurso.id">
            <td>
              <span class="tag is-info is-medium"
                >{{ concurso.concurso_n }} / {{ concurso.anio }}</span
              >
            </td>

            <td id="titulo">{{ concurso.titulo }}</td>
            <td>
              <button class="button" @click="fetchOne(concurso.id)">
                <span class="icon"
                  ><font-awesome-icon :icon="['fas', 'eye']"
                /></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div class="card" v-else>
        <div class="card-content">
          <div>
            <span class="tag is-black is-medium"
              >Concurso Nº: {{ currentConcurso.concurso_n }} /
              {{ currentConcurso.anio }}
            </span>
          
            <span class="tag is-info is-medium">
              Estado: {{ currentConcurso.estado }}</span
            >
            <br />
            <p id="titulo">
              <strong>Titulo:</strong> {{ currentConcurso.titulo }}
            </p>
            <p>
              <strong>Llamada: </strong> {{ currentConcurso.decreto_llamado }}
            </p>
            <p><strong>Decreto:</strong> {{ currentConcurso.norma_adj }}</p>
            <p v-if="(currentConcurso.entrega_sobres = null)" id="titulo">
              <strong>Entrega de Sobres:</strong>
              {{ currentConcurso.entrega_sobres }}
            </p>

            <p>
              <strong>Presupuesto Oficial: $</strong>
              {{ currentConcurso.presup_oficial }}
            </p>

            <table class="table is-bordered">
              <thead>
                <tr>
                  <th><p>Adjudicatorio</p></th>
                  <th><p>Importe</p></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="currentConcursoAdj in currentConcursosAdj"
                  :key="currentConcursoAdj.id"
                >
                  <td>
                    <p>{{ currentConcursoAdj.nombre_apellido }}</p>
                  </td>
                  <td>
                    <p>$ {{ currentConcursoAdj.importe }}</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <a
              href="http://localhost:3333/api/v1/download/1-2021.zip"
              class="button is-info is-outlined"
              target="_blank"
            >
              <span class="icon"
                ><font-awesome-icon :icon="['fas', 'download']"
              /></span>
              <strong>Bases y Condiciones</strong>
            </a>
            <a class="button is-info  is-outlined">
              <span class="icon"
                ><font-awesome-icon :icon="['fas', 'download']"
              /></span>
              <strong>Pliego</strong>
            </a>
            <a
              v-if="currentConcurso.estado === 'vigente'"
              class="button is-outlined is-link "
              id="show-modal"
              @click="showModal_post = true"
            >
              <span class="icon"
                ><font-awesome-icon :icon="['fas', 'paperclip']"
              /></span>
              <strong>Postularse</strong>
            </a>
            <button
              @click="fetch_estado(estado)"
              class="button is-danger is-outlined is-pulled-right"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal is-clipped" :class="{ 'is-active': showModal_post }">
      <div class="modal-background" @click="showModal_post = false"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <strong> Se está postulando al</strong>
            </p>
            <span class="tag is-black is-medium"
              >Concurso Nº: {{ currentConcurso.concurso_n }} /
              {{ currentConcurso.anio }}
            </span>
          </header>
          <div class="content">
            <upload-files></upload-files>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  </v-card>
</template>

<script>
import UploadFiles from "~/components/UploadFiles";
export default {
   props:["tipo"],
  data() {
    return {
      concursos: [],
      estado: "vigente",
      activeTab: 0,
      condition: true,
      modal: false,
      currentConcurso: [],
      currentConcursosAdj: [],
      postulante: {
        id: null,
        tipo: "concurso",
        phone: "",
        nombre_apellido: "",
        email: "",
        cuit: "",
        inscripcion_id: null
      },
      files: [],
      isActive: true,
      showModal_post: false
    };
  },
  components: {
    UploadFiles
  },
  created() {
    this.fetch_estado("vigente");
    this.get_files();
  },
  methods: {
    async fetch() {
      const params = {
        estado: "vigente"
      };
      const ip = await this.$axios.$get(
        "http://localhost:3333/api/v1/concursos"
      );
      this.concursos = ip;
    },
    async fetch_estado(estado) {
      let result = await this.$axios.$get(
        `http://localhost:3333/api/v1/concursos/${estado}`
      );
      this.concursos = result;

      this.modal = true;
    },
    showModal(id) {
      this.fetchOne(id);
    },
    async fetchOne(id) {
      let result = await this.$axios.$get(
        `http://localhost:3333/api/v1/concursos/id/${id}`
      );
      this.currentConcurso = result;
      this.modal = false;
      let result2 = await this.$axios.$get(
        `http://localhost:3333/api/v1/concursos/adj/${id}`
      );
      this.currentConcursosAdj = result2;
    },
    showModal(id) {
      this.fetchOne(id);
    },
    async get_files() {
      let result = await this.$axios.$get(
        `http://localhost:3333/api/v1/upload`
      );
      this.files = result;
    }
  },

  search_estado() {
    this.fetch();
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
  /* text-transform: capitalize; */
}
.span {
  margin-top: 5px;
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
.select {
  margin: 20px;
  margin-left: 0px;
}
.card {
  border: 1px solid #cccccc;
  margin: 5px;
}
.content {
  margin: 20px;
}
</style>
