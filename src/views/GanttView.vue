<template>
  <div class="gantt-view__container">
    <v-app-bar flat height="45">
      <v-btn v-for="(menu, index) in this.menu" :key="index" depressed>
        <v-icon color="#5B7347" v-text="menu.icon"></v-icon>
        {{ menu.label }}
      </v-btn>
    </v-app-bar>
    <!-- <v-toolbar class="gantt-view__menu-contianer" flat dense>
      <v-toolbar-items class="py-2">
        
      </v-toolbar-items>
    </v-toolbar> -->
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
  },
  data: () => ({
    menu: [
      { label: 'New Task', icon: 'add' },
      { label: 'Edit Task', icon: 'edit' },
      { label: 'Delete Task', icon: 'remove' },
    ]
  })
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