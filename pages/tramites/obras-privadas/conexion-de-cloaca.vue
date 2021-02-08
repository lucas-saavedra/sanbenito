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
          
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">Documentación Necesaria</h1>
        <ul>
          <li>Fotocopia del Documento Titular/locatario.</li>
          <li>Fotocopia de acreditación de domino/contrato de alquiler debidamente sellado.</li>
          <li>Formulario de Solicitud de Conexión de Cloacas. <strong><em>Descargar e imprimir en papel cartulina A3. </em></strong></li>
          <li>Croquis realizado sobre la planta de la propiedad, al dorso del Formulario de Solicitud de Conexión de Cloacas, (Ver el modelo abajo). Esencial que se represente el tramo nuevo a conectar con identificación de la adecuación y pozos a cegar.</li>
          <li>Abonar los derechos de conexión a cloaca.</li>
          <li>Preparar las obras internas según especificaciones técnicas.</li>
        </ul>
        <br>
        <p class="buttons is-centered">
          <a href="/sanbenito/tramites/obras-privadas/Solicitud de Conexión de Cloacas.pdf" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Formulario de Solicitud de Conexión de Cloacas</span>
          </a>
          <a href="/sanbenito/tramites/obras-privadas/Planilla para Esquema de Conexiones.doc" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Planilla para Esquema de Conexiones</span>
          </a>
          <a href="/sanbenito/tramites/obras-privadas/Modelo Croquis para Esquema de Conexiones.doc" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Modelo Croquis para Esquema de Conexiones</span>
          </a>
        </p>
        <br>
        <div class="has-text-centered">
          <h1 class="title has-text-link">
            <span>Valor de Tramite: $5.300</span>
          </h1>
        </div>
        <h1 class="title">Observaciones:</h1>
        <ul>
          <li>La presentación de la solicitud tendrán una etapa de análisis y factibilidad técnica. </li>
          <li>La obra construcción de la obra interna  será realizada bajo exclusiva responsabilidad del propietario conforme a la reglamentación de Obras Sanitarias de la Nación.</li>
          <li>Durante la ejecución de la misma, y previo al tapado de la zanja, el usuario deberá solicitar a la Municipalidad una primera inspección a los efectos de que se verifiquen las características técnicas de la obra y de los materiales empleados, otorgándose una aceptación parcial que habilite la conexión a la red. En una segunda inspección, posterior a la efectivización de la conexión se verificará el tapado de la cámara séptica  y pozo negro. <strong>El no cumplimiento de esta condición será motivo de multa. </strong></li>
        </ul>
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