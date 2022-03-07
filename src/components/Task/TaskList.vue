<template>
  <v-container fluid class="pa-0" style="border-right: 1px solid #26b2a2">
    <v-row class="ma-0">
      <v-col cols="12" md="12">
        Task
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-list class="gantt-task-list">
        <v-list-item class="gantt-task-item">
          <v-list-item-title>Task 01</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.gantt-task-item {
  min-height: 30px;
  height: 30px;
}
.gantt-task-list {
  padding: 0;
}
</style>