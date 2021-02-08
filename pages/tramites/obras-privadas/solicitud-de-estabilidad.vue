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
        <h1 class="subtitle is-3">          
          Solicitud para Estabilidad de Barranca y No Inundabilidad 
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">Documentación Necesaria</h1>
        <ul>
            <li>Presentar por Mesa de Entrada, Planilla de Solicitud para Estabilidad de Barranca con los datos solicitados y firmada.</li>
        </ul>
        <br>
        <p class="buttons is-centered">
          <a href="/sanbenito/tramites/obras-privadas/NOTA-DE-ESTABLIDAD-DE-BARRANCA-Y-NO-INUNDABILIDAD.docx" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Planilla Solicitud Estabilidad Barranca y No Inundabilidad</span>
          </a>
        </p>
        <br>
        <div class="has-text-centered">
          <h1 class="title has-text-link">
            <span>Valor de Tramite: $50</span>
          </h1>
        </div>
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