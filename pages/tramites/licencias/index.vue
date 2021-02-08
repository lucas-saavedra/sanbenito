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
          Licencia Nacional de Conducir
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <p>La Licencia Nacional de Conducir es un documento único que la autoridad competente de cada jurisdicción otorga a un ciudadano con el objeto de habilitarlo legalmente a conducir un vehículo, sea con carácter particular o profesional, previo cumplimiento de los requisitos establecidos por la Ley Nacional de Tránsito 24.449.</p>
        <h1 class="title">
          <span>Tramites</span>
        </h1>
        <p class="buttons has-text-centered">
          <NuxtLink to="/tramites/licencias/original/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Licencia Original</span>
          </NuxtLink>
          <NuxtLink to="/tramites/licencias/renovaciones/" class="button is-primary">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Renovaciones</span>
          </NuxtLink>
          <NuxtLink to="/tramites/licencias/ampliacion/" class="button is-danger">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Ampliación</span>
          </NuxtLink>
        </p>
        <h3>
          CAMBIO DE DATOS
        </h3>
        <span>Desde el momento en que cambia los datos en el DNI, tiene 90 días corridos para cambiarlos  en la Licencia (Articulo Nº18 de la Ley Nacional de Transito).</span>

     </div>
    </div>
  </section>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'San Benito - Licencia Nacional de Conducir'
    };
  }
}
</script>