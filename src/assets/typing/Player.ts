export type playerConfig = {
    life: number,
    poison?: number
}

export class Player {
    life: number
    poison: number

    constructor(playerConfig: playerConfig) {
        this.life = playerConfig.life
        this.poison = playerConfig.poison || 0
    }

    lifePlus() {
        this.life++
    }

    lifeMinus() {
        this.life--
    }

    poisonPlus() {
        if (this.poison < 10) {
            this.poison++
        }
    }

    poisonMinus() {
        if (this.poison > 0) {
            this.poison--
        }
    }
}