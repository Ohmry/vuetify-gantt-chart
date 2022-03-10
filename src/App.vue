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
      <v-simple-table class="task-table">
        <thead>
          <tr>
            <th style="min-width: 300px; max-width: 300px;">Subject</th>
            <th class="text-center" style="min-width: 100px; max-width: 100px;">Start Date</th>
            <th class="text-center" style="min-width: 100px; max-width: 100px;">Due Date</th>
            <th class="text-center" style="min-width: 100px; max-width: 100px;">Assigned</th>
            <th>
              <svg>
                <line x1="10" x2="300" y1="10" y2="10" stroke-width="1" stroke="#5B7347" />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ task.subject }}</td>
            <td class="text-center">{{ task.start }}</td>
            <td>{{ task.end }}</td>
            <td>{{ task.assigned }}</td>
            <td>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tasks: []
  }),
  beforeMount () {
    this.tasks.push(...Array.from({ length: 100 }, (v, k) => {
      return { subject: '포인트 부분 사용(매점)_' + k, start: '2022-03-01', end: '2022-03-07', assigned: '' }
    }))
  }
}
</script>

<style>
.v-app-bar {
  position: fixed !important;
  z-index: 9;
  top: 0;
  left: 0;
}
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
.v-main {
  margin-top: 40px !important;
}
.task-table {
  border-right: 1px solid #5B7347;
  border-radius: 0 !important;
}
.task-table > .v-data-table__wrapper {
  overflow: auto;
  max-height: calc(100vh - 40px);
  max-width: fit-content !important;
}
.task-table > .v-data-table__wrapper > table > thead {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background-color: white !important;
}
.task-table > .v-data-table__wrapper > table > thead > tr > th > svg {
  display: block;
  height: 48px;
}
.task-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 12px !important;
  height: 26px !important;
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
