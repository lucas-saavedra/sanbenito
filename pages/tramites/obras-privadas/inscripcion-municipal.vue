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
          Inscripción Municipal de Profesional
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">Documentación Necesaria</h1>
        <ul>
            <li>Formulario de Inscripción/Ratificación.</li>
            <li>Constancia de pago de inscripción/Ratificación.</li>
            <li>Fotocopia DNI.</li>
            <li>Constancia ratificación de matricula expedida por el colegio de Profesionales correspondiente.</li>
        </ul>
        <br>
        <p class="buttons is-centered">
          <a href="/sanbenito/tramites/obras-privadas/FP-INSCRIPCION-PROFESIONAL.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Formulario de Inscripción/Ratificación</span>
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