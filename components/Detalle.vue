<template>
  <div>
    <p>Licitacion</p>
    <p>N / Anio</p>
    <p>Titulo</p>
    <p>N / Anio</p>
    <p>Llamada:</p>
    <p>Tipo de Licitación:</p>
    <p>Entrega de Sobres:</p>
    <p>Fecha de apertura:</p>
    <p>Presupuesto Oficial:</p>
    <p>Precio Pliego:</p>
    <p>Organismo Financiero:</p>
    <p>Norma de Adjudicación:</p>
    <p>Fecha Adjudicación:</p>
    <button>Bases y Condiciones:</button>
    <button>Pliego</button>
  </div>
</template>

<script>
export default {
  props: ["licitacion"],
  methods: {
    show(id) {
      this.$emit("showModal", id);
    }
  },
  data() {
    return {
      activeTab: 0
    };
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
