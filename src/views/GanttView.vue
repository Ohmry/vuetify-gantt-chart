<template>
  <div class="gantt-view__container">
    <v-toolbar class="gantt-view__menu-contianer" flat dense>
    </v-toolbar>
    <div class="gantt-view__contents-container">
      <TaskList />
      <GanttChart />
    </div>
  </div>
</template>

<script>
import { GanttChart } from '../components/Gantt'
import { TaskList } from '../components/Task'

export default {
  components: {
    GanttChart,
    TaskList
  }
}
</script>

<style>
.gantt-view__menu-contianer {
  border-bottom: 1px solid #26B2A2 !important;
}
.gantt-view__contents-container {
  display: flex;
  flex-direction: row;
}
</style>