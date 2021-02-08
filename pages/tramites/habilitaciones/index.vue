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
      </div>
    </div>
  </section>
  
  <section class="hero">
    <div class="hero-body">
      <div class="container content">
        <p>Este trámite permite al ciudadano habilitar el local para su explotación comercial, industrial o de servicios bajo diferentes modalidades. La Habilitación tiene por objetivo verificar las condiciones edilicias, eléctricas, higiénico-sanitarias y ambientales como así también la actividad que realizará sea certificada y/o controlada por la autoridad competente en la temática.</p>
        <h1 class="title">
          <span>Tramites</span>
        </h1>
        <p class="buttons has-text-centered">
          <NuxtLink to="/tramites/habilitaciones/primera-vez/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Habilitación Comercial, Industria o Servicio – Primera vez</span>
          </NuxtLink>
          <NuxtLink to="/tramites/habilitaciones/renovaciones/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Renovación de Habilitación: Comercial, Industria o Servicio</span>
          </NuxtLink>
          <NuxtLink to="/tramites/habilitaciones/libreta-sanitaria/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Solicitud de Libreta Sanitaria</span>
          </NuxtLink>
          <NuxtLink to="/tramites/habilitaciones/prestamo-de-salones/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Solicitud Préstamo Salones Municipales</span>
          </NuxtLink>
          <NuxtLink to="/tramites/habilitaciones/autorizacion-eventos/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Autorización de Eventos Públicos y Privados</span>
          </NuxtLink>
          <NuxtLink to="/tramites/habilitaciones/residuos-peligrosos/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Solicitud de Certificado de Residuos Peligrosos</span>
          </NuxtLink>
          <NuxtLink to="/tramites/habilitaciones/vendedores-ambulantes/" class="button is-success">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Autorización para Vendedores Ambulantes y Feriantes</span>
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
      title: 'San Benito - Habilitaciones'
    };
  }
}
</script>