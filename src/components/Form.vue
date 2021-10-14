<template>
  <section class="form-container">
    <form class="form" v-on:submit.prevent="submitForm(form)">
      <div class="form-inputs">
        <input type="text" v-model="form.name" placeholder="name">
        <input type="text" v-model="form.email" placeholder="email">
        <input type="text" v-model="form.comments" placeholder="comments">
      </div>
      <button type="submit">Add Entry</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        comments: ""
      }
    }
  },
  methods: {
    submitForm(form) {
      this.$store.dispatch("postEntry", form).then(() => {
        this.$router.push("./table");
      });
    }
  }
}
</script>

<style>

.form-inputs {
  display: flex;
  flex-direction: column;
    width: 400px;
  box-shadow: grey 0px 0px 5px;
  border-radius: 10px;
  overflow: hidden;
}

.form input {
  outline: none;
  padding: 10px;
  border: none;
}

.form button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  outline: none;
  background: #c4bfe7;
  cursor: pointer;
  color: white;
}
</style>