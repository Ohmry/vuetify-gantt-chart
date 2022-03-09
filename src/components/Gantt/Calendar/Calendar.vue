<template>
  <div class="gantt-calendar__container" ref="container">
    <svg :width="this.calendar.width" height="60">
      <line x1="0" :x2="this.calendar.width" :y1="29.5" :y2="29.5" stroke-width="1" stroke="#26B2A2" />
      <line x1="0" :x2="this.calendar.width" :y1="this.calendar.height" :y2="this.calendar.height" stroke-width="1" stroke="#26B2A2" />
      <!-- Divide line of month -->
      <line v-for="(month, index) in this.months" :key="'month_line_' + index" :x1="month.left + month.width" :x2="month.left + month.width" y1="0" y2="30" stroke-width="1" stroke="#26B2A2" />
      <text class="gantt-calendar__month-text" v-for="(month, index) in this.months" :key="'month_text_' + index" :x="month.left + (month.width - 49.61) / 2" y="20" font-size="14">{{ month.label }}</text>
      <!-- Divide line of day -->
      <line v-for="(day, index) in this.days" :key="'day_line_' + index" :x1="(index + 1) * 30" :x2="(index + 1) * 30" y1="30" y2="60" stroke-width="1" stroke="#26B2A2" />
      <text class="gantt-calendar__day-text" v-for="(day, index) in this.days" :key="'day_text_' + index" :x="(index * 30) + (day.label < 10 ? 11.255 : 7.51)" y="50" :fill="day.color" font-size="14">{{ day.label }}</text>
    </svg>
    <svg :width="this.calendar.width" height="30">
      <rect v-for="(day, index) in this.days" :key="'day_rect_1_' + index" :x="(index) * 30" y="0" width="30" height="30" :fill="day.bgColor" />
      <line x1="0" :x2="this.calendar.width" :y1="30" :y2="30" stroke-width="2" stroke="#26B2A2" />
      <line v-for="(day, index) in this.days" :key="'day_line_1_' + index" :x1="(index + 1) * 30" :x2="(index + 1) * 30" y1="0" y2="30" stroke-width="1" stroke="#26B2A2" />
      <text class="gantt-calendar__day-text" v-for="(day, index) in this.days" :key="'day_text_' + index" :x="(index * 30) + (day.label < 10 ? 11.255 : 7.51)" y="50" :fill="day.color" font-size="14">{{ day.label }}</text>
    </svg>
    <svg :width="this.calendar.width" height="30">
      <rect v-for="(day, index) in this.days" :key="'day_rect_2_' + index" :x="(index) * 30" y="0" width="30" height="30" :fill="day.bgColor" />
      <line x1="0" :x2="this.calendar.width" :y1="30" :y2="30" stroke-width="2" stroke="#26B2A2" />
      <line v-for="(day, index) in this.days" :key="'day_line_2_' + index" :x1="(index + 1) * 30" :x2="(index + 1) * 30" y1="0" y2="30" stroke-width="1" stroke="#26B2A2" />
      <text class="gantt-calendar__day-text" v-for="(day, index) in this.days" :key="'day_text_' + index" :x="(index * 30) + (day.label < 10 ? 11.255 : 7.51)" y="50" :fill="day.color" font-size="14">{{ day.label }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    from: {
      require: true,
      type: String
    },
    to: {
      require: true,
      type: String
    }
  },
  data: () => ({
    calendar: {
      width: 0,
      height: 59.5
    },
    months: [],
    days: []
  }),
  methods: {
    initailize (from, to) {
      let startDate = new Date(from.substring(0, 4), from.substring(4), 0)
      let endDate = new Date(to.substring(0, 4), to.substring(4), 0)
      
      for (let cursor = startDate; cursor <= endDate;) {
        let monthWidth = this.$store.state.cell.width * cursor.getDate()
        this.months.push({
          left: this.calendar.width,
          width: monthWidth,
          year: cursor.getFullYear(),
          month: cursor.getMonth() + 1,
          label: cursor.getFullYear() + '-' + ((cursor.getMonth() + 1) < 10 ? '0' + (cursor.getMonth() + 1) : (cursor.getMonth() + 1))
        })
        this.days.push(...Array.from({ length: cursor.getDate() }, (v, k) => {
          let day = new Date(cursor.getFullYear(), cursor.getMonth(), k + 1)
          console.log(day)
          return {
            label: k + 1,
            value: cursor.getFullYear() + '' + (cursor.getMonth() + 1 < 10 ? '0' + (cursor.getMonth() + 1) : cursor.getMonth() + 1) + '' + ((k + 1) < 10 ? '0' + (k + 1) : (k + 1)),
            color: day.getDay() == 0 ? 'red' : day.getDay() == 6 ? 'blue' : 'black',
            bgColor: day.getDay() == 0 || day.getDay() == 6 ? 'lightgrey' : 'transparent'
          }
        }))
        this.calendar.width += monthWidth
        cursor.setMonth(cursor.getMonth() + 2)
        cursor.setDate(0)
      }
    }
  },
  beforeMount () {
    this.initailize(this.from, this.to)
  }
}
</script>

<style>
.gantt-calendar__container {
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.gantt-calendar__month-text,
.gantt-calendar__day-text {
  user-select: none;
}
</style>