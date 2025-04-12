<template>
  <v-dialog
    v-model="store.loading"
    :max-width="400"
    persistent
  >
    <v-sheet class="pa-3">
      <v-progress-linear color="pink" indeterminate></v-progress-linear>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { useStoreCounter } from '../stores/counter';
const store = useStoreCounter();
</script>

<script>
export default {
  name: 'Loading',
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
}
</script>