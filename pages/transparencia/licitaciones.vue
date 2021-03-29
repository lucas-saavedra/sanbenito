<template>
  <main>
    <section class="hero">
      <div class="hero-body2">
        <div class="container">
          <Breadcrumb />
        </div>
      </div>
    </section>
    <section class="hero is-primary is-small has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h3 class="title is-3">Licitaciones</h3>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <b-tabs v-model="activeTab" type="is-toggle" expanded>
            <b-tab-item label="Adjudicados">
              <div v-for="product in products">
                {{ product.name }}
              </div></b-tab-item
            >

            <b-tab-item label="Vigentes">
              <b-table :data="data" :columns="columns" expanded></b-table>
            </b-tab-item>

            <b-tab-item label="Concursos">
              Nunc nec velit nec libero vestibulum eleifend. Curabitur pulvinar
              congue luctus. Nullam hendrerit iaculis augue vitae ornare.
              Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.
            </b-tab-item>
          </b-tabs>

          <!-- <div class="content">
          <p><strong>Llamada: </strong></p>
          <p><strong>Tipo de Licitación: </strong></p>
          <p><strong> Entrega de Sobres:</strong></p>
          <p><strong> Fecha de apertura: </strong></p>
          <p><strong>Presupuesto Oficial: </strong></p>
          <p><strong>Precio Pliego: </strong></p>
          <p><strong>Bases y Condiciones: </strong></p>
          <p><strong>Fecha Adjudicación: </strong></p>
          <p><strong> Norma de Adjudicación:</strong></p>
        </div>
      </div> -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      showBooks: false,

      category: "",
      products: [
        { name: "Keyboard", price: 44, category: "Accessories" },
        { name: "Mouse", price: 20, category: "Accessories" },
        { name: "Monitor", price: 399, category: "Accessories" },
        { name: "Dell XPS", price: 599, category: "Laptop" },
        { name: "MacBook Pro", price: 899, category: "Laptop" },
        { name: "Pencil Box", price: 6, category: "Stationary" },
        { name: "Pen", price: 2, category: "Stationary" },
        { name: "USB Cable", price: 7, category: "Accessories" },
        { name: "Eraser", price: 2, category: "Stationary" },
        { name: "Highlighter", price: 5, category: "Stationary" },
      ],
      todos: [],
data: [
    {
      id: 1,
      first_name: "Jesse",
      last_name: "Simmons",
      date: "2016-10-15 13:43:27",
      gender: "Male",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Jacobs",
      date: "2016-12-15 06:00:53",
      gender: "Male",
    },
    {
      id: 3,
      first_name: "Tina",
      last_name: "Gilbert",
      date: "2016-04-26 06:26:28",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Clarence",
      last_name: "Flores",
      date: "2016-04-10 10:28:46",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Anne",
      last_name: "Lee",
      date: "2016-12-06 14:38:38",
      gender: "Female",
    },
  ],
  columns: [
    {
      field: "id",
      label: "ID",
      width: "40",
      numeric: true,
    },
    {
      field: "first_name",
      label: "First Name",
    },
    {
      field: "last_name",
      label: "Last Name",
    },
    {
      field: "date",
      label: "Date",
      centered: true,
    },
    {
      field: "gender",
      label: "Gender",
    },
     {
      field: "gender",
      label: "Gender",
    },
    
    

  ],



    };
  },
  async fetch() {
    this.todos = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((res) => res.json());
  },
  head() {
    return {
      title: "San Benito - Gestión",
    };
  },
  computed: {
    filterProductsByCategory: function () {
      return this.products.filter(
        (product) => !product.category.indexOf(this.category)
      );
    },
  },
  
};
</script>
<style >
</style>