import LviHotelCardDesign from 'generated/my-components/LviHotelCard';
import { Hotel } from 'types';
import { themeService } from "../theme";
const originalHeight = themeService.getStyle('.lviHotelCard').height;
export default class LviHotelCard extends LviHotelCardDesign {
    pageName?: string | undefined;
    private __hotel: Hotel
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get hotelName(): string {
        return this.flHotelCardWrapper.hotelName;
    }
    set hotelName(value: string) {
        this.flHotelCardWrapper.hotelName = value;
    }
    get hotelImage(): string {
        return this.flHotelCardWrapper.hotelImage;
    }
    set hotelImage(value: string) {
        this.flHotelCardWrapper.hotelImage = value;
    }
    get hotelInfo(): string {
        return this.flHotelCardWrapper.hotelInfo;
    }
    set hotelInfo(value: string) {
        this.flHotelCardWrapper.hotelInfo = value;
    }
    get hotelPrice(): string {
        return this.flHotelCardWrapper.hotelPrice;
    }
    set hotelPrice(value: string) {
        this.flHotelCardWrapper.hotelPrice = value;
    }
    get priceType(): string {
        return this.flHotelCardWrapper.priceType;
    }
    set priceType(value: string) {
        this.flHotelCardWrapper.priceType = value;
    }
    get isSaved(): string {
        return this.flHotelCardWrapper.isSaved;
    }
    set isSaved(value: string) {
        this.flHotelCardWrapper.isSaved = value;
    }
    get hotel() {
        return this.__hotel;
    }
    set hotel(value: Hotel) {
        this.__hotel = value;
    }
    static getHeight():number{
        return originalHeight;
    }

}
