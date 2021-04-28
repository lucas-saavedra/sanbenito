<template>
        <tr>
          <td>
            <span class="tag is-primary is-medium"
              >{{ licitacion.licitacion_n }} / {{ licitacion.anio }}</span
            >
          </td>
          <td>
            <p>{{ licitacion.tipo }}</p>
          </td>
          <td id="titulo">{{ licitacion.titulo }}</td>
          <td>
            <button class="button">
              <span class="icon"
                ><font-awesome-icon :icon="['fas', 'eye']"
              /></span>
            </button>
          </td>
        </tr>
</template>

<script>
export default {
  props:['licitacion'],
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
