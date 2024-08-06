type test = {
  life?: number
}

export class Player{

    public life: number;

    constructor(properties: test = {}) {
        this.life = properties.life ? properties.life : 20;
    }

    plusLife(){
        this.life++
    }

    minusLife(){
        this.life--
    }

}
