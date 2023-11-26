// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/lib/labs/components'

export default createVuetify({
  components: {
    ...labs
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})