<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
        <nuxt-link :to="item.path">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>

  const excludewords = [
    "de",
    "del",
    "no"
  ]

  function rename(string){
    const words = []
    string.split("-").map((item, i, { length }) => {
      let word = item;
      if(!excludewords.includes(word)){
        word = item.charAt(0).toUpperCase() + item.slice(1)
      }
      words.push(word)
    })
    return words.join(" ")
  }



export default {
  computed: {
    crumbs() {
      const paths = this.$route.path.split("/");
      const crumbs = []
      paths.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = "#"
        crumb.name = rename(item)
        crumb.classes = 'is-active'

        if(i===0){
          crumb.path = "/"
          crumb.name = "Inicio"
          crumb.classes = ''
          crumbs.push(crumb)
        }

        if(item!=""){
          crumbs.push(crumb)
        }
      })

      crumbs[crumbs.length-1].classes = 'is-active has-text-weight-bold'

      return crumbs
    }
  }
}
</script>