<template>
<main>
  <section class="hero">
    <div class="hero-body2">
      <div class="container">
      <Breadcrumb />
      </div>
    </div>
  </section>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          Tramites
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="buttons has-text-centered">
          <NuxtLink to="/tramites/covid-19/" class="button is-success">
              <span>Protocolos COVID-19</span>
              <span class="icon"><font-awesome-icon :icon="['fas', 'virus']"/></span>
            </NuxtLink>
            <NuxtLink to="/tramites/instructivos-gestion-tributaria/" class="button is-danger">
              <span>Gestión Tributaria</span>
            </NuxtLink>
            <NuxtLink to="/tramites/moratoria-2020-2021/" class="button is-success">
              <span>Moratoria 2020 - 2021</span>
            </NuxtLink>
            <NuxtLink to="/tramites/libre-deuda/" class="button is-success">
              <span>Certificado Libre Deuda</span>
            </NuxtLink>
            <NuxtLink to="/tramites/licencias/" class="button is-success">
              <span>Licencia Nacional de Conducir</span>
            </NuxtLink>
            <NuxtLink to="/tramites/habilitaciones/" class="button is-success">
              <span>Habilitaciones</span>
            </NuxtLink>
            <NuxtLink to="/tramites/obras-privadas/" class="button is-success">
              <span>Obras Privadas</span>
            </NuxtLink>
            <NuxtLink to="/tramites/aportes-no-reintegrables/" class="button is-success">
              <span>Aportes no Reintegrables</span>
            </NuxtLink>
            <NuxtLink to="/tramites/mesa-de-entrada/" class="button is-success">
              <span>Mesa de Entrada</span>
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
      title: 'San Benito - Trámites'
    };
  }
}
</script>