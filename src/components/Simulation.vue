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
  <v-col cols="12" class="px-1 pb-2">
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
  <v-col cols="12">
    <v-btn
      color="light-blue"
      prepend-icon="mdi-content-save"
      @click="snackbar.save = true"
    >
      保存
    </v-btn>
    <v-btn
      color="green"
      prepend-icon="mdi-content-save-edit"
      @click="snackbar.nameSave = true"
    >
      名前をつけて保存
    </v-btn>
    <v-btn
      prepend-icon="mdi-folder-open"
      color="indigo"
    >
      編成を開く
    </v-btn>
    <v-btn
      prepend-icon="mdi-trash-can"
      color="red"
    >
      編成リセット
    </v-btn>
    <v-btn
      prepend-icon="mdi-crown"
      color="yellow"
      :disabled="countDefaultCard(store).main + countDefaultCard(store).leaves === 18"
    >
      エースカード設定
    </v-btn>
  </v-col>
  <v-col cols="12" class="pa-0">
    <v-row no-gutters>
      <v-col
        v-for="(v, k) in attrName"
        :key="v"
      >
        総{{ v }}：{{ totalParam(store, k) }}
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-alert
          v-if="countDefaultCard(store).main > 0"
          type="error"
          variant="outlined"
          class="mb-2"
        >
          MAIN STYLEを設定してください
        </v-alert>
        <v-alert
          type="warning"
          variant="outlined"
          class="mb-2"
        >
          SIDE STYLEに未設定カードがあるため、AP回復速度が{{ countDefaultCard(store).result }}%低下します
        </v-alert>
        <v-alert
          v-if="countDefaultCard(store).main + countDefaultCard(store).leaves < 18"
          type="warning"
          variant="outlined"
          class="mb-2"
        >
          エースカードが未設定です
        </v-alert>
        <v-alert
          v-if="false"
          type="info"
          variant="outlined"
          class="mb-2"
        >
          エースカードを設定してください
        </v-alert>
      </v-col>
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
              <h2>
                <span
                  @click="store.showModalEvent('charactorSetting')"
                  class="d-flex flex-row justify-center align-center"
                >
                  <img
                    :src="require(`@/assets/member_icon/icon_illust_${name_en}.png`)"
                    class="mr-1"
                    style="width: 35px;"
                  >
                  <span style="margin-top: 2px;">{{ store.makeFullName(name_en) }}</span>
                  <v-icon color="indigo">mdi-microphone-variant</v-icon>
                  <v-icon color="yellow-accent-1">mdi-star</v-icon>
                </span>
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
              v-for="(ary, styleName) in store.styleHeadline"
              :key="styleName"
              :data-style="styleName"
            >
              <v-row no-gutters>
                <v-col
                  cols="4"
                  class="px-1 pt-1"
                >
                  <v-card
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
                  <v-row no-gutters>
                    <v-col cols="11">
                      <h3>{{ ary }}<v-icon color="yellow-accent-4">mdi-crown</v-icon></h3>
                    </v-col>
                    <v-col cols="1">
                      <v-btn
                        density="compact"
                        icon="mdi-close"
                        variant="flat"
                        @click="reset()"
                      ></v-btn>
                    </v-col>
                  </v-row>
                  <dl class="mb-1">
                    <dt>カード名</dt>
                    <dd>{{ makeCardName(store, store.selectCard[name_en][styleName], name_en, styleName) }}</dd>
                  </dl>
                  <v-card variant="flat" @click="dialog.paramSet = true;" :disabled="store.selectCard[name_en][styleName] === 'default'">
                    <v-row no-gutters class="pb-1">
                      <v-col cols="3">
                        <dl>
                          <dt>レベル</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].cardLevel }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>SA</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].SALevel }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>スキル</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].SLevel }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>解放Lv.</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].releaseLevel }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>スマイル</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].smile }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>クール</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].cool }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>ピュア</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].pure }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>メンタル</dt>
                          <dd>{{ this.formation[this.selectFormation][name_en][styleName].mental }}</dd>
                        </dl>
                      </v-col>
                    </v-row>
                  </v-card>
                  <!--<v-card variant="flat" @click="dialog.paramSet = true;" :disabled="store.selectCard[name_en][styleName] === 'default'" v-if="false">
                    <v-row no-gutters class="pb-1">
                      <v-col cols="3">
                        <dl>
                          <dt>レベル</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'cardLevel') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>SA</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'SALevel') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>スキル</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'SLevel') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>解放Lv.</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'releaseLevel') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>スマイル</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'smile') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>クール</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'cool') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>ピュア</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'pure') }}</dd>
                        </dl>
                      </v-col>
                      <v-col cols="3">
                        <dl>
                          <dt>メンタル</dt>
                          <dd>{{ makeParam(store, name_en, styleName, 'mental') }}</dd>
                        </dl>
                      </v-col>
                    </v-row>
                  </v-card>-->
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
  <v-col cols="3">
    <v-card class="pa-2">
      <h3>センターカード</h3>
      <v-card>
        <v-img
          :src="require(`@/assets/card_illust/NO IMAGE.png`)"
        ></v-img>
      </v-card>
      <div>NO IMAGE</div>
      <div>属性：クール</div>
      <div></div>
    </v-card>
  </v-col>
  <v-col cols="3">
    <v-card class="pa-2">
      <h3>想定楽曲</h3>
      <v-card>
        <v-img
          :src="require(`@/assets/CD_jacket/NO IMAGE.png`)"
        ></v-img>
      </v-card>
      <div>NO IMAGE</div>
      <div>属性：クール</div>
      <div></div>
    </v-card>
  </v-col>
  <v-col cols="6">
    <v-card class="pa-2">
      <h3>シミュレーション結果</h3>
      <p>ハート1個あたりのLOVE値：{{ Math.ceil(120 * totalParam(store, 'smile') * 1.5 / 6 / 90) }}</p>
    </v-card>
  </v-col>
</v-row>

<v-snackbar
  v-model="snackbar.save"
  timeout="5000"
  color="blue-lighten-1"
>
  保存しました
</v-snackbar>
</v-container>

<v-dialog v-model="dialog.paramSet" max-width="600">
<v-sheet class="pa-2">
  <v-row no-gutters>
    <v-col></v-col>
  </v-row>
  <div class="mt-3 text-center">
    <v-btn @click="dialog.paramSet = false" class="mr-4">CANCEL</v-btn>
    <v-btn color="light-blue" @click="dialog.paramSet = false;">
      <v-icon class="mr-1">mdi-content-save</v-icon>保存
    </v-btn>
  </div>
</v-sheet>
</v-dialog>

<v-dialog v-model="snackbar.nameSave" max-width="600">
<v-sheet class="pa-2">
  <v-row no-gutters>
    <v-col cols="12" class="mb-2">
      <h3>名前をつけて保存する</h3>
    </v-col>
    <v-col cols="12">
      <v-text-field label="編成名" counter color="pink" hint="編成名を入力してください" maxlength="30" persistent-counter persistent-hint></v-text-field>
    </v-col>
  </v-row>
  <div class="mt-3 text-center">
    <v-btn @click="snackbar.nameSave = false" class="mr-4">CANCEL</v-btn>
    <v-btn color="light-blue" @click="snackbar.save = true; snackbar.nameSave = false">
      <v-icon class="mr-1">mdi-content-save</v-icon>保存
    </v-btn>
  </div>
</v-sheet>
</v-dialog>

<v-dialog max-width="1600">
<v-sheet class="pa-2">

</v-sheet>
</v-dialog>

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
      attrName: {
        smile: 'スマイル',
        cool: 'クール',
        pure: 'ピュア',
        mental: 'メンタル',
        releaseLevel: '解放Lv.'
      },
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
      selectTab: 'kaho',
      snackbar: {
        save: false,
        nameSave: false
      },
      dialog: {
        paramSet: false
      },
      attr: ['cardLevel', 'SALevel', 'SLevel', 'releaseLevel', 'smile', 'cool', 'pure', 'mental'],
      selectFormation: '新規デッキ1',
      formation: {},
      formation_default: {
        kaho: {
          main: 'default',
          side1: 'default',
          side2: 'default'
        },
        sayaka: {
          main: 'default',
          side1: 'default',
          side2: 'default'
        },
        rurino: {
          main: 'default',
          side1: 'default',
          side2: 'default'
        },
        kozue: {
          main: 'default',
          side1: 'default',
          side2: 'default'
        },
        tsuzuri: {
          main: 'default',
          side1: 'default',
          side2: 'default'
        },
        megumi: {
          main: 'default',
          side1: 'default',
          side2: 'default'
        }
      }
    }
  },
  created() {
    if (Object.keys(this.formation).length === 0) {
      this.formation['新規デッキ1'] = this.makeDefaultFormation();
    }
  },
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
    },
    totalParam() {
      return (store, attr) => {
        let result = 0;

        for (const memberName in store.selectCard) {
          for (const style in store.selectCard[memberName]) {
            if (attr) {
            //if (store.selectCard[memberName][style] === 'default') {
              continue;
            }

            result += this.makeParam(store, memberName, style, attr);
          }
          
        }

        return result;
      }
    },
    countDefaultCard() {
      return (store) => {
        let result = {
          main: 0,
          side: 0
        };

        for (const charactorName in store.charactorName) {
          for (const style in store.selectCard[charactorName]) {
            if (store.selectCard[charactorName][style] === 'default') {
              result[style === 'main' ? 'main' : 'side']++;
            }
          }
        }

        return {
          main: result.main,
          leaves: result.side,
          result: result.side > 9 ? 95 : result.side * 10
        };
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
    makeCardName(store, selectCardName, name_en, style) {
      this.makeParam(store, name_en, style, this.attr);

      if (selectCardName === 'default') {
        return 'カードを選択してください';
      } else {
        return `[${store.searchRarity(name_en, selectCardName)}${['', '+', '++'][store.cardParam('trainingLevel', {memberName: name_en, rare: store.searchRarity(name_en, selectCardName), cardName: selectCardName})]}] ${selectCardName}`;
      }
    },
    makeParam(store, name, style, attr) {
      //return store.cardParam(attr, {memberName: name, rare: store.searchRarity(name, store.selectCard[name][style]), cardName: store.selectCard[name][style]});
      const list = {};
      let rare;

      for (const key of attr) {
        rare = store.searchRarity(name, store.selectCard[name][style]);
        list[key] = store.cardParam(key, {memberName: name, rare: rare, cardName: store.selectCard[name][style]});
      }

      list.cardName = store.selectCard[name][style];
      list.rare = rare;

      this.formation[this.selectFormation][name][style] = Object.create(list);
      console.log(this.formation[this.selectFormation]);
    },
    getParamList(store, name, style) {
      return store.card[name][store.searchRarity(name, store.selectCard[name][style])][store.selectCard[name][style]];
    },
    reset() {},
    makeDefaultFormation() {
      const list = {};
      let list2 = {}

      for (const charactorName of ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']) {
        for (const style of ['main', 'side1', 'side2']) {
          list2[style] = 'default';
          list[charactorName] = list2;
        }
      }

      return list;
    },
    /*countDefaultCard(store) {
      let result = {
        main: 0,
        side: 0
      };

      for (const charactorName in store.charactorName) {
        for (const style in store.selectCard[charactorName]) {
          if (store.selectCard[charactorName][style] === 'default') {
            result[style === 'main' ? 'main' : 'side']++;
          }
        }
      }

      return {
        main: result.main,
        leaves: result.side,
        result: result.side > 9 ? 95 : result.side * 10
      };
    }*/
  },
  watch: {}
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>