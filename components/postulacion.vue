<template>
  <div class="modal is-clipped" :class="{ 'is-active': showModal_post }">
    <div
      class="modal-background"
      @click="show_post"
      v-on:click="submitted = false"
    ></div>
    <div class="modal-content">
      <div class="card">
        <header class="card-header">
          <div class="card-header-title">
            <strong> Se está postulando: </strong>
            <span class="tag is-black is-medium">
              <div id="titulo">{{ tipo + " " }}</div>
              Nº {{ current.numero }} /
              {{ current.anio }}
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
                    <progress class="progress" v-bind:value="progress" max="100"
                      >{{ progress }}%</progress
                    >
                  </div>

                  <label class="button">
                    <input type="file" ref="file" @change="selectFile" />
                  </label>
                  <button
                    class="button"
                    :disabled="!selectedFiles"
                    @click="upload(current.id)"
                  >
                    Postularse
                  </button>
                </div>

                <article v v-if="message != ''" class="message is-danger">
                  <div class="message-body" role="alert">
                    {{ message }}
                  </div>
                </article>

                <!-- <button @click="saveTutorial" class="btn btn-success">Submit</button>-->
              </div>
              <div class="notification is-success" v-else>
                <p>¡Te has postulado satisfactoriamente!</p>
              </div>
            </div>
          </div>
        </div>
        <v-app>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="Apellido y Nombre"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-app>
      </div>
    </div>
  </div>
</template>

<script>
import UploadService from "~/services/UploadFilesService";

export default {
  props: ["current", "showModal_post", "tipo"],

  data() {
    return {
      concursos: [],
      estado: "vigente",
      condition: true,
      currentConcursosAdj: [],
      modal: true,
      files: [],
      isActive: true,

      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      postulante: {
        id: null,
        tipo: "",
        phone: "",
        nombre_apellido: "",
        email: "",
        cuit: "",
        inscripcion_id: null
      },
      submitted: false,
      fileInfos: []
    };
  },
  components: {
    UploadService
  },
  created() {},

  methods: {
    show_post() {
      let showmodalpost = this.showModal_post;
      showmodalpost = false;
      this.$emit("update-modal", showmodalpost);
    },
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },

    upload(id) {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      this.postulante.tipo = this.tipo;
      
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
    }
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
#titulo {
  text-transform: lowercase;
}
#titulo::first-letter {
  text-transform: uppercase;
}
</style>
