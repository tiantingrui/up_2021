<template>
  <div>
    count: {{ count }}
    <button @click="add">Add One</button>
    <router-link to="HelloWorld">hello</router-link>
  </div>
</template>

<script>
export default {
  name: "A",
  props: ["count"],
  methods: {
    add() {
      this.$emit("add", 3);
    },
  },
  // beforeCreate() {
  //     console.log('A before create')
  // },
  created() {
    console.log("A created");
  },
  // beforeMount() {
  //     console.log('A before mounte')
  // },
  mounted() {
    console.log("A mounted");
  },
  beforeUpdate() {
    console.log("A before update");
  },
  updated() {
    console.log("A updated");
  },
  beforeDestroy() {
    console.log("A before destory");
  },
  destroyed() {
    console.log("A destoryed");
  },
};
</script>
