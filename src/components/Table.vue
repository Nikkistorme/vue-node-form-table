<template>
  <section class="table">
    <div class="table-row table-labels">
      <div class="table-column"><h3>Name</h3></div>
      <div class="table-column"><h3>Email</h3></div>
      <div class="table-column"><h3>Comments</h3></div>
    </div>
    <div class="table-row" v-for="(entry, i) in entries" :key="i">
      <div class="table-column">{{ entry.name }}</div>
      <div class="table-column">{{ entry.email }}</div>
      <div class="table-column">{{ entry.comments }}</div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters(["entries"])
  }
}
</script>

<style>
.table {
  width: 100%;
  box-shadow: grey 0px 0px 5px;
  border-radius: 10px;
  overflow: hidden;
}

.table-row {
  display: flex;
  height: 50px;
}

.table-row:nth-child(odd) {
    background: #f5f5f5;
}

.table-row.table-labels {
  background: #c4bfe7;
}

.table-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>