<template>
  <div>
    <div class="submit-form">
      <div v-if="!submitted">
        <div class="field">
          <label class="label" for="name">Apellido y Nombre</label>
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

        <div class="field">
          <label class="label" for="email">Email</label>
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
        <div class="field">
          <label class="label" for="number">CUIT</label>
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
        <div class="field">
          <label class="label" for="tel">Celular</label>
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

        <div class="field">
          <label class="label" for="pliego">Pliego</label>
          <div v-if="currentFile" class="progress">
            <progress class="progress" v-bind:value="progress" max="100"
              >{{ progress }}%</progress
            >
          </div>

          <label class="btn btn-default">
            <input type="file" ref="file" @change="selectFile" />
          </label>
          <button class="button" :disabled="!selectedFiles" @click="upload">
            Postularse
          </button>
        </div>

        <div class="alert alert-light" role="alert">{{ message }}</div>
        <!-- <button @click="saveTutorial" class="btn btn-success">Submit</button>-->
      </div>
      <div v-else>
        <h4>You submitted successfully!</h4>
      </div>
    </div>
  </div>
</template>

<script>
import UploadService from "~/services/UploadFilesService";

export default {
  name: "upload-files",
  data() {
    return {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      postulante: {
        id: null,
        tipo: "",
        phone:"",
        nombre_apellido: "",
        email: "",
        cuit: ""
      },
      submitted: false,
      fileInfos: []
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description
      };

      TutorialDataService.create(data)
        .then(response => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },

    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },

    upload() {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);
      UploadService.upload(
        this.postulante.nombre_apellido,
        this.postulante.tipo,
        this.postulante.phone,
        this.postulante.cel,
        this.postulante.cuit,
        
        this.currentFile,
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
    }
  },
  mounted() {
    /*   UploadService.getFiles().then(response => {
      this.fileInfos = response.data;
    }); */
  }
};
</script>
<style scoped></style>
