<template>
  <v-app>
    <v-card id="lateral">
      <v-toolbar dark tabs flat color="grey darken-4">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>CAR SHOP</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-slot:extension>
          <v-tabs>
            <v-chip class="ma-2" color="white" text-color="grey darken-4" to="/" text>Home</v-chip>
            <v-chip class="ma-2" color="white" text-color="grey darken-4" to="/Shop" text>Shop</v-chip>
            <v-chip class="ma-2" color="white" text-color="grey darken-4" to="/showShop" text>Store</v-chip>
          </v-tabs>
          <v-chip class="ma-2" color="white" text-color="grey darken-4" to="/Login" text>Login</v-chip>
          <v-chip class="ma-2" color="white" text-color="grey darken-4" to="/signin" text>Sing in</v-chip>
        </template>
      </v-toolbar>
    </v-card>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
  }),
};
</script>
<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>