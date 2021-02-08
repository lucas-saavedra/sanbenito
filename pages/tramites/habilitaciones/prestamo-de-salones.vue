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
          Habilitaciones Comerciales, Industria y Servicios
        </h1>
        <h1 class="subtitle is-3">          
          Solicitud de prestamo de Salones Municipales
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">Documentación Necesaria</h1>
        <ul>
            <li>Presentar nota por Mesa de Entradas.</li>
            <li>Adjuntar la fotocopia del DNI del responsable/solicitante </li>
            <li>Boleta de pago de tasa inmobiliaria de su propiedad (coincidente con la dirección del DNI).</li>
        </ul>
        <br>
        <div class="has-text-centered">
          <h1 class="has-text-link">Consultas</h1>
          <span><a href="mailto:habilitaciones@munisanbenito.gov.ar">habilitaciones@munisanbenito.gov.ar</a><br>Teléfono <a href="tel:+543434793454">0343-4793454</a></span>
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
      title: 'San Benito - Habilitaciones'
    };
  }
}
</script>