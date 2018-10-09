<template>
<div>
  <apexcharts width="400" type="bar" :options="chartOptions" :series="series"></apexcharts>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'Analize',
  components: {
    apexcharts: VueApexCharts
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
      },
      series: [{
        name: 'Расходы по месяцам',
        data: [30, 40, 42, 43, 42, 55, 65, 71]
      }]
    }
  }
}
</script>

<style scoped>

</style>
