import { defineStore } from 'pinia';
import { useCardStore } from './cardList';
import { useSkillStore } from './skillList';
import { useMusicStore } from './musicList';
import Dexie from 'dexie';
import { CounterState } from '@/types/counter';
import { CardData } from '@/types/cardList';
// import { Dropbox } from 'dropbox';

export const useStoreCounter = defineStore('store', {
  state: (): CounterState => ({
    version: 'ζ.25(アーリーアクセス)',
    loading: false,
    dialog: false,
    dialogError: false,
    updateData: false,
    selectCharacter: '',
    selectMusicTitle: undefined,
    checkMasteryMember: 'kaho',
    thisPeriod: 104,
    selectDeckName: '',
    isParamReflect: true,
    isPossessionFlg: true,
    rare: ['DR', 'LR', 'BR', 'UR', 'SR', 'R'],
    favorite: ['heart', 'circle', 'triangle', 'square', 'rhombus', 'star'],
    releaseStatus: ['none', 'trainingLevel', 'cardLevel', 'releaseLevel'],
    bonusSkill: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス'],
    withStar: {
      kaho: 1,
      sayaka: 1,
      rurino: 1,
      kozue: 1,
      tsuzuri: 1,
      megumi: 1,
      ginko: 1,
      kosuzu: 1,
      hime: 1,
      seras: 1,
      izumi: 1,
    },
    siteSettings: {
      all: {
        headerTracking: '',
        darkMode: 'light',
      },
      cardList: {
        isShowDetail: 'false',
        hover: 'true',
        dot_cardLevel: 'true',
        dot_releasePoint: 'true',
        dot_releaseLevel: 'true',
      },
      musicList: {
        hover: 'true',
      },
    },
    sortSettings: {
      cardList: {
        sortType: 'rare',
        order: 'descending',
      },
      musicList: {
        sortType: 'default',
        order: 'ascending',
      },
    },
    defaultSearch: {
      cardList: {
        rare: ['DR', 'LR', 'BR', 'UR', 'SR', 'R'],
        styleType: ['performer', 'moodMaker', 'cheerLeader', 'trickStar'],
        mood: ['happy', 'neutral', 'melow'],
        limited: [
          'spring',
          'summer',
          'autumn',
          'winter',
          'graduation',
          'party',
          'birthday',
          'collaboration',
          'prize',
          'normal',
        ],
        cardLevel: [0, 140],
        SALevel: [1, 14],
        SLevel: [1, 14],
        SAAP: [0, 99],
        SAP: [0, 99],
        releaseLevel: [1, 5],
        trainingLevel: [0, 4],
        memberName: [
          'kaho',
          'sayaka',
          'rurino',
          'kozue',
          'tsuzuri',
          'megumi',
          'ginko',
          'kosuzu',
          'hime',
          'special',
        ],
        favorite: [],
        releaseStatus: 'none',
      },
      skillList: {
        skillFilterType: 'skillType',
        skillType: {
          specialAppeal: [],
          skill: [],
          characteristic: [],
        },
        skillName: {
          specialAppeal: [],
          skill: [],
          characteristic: [],
        },
      },
      cardSeries: [],
    },
    styleHeadline: {
      103: {
        main: 'MAIN STYLE',
        side1: 'SIDE STYLE 1',
        side2: 'SIDE STYLE 2',
      },
      104: {
        main: 'MAIN STYLE',
        side1: 'SIDE STYLE 1',
      },
      // 105: {
      //   main: 'MAIN STYLE',
      //   side1: 'SIDE STYLE 1'
      // }
    },
    statusName: {
      none: 'なし',
      cardLevel: 'カード Lv.',
      SALevel: 'SA Lv.',
      SLevel: 'スキル Lv.',
      SAAP: 'スペシャルアピールAP',
      SAP: 'スキルAP',
      trainingLevel: '特訓',
      releaseLevel: '解放 Lv.',
    },
    styleType: {
      performer: 'パフォーマー',
      moodMaker: 'ムードメーカー',
      cheerLeader: 'チアリーダー',
      trickStar: 'トリックスター',
    },
    mood: {
      happy: 'ハッピー',
      neutral: 'ニュートラル',
      melow: 'メロウ',
    },
    attribute: {
      smile: 'スマイル',
      pure: 'ピュア',
      cool: 'クール',
    },
    limited: {
      spring: {
        filterLabel: 'SPRING LIMITED',
        cardLabel: '春限定',
      },
      summer: {
        filterLabel: 'SUMMER LIMITED',
        cardLabel: '夏限定',
      },
      autumn: {
        filterLabel: 'AUTUMN LIMITED',
        cardLabel: '秋限定',
      },
      winter: {
        filterLabel: 'WINTER LIMITED',
        cardLabel: '冬限定',
      },
      graduation: {
        filterLabel: 'GRADUATION LIMITED',
        cardLabel: '卒業限定',
      },
      party: {
        filterLabel: 'PARTY! LIMITED',
        cardLabel: '宴限定',
      },
      birthday: {
        filterLabel: 'BIRTHDAY LIMITED',
        cardLabel: '誕生日限定',
      },
      collaboration: {
        filterLabel: 'コラボ',
        cardLabel: 'コラボ限定',
      },
      prize: {
        filterLabel: 'GP PRIZE',
        cardLabel: 'ライブGP報酬',
      },
      normal: {
        filterLabel: '通常',
        cardLabel: '通常',
      },
    },
    maxCardLevel: {
      DR: [100, 120, 130, 140],
      LR: [100, 120, 130, 140],
      BR: [80, 100, 110, 120],
      UR: [60, 80, 100, 110, 120],
      SR: [40, 60, 80, 90, 100],
      R: [30, 40, 60, 70, 80],
    },
    releasePoint: {
      DR: {
        point: 100,
        max: 400,
      },
      LR: {
        point: 100,
        max: 400,
      },
      BR: {
        point: 75,
        max: 300,
      },
      UR: {
        point: 100,
        max: 400,
      },
      SR: {
        point: 50,
        max: 200,
      },
      R: {
        point: 25,
        max: 100,
      },
    },
    memberName: {
      kaho: {
        first: '日野下',
        last: '花帆',
      },
      sayaka: {
        first: '村野',
        last: 'さやか',
      },
      rurino: {
        first: '大沢',
        last: '瑠璃乃',
      },
      kozue: {
        first: '乙宗',
        last: '梢',
      },
      tsuzuri: {
        first: '夕霧',
        last: '綴理',
      },
      megumi: {
        first: '藤島',
        last: '慈',
      },
      ginko: {
        first: '百生',
        last: '吟子',
      },
      kosuzu: {
        first: '徒町',
        last: '小鈴',
      },
      hime: {
        first: '安養寺',
        last: '姫芽',
      },
      seras: {
        first: 'セラス',
        last: '柳田 リリエンフェルト',
      },
      izumi: {
        first: '桂城',
        last: '泉',
      },
      sachi: {
        first: '大賀美',
        last: '沙知',
      },
      selaIzu: {
        first: '桂城泉＆',
        last: 'セラス 柳田 リリエンフェルト',
      },
      kozutsuzumegu: {
        first: '乙宗梢＆夕霧綴理＆',
        last: '藤島慈',
      },
    },
    exclusionMember: ['sachi', 'selaIzu', 'kozutsuzumegu'],
    specialCardIdList: ['sc_001', 'is_001', 'ktm_001'],
    memberId: {
      kh: 'kaho',
      sy: 'sayaka',
      rr: 'rurino',
      kz: 'kozue',
      tz: 'tsuzuri',
      mg: 'megumi',
      gn: 'ginko',
      sz: 'kosuzu',
      hm: 'hime',
      sr: 'seras',
      iz: 'izumi',
      sc: 'sachi',
      is: 'selaIzu',
      ktm: 'kozutsuzumegu',
    },
    formationMember: {
      103: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi'],
      104: ['ginko', 'kosuzu', 'hime', 'kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi'],
      // 105: [
      //   'seras',
      //   'izumi',
      //   'free',
      //   'ginko',
      //   'kosuzu',
      //   'hime',
      //   'kaho',
      //   'sayaka',
      //   'rurino'
      // ]
    },
    memberColor: {
      kaho: '#F8B500',
      sayaka: '#5383C3',
      rurino: '#E7609E',
      kozue: '#68BE8D',
      tsuzuri: '#BA2636',
      megumi: '#C8C2C6',
      ginko: '#A2D7DD',
      kosuzu: '#FAD764',
      hime: '#9D8DE2',
      seras: '#f56455',
      izumi: '#1ebecd',
    },
    groupName: {
      hasunosora: '蓮ノ空女学院スクールアイドルクラブ',
      CeriseBouquet: 'スリーズブーケ',
      DOLLCHESTRA: 'DOLLCHESTRA',
      miraCraPark: 'みらくらぱーく！',
      kahomeguGelato: 'かほめぐ♡じぇらーと',
      hasunokyujitsu: '蓮ノ休日',
      rurinoTsuzuri: 'るりのとゆかいなつづりたち',
      EdelNote: 'Edel Note',
    },
    bonusSkillList: {
      ボルテージアップ: {
        text: ['ボルテージPt.を', 'pt.獲得するごとに、1pt.追加獲得'],
        skillLevel: 0,
        init: 11,
        ary: [5, 10, 15, 20, 25, 30, 40],
      },
      メンタルリカバー: {
        text: ['メンタルが', '減少するごとに、メンタルを1回復'],
        skillLevel: 0,
        init: 12,
        ary: [1, 5, 9, 13, 17, 21, 25, 29],
      },
      ビートハートアップ: {
        text: ['ビートハートの出現量+', '%'],
        skillLevel: 0,
      },
      LOVEボーナス: {
        text: ['ハート回収時のLOVE獲得量+', '%'],
        skillLevel: 0,
        ary: [
          { limit: 5, baseValue: 0, multiplier: 10, subtractLevel: 0 },
          { limit: 10, baseValue: 50, multiplier: 5, subtractLevel: 5 },
          { limit: 25, baseValue: 75, multiplier: 4, subtractLevel: 10 },
          { limit: 50, baseValue: 135, multiplier: 3, subtractLevel: 25 },
          { limit: Infinity, baseValue: 210, multiplier: 2.5, subtractLevel: 50 },
        ],
      },
    },
    memberData: {
      centerList: {},
    },
    deck: [],
    settingCard: {
      // 何故か分からないがここを設定しないとエラーが出るため設定
      ID: 'kh_023',
      rare: 'DR',
      name: 'kaho',
      card: 'Prism Echo',
    },
    openCard: {
      ID: 'kh_000',
      name: 'kaho',
      style: 'main',
    },
    localStorageData: {
      musicData: {
        musicLevel: {},
      },
      cardList: {
        card: {},
        cardListFilter: {},
      },
      selectItemList: {
        item1: [],
        item2: [],
        item3: [],
      },
      siteSettings: {
        all: {},
        cardList: {},
        musicList: {},
      },
      sortSettings: {
        cardList: {},
        musicList: {},
      },
    },
    grandprixBonus: {
      clearRank: [1, 1.1, 1.2, 1.3],
      seasonFanLv: [0, 0.2, 0.275, 0.35, 0.425, 0.5, 0.55, 0.6, 0.65, 0.7],
      releaseLv: {
        LR: [0, 0.2, 0.3, 0.35, 0.4],
        BR: [0, 0.2, 0.3, 0.35, 0.4],
        UR: [0, 0.2, 0.3, 0.35, 0.4],
        SR: [0, 0.15, 0.25, 0.3, 0.35],
        R: [0, 0.1, 0.15, 0.2, 0.25],
      },
    },
    supportSkill: {},
    sortTypeList: {
      rare: 'レア度(標準)',
      //timeline: '時系列',
      //all: '総合',
      cardLevel: 'カードLv.',
      SALevel: 'SA Lv.',
      SLevel: 'スキルLv.',
      releaseLevel: '解放Lv.',
      releaseBonus: '解放Lv.ボーナス',
      trainingLevel: '特訓度',
      //smile: 'スマイル',
      //pure: 'ピュア',
      //cool: 'クール',
      //mental: 'メンタル',
      kana: '五十音',
    },
    defaultCardList: [],
    windowSize: {
      w: 0,
      h: 0,
    },
  }),
  getters: {
    defaultCard() {
      const cardStore = useCardStore();
      return cardStore.card;
    },
    skillList() {
      const skillStore = useSkillStore();
      return skillStore.skillList;
    },
    skillColor() {
      const skillStore = useSkillStore();
      return skillStore.skillColor;
    },
    musicList() {
      const musicStore = useMusicStore();
      this.IDCheck(
        Object.keys(musicStore.musicList)
          .map((key) => {
            return {
              ...musicStore.musicList[key],
            };
          })
          .sort((a, b) => {
            return a.ID.localeCompare(b.ID);
          }),
        'music',
      );
      return musicStore.musicList;
    },
    cardList() {
      let result = {
        DR: [],
        LR: [],
        BR: [],
        UR: [],
        SR: [],
        R: [],
      };
      let result2 = [];

      for (const memberName in this.card) {
        if (memberName === 'default') {
          continue;
        }

        for (const rare in this.card[memberName]) {
          for (let cardName in this.card[memberName][rare]) {
            if (cardName === 'default') {
              continue;
            }

            this.card[memberName][rare][cardName].cardName = cardName;
            this.card[memberName][rare][cardName].rare = rare;
            this.card[memberName][rare][cardName].memberName = memberName;
            this.card[memberName][rare][cardName].limited =
              this.card[memberName][rare][cardName].gacha.period;
            this.card[memberName][rare][cardName].sortPoint = 0;
            this.card[memberName][rare][cardName].favorite = [];
            result[rare].push(this.card[memberName][rare][cardName]);
          }
        }
      }

      for (const rare in result) {
        result2 = result2.concat(result[rare]);
      }

      this.IDCheck(result2, 'card');

      return result2;
    },
    outputCardList() {
      let result = this.cardList.slice();
      let filterList;

      if (result.length > 0) {
        for (const searchKey in this.search.cardList) {
          filterList = this.search.cardList[searchKey];
          result = result.filter((cardData) => {
            switch (searchKey) {
              case 'cardLevel':
              case 'SALevel':
              case 'SLevel':
              case 'releaseLevel':
              case 'trainingLevel':
                return (
                  filterList[0] <= cardData.fluctuationStatus[searchKey] &&
                  cardData.fluctuationStatus[searchKey] <= filterList[1]
                );
              case 'SAAP':
                if (cardData.specialAppeal === undefined) {
                  return true;
                } else {
                  const AP =
                    cardData.specialAppeal.AP -
                    (this.maxCardLevel[cardData.rare].length - 2 >
                    cardData.fluctuationStatus.trainingLevel
                      ? cardData.fluctuationStatus.trainingLevel
                      : this.maxCardLevel[cardData.rare].length - 3);
                  return filterList[0] <= AP && AP <= filterList[1];
                }
              case 'SAP':
                if (cardData.skill === undefined) {
                  return true;
                } else {
                  return filterList[0] <= cardData.skill.AP && cardData.skill.AP <= filterList[1];
                }
              case 'favorite':
                if (this.search.cardList.favorite.length === 0) {
                  return true;
                } else {
                  return this.search.cardList.favorite.some((v) => {
                    return cardData.favorite.length === 0
                      ? false
                      : cardData.favorite.indexOf(v) > -1;
                  });
                }
              case 'releaseStatus':
                if (this.search.cardList.releaseStatus === 'none') {
                  return true;
                }

                if (cardData.fluctuationStatus.cardLevel === 0) {
                  return false;
                }

                if (this.search.cardList.releaseStatus === 'cardLevel') {
                  if (
                    this.maxCardLevel[cardData.rare][
                      this.maxCardLevel[cardData.rare].length - 1
                    ] === cardData.fluctuationStatus.cardLevel
                  ) {
                    return false;
                  } else {
                    return (
                      this.maxCardLevel[cardData.rare][cardData.fluctuationStatus.trainingLevel] >
                      cardData.fluctuationStatus.cardLevel
                    );
                  }
                }

                if (this.search.cardList.releaseStatus === 'trainingLevel') {
                  if (
                    this.maxCardLevel[cardData.rare][
                      this.maxCardLevel[cardData.rare].length - 1
                    ] === cardData.fluctuationStatus.cardLevel
                  ) {
                    return false;
                  } else {
                    return (
                      this.maxCardLevel[cardData.rare][cardData.fluctuationStatus.trainingLevel] ===
                      cardData.fluctuationStatus.cardLevel
                    );
                  }
                }

                if (this.search.cardList.releaseStatus === 'releaseLevel') {
                  if (
                    cardData.fluctuationStatus.releasePoint === 0 ||
                    cardData.fluctuationStatus.releaseLevel === 5
                  ) {
                    return false;
                  } else {
                    return (
                      this.releasePoint[cardData.rare].point <=
                      cardData.fluctuationStatus.releasePoint
                    );
                  }
                }

                return true;
              case 'memberName':
                if (
                  filterList.includes('special') &&
                  this.specialCardIdList.includes(cardData.ID)
                ) {
                  return true;
                }

                return filterList.some((val: string) => {
                  return cardData[searchKey] === val;
                });
              default:
                return filterList.some((val: string) => {
                  return cardData[searchKey] === val;
                });
            }
          });
        }
      }

      if (result.length > 0) {
        for (const searchKey in this.search.skillList[this.search.skillList.skillFilterType]) {
          filterList = this.search.skillList[this.search.skillList.skillFilterType][searchKey];

          if (filterList.length === 0) {
            continue;
          }

          result = result.filter((cardData) => {
            if (cardData[searchKey] !== undefined) {
              return filterList.some((val) => {
                if (this.search.skillList.skillFilterType === 'skillType') {
                  let skillID = null;

                  for (skillID in this.skillColor) {
                    if (this.skillColor[skillID].name === val) {
                      break;
                    }
                  }

                  return this.skillList[cardData[searchKey].name][
                    cardData[searchKey].ID
                  ].detail.type.some((key) => key === skillID);
                } else {
                  return cardData[searchKey].name === val;
                }
              });
            } else {
              return false;
            }
          });
        }
      }

      if (result.length > 0) {
        filterList = this.search.cardSeries;

        if (filterList.length > 0) {
          result = result.filter((cardData) => {
            return filterList.some((val) => {
              return cardData.series === val;
            });
          });
        }
      }

      if (result.length > 0) {
        if (this.localStorageData.sortSettings.cardList.sortType === 'rare') {
          if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
            result.reverse();
          }
        } else {
          let aa: number;
          let bb: number;
          const mergeList = [];

          if (this.localStorageData.sortSettings.cardList.sortType === 'releaseBonus') {
            result = result.filter((cardData) => {
              if (cardData.rare === 'DR' || cardData.specialAppeal === undefined) {
                mergeList.push(cardData);
                return false;
              } else {
                return true;
              }
            });
          }

          result.sort((a: CardData, b: CardData) => {
            if (this.localStorageData.sortSettings.cardList.sortType === 'releaseBonus') {
              aa = a.fluctuationStatus.releaseLevel - 1;
              bb = b.fluctuationStatus.releaseLevel - 1;

              if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
                return this.grandprixBonus.releaseLv[a.rare][aa] <
                  this.grandprixBonus.releaseLv[b.rare][bb]
                  ? -1
                  : this.grandprixBonus.releaseLv[a.rare][aa] >
                    this.grandprixBonus.releaseLv[b.rare][bb]
                  ? 1
                  : 0;
              } else {
                return this.grandprixBonus.releaseLv[a.rare][aa] >
                  this.grandprixBonus.releaseLv[b.rare][bb]
                  ? -1
                  : this.grandprixBonus.releaseLv[a.rare][aa] <
                    this.grandprixBonus.releaseLv[b.rare][bb]
                  ? 1
                  : 0;
              }
            } else if (
              /(card|SA|S|release|training)Level/.test(
                this.localStorageData.sortSettings.cardList.sortType,
              )
            ) {
              aa = a.fluctuationStatus[this.localStorageData.sortSettings.cardList.sortType];
              bb = b.fluctuationStatus[this.localStorageData.sortSettings.cardList.sortType];

              if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
                return aa < bb ? -1 : aa > bb ? 1 : 0;
              } else {
                return aa > bb ? -1 : aa < bb ? 1 : 0;
              }
            } else {
              aa = a[this.localStorageData.sortSettings.cardList.sortType];
              bb = b[this.localStorageData.sortSettings.cardList.sortType];

              if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
                return aa < bb ? -1 : aa > bb ? 1 : 0;
              } else {
                return aa > bb ? -1 : aa < bb ? 1 : 0;
              }
            }
          });

          if (mergeList.length > 0) {
            result = result.concat(mergeList);
          }
        }
      }

      this.localStorageData.cardList.cardListFilter = {
        cardList: this.search.cardList,
        skillList: this.search.skillList,
        cardSeries: this.search.cardSeries,
      };

      this.setLocalStorage('llllMgr_cardListFilter', this.localStorageData.cardList.cardListFilter);

      return result;
    },
    specialAppealNameList() {
      return this.makeSkillFilterList('specialAppeal');
    },
    skillNameList() {
      return this.makeSkillFilterList('skill');
    },
    characteristicList() {
      return this.makeSkillFilterList('characteristic');
    },
    cardSeriesList() {
      return this.makeSkillFilterList('series');
    },
    /**
     * メンバーのリストを作成
     *
     * @returns メンバーのリスト
     */
    memberNameList() {
      const memberNames = Object.keys(this.memberColor);
      memberNames.push('special');
      return memberNames;
    },
    /**
     * スキルテキスト作成
     *
     * @param target specialAppeal | skill | characteristic
     * @returns スキルテキスト
     */
    makeSkillText() {
      return (target: String, option?: any): string[] => {
        let result = '';
        const targetLevel: number =
          option?.targetSkillLv ??
          this.settingCardData.fluctuationStatus[`S${target === 'specialAppeal' ? 'A' : ''}Level`] -
            1;

        const skillData = (() => {
          if (target === 'addSkill') {
            return this.settingCardData.skill.addSkill[option.addSkillNum[0]].addSkill[
              option.addSkillNum[1]
            ];
          } else if (option !== undefined && option?.addSkillNum !== undefined) {
            return this.settingCardData[target].addSkill[option.addSkillNum];
          } else {
            return this.settingCardData[target];
          }
        })();

        const skillTextList = (() => {
          let returnText: string[] = this.skillList[skillData.name][skillData.ID].text;

          if (this.skillList[skillData.name][skillData.ID]?.exText !== undefined) {
            for (const exTextData of this.skillList[skillData.name][skillData.ID].exText) {
              if (exTextData.level <= targetLevel + (option?.targetSkillLv === undefined ? 0 : 1)) {
                returnText = exTextData.text;
              }
            }
          }

          return returnText;
        })();

        for (let i = 0; i < skillTextList.length; i++) {
          result += skillTextList[i];

          if (i < skillTextList.length - 1) {
            result += skillData.detail[i][targetLevel];
          }
        }

        return result;
      };
    },
    settingCardData() {
      return this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];
    },
    setMaxTrainingLevel() {
      return this.maxCardLevel[this.settingCard.rare].length - 1;
    },
    changeMaxCardLevel() {
      return this.maxCardLevel[this.settingCard.rare][
        this.settingCardData.fluctuationStatus.trainingLevel
      ];
    },
    changeMinCardLevel() {
      if (this.settingCardData.fluctuationStatus.trainingLevel - 1 < 0) {
        return this.maxCardLevel[this.settingCard.rare][0];
      } else {
        return this.maxCardLevel[this.settingCard.rare][
          this.settingCardData.fluctuationStatus.trainingLevel - 1
        ];
      }
    },
    changeSkillLevel() {
      return this.settingCardData.fluctuationStatus.releaseLevel + 9;
    },
    /**
     * カードパラメータ作成
     *
     * @param style スタイル名
     * @param cardId カードID
     * @returns カードパラメータ
     */
    cardParam() {
      return (style: string, cardId: string): number => {
        const target = ((): {
          memberName: string;
          rare: string;
          cardName: string;
          trainingLevel?: number;
          cardLevel?: number;
        } => {
          if ((cardId?.split('_')[1] ?? '000') === '000') {
            return {
              memberName: this.settingCard.name,
              rare: this.settingCard.rare,
              cardName: this.settingCard.card,
            };
          } else {
            const cardData = this.findCardData(cardId);
            return {
              memberName: cardData.memberName,
              rare: cardData.rare,
              cardName: cardData.cardName,
            };
          }
        })();

        const selectCard: CardData = this.card[target.memberName][target.rare][target.cardName];
        target.trainingLevel = selectCard.fluctuationStatus.trainingLevel;
        target.cardLevel = selectCard.fluctuationStatus.cardLevel;
        const maxStatus = selectCard.uniqueStatus[style];
        const magnification = {
          DR: [0.7, 1],
          LR: [0.7, 1],
          BR: [0.7, 1],
          UR: [0.5, 0.7, 1],
          SR: [0.5, 0.7, 1],
          R: [0.5, 0.7, 1],
        };

        if (target.cardLevel === 0) {
          return 0;
        } else if (target.trainingLevel >= this.maxCardLevel[target.rare].length - 2) {
          return style === 'mental'
            ? maxStatus
            : Math.ceil(
                maxStatus *
                  (1 +
                    (target.cardLevel -
                      this.maxCardLevel[target.rare][this.maxCardLevel[target.rare].length - 3]) /
                      100),
              );
        } else if (target.trainingLevel === magnification[target.rare].length - 1) {
          return Math.ceil(
            maxStatus * magnification[target.rare][target.trainingLevel] -
              (maxStatus / 100) *
                1.5 *
                (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel),
          );
        } else if (target.trainingLevel === 0) {
          if (/^(D|L|B)R$/.test(target.rare)) {
            return Math.ceil(
              maxStatus * magnification[target.rare][target.trainingLevel] -
                ((maxStatus * magnification[target.rare][target.trainingLevel] -
                  Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) /
                  (this.maxCardLevel[target.rare][target.trainingLevel] - 1)) *
                  (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel),
            );
          } else {
            return Math.ceil(
              maxStatus * magnification[target.rare][target.trainingLevel] -
                ((maxStatus / 2 - Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) /
                  (this.maxCardLevel[target.rare][target.trainingLevel] - 1)) *
                  (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel),
            );
          }
        } else {
          return Math.ceil(
            maxStatus * magnification[target.rare][target.trainingLevel] -
              (maxStatus / (target.rare === 'R' ? 200 : 100)) *
                (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel),
          );
        }
      };
    },
    makeTotalMasteryLv() {
      return (memberName: string): number => {
        let result = 0;
        const bonusSkill = {
          ビートハートアップ: 0,
          ボルテージアップ: 0,
          メンタルリカバー: 0,
          LOVEボーナス: 0,
        };

        for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
          result += this.musicList[musicTitle].level;
          bonusSkill[this.musicList[musicTitle].bonusSkill] += Math.floor(
            this.musicList[musicTitle].level / 10,
          );
        }

        for (const bonusSkillName in bonusSkill) {
          this.memberData.centerList[memberName].bonusSkill[bonusSkillName] =
            bonusSkill[bonusSkillName];
        }

        /*for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
         result += this.musicList[musicTitle].level;
         this.supportSkill[memberName][this.musicList[musicTitle].bonusSkill] += Math.floor(this.musicList[musicTitle].level / 10);
         }

         for (const bonusSkillName in this.supportSkill[memberName]) {
         this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = this.supportSkill[memberName][bonusSkillName];
         }*/

        return result;
      };
    },
    makeReleaseDate(): string {
      const date = {
        year: this.musicList[this.selectMusicTitle].musicData.releaseDate.year,
        month: this.musicList[this.selectMusicTitle].musicData.releaseDate.month,
        date: this.musicList[this.selectMusicTitle].musicData.releaseDate.date,
      };

      return `${date.year}年${date.month}月${date.date}日(${
        ['日', '月', '火', '水', '木', '金', '土'][
          new Date(date.year, date.month - 1, date.date).getDay()
        ]
      })`;
    },
    setCardIllust(): string {
      return `${this.conversion(this.getSettingCard.card)}_${
        this.memberName[this.getSettingCard.name].last
      }_覚醒後`;
    },
    outputBonusSkillList() {
      const result = {};

      for (const targetBonusSkill in this.bonusSkillList) {
        if (
          this.memberData.centerList[this.checkMasteryMember].bonusSkill[targetBonusSkill] +
            this.supportSkill[this.checkMasteryMember][targetBonusSkill] >
          0
        ) {
          result[targetBonusSkill] = this.bonusSkillList[targetBonusSkill];
          result[targetBonusSkill].skillLevel =
            this.memberData.centerList[this.checkMasteryMember].bonusSkill[targetBonusSkill] +
            this.supportSkill[this.checkMasteryMember][targetBonusSkill];
        }
      }

      return result;
    },
    isDarkMode() {
      return this.localStorageData.siteSettings.all.darkMode === 'dark';
    },
    selectDeck() {
      return this.deck.find((v) => v.name === this.selectDeckName);
    },
    getSettingCard() {
      return this.findCardData(this.settingCard.ID);
    },
    /*makeMusicList() {
     return (selectSkillList) => {
     const list = {};
     let targetMusicList;

     for (const musicTitle in this.musicList) {
     targetMusicList = this.musicList[musicTitle];

     if (typeof targetMusicList.level !== 'number') {
     targetMusicList.level = 0;
     }

     for (const skillName of selectSkillList) {
     if (targetMusicList.bonusSkill === skillName) {
     list[musicTitle] = targetMusicList;
     }
     }
     }

     return list;
     }
     },*/
  },
  actions: {
    /**
     * ページを読み込んだときに最初に行われる処理郡
     *
     * @returns void
     */
    init(): void {
      // this.makeDb();
      const bonusSkillList = {};

      for (const key in this.bonusSkillList) {
        bonusSkillList[key] = 0;
      }

      for (const name in this.memberName) {
        this.supportSkill[name] = JSON.parse(JSON.stringify(bonusSkillList));
        this.memberData.centerList[name] = {
          centerMusic: [],
          bonusSkill: JSON.parse(JSON.stringify(bonusSkillList)),
        };
      }

      this.search = JSON.parse(JSON.stringify(this.defaultSearch));
      this.card = JSON.parse(JSON.stringify(this.defaultCard));
      this.getLocalStorage();
      this.setSupportSkillLevel();
      // this.fetchFiles();
      // this.makeNewDeck();
      // console.log(window.location.search.replace('?', ''));
      // if (window.location.search.replace('?', '') !== '') {
      //   window.location.replace('/llllMgr/musicList');
      // }
    },
    makeNewDeck(): void {
      let a = {
        name: `新規デッキ${this.deck.length + 1}`,
        period: this.thisPeriod,
        cardData: {},
      };

      for (const name of this.formationMember[a.period]) {
        a.cardData[name] = {
          main: {
            cardName: 'default',
            param: {
              level: 0,
              SA: 0,
              skill: 0,
              release: 0,
            },
          },
          side1: {
            cardName: 'default',
            param: {
              level: 0,
              SA: 0,
              skill: 0,
              release: 0,
            },
          },
          side2: {
            cardName: 'default',
            param: {
              level: 0,
              SA: 0,
              skill: 0,
              release: 0,
            },
          },
        };
      }

      this.selectDeckName = a.name;
      this.deck = [a];
    },
    /**
     * DB作成
     *
     * @returns void
     */
    makeDb(): void {
      // DBのオープン
      const db = new Dexie('llllMgrDB_test');
      // バージョン1
      db.version(1).stores({
        notes: '++id, title, body, *tags, updated_at',
      });

      // バージョン2 usersストアを追加
      db.version(2).stores({
        notes: '++id, title, body, *tags, updated_at',
        users: '++id, name',
      });

      // バージョン3 notesストアにgoodを追加
      // 更新時にtagsにgoodがあったら、新しく追加したキー「good」にtrueを入れるようにします。
      db.version(3)
        .stores({
          notes: '++id, title, body, *tags, good, updated_at',
          users: '++id, name',
        })
        .upgrade(function () {
          return db.notes.modify(function (note) {
            if (note.tags.indexOf('good')) {
              note.good = true;
            }
          });
        });

      db.notes.add({
        title: 'タイトル',
        body: '本文',
        tags: ['IndexedDB', 'Dexie.js'],
        updated_at: new Date(),
      });
    },
    /**
     * ローカルストレージ設定
     *
     * @param setLocalStorageName ローカルストレージ名
     * @param value 値
     * @returns void
     */
    setLocalStorage(setLocalStorageName: string, value: any): void {
      localStorage[setLocalStorageName] = JSON.stringify(value);
    },
    getLocalStorage(importData?: any): void {
      const isImportData = importData !== undefined;

      if (
        localStorage.llllMgr_musicData !== undefined ||
        (isImportData && importData.musicData !== undefined)
      ) {
        if (!isImportData) {
          this.localStorageData.musicData = JSON.parse(localStorage.llllMgr_musicData);

          if (this.localStorageData.musicData['バアドゲージ']) {
            this.localStorageData.musicData['バアドケージ'] =
              this.localStorageData.musicData['バアドゲージ'];
            delete this.localStorageData.musicData['バアドゲージ'];
          }

          for (const musicTitle in this.musicList) {
            if (this.localStorageData.musicData.musicLevel[musicTitle]) {
              this.musicList[musicTitle].level =
                this.localStorageData.musicData.musicLevel[musicTitle];
            }

            this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(
              musicTitle,
            );
          }
        } else if (importData.musicData !== undefined) {
          this.localStorageData.musicData = importData.musicData;

          if (this.localStorageData.musicData['バアドゲージ']) {
            this.localStorageData.musicData['バアドケージ'] =
              this.localStorageData.musicData['バアドゲージ'];
            delete this.localStorageData.musicData['バアドゲージ'];
          }

          for (const musicTitle in this.musicList) {
            this.musicList[musicTitle].level =
              this.localStorageData.musicData.musicLevel[musicTitle];
          }

          this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
        }
      } else {
        for (const musicTitle in this.musicList) {
          this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(
            musicTitle,
          );
        }
      }

      if (
        localStorage.llllMgr_card !== undefined ||
        (isImportData &&
          importData.cardList !== undefined &&
          importData.cardList.card !== undefined)
      ) {
        let isRemakeCardData = false;

        if (!isImportData) {
          this.localStorageData.cardList.card = this.makeExportCardData(
            JSON.parse(localStorage.llllMgr_card),
          );
          isRemakeCardData = true;
        } else if (importData.cardList !== undefined && importData.cardList.card !== undefined) {
          this.localStorageData.cardList.card = this.makeExportCardData(importData.cardList.card);
          this.setLocalStorage('llllMgr_card', this.localStorageData.cardList.card);
          isRemakeCardData = true;
        }

        if (isRemakeCardData) {
          for (const memberName in this.card) {
            for (const rare in this.card[memberName]) {
              if (this.localStorageData.cardList.card[memberName] !== undefined) {
                for (let cardName in this.localStorageData.cardList.card[memberName][rare]) {
                  this.card[memberName][
                    cardName === 'バアドゲージ' && memberName === 'sayaka' ? 'UR' : rare
                  ][cardName === 'バアドゲージ' ? 'バアドケージ' : cardName].fluctuationStatus =
                    this.localStorageData.cardList.card[memberName][rare][
                      cardName
                    ].fluctuationStatus;

                  if (
                    this.localStorageData.cardList.card[memberName][rare][cardName]
                      .fluctuationStatus.releasePoint === undefined
                  ) {
                    this.card[memberName][
                      cardName === 'バアドゲージ' && memberName === 'sayaka' ? 'UR' : rare
                    ][
                      cardName === 'バアドゲージ' ? 'バアドケージ' : cardName
                    ].fluctuationStatus.releasePoint = 0;
                  }

                  if (
                    this.localStorageData.cardList.card[memberName][rare][cardName].favorite !==
                    undefined
                  ) {
                    this.card[memberName][
                      cardName === 'バアドゲージ' && memberName === 'sayaka' ? 'UR' : rare
                    ][cardName === 'バアドゲージ' ? 'バアドケージ' : cardName].favorite =
                      this.localStorageData.cardList.card[memberName][rare][cardName].favorite;
                  }
                }
              }
            }
          }
        }
      }

      if (
        localStorage.llllMgr_cardListFilter !== undefined ||
        (isImportData &&
          importData.cardList !== undefined &&
          importData.cardList.cardListFilter !== undefined)
      ) {
        let isRemakeCardListFilter = false;

        if (!isImportData) {
          const localStorageData = JSON.parse(localStorage.llllMgr_cardListFilter);

          if (localStorageData.skillList.skillFilterType !== undefined) {
            this.localStorageData.cardList.cardListFilter = localStorageData;
          } else {
            this.localStorageData.cardList.cardListFilter = {
              cardList: localStorageData.cardList,
              cardSeries: localStorageData.cardSeries,
              skillList: {
                skillFilterType: 'skillName',
                skillType: {
                  specialAppeal: [],
                  skill: [],
                  characteristic: [],
                },
                skillName: localStorageData.skillList,
              },
            };
          }

          isRemakeCardListFilter = true;
        } else if (
          importData.cardList !== undefined &&
          importData.cardList.cardListFilter !== undefined
        ) {
          if (importData.cardList.cardListFilter.skillFilterType !== undefined) {
            this.localStorageData.cardList.cardListFilter = importData.cardList.cardListFilter;
          } else {
            this.localStorageData.cardList.cardListFilter.cardList =
              importData.cardList.cardListFilter.cardList;
            this.localStorageData.cardList.cardListFilter.cardSeries =
              importData.cardList.cardListFilter.cardSeries;
            this.localStorageData.cardList.cardListFilter.skillList.skillFilterType =
              importData.cardList.cardListFilter.skillList.skillFilterType;
            this.localStorageData.cardList.cardListFilter.skillList.skillName =
              importData.cardList.cardListFilter.skillList.skillName;
            this.localStorageData.cardList.cardListFilter.skillList.skillType =
              importData.cardList.cardListFilter.skillList.skillType;
          }

          this.setLocalStorage(
            'llllMgr_cardListFilter',
            this.localStorageData.cardList.cardListFilter,
          );
          isRemakeCardListFilter = true;
        }

        if (isRemakeCardListFilter) {
          if (this.localStorageData.cardList.cardListFilter.cardList === undefined) {
            for (const filterName in this.search.cardList) {
              this.search.cardList[filterName] =
                this.localStorageData.cardList.cardListFilter[filterName];
            }
          } else {
            for (const filterName in this.search.cardList) {
              if (
                this.localStorageData.cardList.cardListFilter.cardList[filterName] !== undefined
              ) {
                this.search.cardList[filterName] =
                  this.localStorageData.cardList.cardListFilter.cardList[filterName];
              }
            }

            for (const filterName in this.search.skillList) {
              if (this.localStorageData.cardList.cardListFilter.skillList[filterName]) {
                this.search.skillList[filterName] =
                  this.localStorageData.cardList.cardListFilter.skillList[filterName];
              } else {
                this.search.skillList[filterName] = [];
              }
            }

            this.search.cardSeries = this.localStorageData.cardList.cardListFilter.cardSeries;
          }
        }
      }

      if (
        localStorage.llllMgr_selectItemList !== undefined ||
        (isImportData && importData.selectItemList !== undefined)
      ) {
        let getSelectItemList = null;

        if (!isImportData) {
          getSelectItemList = JSON.parse(localStorage.llllMgr_selectItemList);
        } else if (importData.selectItemList !== undefined) {
          getSelectItemList = importData.selectItemList;
          this.setLocalStorage('llllMgr_selectItemList', getSelectItemList);
        }

        if (getSelectItemList !== null) {
          for (let i = 1; i <= 3; i++) {
            this.localStorageData.selectItemList[`item${i}`] = getSelectItemList[`item${i}`];
          }
        }
      }

      if (
        localStorage.llllMgr_siteSettings !== undefined ||
        (isImportData && importData.siteSettings !== undefined)
      ) {
        let getSiteSettings = null;

        if (!isImportData) {
          getSiteSettings = JSON.parse(localStorage.llllMgr_siteSettings);
        } else if (importData.siteSettings !== undefined) {
          getSiteSettings = importData.siteSettings;

          for (const key in this.siteSettings) {
            if (getSiteSettings[key] === undefined) {
              getSiteSettings[key] = this.siteSettings[key];
            }
          }

          this.setLocalStorage('llllMgr_siteSettings', getSiteSettings);
        }

        if (getSiteSettings !== null) {
          for (const siteSettingCategoryName in this.siteSettings) {
            for (const settingName in this.siteSettings[siteSettingCategoryName]) {
              this.localStorageData.siteSettings[siteSettingCategoryName][settingName] =
                getSiteSettings[siteSettingCategoryName][settingName];
            }
          }
        }
      }

      if (
        localStorage.llllMgr_sortSettings !== undefined ||
        (isImportData && importData.sortSettings !== undefined)
      ) {
        let getSortSettings = null;

        if (!isImportData) {
          getSortSettings = JSON.parse(localStorage.llllMgr_sortSettings);
        } else if (importData.sortSettings !== undefined) {
          getSortSettings = importData.sortSettings;

          for (const iterator of ['card', 'music']) {
            if (getSortSettings[`${iterator}List`] === undefined) {
              getSortSettings[`${iterator}List`] = this.sortSettings[`${iterator}List`];
            }
          }

          this.setLocalStorage('llllMgr_sortSettings', getSortSettings);
        }

        if (getSortSettings !== null) {
          for (const sortSettingCategoryName in this.sortSettings) {
            for (const settingName in this.sortSettings[sortSettingCategoryName]) {
              this.localStorageData.sortSettings[sortSettingCategoryName][settingName] =
                getSortSettings[sortSettingCategoryName][settingName];
            }
          }
        }
      }
    },
    deleteLocalStorage(deleteDataName: string): void {
      if (deleteDataName === 'music') {
        this.localStorageData.musicData.musicLevel = {};
        localStorage.removeItem('llllMgr_musicData');
      } else if (deleteDataName === 'card') {
        this.localStorageData.cardList.card = {};
        this.localStorageData.cardList.cardListFilter = {};
        localStorage.removeItem('llllMgr_card');
        localStorage.removeItem('llllMgr_cardListFilter');
      } else {
        localStorage.removeItem('llllMgr_selectItemList');
      }
    },
    /**
     * ダイアログを表示
     * @param showModalName 表示するダイアログの名前
     * @returns void
     */
    showModalEvent(showModalName: string): void {
      this.switchDialog(showModalName);
      this.showModalName = showModalName;
    },
    setLevel(a: string, e: any): void {
      this.settingCardData.fluctuationStatus[a] = e.target.value;
    },
    /**
     * SettingCardのID、レアリティ、メンバー名、カード名を設定する
     * @param cardId 設定するカードのID
     * @returns void
     */
    setSettingCard(cardId: string): void {
      const cardData = this.findCardData(cardId);
      this.settingCard.ID = cardId;
      this.settingCard.rare = cardData.rare;
      this.settingCard.name = cardData.memberName;
      this.settingCard.card = cardData.cardName;
    },
    toBool(value: string): boolean {
      return value === 'true';
    },
    conversion(name: string): string {
      return /!/.test(name)
        ? name.replace(/!/g, '！')
        : /\//.test(name)
        ? name.replace(/\//g, '／')
        : name;
    },
    setOpenCard(id: string, name: string, style: string): void {
      this.openCard.ID = id;
      this.openCard.name = name;
      this.openCard.style = style;
    },
    makeFullName(name: string): string {
      return `${this.memberName[name].first}${/kozutsuzumegu|selaIzu/.test(name) ? '' : ' '}${
        this.memberName[name].last
      }`;
    },
    /**
     * カードIDからメンバー名を作成する関数
     *
     * @param id カードID
     * @returns メンバー名
     */
    makeCardMemberName(id: string): string {
      if (id === 'ktm_001') {
        return `乙宗梢＆夕霧綴理＆藤島慈`;
      } else if (id === 'is_001') {
        return `${this.memberName.selaIzu.first}${this.memberName.selaIzu.last}`;
      } else {
        return `${
          this.memberName[this.memberId[id.split('_')[0]]][
            id.split('_')[0] === 'sr' ? 'first' : 'last'
          ]
        }`;
      }
    },
    isOtherMember(name: string): boolean {
      return name === 'special';
    },
    /**
     * メンバー名とカード名からカードIDを検索
     *
     * @param memberName メンバー名
     * @param cardName カード名
     * @return カードID
     */
    findCardId(memberName: string, cardName: string): string {
      if (cardName === 'default') {
        return this.makeDefaultCardId(memberName);
      } else {
        const list = this.cardList.filter((v) => {
          return v.cardName === cardName;
        });

        return list.length === 1
          ? list[0].ID
          : list.find((v) => {
              return v.memberName === memberName;
            })?.ID ?? this.makeDefaultCardId(memberName);
      }
    },
    /**
     * カードIDからカードデータを検索
     *
     * @param cardId カードID
     * @return カードデータ
     */
    findCardData(cardId: string) {
      if (cardId.split('_')[1] === '000') {
        return {
          ...this.card.default,
          ...{
            cardName: 'default',
          },
        };
      } else {
        return this.cardList.find((v) => v.ID === cardId);
      }
    },
    /**
     * 各メンバーのデフォルトのカードIDを作成
     *
     * @param memberName メンバー名
     * @return デフォルトのカードID
     */
    makeDefaultCardId(memberName: string): string {
      return `${Object.keys(this.memberId).find((key) => {
        this.memberId[key] === memberName;
      })}_000`;
    },
    /**
     * カードIDからカードのレアリティを検索
     *
     * @param cardId カードID
     * @return カードのレアリティ
     */
    searchRarity(cardId: string): string {
      if (Number(cardId.split('_')[1]) === 0) {
        return 'default';
      } else {
        return this.cardList.find((v) => v.ID === cardId)?.rare ?? '';
      }
    },
    searchSelectDeckCard(name: string, style: string) {
      return this.selectDeck.cardData[name][style].id;
    },
    makeExportCardData(data?: any) {
      let result = {};
      const card = data !== undefined ? data : this.card;

      for (const memberName in card) {
        result[memberName] = {};

        for (const rare in card[memberName]) {
          result[memberName][rare] = {};

          for (const cardName in card[memberName][rare]) {
            result[memberName][rare][cardName] = {
              fluctuationStatus: card[memberName][rare][cardName].fluctuationStatus,
              favorite: card[memberName][rare][cardName].favorite,
            };
          }
        }
      }

      return result;
    },
    submitCardData(submitData: any): void {
      for (const i in submitData) {
        this.submitData[i] = submitData[i];
      }
    },
    switchDialog(switchFlg: boolean): void {
      this.dialog = !!switchFlg;
    },
    selectMusic(a: string): void {
      this.selectMusicTitle = a;
    },
    closeModal() {
      this.showModalName = false;
    },
    valueChange(target, val) {
      if (target === 'musicLevel') {
        this.musicList[this.selectMusicTitle].level = val;

        for (const musicTitle in this.musicList) {
          this.localStorageData.musicData.musicLevel[musicTitle] = this.musicList[musicTitle].level;
        }

        this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
      } else {
        this.settingCardData.fluctuationStatus[target] = val;

        if (target === 'trainingLevel') {
          if (
            this.settingCardData.fluctuationStatus.cardLevel < this.changeMinCardLevel ||
            this.settingCardData.fluctuationStatus.cardLevel > this.changeMaxCardLevel
          ) {
            this.settingCardData.fluctuationStatus.cardLevel = this.changeMinCardLevel;
          }
        } else if (target === 'releaseLevel') {
          if (this.settingCardData.fluctuationStatus.SALevel > this.changeSkillLevel) {
            this.settingCardData.fluctuationStatus.SALevel = this.changeSkillLevel;
          }

          if (this.settingCardData.fluctuationStatus.SLevel > this.changeSkillLevel) {
            this.settingCardData.fluctuationStatus.SLevel = this.changeSkillLevel;
          }
        }

        this.setLocalStorage('llllMgr_card', this.makeExportCardData());
      }
    },
    changeFav(target) {
      if (this.settingCardData.favorite.some((v) => v === target)) {
        this.settingCardData.favorite = this.settingCardData.favorite.filter((v) => {
          return v !== target;
        });
      } else {
        this.settingCardData.favorite.push(target);
      }

      this.setLocalStorage('llllMgr_card', this.makeExportCardData());
    },
    setSupportSkillLevel() {
      const cardDataList = this.cardList.filter((targetCardData) => {
        return targetCardData.uniqueStatus.supportSkill !== undefined;
      });

      for (const cardData of cardDataList) {
        for (const targetBonusSkill in this.supportSkill[cardData.memberName]) {
          this.supportSkill[cardData.memberName][targetBonusSkill] = 0;

          if (cardData.fluctuationStatus.cardLevel > 0) {
            this.supportSkill[cardData.memberName][targetBonusSkill] =
              cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].initLevel;

            if (
              cardData.fluctuationStatus.releaseLevel >=
              cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].levelUp
            ) {
              this.supportSkill[cardData.memberName][targetBonusSkill] +=
                cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].upLevel;
            }
          }
        }
      }
    },
    setBonusSkillLevel(memberName: string, skillName: string): number {
      return (
        this.memberData.centerList[memberName].bonusSkill[skillName] +
        this.supportSkill[memberName][skillName]
      );
    },
    /*cardParam(style, target) {
     if (target === undefined) {
     target = {
     memberName: this.settingCard.name,
     rare: this.settingCard.rare,
     card: this.settingCard.card
     }
     }

     const selectCard = this.card[target.memberName][target.rare][target.card];
     return selectCard.uniqueStatus[style] + (selectCard.fluctuationStatus.cardLevel - 1) * (target.rare === 'R' ? 25 : 30);
     },*/
    makeSkillFilterList(target) {
      const result = [];

      for (const key of this.cardList) {
        if (
          key[target] !== undefined &&
          result.indexOf(target === 'series' ? key[target] : key[target].name) === -1
        ) {
          result.push(target === 'series' ? key[target] : key[target].name);
        }
      }

      return result.sort();
    },
    isExclusionMember(targetMember) {
      return this.exclusionMember.some((val) => val === targetMember);
    },
    findOpenCardMemberName(cardId) {
      return this.cardList.find((v) => v.ID === cardId)?.memberName ?? '';
    },
    resetMusicFilter(resetName) {
      if (/^(SA|S)(AP|Level)|(release|card|training)Level$/.test(resetName)) {
        this.search.cardList[resetName] = [
          this.defaultSearch.cardList[resetName][0],
          this.defaultSearch.cardList[resetName][1],
        ];
      } else if (this.search.cardList[resetName].length === 0) {
        if (/^rare|favorite|releaseStatus$/.test(resetName)) {
          this.search.cardList[resetName] = this[resetName];
        } else if (resetName === 'memberName') {
          this.search.cardList.memberName = JSON.parse(JSON.stringify(this.memberNameList));
        } else {
          for (const key in this[resetName]) {
            this.search.cardList[resetName].push(key);
          }
        }
      } else {
        this.search.cardList[resetName] = [];
      }
    },
    dataReset(resetList) {
      for (const iterator of resetList) {
        if (iterator === 'card') {
          this.card = JSON.parse(JSON.stringify(this.defaultCard));
          this.localStorageData.cardList.card = this.makeExportCardData(this.card);
          this.setLocalStorage('llllMgr_card', this.localStorageData.cardList.card);
        } else if (iterator === 'cardListFilter') {
          this.search = JSON.parse(JSON.stringify(this.defaultSearch));
        } else if (iterator === 'musicData') {
          const bonusSkillList = {};

          for (const key in this.bonusSkillList) {
            bonusSkillList[key] = 0;
          }

          for (const name in this.memberName) {
            this.supportSkill[name] = JSON.parse(JSON.stringify(bonusSkillList));
            this.memberData.centerList[name].bonusSkill = JSON.parse(
              JSON.stringify(bonusSkillList),
            );

            for (const musicTitle in this.musicList) {
              this.musicList[musicTitle].level = 0;
              this.localStorageData.musicData.musicLevel[musicTitle] =
                this.musicList[musicTitle].level;
            }

            this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
          }
        } else if (iterator === 'selectItemList') {
          this.localStorageData.selectItemList = {
            item1: [],
            item2: [],
            item3: [],
          };
          this.setLocalStorage('llllMgr_selectItemList', this.localStorageData.selectItemList);
        } else if (iterator === 'sortSettings_card') {
          this.localStorageData.sortSettings.cardList = JSON.parse(
            JSON.stringify(this.sortSettings.cardList),
          );
          this.setLocalStorage('llllMgr_sortSettings', this.localStorageData.sortSettings);
        } else if (iterator === 'siteSettings') {
          this.localStorageData.siteSettings = JSON.parse(JSON.stringify(this.siteSettings));
          this.setLocalStorage('llllMgr_siteSettings', this.localStorageData.siteSettings);
        }
      }
    },
    /**
     * 設定をlocalStorageに保存
     *
     * @param setLocalStorageName 保存する設定の名前
     * @returns void
     */
    changeSettings(setLocalStorageName: string): void {
      this.setLocalStorage(
        `llllMgr_${setLocalStorageName}`,
        this.localStorageData[setLocalStorageName],
      );
    },
    setSelectCard(
      id: string,
      param: {
        cardLevel: number;
        SALevel: number;
        SLevel: number;
        releaseLevel: number;
      },
    ): void {
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].id = id;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.cardLevel =
        param.cardLevel;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.SALevel =
        param.SALevel;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.SLevel = param.SLevel;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.releaseLevel =
        param.releaseLevel;
    },
    /**
     * @function IDCheck
     * @description カードか楽曲リストのIDの形式が正しいか、連番になっているかをチェックする。
     * @param list リスト
     * @param type 'music' | 'card'
     * @returns void
     */
    IDCheck(list: any[], type: 'music' | 'card'): void {
      const regex = type === 'music' ? /^m{1}/ : /^[a-z]{2,3}/;
      let previousNumber = 0;
      const errorList = [];

      if (type === 'music') {
        previousNumber = 0;

        for (const musicData of list) {
          const errorMessage = isValidAndIncremental(musicData.ID, previousNumber);

          if (errorMessage === '') {
            previousNumber = parseInt(musicData.ID.split('_')[1], 10);
          } else {
            errorList.push(errorMessage);
            break;
          }
        }
      } else {
        for (const key in this.memberId) {
          const filteringList = list
            .filter((data) => {
              return data.memberName === this.memberId[key];
            })
            .sort((a, b) => {
              return a.ID.localeCompare(b.ID);
            });

          previousNumber = 0;

          for (const cardData of filteringList) {
            const errorMessage = isValidAndIncremental(cardData.ID, previousNumber);

            if (errorMessage === '') {
              previousNumber = parseInt(cardData.ID.split('_')[1], 10);
            } else {
              errorList.push(errorMessage);
              break;
            }
          }
        }
      }

      if (errorList.length > 0) {
        for (let index = 0; index < errorList.length; index++) {
          console.error(errorList[index]);
        }

        // alert('ID設定に誤りがあります。\n詳しくはコンソールを確認してください。');
      } else {
        const idSet = new Set();
        const duplicateIDs = [];

        for (const item of list) {
          if (idSet.has(item.ID)) {
            duplicateIDs.push(item.ID);
          } else {
            idSet.add(item.ID);
          }
        }

        if (duplicateIDs.length > 0) {
          console.error(`重複しているIDがあります。\n該当ID：${duplicateIDs.join(', ')}`);
          // alert('ID設定に誤りがあります。\n詳しくはコンソールを確認してください。');
        }
      }

      /**
       * IDチェック
       * @function isValidAndIncremental
       * @description IDの形式が正しいか、連番になっているかをチェックする。\
       * 正しくなければエラーメッセージを返す。
       *
       * @param ID ID
       * @param previousNumber 現在-1のID番号
       * @returns エラーメッセージ
       */
      function isValidAndIncremental(ID: string, previousNumber: number): string {
        if (isNaN(ID.split('_')[1])) {
          return `IDの番号に数字以外が入っています。\n該当ID：${ID}`;
        } else if (ID.split('_')[1].length !== 3) {
          return `IDの番号が3桁ではありません。\n該当ID：${ID}`;
        } else if (!regex.test(ID)) {
          return `形式がフォーマット通りではありません。\n該当ID：${ID}`;
        }

        const numberPart = parseInt(ID.split('_')[1], 10);

        return numberPart === previousNumber + 1 ? '' : `IDが連番になっていません。\n該当ID：${ID}`;
      }
    },
    /**
     * 画像パスを返す処理
     *
     * @param path その画像が入っているフォルダ名
     * @param imageName 画像の名前
     * @param extension 画像の拡張子
     * @returns 画像のパス
     */
    getImagePath(path: string, imageName: string, extension?: string): string {
      const images = import.meta.glob('../assets/**/*', { eager: true });
      const filePath = `../assets${path ? `/${path}` : ''}/${imageName}.${extension ?? 'webp'}`;
      return images[filePath]?.default || '';
    },
    async fetchFiles() {
      const APP_KEY = import.meta.env.VITE_DROPBOX_APP_KEY;
      const ACCESS_APP_SECRET = import.meta.env.VITE_DROPBOX_APP_SECRET;
      const OATH2_REFRESH_TOKEN = import.meta.env.VITE_DROPBOX_OATH2_REFRESH_TOKEN;

      try {
        const dbx = new Dropbox({
          clientId: APP_KEY,
          clientSecret: ACCESS_APP_SECRET,
          refreshToken: OATH2_REFRESH_TOKEN,
        });
        const response = await this.fetchWithBackoff(async () => {
          return await dbx.filesListFolder({ path: '/CD_jacket' });
        });
        const files = response.result.entries;
        const imageMimeType = ['image/webp'];

        const imageFiles = files.filter(
          (file) =>
            file['.tag'] === 'file' &&
            imageMimeType.some((type) => this.conversion(file.name).endsWith(type.split('/')[1])),
        );

        const imageUrls = await Promise.all(
          imageFiles.map(async (file) => {
            return this.fetchWithBackoff(async () => {
              const linkResponse = await dbx.filesGetTemporaryLink({
                path: file.path_lower,
              });
              return {
                id: file.id,
                name: this.conversion(file.name.split('.webp')[0]),
                url: linkResponse.result.link,
              };
            });
          }),
        );

        this.images = imageUrls;

        imageUrls.forEach((image) => {
          this.imageLoaded[this.conversion(image.name)] = false;
        });

        this.loading = false;
      } catch (error) {
        this.dialogError = true;
      }
    },
    /**
     * バックオフ処理を実装
     *
     * @param {Function} fetchFunction - リトライ対象の関数
     * @returns {Promise} - リトライ後の結果
     */
    async fetchWithBackoff(fetchFunction) {
      const retries = 5;
      const delay = 5000;

      for (let i = 0; i < retries; i++) {
        try {
          return await fetchFunction();
        } catch (error) {
          if (error.status === 429 && i < retries - 1) {
            const waitTime = delay * Math.pow(2, i);
            console.warn(`Rate limit hit. Retrying in ${waitTime / 1000} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, waitTime));
          } else {
            throw error;
          }
        }
      }
      throw new Error('Failed to fetch after multiple retries.');
    },
    markImageLoaded(imageKey) {
      this.imageLoaded[imageKey] = true;
    },
    markImageError(imageKey) {
      console.error(`Failed to load image: ${imageKey}`);
      this.imageLoaded[imageKey] = false;
    },
  },
});
