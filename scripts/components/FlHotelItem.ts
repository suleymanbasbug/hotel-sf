import FlHotelItemDesign from 'generated/my-components/FlHotelItem';

export default class FlHotelItem extends FlHotelItemDesign {
    private __imageUrl: string;
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get hotelName(): string {
        return this.lblHotelName.text;
    }
    set hotelName(value: string) {
        this.lblHotelName.text = value;
    }

    get hotelPrice():string{
        return this.lblHotelPrice.text;
    }

    set hotelPrice(value:string){
        this.lblHotelPrice.text = value;
    }

    get imageUrl():string{
        return this.__imageUrl;
    }

    set imageUrl(value:string){
        this.__imageUrl = value;
        this.imgHotel.loadFromUrl({
            url: this.__imageUrl,
            useHTTPCacheControl: true
        })
    }
}
