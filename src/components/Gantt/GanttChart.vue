<template>
  <Calendar :from="calendar.from" :to="calendar.to" />
</template>

<script>
import { Calendar } from './Calendar'

export default {
  components: {
    Calendar
  },
  data: () => ({
    calendar: {
      from: '202202',
      to: '202204'
    },
    width: 30 * 31,
    height: 30,
    day: {
      width: 30,
      height: 30
    }
  })
}
</script>

<style>
</style>