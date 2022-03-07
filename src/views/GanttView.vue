<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3" class="pa-0">
        <TaskList />
      </v-col>
      <v-col cols="12" md="9" class="pa-0">
        <GanttChart />
      </v-col>
    </v-row>
  </v-container>
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

</style>