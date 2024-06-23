const attack = (min, max) => {
  return Math.floor(Math.random() *  (max - min) * min)
}


Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,

    }
  },
  watch:{
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'Draw'
      } else if (value <= 0) {
        this.winner = 'monster'
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'Draw'
      } else if (value <= 0) {
        this.winner = 'player'
      }
    }
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%'}
      } 
      return {width: this.monsterHealth + '%'}
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%'}
      }
      return {width: this.playerHealth + '%'}
    },
    mayUseSpacialAttack() {
      return this.currentRound % 3 !== 0
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const attacValue = attack(4, 10)
      this.monsterHealth -= attacValue
      this.attackPlayer()
    },
    attackPlayer() {
      const attacValue = attack(8, 15)
      this.playerHealth -= attacValue
    },
    specialAttacMonster() {
      const attackValue = attack(10, 25)
      this.monsterHealth -= attackValue
      this.attackPlayer()
    },
    healPlayer() {
      const healValue = attack(8, 20) 
      if ( this.playerHealth + healValue > 100 ) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healValue
      }
      this.attackPlayer()
    },
    startGame(){
      this.playerHealth = 100,
      this.monsterHealth = 100,
      this.currentRound = 0,
      this.winner = null
    },
  }
}).mount('#game')