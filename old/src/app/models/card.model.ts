export class Card {
    public id: string;
    public name: string;
    public images: string[];
    public cmc: number;
    public type_line: string;
    public oracle_text: string[];

    public quantity: number = 0;

    constructor(inCard: any, quantity: number = 0) {
        this.id = inCard.id // id
        this.name = inCard.name // name
        this.cmc = inCard.cmc // converted mana cost
        this.type_line = inCard.type_line // card type

        this.oracle_text = [] // card text
        if ('oracle_text' in inCard) {
          this.oracle_text.push(inCard.oracle_text)
        }
        else if ('card_faces' in inCard) {
          inCard['card_faces'].forEach((item: any) => {
            this.oracle_text.push(item['oracle_text'])
          })
        }

        this.images = [] // card images
        if ('image_uris' in inCard) {
            this.images.push(inCard['image_uris']['normal'])
        }
        else if ('card_faces' in inCard) {
            inCard['card_faces'].forEach((item: any) => {
                this.images.push(item['image_uris']['normal'])
            })
        }

        this.quantity = quantity // quantity in collection
    }
}
