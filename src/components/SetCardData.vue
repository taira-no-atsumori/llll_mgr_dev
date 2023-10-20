<template>
  <v-container fluid>
    <v-row class="mb-0 text-center">
      <v-col class="pa-0">
        <h2 class="mb-2">
          {{ store.charactorName[store.settingCard.name].first + ' ' + store.charactorName[store.settingCard.name].last }} カードステータス設定
        </h2>
        <h3>{{ store.settingCard.rare + ' ' + store.settingCard.card }}</h3>
      </v-col>
    </v-row>
    <v-row class="mb-5">
      <v-col
        cols="12"
        sm="7"
        class="py-0 pl-0 pr-4"
      >
        <!--<h2 class="mb-2">カードステータス設定</h2>-->
        <v-carousel
          class="mb-7"
          height="auto"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="tst in ['前', '後']"
            :key="tst"
            :src="require(`@/assets/card_illust/ペンギンアイス花帆_覚醒${tst}.png`)"
          >
          </v-carousel-item>
        </v-carousel>
        <v-row id="styleAndMoodArea" class="mb-3">
          <v-col
        class="py-0 pl-0 pr-1">
            <span class="left">タイプ</span><span class="right">{{ store.styleType[store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].styleType] }}</span>
          </v-col>
          <v-col
        class="py-0 pl-0 pr-1">
            <span class="left">ムード</span><span class="right">{{ store.mood[store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].mood] }}</span>
          </v-col>
        </v-row>
        <table id="statusDisplayArea">
          <thead>
            <tr>
              <th>スマイル</th>
              <th>ピュア</th>
              <th>クール</th>
              <th>メンタル</th>
              <th>BP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.smile + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 30 }}</td>
              <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.pure + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 30 }}</td>
              <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.cool + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 30 }}</td>
              <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.mental + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 3 }}</td>
              <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.BP }}</td>
            </tr>
          </tbody>
        </table>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        class="pa-0"
      >
        <h4 class="mb-4">特訓度</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              x-small
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel === 0"
              @click="store.valueChange('trainingLevel', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel - 1)">-1
            </v-btn>
          </v-col>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            {{ ['none', '+', '++'][store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel] }}
          </v-col>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              x-small
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel === store.setMaxTrainingLevel"
              @click="store.valueChange('trainingLevel', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel + 1)">+1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <h4 class="mb-4">レベル</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel === 0"
              x-small
              @click="store.valueChange('cardLevel', 0)"
            >
              MIN
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel === 0"
              x-small
              @click="store.valueChange('cardLevel', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1)"
            >
              -1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel === store.changeMaxCardLevel"
              x-small
              @click="store.valueChange('cardLevel', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel + 1)"
            >
              +1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel === store.changeMaxCardLevel"
              x-small
              @click="store.valueChange('cardLevel', store.changeMaxCardLevel)"
            >
              MAX
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <h4 class="mb-4">スペシャルアピール</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level === 1"
              x-small
              @click="store.valueChange('specialAppeal', '1')"
            >
              MIN
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level === 1"
              x-small
              @click="store.valueChange('specialAppeal', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level - 1)"
            >
              -1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level === store.changeSkillLevel"
              x-small
              @click="store.valueChange('specialAppeal', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level + 1)"
            >
              +1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level === store.changeSkillLevel"
              x-small
              @click="store.valueChange('specialAppeal', store.changeSkillLevel)"
            >
              MAX
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <h4 class="mb-4">スキル</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level === 1"
              x-small
              @click="store.valueChange('skill', 1)"
            >
              MIN
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level === 1"
              x-small
              @click="store.valueChange('skill', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level - 1)"
            >
              -1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level === store.changeSkillLevel"
              x-small
              @click="store.valueChange('skill', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level + 1)"
            >
              +1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level === store.changeSkillLevel"
              x-small
              @click="store.valueChange('skill', store.changeSkillLevel)"
            >
              MAX
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <h4 class="mb-3">解放Lv</h4>
        <v-row>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel === 1"
              x-small
              @click="store.valueChange('releaseLevel', 1)"
            >
              MIN
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel === 1"
              x-small
              @click="store.valueChange('releaseLevel', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel - 1)"
            >
              -1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel === 5"
              x-small
              @click="store.valueChange('releaseLevel', store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel + 1)"
            >
              +1
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
          >
            <v-btn
              :disabled="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel === 5"
              x-small
              @click="store.valueChange('releaseLevel', 5)"
            >
              MAX
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">スペシャルアピール</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.name }}
        <span class="AP">AP</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.AP - store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel }}
      </v-col>
      <v-col cols="12" class="pa-0 mb-3">
        Lv {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level }}
        {{ store.setSkillText('specialAppeal') }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">スキル</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.name }}
        <span class="AP">AP</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.AP }}
      </v-col>
      <v-col cols="12" class="pa-0 mb-3">
        Lv {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level }}
        {{ store.setSkillText('skill') }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">特性</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].characteristic.name }}
      </v-col>
      <v-col cols="12" class="pa-0">
        {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].characteristic.detail }}
      </v-col>
    </v-row>
  </v-container>
  <!--
  <label for="cardList">カード名</label>
  <select v-model="store.selectCard[store.submitData.charactorName][store.submitData.style]" name="cardList" id="cardList">
    <option label="" value="none"></option>
    <optgroup v-for="rare in store.rarity" :key="rare" :label="rare">
      <option v-for="(ary, cardName) in store.card[store.submitData.charactorName][rare]" :key="ary" :label="cardName" :value="cardName"></option>
    </optgroup>
  </select>-->
</template>

<script>
export default {
  name: 'CardSetting',
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
#statusDisplayArea {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    width: 80px;
    border-right: 1px solid #000;
    text-align: center;

    &:last-child {
      width: 50px;
      border-right: 0px;
    }
  }
  
  th {
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
  }

  td {
    padding-top: 5px;
  }
}

#styleAndMoodArea {
  text-align: center;

  span {
    padding: 3px 10px;
    border: 2px solid #e5762c;
  }

  .left {
    color: #fff;
    font-weight: bold;
    background-color: #e5762c;
    border-radius: 15px 0 0 15px;
  }

  .right {
    border-radius: 0 15px 15px 0;
  }
}
.specialAppeal {
  color: #fff;
  font-weight: bold;
  background-color: #e5762c;
  padding: 3px 7px 3px 3px;
  border: 2px solid #e5762c;
  border-radius: 0 15px 15px 0;
  margin-right: 7px;
}
</style>