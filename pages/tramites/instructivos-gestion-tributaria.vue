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
            Instructivos Gestión Tributaria
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          <span>Instrucciones Generación y Pago – Tasa Higiene, Profilaxis y Seguridad</span>
        </h1>
        <br>
        <p style="text-align:center">
          <a href="/sanbenito/tramites/Instrucciones-Generacion-y-Pago-Tasa-Higiene-Profilaxis-y-Seguridad.jpg" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Descargar Instructivo</span>
          </a><br>
          <img src="/sanbenito/tramites/Instrucciones-Generacion-y-Pago-Tasa-Higiene-Profilaxis-y-Seguridad.jpg" alt="Tramites">
        </p>
        <h1 class="title">
          <span>Instrucciones Pago – TGI y Obras Sanitarias</span>
        </h1>
        <br>
        <p style="text-align:center">
          <a href="/sanbenito/tramites/Instrucciones-Pago-TGI-y-Obras-Sanitarias.jpg" class="button is-link" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Descargar Instructivo</span>
          </a><br>
          <img src="/sanbenito/tramites/Instrucciones-Pago-TGI-y-Obras-Sanitarias.jpg" alt="Tramites">
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
      title: 'San Benito - Intructivos Gestión Tributaria'
    };
  }
}
</script>