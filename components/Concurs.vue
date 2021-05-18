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
                >{{ concurso.numero }} / {{ concurso.anio }}</span
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
              >Concurso Nº: {{ currentConcurso.numero }} /
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
              v-bind:href="
                'http://localhost:3333/api/v1/download/' +
                  currentConcurso.id +
                  '-' +
                  currentConcurso.numero +
                  '-' +
                  currentConcurso.llamada +
                  '-' +
                  currentConcurso.anio +
                  '.zip'
              "
              class="button is-info is-outlined"
              target="_blank"
            >
              <span class="icon"
                ><font-awesome-icon :icon="['fas', 'download']"
              /></span>
              <strong>Bases y Condiciones</strong>
            </a>
            <a class="button  is-outlined">
              <span class="icon"
                ><font-awesome-icon :icon="['fas', 'download']"
              /></span>
              <strong>Pliego</strong>
            </a>
            <a
              v-if="currentConcurso.estado === 'vigente'"
              class="button is-outlined is-link "
              id="show-modal"
              @click="update"
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
    <Postulacion
      v-bind:current="currentConcurso"
      v-bind:showModal_post="showModal_post"
      @update-modal="update"
      v-bind:tipo="tipo"
    />

    <!-- <div
        class="modal-background"
        @click="(showModal_post = false), (submitted = false)"
      ></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              <strong> Se está postulando al </strong>
              <span class="tag is-black is-medium"
                >Concurso Nº: {{ currentConcurso.numero }} /
                {{ currentConcurso.anio }}
              </span>
            </div>
          </header>
          <div class="content">
            <div>
              <div class="submit-form">
                <div v-if="!submitted">
                  <div class="field">
                    <label class="label" for="name">Apellido y Nombre</label>
                    <div class="control">
                      <input
                        placeholder="Apellido y Nombre"
                        class="input"
                        id="name"
                        required
                        v-model="postulante.nombre_apellido"
                        name="name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label" for="email">Email</label>

                    <div class="control">
                      <input
                        placeholder="Ingrese su email"
                        class="input"
                        id="email"
                        required
                        v-model="postulante.email"
                        name="email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label" for="number">CUIT</label>
                    <div class="control">
                      <input
                        class="input"
                        type="number"
                        placeholder="CUIT"
                        id="cuit"
                        required
                        v-model="postulante.cuit"
                        name="cuit"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label" for="tel">Celular</label>
                    <div class="control">
                      <input
                        class="input"
                        type="tel"
                        placeholder="Celular"
                        id="tel"
                        required
                        v-model="postulante.phone"
                        name="phone"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label" for="pliego">Pliego</label>
                    <div v-if="currentFile" class="progress">
                      <progress
                        class="progress"
                        v-bind:value="progress"
                        max="100"
                        >{{ progress }}%</progress
                      >
                    </div>

                    <label class="button">
                      <input type="file" ref="file" @change="selectFile" />
                    </label>
                    <button
                      class="button"
                      :disabled="!selectedFiles"
                      @click="upload(currentConcurso.id)"
                    >
                      Postularse
                    </button>
                  </div>

                  <article v v-if="message != ''" class="message is-danger">
                    <div class="message-body" role="alert">
                      {{ message }}
                    </div>
                  </article>

                 
                </div>
                <div class="notification is-success" v-else>
                  <p>¡Te has postulado satisfactoriamente!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </v-card>
</template>

<script>
import UploadService from "~/services/UploadFilesService";
import Postulacion from "~/components/postulacion";

export default {
  data() {
    return {
      concursos: [],
      estado: "vigente",
      condition: true,
      tipo: "concurso",
      currentConcurso: [],
      currentConcursosAdj: [],
      modal: true,
      files: [],
      isActive: true,
      showModal_post: false,
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      /* postulante: {
        id: null,
        tipo: "concurso",
        phone: "",
        nombre_apellido: "",
        email: "",
        cuit: "",
        inscripcion_id: null
      }, */
      submitted: false,
      fileInfos: []
    };
  },
  components: {
    Postulacion,
    UploadService
  },
  created() {
    this.fetch_estado("vigente");
    this.get_files();
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
    update(showModal_post) {
      this.showModal_post = showModal_post;
    },

    upload(id) {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      (this.postulante.inscripcion_id = id),
        UploadService.upload(
          this.postulante.inscripcion_id,
          this.postulante.tipo,
          this.currentFile,
          this.postulante.phone,
          this.postulante.cuit,
          this.postulante.email,
          this.postulante.nombre_apellido,
          event => {
            this.progress = Math.round((100 * event.loaded) / event.total);
          }
        )
          .then(response => {
            this.message = response.data.message;
            return UploadService.getFiles();
          })
          .then(files => {
            this.fileInfos = files.data;
          })
          .catch(() => {
            this.progress = 0;
            this.message = "Could not upload the file!";
            this.currentFile = undefined;
          });

      this.selectedFiles = undefined;
      this.submitted = true;
      this.postulante = {};
    },

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
      let result = await this.$axios
        .$get(`http://localhost:3333/api/v1/concursos/${estado}`)
        .catch(err => {
          console.log(err);
        });
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
  text-transform: capitalize;
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
