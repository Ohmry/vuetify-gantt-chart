<template>
  <svg :width="this.width" :height="this.height">
    <line x1="0" :x2="this.width" :y1="this.height / 2" :y2="this.height / 2" stroke-width="1" stroke="#26B2A2" />
    <line :x1="this.width" :x2="this.width" y1="0" :y2="this.height / 2" stroke-width="2" stroke="#26B2A2" />
    <line v-for="(location, index) in this.day.items" :key="index" :x1="(location + 1) * day.width" :x2="(location + 1) * day.width" :y1="30" :y2="60" stroke-width="1" stroke="#26B2A2" />
    <line x1="0" :x2="this.width" :y1="this.height" :y2="this.height" stroke-width="2" stroke="#26B2A2" />
    <text :x="(width - 50) / 2" :y="(height - 20) / 2" :font-size="14">{{ this.month.label }}</text>
  </svg>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String
    }
  },
  data: () => ({
    width: 0,
    height: 0,
    month: {
      label: undefined
    },
    day: {
      items: [],
      width: 0,
      height: 0
    }
  }),
  beforeMount () {
    // 202203
    let date = new Date(this.value.substring(0, 4), this.value.substring(4), 0)
    this.width = this.$store.state.cell.width * date.getDate()
    this.height = this.$store.state.cell.height * 2
    this.month.label = this.value.substring(0, 4) + '-' + this.value.substring(4)
    this.day.items = Array.from({length: date.getDate()}, (v, day) => day)
    this.day.width = this.$store.state.cell.width
    this.day.height = this.$store.state.cell.height + 30
  }
}
</script>

<style>

</style>