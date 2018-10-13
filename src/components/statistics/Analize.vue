<template>
<div>
  <div class="row">
    <apexcharts width="400" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
  <div class="row">
    <apexcharts width="400" type="pie" :options="chartOptions" :series="seriesPie" :labels="labels"></apexcharts>
  </div>
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
        },
        labels: ['Штрафы', 'Развлечения', 'Коммунальные', 'Одежда', 'Еда']
      },
      series: [{
        name: 'Расходы по месяцам',
        data: [30, 40, 42, 43, 42, 55, 65, 71]
      }],
      seriesPie: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style scoped>

</style>
