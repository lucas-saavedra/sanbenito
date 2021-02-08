<template>
  <main>
    <section class="hero is-danger is-bold is-fullheight-with-navbar">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">
            <strong>ERROR {{error.statusCode}}</strong>
          </h1>
          <h2 class="subtitle" v-if="error.statusCode === 404">La pagina solicitada no existe</h2>
          <h2 class="subtitle" v-if="error.statusCode === 500">Hubo un problema interno en el servidor</h2>
          <div class="buttons is-centered">
            <NuxtLink to="/" class="button is-light is-outlined">
                <span class="icon"><font-awesome-icon :icon="['fas', 'angle-double-left']"/></span>
                <strong>Volver al inicio</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: ['error'],
  head(){ return {
    title: 'San Benito - Error'
  }}
}
</script>
