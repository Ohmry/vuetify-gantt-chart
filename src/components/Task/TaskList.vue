<template>
  <div class="gantt-task-list__container">
    <v-list class="pa-0">
      <v-list-item class="gantt-task-header">
        <v-list-item-title>Task Name</v-list-item-title>
      </v-list-item>
      <v-list-item class="gantt-task-item">
        <v-list-item-title>Task 01</v-list-item-title>
      </v-list-item>
      <v-list-item class="gantt-task-item">
        <v-list-item-title>Task 02</v-list-item-title>
      </v-list-item>
    </v-list>
    <div class="gantt-task-list__slider"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.gantt-task-list__container {
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.gantt-task-list__container > .v-list {
  width: 350px;
}
.gantt-task-list__slider {
  position: relative;
  right: 0;
  width: 1px;
  border-left: 1px solid #26B2A2;
  height: 100vh;
}
.gantt-task-list__slider:hover {
  width: 5px;
  border: 0;
  transition: 0.3s;
  background-color: #5B7347;
  cursor: col-resize;
}
.gantt-task-header {
  border-bottom: 1px solid #26B2A2;
  min-height: 59px !important;
}
.gantt-task-list {
  width: 100%;
}
.gantt-task-item {
  min-height: 29px !important;
  border-bottom: 1px solid #26B2A2;
}
</style>