<template>
  <div class="flex flex-wrap justify-around">
    <Card v-for="post in posts" v-bind:key="post.id" :post="post" />
  </div>
</template>

<script>
import Card from "@/components/Posts/Card.vue";
import axios from "axios";

export default {
  components: {
    Card,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => ((this.posts = response.data)));
  },
};
</script>
