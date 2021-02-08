<template>
<main>
  <section class="hero">
    <div class="hero-body2">
      <div class="container">
      <Breadcrumb />
      </div>
    </div>
  </section>
  <section class="hero is-success">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">          
          Obras Privadas
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">
          <span>Tramites</span>
        </h1>
        <p class="buttons has-text-centered">
          <NuxtLink to="/tramites/obras-privadas/inscripcion-municipal/" class="button is-danger">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Inscripción Municipal de Profesional</span>
          </NuxtLink>
          <NuxtLink to="/tramites/obras-privadas/presentacion-de-proyecto/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Presentación de Proyecto</span>
          </NuxtLink>
          <NuxtLink to="/tramites/obras-privadas/presentacion-de-relevamiento/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Presentación de Relevamiento</span>
          </NuxtLink>
          <NuxtLink to="/tramites/obras-privadas/presentacion-de-final-de-obra/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Presentación de Finalización de Obra</span>
          </NuxtLink>
          <NuxtLink to="/tramites/obras-privadas/conexion-de-cloaca/" class="button is-primary">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Conexión de Cloaca</span>
          </NuxtLink>
          <NuxtLink to="/tramites/obras-privadas/solicitud-de-loteo/" class="button is-primary">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Solicitud de Loteo</span>
          </NuxtLink>
          <NuxtLink to="/tramites/obras-privadas/solicitud-de-estabilidad/" class="button is-primary">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Solicitud para Estabilidad de Barranca y no Inundabilidad</span>
          </NuxtLink>
        </p>
     </div>
    </div>
  </section>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'San Benito - Obras Privadas'
    };
  }
}
</script>