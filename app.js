const attack = (min, max) => {
  return Math.floor(Math.random() *  (max - min) * min)
}


Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    }
  },
  computed: {
    monsterBarStyles() {
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles() {
      return {width: this.playerHealth + '%'}
    }
  },
  methods: {
    attackMonster() {
      const attacValue = attack(5, 12)
      this.monsterHealth -= attacValue
      this.attackPlayer()
    },
    attackPlayer() {
      const attacValue = attack(8, 15)
      this.playerHealth -= attacValue
    }
  }
}).mount('#game')