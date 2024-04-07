export class Player{

    public life: number;

    constructor(life?: number) {
        this.life = life ? life : 20;
    }

    plusLife(){
        this.life++
    }

    minusLife(){
        this.life--
    }

}