<template>
  <div class="gantt-task-list__container">
    <v-container fluid>
      <v-row class="gantt-task-list-header">
        <v-col cols="7">
          Task Name
        </v-col>
        <v-col>
          Start Date
        </v-col>
        <v-col>
          End Date
        </v-col>
      </v-row>
      <v-row class="gantt-task-list-item">
        <v-col cols="7">
          Task 1
        </v-col>
        <v-col>
          2022-02-08
        </v-col>
        <v-col>
          2022-03-08
        </v-col>
      </v-row>
      <v-row class="gantt-task-list-item">
        <v-col cols="7">
          Task 1
        </v-col>
        <v-col>
          2022-02-08
        </v-col>
        <v-col>
          2022-03-08
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-list class="pa-0">
      <v-list-item class="gantt-task-header">
        <v-list-item-title>Task Name</v-list-item-title>
      </v-list-item>
      <v-list-item class="gantt-task-item">
        <v-list-item-title>Task 01</v-list-item-title>
      </v-list-item>
      <v-list-item class="gantt-task-item">
        <v-list-item-title>Task 02</v-list-item-title>
      </v-list-item>
    </v-list> -->
    <div class="gantt-task-list__slider"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.gantt-task-list__container {
  width: 500px;
  min-width: 500px;
  height: calc(100vh - 93px);
  display: flex;
  flex-direction: row;
}
.gantt-task-list__slider {
  position: relative;
  float: right;
  right: 0;
  width: 1px;
  border-left: 1px solid #26B2A2;
  height: calc(100vh - 93px);
}
.gantt-task-list__slider:hover {
  width: 5px;
  border: 0;
  transition: 0.3s;
  background-color: #5B7347;
  cursor: col-resize;
}
.gantt-task-list-header {
  min-height: 60px !important;
  border-bottom: 1px solid #26B2A2;
}
.gantt-task-list-header > .col {
  font-size: 14px;
  padding: 3px 12px;
  display: flex;
  align-items: flex-end;
}
.gantt-task-list-header > .col:not(:first-child) {
  justify-content: center;
}
.gantt-task-list-item {
  min-height: 30px !important;
  border-bottom: 1px solid #26B2A2;
}
.gantt-task-list-item > .col {
  font-size: 14px;
  padding: 3px 12px;
}
.gantt-task-list-item > .col:nth-child(2),
.gantt-task-list-header > .col:nth-child(2) {
  border-left: 1px solid #26B2A2;
  border-right: 1px solid #26B2A2;
}
.gantt-task-list-item > .col:not(:first-child) {
  text-align: center;
}
</style>