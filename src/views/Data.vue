<template>
  <div class="py-12 bg-white rounded-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Counter VUE JS
        </h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Learn to use VUEX store
        </p>
        <h1 class="text-base text-indigo-600 font-bold tracking-wide uppercase">
          {{ $store.state.count }}
        </h1>
      </div>

      <div class="mt-10 text-center">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            @click="$store.commit('increment')"
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            +
          </button>

          <button
            @click="$store.commit('decrease')"
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            -
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
