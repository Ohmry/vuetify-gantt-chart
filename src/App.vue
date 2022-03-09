<template>
  <v-app>
    <v-app-bar color="#5B7347" height="32px" flat>
      <router-link to="/">
        <v-app-bar-title>
          <v-icon>grass</v-icon>
          <span>Task Schedule</span>
        </v-app-bar-title>
      </router-link>
    </v-app-bar>
    <v-toolbar flat color="#f5f5f5" height="40px" max-height="40px" style="border-bottom: 1px solid #26B2A2;">
      <v-toolbar-items class="py-1">
        <v-btn depressed small class="px-2">
          New
          <!-- <v-icon color="#5B7347">add</v-icon> -->
        </v-btn>
        <v-btn class="app-btn px-2" depressed small disabled>
          Edit
          <!-- <v-icon color="#5B7347">delete_outline</v-icon> -->
        </v-btn>
        <v-btn depressed small class="px-2">
          Delete
          <!-- <v-icon color="#5B7347">delete_outline</v-icon> -->
        </v-btn>
         <v-divider class="mx-2" vertical></v-divider>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <v-toolbar class="app-bar" dense flat max-height="48" color="#5B7347">
      <router-link to="/">
        <v-toolbar-title class="app-bar__title text-h5">
          Task Schedule
        </v-toolbar-title>
      </router-link>
    </v-toolbar> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.router-link-active {
  margin: auto;
}
.v-app-bar-title {
  user-select: none;
}
.v-app-bar-title__content {
  color: white !important;
  font-size: 18px;
  text-overflow: unset;
}
.v-app-bar-title__content > i {
  color: white !important;
  vertical-align: sub !important;
  margin-right: 5px;
}
.app-btn.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #F5F5F5 !important;
}

.app-bar__title {
  color: white;
  user-select: none;
}
.app-bar > .v-toolbar__content > a {
  text-decoration: none;
}
.v-list > a > .v-list-item:hover {
  background-color: #5B7347;
}
.v-list > a > .v-list-item:hover > .v-list-item__title,
.v-list > a > .v-list-item:hover > .v-list-item__icon > i {
  color: white !important;
  transition: 0.3s;
}

/*
  COLOR URL : https://color.adobe.com/Early-Soft-Summer-color-theme-19546833
*/
/* Color Theme Swatches in Hex */
.Early-Soft-Summer-1-hex { color: #5B7347; }
.Early-Soft-Summer-2-hex { color: #90AB6A; }
.Early-Soft-Summer-3-hex { color: #AFCF95; }
.Early-Soft-Summer-4-hex { color: #F1E7E1; }
.Early-Soft-Summer-5-hex { color: #E3C1C9; }

/* Color Theme Swatches in RGBA */
.Early-Soft-Summer-1-rgba { color: rgba(91, 115, 71, 1); }
.Early-Soft-Summer-2-rgba { color: rgba(144, 171, 106, 1); }
.Early-Soft-Summer-3-rgba { color: rgba(175, 207, 149, 1); }
.Early-Soft-Summer-4-rgba { color: rgba(241, 231, 225, 1); }
.Early-Soft-Summer-5-rgba { color: rgba(227, 193, 201, 1); }

/* Color Theme Swatches in HSLA */
.Early-Soft-Summer-1-hsla { color: hsla(92, 23, 36, 1); }
.Early-Soft-Summer-2-hsla { color: hsla(84, 27, 54, 1); }
.Early-Soft-Summer-3-hsla { color: hsla(93, 37, 69, 1); }
.Early-Soft-Summer-4-hsla { color: hsla(22, 36, 91, 1); }
.Early-Soft-Summer-5-hsla { color: hsla(345, 37, 82, 1); }
</style>