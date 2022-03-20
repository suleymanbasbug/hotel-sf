import FlHotelDetailDesign from 'generated/my-components/FlHotelDetail';

export default class FlHotelDetail extends FlHotelDetailDesign {
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
    get price(): string {
        return this.lblHotelPrice.text;
    }
    set price(value: string) {
        this.lblHotelPrice.text = value;
    }
    get priceType(): string {
        return this.lblPriceType.text;
    }
    set priceType(value: string) {
        this.lblPriceType.text = value;
    }
    get hotelImage():string{
        return this.__imageUrl;
    }
    set hotelImage(value:string){
        this.__imageUrl = value;
        this.imgHotel.loadFromUrl({
            url: this.__imageUrl,
            useHTTPCacheControl:true       
        })
    }
}
