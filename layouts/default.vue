<template>
  <v-app>
    <v-app-bar fixed app>
      <v-container fluid>
        <v-row align="center" justify="space-between">
          <v-col class="px-0" style="max-width: 36px" md="1">
            <v-btn color="blue" icon elevation="0" rounded
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
          </v-col>

          <v-col md="2">
            <v-text-field
              dense
              solo
              rounded
              background-color="grey lighten-2"
              flat
              prepend-inner-icon="mdi-magnify"
              hide-details
            />
          </v-col>
          <v-col offset-md="1" md="5">
            <v-container fluid>
              <v-row justify="space-between">
                <v-btn icon rounded><v-icon>mdi-home</v-icon></v-btn>
                <v-btn icon rounded><v-icon>mdi-flag</v-icon></v-btn>
                <v-badge bordered color="error" content="12" overlap
                  ><v-btn icon rounded
                    ><v-icon>mdi-youtube</v-icon></v-btn
                  ></v-badge
                >
                <v-btn icon rounded><v-icon>mdi-store</v-icon></v-btn>
                <v-btn icon rounded outlined
                  ><v-icon>mdi-account-group</v-icon></v-btn
                >
              </v-row>
            </v-container>
          </v-col>
          <v-col offset-md="1" md="2">
            <v-row justify="space-between">
              <v-btn color="grey lighten-2" small fab elevation="0" rounded
                ><v-icon>mdi-plus</v-icon></v-btn
              >
              <v-btn color="grey lighten-2" small fab elevation="0" rounded
                ><v-icon>mdi-facebook-messenger</v-icon></v-btn
              >
              <v-btn color="grey lighten-2" small fab elevation="0" rounded
                ><v-icon>mdi-bell</v-icon></v-btn
              >
              <v-btn color="grey lighten-2" small fab elevation="0" rounded
                ><v-icon>mdi-menu-down</v-icon></v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
