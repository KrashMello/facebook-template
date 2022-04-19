<template>
  <v-container fluid class="pt-0 grey lighten-3">
    <v-row justify="space-around">
      <v-col cols="10">
        <v-card class="d-flex">
          <v-img
            height="400px"
            class="align-end"
            src="https://picsum.photos/id/11/500/300"
          >
            <v-card flat class="rounded-0">
              <v-card-title class="align-end">
                <v-avatar
                  style="position: absolute; border: solid 2px #ffffff"
                  size="80"
                >
                  <img
                    alt="user"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
                <p style="margin-left: 100px">John Doe</p>
                <v-spacer />
                <v-btn small color="primary">
                  <v-icon small>mdi-pencil</v-icon> contact us
                </v-btn>
              </v-card-title>
              <v-divider />
              <v-toolbar dense max-height="50px">
                <v-tabs v-model="tab" align-with-title>
                  <v-tabs-slider color="primary"></v-tabs-slider>
                  <v-tab v-for="item in items" :key="item">
                    {{ item }}
                  </v-tab>
                </v-tabs>
                <v-spacer />
                <v-btn elevation="0" small color="grey lighten-3" class="mr-3">
                  <v-icon small class="mr-3"> mdi-thumb-up </v-icon>
                  Like
                </v-btn>
                <v-btn elevation="0" small color="grey lighten-3" class="mr-3">
                  <v-icon small class="mr-3"> mdi-facebook-messenger </v-icon>
                  Messenger
                </v-btn>
                <v-btn elevation="0" small color="grey lighten-3" class="mr-3">
                  <v-icon small> mdi-magnify </v-icon>
                </v-btn>
                <v-btn elevation="0" color="grey lighten-3" small> ... </v-btn>
              </v-toolbar>
            </v-card>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-7" justify="center" align="center">
      <v-col cols="10">
        <v-card flat color="grey lighten-3">
          <v-container fluid>
            <v-row>
              <v-col md="5">
                <v-card>
                  <v-card-title>About</v-card-title>
                  <v-list>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-information</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, urna consequat felis vehicula class ultricies
                          mollis dictumst, aenean non a in donec nulla.
                          Phasellus ante pellentesque erat cum risus consequat
                          imperdiet aliquam, integer placerat et turpis mi eros
                          nec lobortis taciti, vehicula nisl litora tellus
                          ligula porttitor metus.
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          150.202.220 People like this
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-briefcase-check</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          143.555.200 People follow this
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-web</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-btn small text color="primary"
                            >https://helloworld.com/</v-btn
                          >
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-facebook-messenger</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-btn text color="primary">Send Message</v-btn>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
                <v-card class="mt-5">
                  <v-card-title
                    >Photos
                    <v-spacer />
                    <v-btn text small color="primary">See all</v-btn>
                  </v-card-title>
                  <v-card flat>
                    <v-container fluid>
                      <v-row justify="center" class="mb-3">
                        <v-col
                          v-for="n in 9"
                          :key="n"
                          class="d-flex child-flex pa-1"
                          cols="4"
                        >
                          <v-img
                            :src="`https://picsum.photos/500/300?image=${
                              n * 5 + 10
                            }`"
                            :lazy-src="`https://picsum.photos/10/6?image=${
                              n * 5 + 10
                            }`"
                            aspect-ratio="1"
                            class="grey lighten-2"
                          ></v-img>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-card>
              </v-col>
              <v-col md="7">
                <v-card class="d-flex">
                  <v-container>
                    <v-row justify="space-between" align="center">
                      <v-col cols="2">
                        <v-avatar size="50">
                          <img
                            alt="user"
                            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                          />
                        </v-avatar>
                      </v-col>
                      <v-col cols="10">
                        <v-btn block color="grey lighten-1" elevation="0"
                          >Create Post</v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-btn elevation="0" large color="white">
                        <v-icon color="green" class="mr-2"
                          >mdi-image-multiple</v-icon
                        >
                        Photo/Video
                      </v-btn>
                      <v-btn elevation="0" large color="white">
                        <v-icon color="red" class="mr-2">mdi-map-marker</v-icon>
                        Check in
                      </v-btn>
                      <v-btn elevation="0" large color="white">
                        <v-icon color="primary" class="mr-2"
                          >mdi-account-plus</v-icon
                        >
                        Tag Friend
                      </v-btn>
                    </v-row>
                  </v-container>
                </v-card>
                <!-- agregar el PostCard -->
                <postCard v-for="n in 2" :key="n" />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      tab: null,
      items: ['Home', 'About', 'Photos', 'Instagram'],
    }
  },
}
</script>
