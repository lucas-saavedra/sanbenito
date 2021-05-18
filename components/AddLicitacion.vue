<template>
  <div>
    <form action class="form" @submit.prevent="subir()">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            Estado
          </a>
        </p>
        <div class="control">
          <div class="select is-primary is-normal">
            <select v-model="licitacion.estado">
              <option value="vigente" autofocus>Vigente</option>
              <option value="en_evaluacion">En evaluación</option>
              <option value="adjudicada">Adjudicada</option>
            </select>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Nº
              </a>
            </p>
            <p class="control">
              <input
                class="input"
                type="number"
                id="numero"
                required
                v-model="licitacion.numero"
                name="numero"
                placeholder="Numeración"
              />
            </p>
          </div>
        </div>
        <div class="column">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Llamada
              </a>
            </p>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Ingrese aqui la llamada"
                id="anio"
                required
                v-model="licitacion.llamada"
                name="anio"
              />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Año
              </a>
            </p>
            <div class="control">
              <input
                class="input"
                type="number"
                placeholder="Ingrese aqui el año"
                id="anio"
                required
                v-model="licitacion.anio"
                name="anio"
              />
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                Tipo
              </a>
            </p>
            <div class="control">
              <div class="select is-primary is-normal">
                <select v-model="licitacion.tipo">
                  <option value="publica" autofocus>Publica</option>
                  <option value="privada">Privada</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">Título</label>
              <textarea
                required
                v-model="licitacion.titulo"
                type="text"
                class="textarea"
                placeholder="Ingrese aquí el titulo/concepto de la licitación"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Presupuesto Oficial</label>
          </div>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                <v-icon>mdi-currency-usd</v-icon>
              </a>
            </p>

            <p class="control">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                v-model="licitacion.presup_oficial"
                required
              />
            </p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Organismo Financiero</label>
          </div>
          <div class="field has-addons">
            <p class="control">
              <a class="button is-static">
                <v-icon>mdi-human-male-male</v-icon>
              </a>
            </p>

            <p class="control">
              <input
                class="input is-success"
                type="text"
                placeholder="Text input"
                v-model="licitacion.org_financiero"
                required
              />
            </p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="field">
            <label class="label">Decreto</label>
          </div>
          <div class="field">
            <p class="control">
              <input
                class="input"
                type="text"
                id="decreto"
                required
                v-model="licitacion.decreto"
                name="decreto"
                placeholder="Decreto"
              />
            </p>
          </div>
        </div>
        <div class="column is-half">
          <div class="field">
            <label class="label">Norma de Adjudicación</label>
          </div>
          <div class="field ">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Norma Adjudicación"
                id="norma_adj"
                required
                v-model="licitacion.norma_adj"
                name="norma_adj"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div class="field">
            <label class="label">Fecha de Adjudicación</label>
          </div>
          <div class="field ">
            <div class="control">
              <input
                class="input"
                type="date"
                placeholder="Fecha Adjudicación"
                id="fecha_adj"
                required
                v-model="licitacion.fecha_adj"
                name="fecha_adj"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label" for="pliego">Pliego</label>

        <label class="button">
          <input type="file" ref="file" @change="selectPliego" />
        </label>
      </div>
      <div class="field">
        <label class="label" for="pliego">Bases</label>

        <label class="button">
          <input type="file" ref="file" @change="selectBases" />
        </label>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button
            class="button is-link"
            type="submit"
            value="Registrar"
            @click="subir()"
          >
            Registrar
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="resetForm">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import UploadService from "~/services/UploadFilesService";
export default {
  data: () => ({
    licitacion: {
      anio: "2021",
      numero: 1,
      titulo: "Titulo licitacion 1",
      llamada: "1era",
      tipo: "publica",
      decreto: "36/21 P.M.S.B. del 08/02/2021",
      org_financiero: "ENOHSA",
      fecha_apertura:
        "01 DE MARZO DE 2021 A LAS 9 HORAS O SIGUIENTE SI AQUEL FUERA INHABIL, EN LA SEDE ADMINISTRATIVA DE LA MUNICIPALIDAD DE SAN BENITO SITO EN CALLE BASAVILBASO Nº 1094 – SAN BENITO – PROVINCIA DE ENTRE RIOS\r\n",
      presup_oficial: "17.377.861,79",
      precio_pliego: "Sin cargo.-",

      estado: "adjudicada"
    },
    valid: true,
    anio: "",
    estado: "Vigente",
    presup_oficial: "",
    titulo: "",
    numero: "",
    llamada: "",
    fecha_adj: "",
    files: [],
    en_blanco: [v => !!v || "Es requerido"],
    numero: [v => !!v || "Es requerido"],
    select: null,
    checkbox: false,
    date: new Date().toISOString().substr(0, 10)
  }),
  components: { UploadService },
  methods: {
    selectPliego() {
      this.selectedPliego = this.$refs.file.files;
    },
    selectBases() {
      this.selectedBases = this.$refs.file.files;
    },
    subir() {
      this.progress = 0;
      this.pliego = this.selectedPliego.item(0);
      this.bases = this.selectedBases.item(0);

      UploadService.upload_licitaciones(
        this.pliego,
        this.bases,
        this.licitacion.anio,
        this.licitacion.fecha_apertura,
        this.licitacion.numero,
        this.licitacion.estado,
        this.licitacion.titulo,
        this.licitacion.llamada,
        this.licitacion.tipo,
        this.licitacion.decreto,
        this.licitacion.presup_oficial,
        this.licitacion.precio_pliego,
        this.licitacion.org_financiero,

        event => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }
      )
        .then(response => {
          this.message = response.data.message;
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
    resetForm: function(e) {
      e.preventDefault();
      (this.licitacion.anio = ""),
        (this.licitacion.anio = ""),
        (this.licitacion.numero = ""),
        (this.licitacion.titulo = "");
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>
