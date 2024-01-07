<template>
<v-container fluid class="pa-0">
  <v-row
    no-gutters
    v-for="rare in store.rarity"
    :key="rare"
    :class="rare !== 'R' ? 'mb-3' : ''"
  >
    <v-col cols="12" class="px-1">
      <h3>{{ rare }}</h3>
    </v-col>
    <v-col
      v-for="(ary, cardName) in store.card[store.openCard.name][rare]"
      :key="ary"
      cols="6"
      sm="2"
      class="pa-1"
    >
      <v-card
        @click="store.setSelectCard(cardName); store.switchDialog(false);"
      >
        <v-img
          :src="require(`@/assets/card_illust/${store.conversion(cardName)}_${store.charactorName[store.openCard.name].last}_覚醒後.png`)"
        >
        <!--<v-img
          :src="require(`@/assets/card_illust/${store.setCardIllust(cardName)}.png`)"
        >-->
        </v-img>
        <v-card-title class="px-2 py-1">{{ cardName }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</v-container>
<div v-if="false">
<label for="cardList">カード名</label>
<select v-model="store.selectCard[store.openCard.name][store.openCard.style]" name="cardList" id="cardList">
  <option label="" value="default"></option>
  <optgroup v-for="rare in store.rarity" :key="rare" :label="rare">
    <option v-for="(ary, cardName) in store.card[store.openCard.name][rare]" :key="ary" :label="cardName" :value="cardName"></option>
  </optgroup>
</select>
</div>
</template>

<script>
export default {
  name: 'selectCard',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  computed: {}
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>