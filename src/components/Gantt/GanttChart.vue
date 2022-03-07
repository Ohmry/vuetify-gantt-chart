<template>
  <v-container fluid class="pa-0">
    <svg width="211" height="300">
      <line x1="0" y1="30" x2="210" y2="30" stroke-width="1" stroke="#26b2a2" />
      <line x1="0" y1="60" x2="210" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="210" y1="0" x2="210" y2="60" stroke-width="1" stroke="#26b2a2" />

      <line x1="30" y1="30" x2="30" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="60" y1="30" x2="60" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="90" y1="30" x2="90" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="120" y1="30" x2="120" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="150" y1="30" x2="150" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="180" y1="30" x2="180" y2="60" stroke-width="1" stroke="#26b2a2" />
      <line x1="210" y1="30" x2="210" y2="60" stroke-width="1" stroke="#26b2a2" />
    </svg>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    month: {
      width: 30 * 31,
      height: 30
    },
    day: {
      width: 30,
      height: 30
    }
  })
}
</script>

<style>

</style>