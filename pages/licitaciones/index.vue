<template>
  <main>
    <section class="hero">
      <v-app>
        <div class="hero-body">
          <div class="container">
            <v-card>
              <v-toolbar flat color="primary" dark>
                <v-toolbar-title>Obras Publicas</v-toolbar-title>
              </v-toolbar>
              <v-tabs>
                <v-tab>
                  Agregar licitación
                </v-tab>
                <v-tab>
                  Modificar licitación
                </v-tab>
                <v-tab>
                  Postulantes
                </v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <AddLicitacion />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <Licits />
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                     
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </div>
        </div>
      </v-app>
    </section>
  </main>
</template>

<script>
import Licits from "~/components/Licits.vue";
/* import AddLicitacion from "~/components/addLicitacion"; */
export default {
  components: { Licits },
  data() {
    return {};
  },

  head() {
    return {
      title: "San Benito - Acceso"
    };
  }
};
</script>

<style lang="scss" scoped></style>
