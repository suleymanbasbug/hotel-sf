import GviHotelItemDesign from 'generated/my-components/GviHotelItem';

export default class GviHotelItem extends GviHotelItemDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get hotelName(): string {
        return this.flHotelItem.hotelName;
    }
    set hotelName(value: string) {
        this.flHotelItem.hotelName = value;
    }

    get hotelPrice(): string{
        return this.flHotelItem.hotelPrice;
    }

    set hotelPrice(value:string){
        this.flHotelItem.hotelPrice = value;
    }

    get hotelImage():string{
        return this.flHotelItem.imageUrl;
    }

    set hotelImage(value:string){
        this.flHotelItem.imageUrl = value;
    }
}
