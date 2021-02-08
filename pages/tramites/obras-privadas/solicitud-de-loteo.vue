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
          Solicitud de Aprobación de Loteo y Obras de Urbanización
        </h1>
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <h1 class="title">Documentación Necesaria</h1>
        <ul>
          <li>Nombre y apellido completo, aclarar el estado civil.</li>
          <li>Cuit o Cuil  del o los solicitantes, domicilio. Si es persona física o razón social y tipo de societario si se tratará de una persona jurídica. </li>
          <li>La totalidad de los títulos justificatorios que invoquen el carácter del trámite. Título de propiedad y subsistencia de dominio otorgado por el Registro de la Propiedad y Plano de Mensura correspondiente.</li>
          <li>Solicitud de declaración de factibilidad del anteproyecto de subdivisión del predio, acreditando la propiedad del bien a subdividir.</li>
          <li>Plano de ubicación del terreno en escala 1:10.000, en donde se indicará el amanzanamiento e infraestructura real existente hasta cinco (5) cuadras a partir de su perímetro y en todo el entorno relacionado con el anteproyecto con mención del distrito de zonificación que corresponda.</li>
          <li>Anteproyecto de amanzanamiento, loteo, infraestructura, localización del espacio de reserva municipal y forestación.</li>
          <li>Planos con cota de nivel de terreno, las correspondientes curvas de nivel con una equidistancia a determinar en cada caso, el que deberá relacionarse a desagües próximos existentes y por lo menos a dos puntos de la calle más cercana.</li>
          <li>Memoria descriptiva del proyecto, la que incluirá certificaciones de los entes prestadores de los Servicios de Agua, Cloaca y Energía Eléctrica, sobre la posibilidad de dotación de los mismos; y, si el terreno bordea o comprende algún elemento del sistema fluvial-lacustre, certificación municipal de no inundabilidad. </li>
          <li>Ver otros requisitos en las Ordenanzas Nº361/2013 y Ordenanza Nº327/2012. </li>
        </ul>
        <h1 class="title">Los requisitos son los contemplados en</h1>
        <p class="buttons is-centered">
          <a href="/sanbenito/tramites/obras-privadas/Ordenanza-N-361-13-Modificatoria-Ordenanza-327-12" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Ordenanza Municipal Nº361/13 Mod. Ordenanza Nº327/12</span>
          </a>
          <a href="/sanbenito/tramites/obras-privadas/Ordenanza-N°-327-12-Subdivision-de-Loteos" class="button is-primary" target="_blank">
            <span class="icon"><font-awesome-icon :icon="['fas', 'download']"/></span>
            <span>Ordenanza Municipal N°327/12</span>
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