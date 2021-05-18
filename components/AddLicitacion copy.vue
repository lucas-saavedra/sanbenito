<template>
 <v-form ref="form" v-model="valid" lazy-validation>
    <v-row justify="start">
      <v-col cols="12" sm="3">
        <v-select
          v-model="select"
          :items="items"
          item-text="state"
          item-value="valor"
          label="Tipo"
          return-object
          outlined
          :rules="en_blanco"
        ></v-select>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="anio"
          :rules="en_blanco"
          label="Año"
          required
          outlined
          type="number"
          hint="Año de la licitacion"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="numero"
          :rules="en_blanco"
          label="Nº"
          required
          outlined
          type="number"
          hint="Numero de la licitacion"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="llamada"
          :rules="en_blanco"
          label="Lammada Nº"
          required
          outlined
          hint="Llamada de la licitacion"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="start"
      ><v-col cols="12" md="3">
        <v-text-field
          v-model="presup_oficial"
          :rules="en_blanco"
          label="Presupuesto Oficial"
          required
          outlined
          clearable
          prepend-inner-icon="mdi-currency-usd"
        ></v-text-field
      ></v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="fecha_adj"
          :rules="en_blanco"
          label="Fecha de apertura de sobres"
          required
          outlined
          type="date"
        ></v-text-field>
      </v-col>
      <v-col cols="10" md="6">
        <v-textarea
          counter
          label="Titulo"
          :rules="en_blanco"
          outlined
        ></v-textarea>
      </v-col>
    </v-row>

    <v-file-input accept="image/*" label="Pliego"></v-file-input>
    <v-btn :disabled="!valid" type ="submit" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,





    anio: "",
    presup_oficial: "",
    titulo: "",
    numero: "",
    llamada: "",
    fecha_adj: "",
    en_blanco: [v => !!v || "Es requerido"],
    numero: [v => !!v || "Es requerido"],
    select: null,
    checkbox: false,
    items: [
      { state: "Vigente", valor: "vigente" },
      { state: "En Evaluacion", valor: "en_evaluacion" },
      { state: "Adjudicada", valor: "adjudicada" }
    ],
    date: new Date().toISOString().substr(0, 10)
  }),
  components: {},
  methods: {
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
