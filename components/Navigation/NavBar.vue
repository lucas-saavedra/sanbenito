<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item"><LogoSanBenito width="200px"/></NuxtLink>
      <div class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="swapmenu">
        <div class="navbar-toggle">
          <font-awesome-icon icon="times" style="font-size: 2rem" v-if="isActiveMenu"/>
          <font-awesome-icon icon="ellipsis-v" style="font-size: 1.75rem" v-else/>
        </div>
      </div>
    </div>
    <div id="navbar" class="navbar-menu" v-bind:class="{ 'is-active': isActiveMenu }">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">
          <span class="icon"><font-awesome-icon :icon="['fas', 'home']"/></span>
          <span>Inicio</span>
        </NuxtLink>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon"><font-awesome-icon :icon="['fas', 'university']"/></span>
            <span>Gobierno</span>
          </a>
          <div class="navbar-dropdown">
            <NuxtLink to="/gobierno/historia/" class="navbar-item">
              <span class="icon"><font-awesome-icon :icon="['fas', 'city']"/></span>
              <span>Nuestra Ciudad</span>
            </NuxtLink>
            <NuxtLink to="/gobierno/gestion/" class="navbar-item">
              <span class="icon"><font-awesome-icon :icon="['fas', 'tasks']"/></span>
              <span>Gestión</span>
            </NuxtLink>
            <NuxtLink to="/gobierno/estructura-municipal/" class="navbar-item">
              <span class="icon"><font-awesome-icon :icon="['fas', 'sitemap']"/></span>
              <span>Estructura Municipal</span>
            </NuxtLink>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon"><font-awesome-icon :icon="['fas', 'search']"/></span>
            <span>Transparencia</span>
          </a>
          <div class="navbar-dropdown">
            <a href="http://181.228.27.231/contable/contable.aspx" class="navbar-item" target="_blank">
              <span class="icon"><font-awesome-icon :icon="['fas', 'calculator']"/></span>
              <span>Contabilidad</span>
            </a>
              <NuxtLink to="/transparencia/licitaciones" class="navbar-item">
              <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
              <span>Licitaciones</span>
              </NuxtLink>
  
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon"><font-awesome-icon :icon="['fas', 'gavel']"/></span>
            <span>HCD</span>
          </a>
          <div class="navbar-dropdown">
            <NuxtLink to="/hcd/autoridades/" class="navbar-item">
              <span>Autoridades</span>
            </NuxtLink>
            <a href="https://ben-ent-hcd.paisdigital.innovacion.gob.ar/" class="navbar-item" target="_blank">
              <span>HCD Transparente</span>
            </a>
            <NuxtLink to="/" class="navbar-item" style="display:none">
              <span>Noticias</span>
            </NuxtLink>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon"><font-awesome-icon :icon="['fas', 'copy']"/></span>
            <span>Trámites</span>
          </a>
          <div class="navbar-dropdown">
            <NuxtLink to="/tramites/covid-19/" class="navbar-item">
              <span>Protocolos COVID-19</span>
              <span class="icon"><font-awesome-icon :icon="['fas', 'virus']"/></span>
            </NuxtLink>
            <NuxtLink to="/tramites/instructivos-gestion-tributaria/" class="navbar-item">
              <span>Gestión Tributaria</span>
            </NuxtLink>
            <NuxtLink to="/tramites/moratoria-2020-2021/" class="navbar-item">
              <span>Moratoria 2020 - 2021</span>
            </NuxtLink>
            <NuxtLink to="/tramites/libre-deuda/" class="navbar-item">
              <span>Certificado Libre Deuda</span>
            </NuxtLink>
            <NuxtLink to="/tramites/licencias/" class="navbar-item">
              <span>Licencia Nacional de Conducir</span>
            </NuxtLink>
            <NuxtLink to="/tramites/habilitaciones/" class="navbar-item">
              <span>Habilitaciones</span>
            </NuxtLink>
            <NuxtLink to="/tramites/obras-privadas/" class="navbar-item">
              <span>Obras Privadas</span>
            </NuxtLink>
            <NuxtLink to="/tramites/aportes-no-reintegrables/" class="navbar-item">
              <span>Aportes no Reintegrables</span>
            </NuxtLink>
            <NuxtLink to="/tramites/mesa-de-entrada/" class="navbar-item">
              <span>Mesa de Entrada</span>
            </NuxtLink>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <span class="icon"><font-awesome-icon :icon="['fas', 'globe-americas']"/></span>
            <span>Muni Online</span>
          </a>
          <div class="navbar-dropdown">
            <a href="http://181.228.27.231/ingresospublicos/ingresospublicos.aspx" class="navbar-item" target="_blank">
              <span>Gestión Tributaria</span>
            </a>
            <a href="http://181.228.27.231/personal/personal.aspx" class="navbar-item" target="_blank">
              <span>Trámites de Personal</span>
            </a>
            <a href="https://trabajoenred.argentina.gob.ar/public/listados/?org=92082037273e016c62c9c6f0015c69be" class="navbar-item" target="_blank">
              <span>Vacantes Laborales</span>
            </a>
            <a href="http://www.munisanbenito.gov.ar/denuncias-programa-proteger/" class="navbar-item" target="_blank">
              <span>Denuncias Libre de Humo</span>
            </a>
            <a href="#" class="navbar-item" target="_blank">
              <span>GeoServicios</span>
            </a>
            <a href="#" class="navbar-item" target="_blank">
              <span>Portal de Proveedores</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    watch: {
      $route() {
        this.isActiveMenu = false;
      },
    },
  data(){ return {
    isActiveMenu: false
  }},
  methods:{
    swapmenu: function(event){
      this.isActiveMenu = !this.isActiveMenu

    }
  }
}
</script>