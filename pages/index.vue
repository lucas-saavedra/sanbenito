<template>

  <main>
    <section class="hero is-primary is-bold is-fullheight-with-navbar">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h2 class="subtitle">
            Bienvenido a la Ciudad de San Benito
          </h2>
          <div class="level"><div class="level-item has-text-centered">Síguenos en nuestras redes sociales</div></div>
          <div class="buttons is-centered">
            <a style="margin-right:35px" href="https://www.facebook.com/MunicipalidadDeSanBenito/" target="_blank">
              <span class="icon has-text-light"><font-awesome-icon :icon="['fab', 'facebook-square']"  style="font-size: 3rem"/></span>
            </a>
            <a href="https://www.instagram.com/municipio_sanbenito" target="_blank">
              <span class="icon has-text-light"><font-awesome-icon :icon="['fab', 'instagram']"  style="font-size: 3rem"/></span>
            </a>
          </div>
          <div class="buttons is-centered">
              <NuxtLink to="/tramites/covid-19/" class="button is-light is-outlined">
                  <span class="icon"><font-awesome-icon :icon="['fas', 'virus']"/></span>
                  <strong>Protocolo COVID-19</strong>
              </NuxtLink>
              <NuxtLink to="/tramites/" class="button is-light is-outlined">
                  <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
                  <strong>Información para Trámites</strong>
              </NuxtLink>
              <a href="http://181.228.27.231/ingresospublicos/ingresospublicos.aspx" class="button is-light is-outlined" target="_blank">
                  <span class="icon"><font-awesome-icon :icon="['fas', 'calendar-minus']"/></span>
                  <strong>Gestión Tributaria</strong>
              </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
  }
</script>


<style>

</style>
