<template>
  <v-app>
    <v-card flat>
      <div>
        <div class="select is-primary is-normal">
          <select v-model="estado" v-on:change="fetch_estado(estado)">
            <option value="vigente" autofocus>Vigente</option>
            <option value="en_evaluacion">En evaluación</option>
            <option value="adjudicada">Adjudicada</option>
          </select>
        </div>
        <table class="table is-bordered is-centered" v-if="modal">
          <thead>
            <tr>
              <th><p>Nº Licitacion</p></th>
              <th><p>Tipo</p></th>
              <th><p>Titulo</p></th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="licitacion in licitaciones" :key="licitacion.id">
              <td>
                <span class="tag is-primary is-medium"
                  >{{ licitacion.numero }} / {{ licitacion.anio }}</span
                >
              </td>
              <td>
                <p>{{ licitacion.tipo }}</p>
              </td>
              <td id="titulo">{{ licitacion.titulo }}</td>
              <td>
                <button class="button" @click="fetchOne(licitacion.id)">
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
                >Licitacion Nº: {{ currentLicitacion.numero }} /
                {{ currentLicitacion.anio }}
              </span>
              <span class="tag is-primary is-medium">
                Tipo: {{ currentLicitacion.tipo }}</span
              >
              <span class="tag is-primary is-medium">
                Estado: {{ currentLicitacion.estado }}</span
              >
              <br />
              <p id="titulo">
                <strong>Titulo:</strong> {{ currentLicitacion.titulo }}
              </p>
              <p><strong>Llamada: </strong> {{ currentLicitacion.llamada }}</p>
              <p><strong>Decreto:</strong> {{ currentLicitacion.decreto }}</p>
              <p id="titulo">
                <strong>Entrega de Sobres:</strong>
                {{ currentLicitacion.entrega_sobres }}
              </p>
              <p id="titulo">
                <strong>Fecha de apertura: </strong
                >{{ currentLicitacion.fecha_apertura }}
              </p>
              <p>
                <strong>Presupuesto Oficial: $</strong>
                {{ currentLicitacion.presup_oficial }}
              </p>

              <p>
                <strong>Precio Pliego: $ </strong>
                {{ currentLicitacion.precio_pliego }}
              </p>

              <p>
                <strong>Organismo Financiero: </strong
                >{{ currentLicitacion.org_financiero }}
              </p>
              <p v-if="(currentLicitacion.fecha_adj = null)">
                <strong>Fecha Adjudicación:</strong
                >{{ currentLicitacion.fecha_adj }}
              </p>
              <p id="titulo">
                <strong>Bases y Condiciones: </strong
                >{{ currentLicitacion.bases_condiciones }}
              </p>
              <p v-if="(currentLicitacion.norma_adj = null)">
                <strong>Norma Adjudicación :</strong
                >{{ currentLicitacion.norma_adj }}
              </p>

              <a
                v-bind:href="
                  'http://localhost:3333/api/v1/download/' +
                    currentLicitacion.id +
                    '-' +
                    currentLicitacion.numero +
                    '-' +
                    currentLicitacion.llamada +
                    '-' +
                    currentLicitacion.anio +
                    '.zip'
                "
                class="button is-primary is-outlined"
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
                v-if="currentLicitacion.estado === 'vigente'"
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
      <Postulacion
        v-bind:current="currentLicitacion"
        v-bind:showModal_post="showModal_post"
        @update-modal="update"
        v-bind:tipo="tipo"
      />
      <!--  <div class="modal is-clipped" :class="{ 'is-active': showModal_post }">
      <div class="modal-background" @click="showModal_post = false, submitted = false"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              <strong> Se está postulando a la </strong>
           
            <span class="tag is-black is-medium"
              >Licitacion Nº: {{ currentLicitacion.numero }} /
              {{ currentLicitacion.anio }}
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

                    <label class="btn btn-default">
                      <input type="file" ref="file" @change="selectFile" />
                    </label>
                    <button
                      class="button"
                      :disabled="!selectedFiles"
                      @click="upload(currentLicitacion.id)"
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
      </div>
      
    </div> -->

      <div class="text-center">
        <v-btn dark color="orange darken-2" @click="snackbar = true">
          Open Snackbar
        </v-btn>

        <v-snackbar v-model="snackbar" :timeout="timeout">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div></v-card
    >
  </v-app>
</template>

<script>
/* import UploadFiles from "~/components/UploadFiles"; */
import UploadService from "~/services/UploadFilesService";
export default {
  data() {
    return {
      licitaciones: [],
      estado: "vigente",
      activeTab: 0,
      modal: true,
      modal_det: false,
      currentLicitacion: [],
      files: [],
      isActive: true,
      showModal_post: false,
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      tipo: "licitacion",
      message: "",
      postulante: {
        id: null,
        tipo: "licitacion",
        phone: "",
        nombre_apellido: "",
        email: "",
        cuit: "",
        inscripcion_id: null
      },
      submitted: false,
      fileInfos: [],
      multiLine: true,
      snackbar: false,
      text: `I'm a multi-line snackbar.`
    };
  },
  components: {
    /* UploadFiles */
  },
  created() {
    this.fetch_estado("vigente");
  },
  methods: {
    update(showModal_post) {
      this.showModal_post = showModal_post;
    },

    selectFile() {
      this.selectedFiles = this.$refs.file.files;
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
        "http://localhost:3333/api/v1/licitaciones"
      );
      this.licitaciones = ip;
    },
    async fetch_estado(estado) {
      try {
        let result = await this.$axios.$get(
          `http://localhost:3333/api/v1/licitaciones/${estado}`
        );
        this.licitaciones = result;
        this.modal = true;
        this.modal_det = false;
      } catch (error) {
        (this.snackbar = true), (this.text = "Error en el servidor");
      }
    },
    showModal(id) {
      this.fetchOne(id);
    },

    async fetchOne(id) {
      try {
        let result = await this.$axios.$get(
          `http://localhost:3333/api/v1/licitaciones/id/${id}`
        );
        this.currentLicitacion = result;
        this.modal = false;
        console.log(this.currentLicitacion, "L");
      } catch (error) {
        // what now?
        console.log(error);
      }
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
