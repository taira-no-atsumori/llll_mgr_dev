<template>
<div id="otherArea" v-if="false">
  <div id="textOutputArea">
    <label for="textOutput" class="mb-2">出力テキスト</label>
    <textarea name="textOutput" id="textOutput" class="mb-2"></textarea>
    <p id="textLength"></p>
  </div>
  <!--<div id="possessionCardSettingArea">
    <p class="mb-2">所持カード設定</p>
    <ul id="possessionCard_header">
      <li v-for="(name_ja, name_en) in charactorName" :key="name_ja" :data-charactor="name_en" :data-selected="selectTab === name_en" @click="changeTab(name_en)">
        {{ name_ja.last }}
      </li>
    </ul>
    <ul id="possessionCard_container">
      <li v-for="(name_ja, name_en) in charactorName" :key="name_en" :data-charactor="name_en" v-show="selectTab === name_en">
        <dl v-for="rare in store.rarity" :key="rare" :data-rare="rare">
          <dt>
            {{ rare }}
          </dt>
          <dd>
            <button v-for="(ary, cardName) in card[name_en][rare]" :key="ary" :data-mood="ary.mood" @click="showModalEvent('possessionCardSetting'); store.submitCardData({charactorName: name_en, rare: rare, selectedCard: cardName})">{{ cardName }}</button>
          </dd>
        </dl>
      </li>
    </ul>
  </div>-->
</div>

<v-container fluid class="px-1 py-2">
<v-row no-gutters class="mb-5">
  <v-col cols="12" class="px-1">
    <h1>FORMATION</h1>
  </v-col>
  <v-col cols="12" class="pt-0 pb-2 px-1">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
        <v-expansion-panel-text>
          ライブグランプリの獲得グランプリPt.の計算ツールです。<br>
          <br>
          <b>使い方</b><br>
          Season Fan Lv.は全員分入力してください。<br>
          (アプリ内上部のユーザーネームをタップして、Fan Lv.の右にあるアイコンをタップすると確認できます)<br>
          解放Lv.は、その楽曲の歌唱メンバー(リーダーを含む)のみ入力してください。<br>
          解放Lv.の変更方法は、<br>
          ・名前の横にあるチェックマークにチェックを入れる<br>
          ・歌唱メンバーのメインスタイルに設定しているカードのレア度を設定<br>
          で該当メンバーの解放Lv.を変更できるようになります。<br>
          <br>
          <b>注意事項</b><br>
          ※突貫で作ったため、スマホでの表示を考慮していません。横画面にするか、PCからアクセスしてください。<br>
          ※この機能は暫定機能です。今後のアップデートでリニューアルします。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
  <v-col cols="12" class="pa-0">
    <v-row no-gutters>
      <v-col cols="2">総スマイル：10,000</v-col>
      <v-col cols="2">総クール：10,000</v-col>
      <v-col cols="2">総ピュア：10,000</v-col>
      <v-col cols="2">総メンタル：10,000</v-col>
      <v-col cols="2"></v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
        v-for="(name_ja, name_en) in store.charactorName"
        :key="name_ja"
        class="pa-1"
      >
        <v-card elevation="2">
          <v-row
            no-gutters
            class="charactorArea"
            :data-charactorName="name_en"
          >
            <v-col cols="12" class="charactorDetailArea pa-1">
              <h2 class="text-center">
                <span
                  @click="store.showModalEvent('charactorSetting')"
                  class="text-justify"
                  style="display: inline-block;"
                >
                  <img
                    :src="require(`@/assets/member_icon/icon_illust_${name_en}.png`)"
                    style="width: 35px;"
                  >
                  {{ store.makeFullName(name_en) }}
                </span>
                <v-icon color="yellow">mdi-crown</v-icon>
              </h2>
              <v-row no-gutters>
                <v-col cols="4">
                  <dl>
                    <dt>合計マスタリーLv. </dt>
                    <dd>{{ store.makeTotalMastaryLv(name_en) }}</dd>
                  </dl>
                </v-col>
                <v-col cols="5">
                  <h3>ボーナススキル</h3>
                  <span
                    v-for="skillName in bonusSkillList"
                    :key="skillName"
                    class="mr-1"
                  >
                    <img
                      :src="require(`@/assets/${skillName}.png`)"
                      style="width: 25px;"
                    >×{{ store.memberData.centerList[name_en].bonusSkill[skillName] }}
                  </span>
                </v-col>
                <v-col cols="3">
                  <h3>Season Fan Lv. </h3>
                  <p>7 / 10</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              v-for="(ary, styleName) in styleHeadline"
              :key="styleName"
              :data-style="styleName"
            >
              <v-row no-gutters>
                <v-col
                  cols="4"
                  class="px-1 pt-1"
                >
                  <v-card
                    elevation="2"
                    hover
                    @click="store.showModalEvent('selectCard'); store.setOpenCard(name_en, styleName)"
                  >
                    <v-img
                      :src="require(`@/assets/card_illust/${makeIllustCard(store, store.selectCard[name_en][styleName], name_en)}.png`)"
                    ></v-img>
                  </v-card>
                </v-col>
                <v-col
                  cols="8"
                  class="px-1 pt-1"
                  style="font-size: 15px;"
                >
                  <h3>{{ ary }}</h3>
                  <dl class="mb-1">
                    <dt>カード名</dt>
                    <dd>{{ makeCardName(store, store.selectCard[name_en][styleName], name_en) }}</dd>
                  </dl>
                  <v-row no-gutters class="pb-1">
                    <v-col cols="3">
                      <dl>
                        <dt>レベル</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.cardLevel }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>SA</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.SALevel }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>S</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.SLevel }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>解放Lv.</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.releaseLevel }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>スマイル</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].uniqueStatus.smile }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>クール</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].uniqueStatus.cool }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>ピュア</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].uniqueStatus.pure }}</dd>
                      </dl>
                    </v-col>
                    <v-col cols="3">
                      <dl>
                        <dt>メンタル</dt>
                        <dd>{{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].uniqueStatus.mental }}</dd>
                      </dl>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-divider class="mx-1"></v-divider>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</v-row>

<v-row no-gutters>
  <v-col cols="12">
    <h1>SIMULATION</h1>
  </v-col>
</v-row>
</v-container>

<v-container fluid class="pa-2">
  <v-row>
    <v-col cols="12" class="pb-3">
      <h1>SIMULATION ～ 獲得グランプリPt.計算ツール ～</h1>
    </v-col>
    <v-col cols="12" class="pt-0 pb-3">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
          <v-expansion-panel-text>
            ライブグランプリの獲得グランプリPt.の計算ツールです。<br>
            <br>
            <b>使い方</b><br>
            Season Fan Lv.は全員分入力してください。<br>
            (アプリ内上部のユーザーネームをタップして、Fan Lv.の右にあるアイコンをタップすると確認できます)<br>
            解放Lv.は、その楽曲の歌唱メンバー(リーダーを含む)のみ入力してください。<br>
            解放Lv.の変更方法は、<br>
            ・名前の横にあるチェックマークにチェックを入れる<br>
            ・歌唱メンバーのメインスタイルに設定しているカードのレア度を設定<br>
            で該当メンバーの解放Lv.を変更できるようになります。<br>
            <br>
            <b>注意事項</b><br>
            ※突貫で作ったため、スマホでの表示を考慮していません。横画面にするか、PCからアクセスしてください。<br>
            ※この機能は暫定機能です。今後のアップデートでリニューアルします。
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col
      v-for="i in 2"
      :key="i"
      cols="12"
      sm="6"
      :class="['py-2 prr-sm-2 pr-md-2 pr-lg-2 pr-xl-2', 'py-2 prl-sm-2 pl-md-2 pl-lg-2 pl-xl-2'][i - 1]"
    >
      <v-card elevation="2">
        <v-card-title>楽曲{{ i }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <h2>予想獲得グランプリPt. {{ GPpt(i - 1) }}</h2>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="score[i - 1]"
                label="スコア"
                hint="スコアを入力してください"
                :rules="rules"
                persistent-hint
                color="pink"
                base-color="pink"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
              class="mb-5"
            >
              <v-select
                v-model="clearStage[i - 1]"
                :items="[1, 2, 3, 4]"
                label="ステージ"
                hint="ステージを選択してください"
                persistent-hint
                color="pink"
                base-color="pink"
              ></v-select>
            </v-col>
          </v-row>

          <div
            v-for="(arr, memberName) in store.charactorName"
            :key="memberName"
          >
            <v-checkbox
              v-model="performance[i - 1]"
              :label="arr.last"
              :value="memberName"
              hide-details
              color="pink"
            ></v-checkbox>

            <v-row no-gutters>
              <v-col cols="2">レア度</v-col>
              <v-col cols="5" class="text-center">Season Fan Lv.</v-col>
              <v-col cols="5" class="text-center">解放Lv.</v-col>
              <v-col cols="2">
                <v-select
                  v-model="bonus.rare[i - 1][memberName]"
                  :items="['UR', 'SR', 'R']"
                  :hint="`メインスタイルに設定している${arr.last}のカードのレア度を選択してください`"
                  color="pink"
                  base-color="pink"
                ></v-select>
              </v-col>
              <v-col cols="5">
                <v-row no-gutters>
                  <v-spacer></v-spacer>
                  <v-col
                    align="center"
                    justify="center"
                    class="pa-0"
                  >
                    <v-btn
                      x-small
                      :disabled="bonus.seasonFan[i - 1][memberName] === 1"
                      @click="setValue(['seasonFan', i - 1, memberName], bonus.seasonFan[i - 1][memberName] - 1)">-1
                    </v-btn>
                  </v-col>
                  <v-col
                    align="center"
                    justify="center"
                    class="px-0 pt-1 pb-0"
                  >
                    {{ bonus.seasonFan[i - 1][memberName] }}
                  </v-col>
                  <v-col
                    align="center"
                    justify="center"
                    class="pa-0"
                  >
                    <v-btn
                      x-small
                      :disabled="bonus.seasonFan[i - 1][memberName] === 10"
                      @click="setValue(['seasonFan', i - 1, memberName], bonus.seasonFan[i - 1][memberName] + 1)">+1
                    </v-btn>
                  </v-col>
                </v-row>
                <v-spacer></v-spacer>
              </v-col>
              <v-col cols="5">
                <v-row no-gutters>
                  <v-spacer></v-spacer>
                  <v-col
                    align="center"
                    justify="center"
                    class="pa-0"
                  >
                    <v-btn
                      x-small
                      :disabled="bonus.rare[i - 1][memberName] === undefined || bonus.release[i - 1][memberName] === 1"
                      @click="setValue(['release', i - 1, memberName], bonus.release[i - 1][memberName] - 1)">-1
                    </v-btn>
                  </v-col>
                  <v-col
                    align="center"
                    justify="center"
                    class="px-0 pt-1 pb-0"
                  >
                    {{ bonus.release[i - 1][memberName] }}
                  </v-col>
                  <v-col
                    align="center"
                    justify="center"
                    class="pa-0"
                  >
                    <v-btn
                      x-small
                      :disabled="bonus.rare[i - 1][memberName] === undefined || bonus.release[i - 1][memberName] === 5"
                      @click="setValue(['release', i - 1, memberName], bonus.release[i - 1][memberName] + 1)">+1
                    </v-btn>
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'FormationArea',
  data() {
    return {
      bonusSkillList: ['ビートハートアップ', 'ボルテージアップ', 'メンタルリカバー', 'LOVEボーナス'],
      score: [0, 0],
      clearStage: [1, 1],
      performance: [[], []],
      bonus: {
        rare: [
          {
            kaho: undefined,
            sayaka: undefined,
            rurino: undefined,
            kozue: undefined,
            tsuzuri: undefined,
            megumi: undefined
          },
          {
            kaho: undefined,
            sayaka: undefined,
            rurino: undefined,
            kozue: undefined,
            tsuzuri: undefined,
            megumi: undefined
          }
        ],
        seasonFan: [
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          },
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          }
        ],
        release: [
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          },
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          }
        ]
      },
      clearRank: [1, 1.1, 1.2, 1.3],
      seasonFanLv: [0, 0.2, 0.275, 0.35, 0.425, 0.5, 0.55, 0.6, 0.65, 0.7],
      releaseLv: {
        UR: [0, 0.2, 0.3, 0.35, 0.4],
        SR: [0, 0.15, 0.25, 0.3, 0.35],
        R: [0, 0.1, 0.15, 0.2, 0.25]
      },
      rules: [
        value => !isNaN(value) || '半角数字で入力してください'
      ],
      styleHeadline: {
        main: 'MAIN STYLE',
        side1: 'SIDE STYLE 1',
        side2: 'SIDE STYLE 2'
      },
      selectTab: 'kaho'
    }
  },
  created() {},
  mounted() {},
  computed: {
    setCard() {
      return this.updateData.selectCard;
    },
    GPpt() {
      return (target) => {
        let releaseLv = 0;
        let seasonFanLv = 0;

        for (const memberName in this.bonus.seasonFan[target]) {
          if (this.performance[target].indexOf(memberName) >= 0) {
            seasonFanLv += this.seasonFanLv[this.bonus.seasonFan[target][memberName] - 1];

            if (this.bonus.rare[target][memberName] !== undefined) {
              releaseLv += this.releaseLv[this.bonus.rare[target][memberName]][this.bonus.release[target][memberName] - 1];
            }
          }
        }

        return Math.ceil(this.score[target] * this.clearRank[this.clearStage[target] - 1] * (1 + releaseLv) * (1 + seasonFanLv)).toLocaleString();
      }
    }
  },
  methods: {
    changeTab(selectCharactor) {
      this.selectTab = selectCharactor;
    },
    setIcon(name_en) {
      return {
        'background-image': `url(${require(`@/assets/member_icon/icon_${name_en}.png`)})`,
        'background-position': 'center'
      };
    },
    setValue(target, v) {
      this.bonus[target[0]][target[1]][target[2]] = v;
    },
    changePerformance(i, musicDataList) {
      if (this.selectMusic[i] === null) {
        this.performance[i] = [];
      } else {
        this.performance[i] = musicDataList[this.selectMusic[i]].singingMembers;
      }
    },
    makeIllustCard(store, selectCardName, memberName) {
      if (selectCardName === 'default') {
        return 'NO IMAGE';
      } else {
        return `${store.conversion(selectCardName)}_${store.charactorName[memberName].last}_覚醒後`;
      }
    },
    makeCardName(store, selectCardName, name_en) {
      if (selectCardName === 'default') {
        return 'unselected';
      } else {
        return `${store.searchRarity(name_en, selectCardName)}${['', '+', '++'][store.card[name_en][store.searchRarity(name_en, selectCardName)][selectCardName].fluctuationStatus.trainingLevel]} ${selectCardName}`;
      }
    }
  },
  watch: {}
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>