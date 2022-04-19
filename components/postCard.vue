<template>
  <v-card class="mt-5">
    <v-container>
      <v-row align="center">
        <v-col class="py-0 mr-3" style="max-width: 50px; width: 50px" cols="2">
          <v-avatar size="50">
            <v-img
              alt="user"
              src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
            />
          </v-avatar>
        </v-col>
        <v-col class="py-0 px-0" cols="8">
          <v-card-title class="body-1 font-weight-bold">Nike</v-card-title>
          <v-card-subtitle
            >30 min <v-icon small>mdi-earth</v-icon></v-card-subtitle
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p class="body-2 text-justify" style="height: 50px; max-height: 50px">
            {{ truncatePostContent }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="px-0">
          <v-card flat width="600">
            <v-img
              :src="`https://picsum.photos/500/300?image=${3 * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${3 * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="2">
          <p class="grey-text text--lighten-3">
            <v-icon color="primary">mdi-thumb-up</v-icon>
            1k
          </p>
        </v-col>
        <v-col cols="5">
          <p class="grey-text text--lighten-3">150 comments 200 shares</p>
        </v-col>
      </v-row>
      <v-divider />
      <v-row justify="center">
        <v-col cols="4">
          <v-btn large elevation="0" text color="grey">
            <v-icon>mdi-thumb-up</v-icon>
            Like
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn large elevation="0" text color="grey">
            <v-icon>mdi-comment-outline</v-icon>
            Comment
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn large elevation="0" text color="grey">
            <v-icon>mdi-share-outline</v-icon>
            share
          </v-btn>
        </v-col>
      </v-row>
      <v-divider />
      <v-row aling="center">
        <v-col cols="3">
          <v-btn color="primary" text>View Comment</v-btn>
        </v-col>
      </v-row>
      <v-row aling="center">
        <v-col class="pb-0 mb-0" cols="12">
          <v-text-field
            dense
            filled
            rounded
            background-color="grey lighten-2"
            placeholder="Write a comment..."
          >
            <template #prepend>
              <v-avatar size="45">
                <v-img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                />
              </v-avatar>
            </template>
            <template #append>
              <v-btn icon>
                <v-icon>mdi-emoticon-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-camera-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-sticker-emoji</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      postContent:
        'Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.',
    }
  },
  computed: {
    truncatePostContent() {
      if (this.postContent.length > 300) {
        return this.postContent.substring(0, 300) + '...'
      } else {
        return this.postContent
      }
    },
  },
}
</script>
