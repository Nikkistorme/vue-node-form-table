<template>
  <div id="app">
    <header>
      <nav>
        <h2><a href="http://localhost:3000/page/form">Form</a></h2>
        <h2><a href="http://localhost:3000/page/table">Data</a></h2>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters(["entries"])
  },
  mounted() {
    if (this.entries.length < 1) {
      this.$store.dispatch("getEntries")
    }
  }
}
</script>

<style>

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h2, h3 {
  margin: 0;
}

a {
  text-decoration: none;
  color: black;
}

header {
  width: 100%;
  height: 60px;
  box-shadow: grey 0px 0px 5px
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

nav h2 {
  margin: 10px;
}

main {
  display: flex;
  justify-content: center;
  margin: 10vh 15vw 0 15vw;
}

</style>
