import { defineStore } from 'pinia';

export const useSkillStore = defineStore('skillList', {
  state: () => ({
    skillList: {
      'ハートキャプチャ': {
        heartCaptcha: [
          'ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'ハートアトラクション': {
        heartAttraction: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        heartAttraction_50: [
          '50個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        heartAttraction_100: [
          '100個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ハートブースト': {
        heartBoost: [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ]
      },
      'ボルテージゲイン': {
        voltageGain: [
          'ボルテージPt.を+',
          'する。'
        ]
      },
      'ハイボルテージ': {
        highVoltage: [
          'ボルテージPt.を+',
          'する。使用時のボルテージLv.が6以上だった時、さらにAPを1回復する。'
        ],
        highVoltage_ver2: [
          'ボルテージPt.を+',
          'する。さらにボルテージLv.が6以上の時APを1回復する。'
        ],
        highVoltage_heartCaptcha: [
          'ボルテージPt.を+',
          'する。使用時のボルテージLv.が6以上の時、ビートハート',
          '回分のスキルハートを獲得する。'
        ],
      },
      'ヒーリングハート': {
        healingHeart: [
          'メンタルを最大値の',
          '%回復させる。さらにビートハート',
          '個分のスキルハートを獲得する。'
        ]
      },
      'メンタルリカバー': {
        mentalRecover: [
          'メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'メンタルプロテクト': {
        mentalProtect: [
          'メンタルを最大値の',
          '%回復させる。さらにこのセクション中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'チアフルリカバー': {
        cheerfulRecover: [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
        ]
      },
      'チアフルヒーリング': {
        cheerfulHealing: [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ]
      },
      'チアフルサポート': {
        cheerfulSupport_over75_stage: [
          'メンタルを最大値の',
          '%回復する。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
          '%する。'
        ],
        cheerfulSupport_over75_section: [
          'メンタルを最大値の',
          '%回復する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チアフルハート': {
        cheerfulHeart_APreduce: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、APを1回復する。'
        ],
        cheerfulHeart_heartCaptcha: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにメンタルが50%以上のとき、ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'チアフルボルテージ': {
        cheerfulVoltage_voltageGain: [
          'ボルテージPt.を+',
          'する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ],
        cheerfulVoltage_heartCaptcha: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ],
        UR: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ],
        SR: [
          'ボルテージPt.を+',
          'する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ]
      },
      'チアフルプロテクト': {
        cheerfulProtect_loveAttract: [
          'このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チアフルアトラクト': {
        cheerfulAttract_APreduce_over75: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルが75%以上のとき、APを1回復する。'
        ],
        cheerfulAttract_loveAttract_over50: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルが50%以上のとき、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チアフルエンデュランス': {
        cheerfulEndurance_over75: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'チアフルイニシエイト': {
        cheerfulInitiate: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'チアフルファッシネイト': {
        cheerfulFascinate_section_over75: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにメンタルが75%以上のとき、ボルテージPt.を+',
          'する。'
        ],
        cheerfulFascinate_stage_over50: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ]
      },
      'チアフルブースト': {
        cheerfulBoost: [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。さらにメンタルが50%以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ]
      },
      'チアフルリゲイン': {
        cheerfulRegain: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ]
      },
      'クイックフォーム': {
        quickForm: [
          'このステージ中、手札の上限枚数を1枚減少する。さらにこのステージ中、AP回復速度を+',
          '%する。'
        ]
      },
      'ボルテックスアトラクション': {
        vortexAttraction: [
          'ビートハート',
          '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'ボルテックスシフト': {
        vortexShift: [
          'このステージ中、ボルテージPt.を獲得する効果が発動した時、代わりに獲得するボルテージPt.の',
          '%の個数のスキルハートを獲得する。'
        ]
      },
      'オールマイトヒーリング': {
        allMightHealing: [
          'このステージ中、メンタルが回復した時、回復量の',
          '%の個数のスキルハートを獲得する。'
        ]
      },
      'アグレッシブアトラクト': {
        aggressiveAttract_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにメンタルを最大値の15%減少させる。'
        ],
        aggressiveAttract_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルを最大値の25%減少させる。'
        ]
      },
      'ラブアトラクト': {
        loveAttract: [
          '次のハート回収時、獲得するLOVEを+',
          '%する。'
        ],
        loveAttract_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。'
        ],
        loveAttract_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ラブキャブティベイト': {
        loveCaptivate: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'エンデュランス': {
        endurance_APreduce: [
          'ボルテージPt.を+',
          'し、メンタルを最大値の',
          '%回復させる。さらにAPを1回復する。'
        ],
        endurance_mentalVoltage: [
          'メンタルを最大値の',
          '%回復させる。さらにボルテージPt.を+',
          'する。'
        ],
        endurance_voltageMental: [
          'ボルテージPt.を+',
          'する。さらにメンタルを最大値の',
          '%回復させる。'
        ]
      },
      'リゲインボルテージ': {
        regainVoltage: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'リゲインアトラクト': {
        regainAttract_section: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        regainAttract_stage: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'エクステボルテージ': {
        extensionsVoltage_section: [
          'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージPt.を+',
          'する。'
        ],
        extensionsVoltage_stage: [
          'このステージ中、手札の上限枚数を1枚増加する。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'エクステアトラクト': {
        extensionsAttract_section3: [
          'このセクション中、手札の上限枚数を3枚増加する。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
        extensionsAttract_section2: [
          'このセクション中、手札の上限枚数を2枚増加する。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
      },
      'ファッシネイション': {
        fascination_voltageGain: [
          'ボルテージPt.を+',
          'する。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
        fascination_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ],
        fascination_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'リプレイアトラクション': {
        regainAttraction_section: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
          '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ロープロテクト': {
        lowProtect: [
          'このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。さらにメンタルが30%以下のとき、メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'リフレッシュマインド': {
        refreshMind: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
          '%回復させる。'
        ]
      },
      'リフレッシュハート': {
        refreshHeart: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'リフレッシュサポート': {
        refreshSupport_stage: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
          '%回復させ、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'クラッチリカバー': {
        klutchRecover: [
          'メンタルが25%以上のとき、メンタルを最大値の',
          '%回復させる。メンタルが25%未満のとき、メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'サポーテッドフィール': {
        supportedFeel: [
          'メンタルを最大値の',
          '%回復させる。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
      },
      'プロテクトフィール': {
        protectFeel_APreduce: [
          'このステージ中、メンタルの最大値の',
          '%のメンタルダメージを無効にし、獲得するLOVEを+',
          '%する。さらにAPを5回復する。'
        ],
        protectFeel_loveAttract: [
          'このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'インヴォケーション': {
        invocation: [
          'ボルテージPt.を+',
          'する。さらにボルテージLvが6以下の場合、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ボルテージハート': {
        voltageHeart: [
          'ボルテージPt.を+',
          'する。さらにビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'イニシアチブ': {
        initiative: [
          'ボルテージPt.を+',
          'する。さらにこのステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'アグレッシブハート': {
        aggressiveHeart: [
          'ビートハート',
          '個分のスキルハートを獲得する。さらにメンタルを最大値の15%減少させる。'
        ]
      },
      'チアフルアトラクション': {
        cheerfulAttraction: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'カームハート': {
        calmHeart: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにボルテージPt.を-20する。'
        ]
      },
      'エクステプロテクト': {
        extensionsProtect: [
          'このステージ中、手札の上限枚数を1枚追加する。さらにこのステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'リカバーアトラクション': {
        recoverAttraction_section: [
          'メンタルを最大値の',
          '%回復させる。さらに、ビートハート',
          '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チルアトラクト': {
        chillAttract_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チルボルテージ': {
        chillVoltage: [
          'ボルテージPt.を+',
          'する。さらにボルテージLv.が3以下の時ボルテージPt.を+',
          'する。'
        ]
      },
      'グルーヴィアトラクト': {
        groovyAttract_section: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'グルーヴィアトラクション': {
        groovyAttraction_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにボルテージLv.が8以上の時ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'グルーヴィハート': {
        groovyHeart8: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'グルーヴィボルテージ': {
        groovyVoltage: [
          'ボルテージPt.を+',
          'する。さらにボルテージLv.が8以上の時ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'グルーヴィリカバー': {
        groovyRecover: [
          'メンタルを最大値の',
          '%回復させる。さらにボルテージLv.が8以上の時メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'エクステハート': {
        extensionsHeart_section3: [
          'このセクション中、手札の上限枚数を3枚増加する。さらにビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'ハイアトラクト': {
        highAttract_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージLv.が6以上の時APを1回復する。'
        ]
      },
      'スイッチボルテージ': {
        switchVoltage: [
          'ボルテージLv.5以下の時ボルテージPt.を+',
          'する。ボルテージLv.が6以上の時ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
    }
  }),
  getters: {},
  actions: {}
});