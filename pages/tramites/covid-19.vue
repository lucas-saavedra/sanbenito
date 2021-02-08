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
          Protocolos COVID-2019
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <span>#QuedateEnCasa</span>
        </h1>
        <p>El Coronavirus es una enfermedad respiratoria leve que se transmite por vía respiratoria a través del contacto cercano o con superficies contaminadas. Solo en algunos casos puede complicarse, principalmente en personas mayores.</p>
        <br>
        <p style="text-align:center"><img src="/sanbenito/covid/covid1.jpeg" alt="COVID Difusión"></p>
        <br>
        <h2 class="subtitle"><strong>Protocolos COVID-19</strong></h2>
        <p class="buttons is-centered">
          <a href="/sanbenito/covid/Protocolo Bioseguridad Actividades Comerciales.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Protocolo Bioseguridad Actividades Comerciales</span>
          </a>
          <a href="/sanbenito/covid/Protocolo General para Cementerios.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Protocolo General para Cementerios</span>
          </a>
          <a href="/sanbenito/covid/Protocolo General para Restaurantes.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Protocolo General para Restaurantes</span>
          </a>
          <a href="/sanbenito/covid/Protocolo y Recomendaciones para Gimnasios.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Protocolo y Recomendaciones para Gimnasios</span>
          </a>
            
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
      title: 'San Benito - Protocolo COVID-19'
    };
  }
}
</script>