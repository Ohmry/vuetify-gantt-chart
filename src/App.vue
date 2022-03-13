<template>
  <v-app>
    <!-- App Header -->
    <v-app-bar flat>
        <!-- Logo -->
        <router-link to="/">
          <v-app-bar-title>
            <v-icon>grass</v-icon>
            <span>Gantt Chart</span>
          </v-app-bar-title>
        </router-link>
        <!-- Menu -->
        <v-toolbar flat class="v-app-bar-buttons">
          <v-toolbar-items>
            <v-btn v-for="(menu, index) in system.menu.function" :key="'v-app-bar-button_' + index" depressed small :disabled="menu.disabled" class="px-2">
              {{ menu.label }}
            </v-btn>
            <v-divider vertical></v-divider>
            <!-- View Mode -->
            <v-item-group mandatory class="v-gantt-view-mode-buttons">
              <v-item v-for="(menu, index) in system.menu.viewMode" :key="'v-gantt-view-mode-button_' + index" v-slot="{ active, toggle }">
                <v-btn depressed @click="toggle">{{ menu.label }}</v-btn>
              </v-item>
            </v-item-group>
            <v-divider vertical></v-divider>
            <v-btn depressed small class="px-2">Go to Today</v-btn>
            <v-btn depressed small class="px-2">Search</v-btn>
            <!-- Search -->
            <!-- <div class="d-flex v-gantt-search-field">
              <v-icon @click="system.menu.search.visible = !system.menu.search.visible">search</v-icon>
              <input type="text" label="search" placeholder="Enter keyword you want to find" :style="{ width: system.menu.search.visible ? '' : '0px', marginLeft: system.menu.search.visible ? '' : '-14px' }"/>
            </div> -->
          </v-toolbar-items>
        </v-toolbar>
    </v-app-bar>
    <v-main>
      <!-- Task -->
      <div class="task-container__wrap">
        <div class="task-header__wrap">
          <table>
            <colgroup>
              <col style="width: 200px" />
              <col style="width: 80px" />
              <col style="width: 80px" />
              <col style="width: 100px" />
              <col style="width: 50px" />
              <col style="width: 100px" />
            </colgroup>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Task</th>
                <th>System</th>
                <th>Assigned</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="task-contents__wrap">
          <table>
            <colgroup>
              <col style="width: 200px" />
              <col style="width: 80px" />
              <col style="width: 80px" />
              <col style="width: 100px" />
              <col style="width: 50px" />
              <col style="width: 100px" />
            </colgroup>
            <tbody>
              <tr v-for="(subject, index) in subjects" :key="'subject_' + index">
                <td>{{ subject.name }}</td>
                <td></td>
                <td></td>
                <!-- <td>{{ subject.start.substring(0, 4) + '-' + subject.start.substring(4, 6) + '-' + subject.start.substring(6, 8) }}</td> -->
                <!-- <td>{{ subject.end.substring(0, 4) + '-' + subject.end.substring(4, 6) + '-' + subject.end.substring(6, 8) }}</td> -->
                <td>{{ subject.task }}</td>
                <td>{{ subject.system }}</td>
                <td>{{ subject.assigned }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Gantt -->
      <div class="gantt-container__wrap">
        <div class="gantt-header__wrap" :style="{ width: calendar.width + 'px' }">
          <svg class="gantt-calendar-month__wrap" v-for="(month, index) in calendar.months" :key="'gantt-calendar-month_' + index" :style="{ width: month.width + 'px', left: month.left + 'px' }" >
            <text :x="(month.width - 49.61) / 2" y="17.5" font-size="12">{{ month.label }}</text>
            <line x1="0px" :x2="month.width + 'px'" y1="25px" y2="25px" />
            <line :x1="month.width + 'px'" :x2="month.width + 'px'" y1="0px" y2="25px" />
          </svg>
          <svg class="gantt-calendar-day__wrap" v-for="(day, index) in calendar.days" :key="'gantt-calendar-day_' + index" :style="{ left: (index * day.width) + 'px'  }">
            <text :x="(day.label < 10 ? 4 : 1.79) + 'px'" y="17px" :fill="day.color" font-size="12">{{ day.label }}</text>
            <line x1="0px" :x2="day.width + 'px'" y1="25px" y2="25px" />
            <line x1="18px" :x2="day.width + 'px'" y1="0px" y2="25px" />
          </svg>
        </div>
        <div class="gantt-contents__wrap">
          <div class="gantt-cell__wrap" v-for="(subject, index) in subjects" :key="'gantt-cell_' + index">
            <svg class="gantt-cell-grid__wrap" v-for="(day, index) in calendar.days" :key="'gantt-cell_day_' + index" :style="{ left: (index * day.width) + 'px', width: day.width + 'px' }">
              <rect v-if="day.weekend" :width="day.width + 'px'" height="25px" :fill="day.bgColor" />
              <line :x1="day.width + 'px'" :x2="day.width + 'px'" y1="0px" y2="25px" />
              <!-- <rect class="gantt-cell-bar" v-if="day.value >= subject.start && day.value <= subject.end" y="2px" :x="(day.value == subject.start ? 2 : 0) + 'px'" /> -->
              <line x1="0px" :x2="day.width + 'px'" y1="25px" y2="25px" />
            </svg>
            <svg class="gantt-cell-bar__wrap" :width="calendar.width + 'px'">
              <rect class="gantt-cell-bar" y="2px" :x="(subject.start.getTime() - calendar.value.start.getTime()) / (1000 * 60 * 60 * 24) + subject.between + 'px'" width="100px" height="20px" />
              <text class="gantt-cell-text" x="105px" y="15" style="font-size: 12px; color: #E3C1C9">{{ subject.name }}</text>
            </svg>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    system: {
      menu: {
        function: [
          { label: 'New', disabled: false },
          { label: 'Edit', disabled: true },
          { label: 'Delete', disabled: false }
        ],
        viewMode: [
          { label: 'Daily' },
          { label: 'Weekly' },
          { label: 'Monthy' }
        ],
        search: {
          visible: false
        }
      }
    },
    calendar: {
      width: 0,
      months: [],
      days: [],
      value: {
        start: undefined,
        end: undefined
      }
    },
    subjects: []
  }),
  beforeMount () {
    const calendarFrom = '202202'
    const calendarTo = '202206'
    const dateFrom = new Date(calendarFrom.substring(0, 4), calendarFrom.substring(4, 6), 0)
    const dateTo = new Date(calendarTo.substring(0, 4), calendarTo.substring(4, 6), 0)

    this.calendar.value.start = new Date(calendarFrom.substring(0, 4), calendarFrom.substring(4, 6) - 1, 1)
    this.calendar.value.end = dateTo

    for (let cursor = dateFrom; cursor <= dateTo;) {
      let monthlyWidth = this.$store.state.cell.width * cursor.getDate()
      let year = cursor.getFullYear()
      let month = cursor.getMonth() + 1
      this.calendar.months.push({
        left: this.calendar.width,
        width: monthlyWidth,
        year: year,
        month: month,
        label: year + '-' + (month < 10 ? '0' + month : month)
      })
      this.calendar.days.push(...Array.from({ length: cursor.getDate() }, (v, k) => {
        let day = new Date(year, cursor.getMonth(), k + 1)
        return {
          label: k + 1,
          width: this.$store.state.cell.width,
          value: year + '' + (month < 10 ? '0' + month : month) + '' + (k < 10 ? '0' + k : k),
          color: day.getDay() == 0 ? 'red' : day.getDay() == 6 ? 'blue' : 'black',
          weekend: day.getDay() == 0 || day.getDay() == 6,
          bgColor: day.getDay() == 0 || day.getDay() == 6 ? '#F1E7E1' : 'transparent'
        }
      }))
      this.calendar.width += monthlyWidth
      cursor.setMonth(cursor.getMonth() + 2)
      cursor.setDate(0)
    }

    this.subjects.push(...Array.from({ length: 40 }, (v, k) => {
      let year = 2022
      let month = Math.round(Math.random() * 10 % 5 + 1)
      let lastDay = new Date(year, month, 0).getDate()
      let startDay = Math.round(Math.random() * lastDay)
      let endDay = startDay + Math.round(Math.random() * 10)
      let start = new Date(year, month, startDay)
      let end = new Date(year, month, endDay)
      // let startValue = start.getFullYear() + '' + ((start.getMonth() + 1) < 10 ? '0' + (start.getMonth() + 1) : (start.getMonth() + 1)) + '' + (start.getDate() < 10 ? '0' + start.getDate() : start.getDate())
      // let endValue = end.getFullYear() + '' + ((end.getMonth() + 1) < 10 ? '0' + (end.getMonth() + 1) : (end.getMonth() + 1)) + '' + (end.getDate() < 10 ? '0' + end.getDate() : end.getDate())
      
      let task = ['Analysis', 'Design', 'Develop', 'Test', 'Deploy']

      return {
        name: 'Subject Example (' + k + ')',
        start: start,
        end: end,
        between: (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
        task: task[Math.round(Math.random() * 5)],
        system: 'TCS',
        assigned: 'Ohmry'
      }
    }))
  }
}
</script>

<style lang="scss">
.v-app-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  height: 40px !important;
  max-height: 40px !important;
  background-color: $theme-color-primary !important;
}
.v-app-bar > .v-toolbar__content {
  height: 40px !important;
}
/* Logo ================================================= */
.router-link-active {
  margin: auto;
  height: 100%;
  color: white !important;
}
.router-link-active:active {
  margin: auto;
  height: 100%;
  color: #AFCF95 !important;
}
.v-app-bar-title__content {
  font-size: 18px;
  text-overflow: unset;
}
.v-app-bar-title__content > i {
  vertical-align: sub !important;
  margin: 0 5px 0 0;
  color: inherit !important;
  transition: 0s !important;
}
/* Logo ================================================= */
/* Menu ================================================= */
.v-app-bar-buttons {
  height: 40px !important;
  background-color: $theme-color-primary !important;
}
.v-app-bar-buttons > .v-toolbar__content {
  padding: 0 16px;
  height: inherit !important;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > button {
  background-color: $theme-color-primary !important;
  color: white !important;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > button.v-btn--disabled {
  color: $theme-color-secondary !important;
  background-color: $theme-color-primary !important;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-divider {
  border-color: $theme-color-secondary !important;
  height: 28px !important;
  max-height: 28px !important;
  min-height: 28px !important;
  padding: 0 0 0 6px !important;
  margin: 6px 6px 6px 0 !important;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-view-mode-buttons > button {
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  border-radius: 0;
  background-color: $theme-color-primary !important;
  color: $theme-color-secondary !important;
  font-size: 0.75em;  
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-view-mode-buttons > button:hover {
  color: #AFCF95 !important;
  transition: 0.28s;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-view-mode-buttons > button.v-item--active {
  color: white !important;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-search-field {
  padding: 6px 0;
  border: 1px solid $theme-color-secondary;
  border-radius: 14px;
  height: 28px;
  min-width: 28px;
  margin: auto 0 auto 14px;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-search-field > button {
  font-size: 18px;
  height: 18px;
  margin: -1.5px 0px 0px 4.2px;
  color: $theme-color-secondary !important;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-search-field > input {
  color: white !important;
  font-size: 0.75em;
  margin: 0 10px;
  width: 200px;
  transition: 0.3s;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-search-field > input:focus {
  outline: 0;
}
.v-app-bar-buttons > .v-toolbar__content > .v-toolbar__items > .v-gantt-search-field > input::placeholder {
  color: $theme-color-secondary !important;
}
/* Menu ================================================= */
/* Main ================================================= */
.v-main {
  margin-top: 40px !important;
}
.v-main > .v-main__wrap {
  width: 100vw;
  height: calc(100vh - 40px);
  overflow: auto;
  display: inline-flex;
  flex-direction: row;
}
.v-main > .v-main__wrap > .task-container__wrap {
  width: 610px;
  height: calc(100vh - 40px);
  position: sticky;
  left: 0px;
  z-index: 3;
}
/* Main ================================================= */
/* Task Header ================================================= */
.v-main > .v-main__wrap > .task-container__wrap > .task-header__wrap {
  position: sticky;
  top: 0px;
  left: 0;
  z-index: 3;
  height: 50px;
  background-color: $theme-color-secondary;
  border-bottom: 1px solid $theme-color-primary;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-header__wrap > table {
  width: 100%;
  height: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  user-select: none;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-header__wrap > table > thead > tr {
  border-right: 1px solid $theme-color-primary;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-header__wrap > table > thead > tr > th {
  font-size: 12px;
  vertical-align: bottom;
  padding: 5px 0;
  color: white;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-header__wrap > table > thead > tr > th:first-child {
  text-align: left;
  padding: 5px 10px;
}
/* Task Header ================================================= */
/* Task Contents ================================================= */
.v-main > .v-main__wrap > .task-container__wrap > .task-contents__wrap {
  background-color: white;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-contents__wrap > table {
  width: 610px;
  table-layout: fixed;
  border-collapse: collapse;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-contents__wrap > table > tbody > tr {
  border-bottom: 1px solid $theme-color-secondary;
  border-right: 1px solid $theme-color-primary;
  height: 24px;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-contents__wrap > table > tbody > tr > td {
  font-size: 12px;
  padding: 3px 5px;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-contents__wrap > table > tbody > tr > td:first-child {
  padding: 3px 10px;
}
.v-main > .v-main__wrap > .task-container__wrap > .task-contents__wrap > table > tbody > tr > td:not(:first-child) {
  text-align: center;
}
/* Task Contents ================================================= */
/* Gantt Header ================================================= */
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-header__wrap {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  height: 50px;
  user-select: none;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-header__wrap > svg {
  position: absolute;
  display: block;
  background-color: white;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-header__wrap > svg > line {
  stroke-width: 1;
  stroke: $theme-color-primary;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-header__wrap > svg.gantt-calendar-month__wrap {
  height: 25px;
  background-color: $theme-color-secondary;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-header__wrap > svg.gantt-calendar-month__wrap > text {
  fill: white;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-header__wrap > svg.gantt-calendar-day__wrap {
  top: 25px;
  width: 18px;
  height: 25px;
  background-color: #F1E7E1;
}
/* Gantt Header ================================================= */
/* Gantt Contents ================================================= */
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-contents__wrap > .gantt-cell__wrap {
  position: relative;
  height: 25px;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-contents__wrap > .gantt-cell__wrap > svg {
  position: absolute;
  display: block;
  height: 25px;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-contents__wrap > .gantt-cell__wrap > svg.gantt-cell-bar__wrap > rect {
  fill: $theme-color-secondary;
}
.v-main > .v-main__wrap > .gantt-container__wrap > .gantt-contents__wrap > .gantt-cell__wrap > svg > line {
  stroke-width: 1;
  stroke: $theme-color-primary;
}
/* Gantt Contents ================================================= */
</style>