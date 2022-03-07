<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <router-link to="/">
          <v-list-item class="px-8">
            <v-list-item-icon>
              <v-icon>event_note</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Gantt Chart</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.v-list > a {
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