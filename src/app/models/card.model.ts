export class Card {
    public id: string;
    public name: string;
    public images: string[];
    public cmc: number;

    public quantity: number = 0;

    constructor(inCard: any, quantity: number = 0) {
        this.id = inCard.id
        this.name = inCard.name

        this.images = []
        if ('image_uris' in inCard) {
            this.images.push(inCard['image_uris']['normal'])
        }
        else if ('card_faces' in inCard) {
            inCard['card_faces'].forEach((item: any) => {
                this.images.push(item['image_uris']['normal'])
            })
        }
        else {
            console.log('%cCard Not OK', 'background:red;', inCard);
        }

        this.cmc = inCard.cmc

        this.quantity = quantity
    }
}