<template>
  <div id="app">
    <!-- {{count}} -->
    <A :count="count" @add="add"></A>
  </div>
</template>

<script>
import A from "./components/A.vue";

export default {
  name: "App",
  components: {
    A,
  },
  data() {
    return {
      count: null,
    };
  },
  methods: {
    add(num) {
      this.count += num
    }
  },  
  // beforeCreate() {
  //   console.log("index before create");
  // },
  created() {
    console.log("index created");
  },
  // beforeMount() {
  //   console.log("index before mounte");
  // },
  mounted() {
    console.log("index mounted");
  },
  beforeUpdate() {
    console.log("index before update");
  },
  updated() {
    console.log("index updated");
  },
  beforeDestroy() {
    console.log('index before destory')
  },
  destroyed() {
    console.log('index destoryed')
  }
};
</script>