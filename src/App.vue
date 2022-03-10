<template>
  <v-app>
    <v-app-bar color="#5B7347" height="40px" max-height="40px" flat>
      <router-link to="/">
        <v-app-bar-title>
          <v-icon>grass</v-icon>
          <span>Gantt Chart</span>
        </v-app-bar-title>
      </router-link>
      <v-toolbar
        flat
        color="#5B7347"
        height="40px"
        class="v-app-bar-buttons"
      >
        <v-toolbar-items>
          <v-btn depressed small class="px-2" color="#5B7347">
            New
          </v-btn>
          <v-btn class="app-btn px-2" depressed small disabled color="#5B7347">
            Edit
          </v-btn>
          <v-btn depressed small disabled class="px-2" color="#5B7347">
            Delete
          </v-btn>
          <!-- <v-divider class="mx-2" vertical></v-divider> -->
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.v-app-bar > .v-toolbar__content {
  padding: 0 16px;
}
.v-app-bar-buttons > .v-toolbar__content {
  padding: 0 16px;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items {
  padding: 0;
}
.router-link-active {
  margin: auto;
}
.v-app-bar-title {
  user-select: none;
  text-overflow: unset;
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
.v-toolbar__items > button {
  color: white !important;
}
.v-toolbar__items > .theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  color: #90AB6A !important;
  background-color: transparent !important;
}
.v-toolbar__items > .v-divider {
  border-color: #90AB6A !important;
}

/*
  COLOR URL : https://color.adobe.com/Early-Soft-Summer-color-theme-19546833
*/
/* Color Theme Swatches in Hex */
.Early-Soft-Summer-1-hex {
  color: #5b7347;
}
.Early-Soft-Summer-2-hex {
  color: #90ab6a;
}
.Early-Soft-Summer-3-hex {
  color: #afcf95;
}
.Early-Soft-Summer-4-hex {
  color: #f1e7e1;
}
.Early-Soft-Summer-5-hex {
  color: #e3c1c9;
}

/* Color Theme Swatches in RGBA */
.Early-Soft-Summer-1-rgba {
  color: rgba(91, 115, 71, 1);
}
.Early-Soft-Summer-2-rgba {
  color: rgba(144, 171, 106, 1);
}
.Early-Soft-Summer-3-rgba {
  color: rgba(175, 207, 149, 1);
}
.Early-Soft-Summer-4-rgba {
  color: rgba(241, 231, 225, 1);
}
.Early-Soft-Summer-5-rgba {
  color: rgba(227, 193, 201, 1);
}

/* Color Theme Swatches in HSLA */
.Early-Soft-Summer-1-hsla {
  color: hsla(92, 23, 36, 1);
}
.Early-Soft-Summer-2-hsla {
  color: hsla(84, 27, 54, 1);
}
.Early-Soft-Summer-3-hsla {
  color: hsla(93, 37, 69, 1);
}
.Early-Soft-Summer-4-hsla {
  color: hsla(22, 36, 91, 1);
}
.Early-Soft-Summer-5-hsla {
  color: hsla(345, 37, 82, 1);
}
</style>
