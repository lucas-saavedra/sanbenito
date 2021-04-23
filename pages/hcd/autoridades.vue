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
          <h1 class="title is-1">Honorable Consejo Deliberante</h1>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title"><span>Presidente</span></h1>
              <p>Rubén Palacios</p>
            </div>
            <div class="column">
              <h1 class="title"><span>Secretario</span></h1>
              <p>Eduardo Massei</p>
            </div>
            <div class="column">
              <h1 class="title"><span>Frente Cambiemos</span></h1>
              <p>Carlos Ramos</p>
              <p>Sonia Herrlein</p>
              <p>Oscar Biase</p>
              <p>Alba Luz Zampieri</p>
              <p>Andrés López</p>
              <p>Alcira Lauck</p>
            </div>
            <div class="column">
              <h1 class="title"><span>Frente Creer</span></h1>
              <ul>
                <li>Pablo Buffa</li>
                <li>Marcia Fabricius</li>
                <li>Guillermo Leal</li>
                <li>Ivón Kunzi</li>
                <li>Gabriel Olivera</li>
              </ul>
            </div>
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
      title: "HCD - Autoridades",
    };
  },
};
</script>