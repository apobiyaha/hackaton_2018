<template>
  <q-page>
    <div class="row justify-center q-mt-sm">
    <q-btn-toggle
      v-model="model"
      toggle-color="amber"
      :options="options"
      push
    />
    </div>
    <component :is="model"></component>
  </q-page>
</template>

<script>
import Costs from '../components/statistics/Costs'
import Actions from '../components/statistics/Actions'
import Analize from '../components/statistics/Analize'
export default {
  name: 'Schedule',
  components: {Costs, Analize, Actions},
  data () {
    return {
      model: Costs,
      options: [
        {
          label: 'Предложения',
          value: Costs
        },
        {
          label: 'Анализ',
          value: Analize
        },
        {
          label: 'Акции',
          value: Actions
        }
      ]
    }
  }
}
</script>
