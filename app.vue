<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <!-- -->
    </v-navigation-drawer>
    <v-app-bar
      app
      color="teal-darken-4"
      dense
      flat
      dark
      rounded
      style="width: 100vw"
    >
      <template #prepend>
        <v-app-bar-nav-icon @click="onClickToggleNav" />
      </template>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <template #append>
        <span>로그아웃</span>
      </template>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <NuxtPage style="height: 2000px" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    title: import.meta.env.VITE_TITLE,
    drawer: false,
  }),
  methods: {
    onClickToggleNav() {
      this.drawer = !this.drawer
    },
  },
}
</script>
<style>
@import 'assets/base.css';
</style>
