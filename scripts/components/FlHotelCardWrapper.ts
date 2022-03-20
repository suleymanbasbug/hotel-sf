import FlHotelCardWrapperDesign from 'generated/my-components/FlHotelCardWrapper';

export default class FlHotelCardWrapper extends FlHotelCardWrapperDesign {
    private __imageUrl: string;
    private __isSavedImgUrl: string;
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
    get hotelInfo(): string {
        return this.lblHotelInfo.text;
    }
    set hotelInfo(value: string) {
        this.lblHotelInfo.text = value;
    }
    get hotelPrice(): string {
        return this.lblPrice.text;
    }
    set hotelPrice(value: string) {
        this.lblPrice.text = value;
    }
    get priceType(): string {
        return this.lblPriceType.text;
    }
    set priceType(value: string) {
        this.lblPriceType.text = value;
    }
    get isSaved():string{
        return this.lblisSaved.text;
    }
    set isSaved(value:string){
        this.lblisSaved.text = value;
    }
}
