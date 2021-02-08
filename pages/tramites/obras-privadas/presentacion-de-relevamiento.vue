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
          Presentación de Relevamiento
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">Documentación Necesaria</h1>
        <p><strong>Presentar en una carpeta, en el orden que a continuación se detalla:</strong></p>
        <ul>
          <li>Carátula de Expediente. <strong><em>Descargar. </em></strong></li>
          <li>Solicitud de Construcción por duplicado. <strong><em>Descargar. </em></strong></li>
          <li>Fotocopia: Escritura, Boleto de compra, Reserva de compra.</li>
          <li>Fotocopia: Plano de Mensura del Lote.</li>
          <li>Plano de construcción en original transparente y tres copias: <em>VISADO POR EL COLEGIO DE PROFESIONALES CORRESPONDIENTE:</em><ul>
            <li>Planta de cada piso acotado</li>
            <li>Cortes: dos como mínimo</li>
            <li>Fachada/s – Esc.:1:50</li>
          </ul></li>
          <li>Balance de superficies <em>(silueta).</em></li>
          <li>Declaración jurada <em>(ATER).</em></li>
        </ul>
        <h1 class="title">El/los profesionales actuantes deberán presentar:</h1>
        <ul>
          <li>Formulario de Inscripción/Ratificación (tramitado).</li>
          <li>Constancia de pago de inscripción/Ratificación.</li>
          <li>Fotocopia DNI.</li>
          <li>Constancia ratificación de matricula expedida por el colegio de Profesionales correspondiente.</li>
        </ul>
        <br>
        <p class="buttons is-centered">
          <a href="/sanbenito/tramites/obras-privadas/Caratula del Expediente.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Caratula del Expediente</span>
          </a>
          <a href="/sanbenito/tramites/obras-privadas/Solicitud de Construcción.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Solicitud de Construcción</span>
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