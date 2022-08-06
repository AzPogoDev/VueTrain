<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <div class="px-6 pt-4 pb-2">
      <h2>{{ post.title }}</h2>
    </div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base">
        {{ post.body }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        {{ post.id }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ post.userId }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["post"],
};
</script>
