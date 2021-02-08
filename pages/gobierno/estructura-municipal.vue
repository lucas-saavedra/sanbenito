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
          Estructura Municipal
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        
        <h2 class="subtitle"><strong>Descargar Organigrama </strong></h2>
        <p style="text-align:center">
          
          <a href="/sanbenito/files/Estructura Municipal.pdf" class="button is-primary" target="_blank">
            <span>Estructura Municipal</span>
          </a></p>
     </div>
    </div>
  </section>
</main>
</template>

<script>
export default {
  head() {
    return {
      title: 'San Benito - Gestión'
    };
  }
}
</script>