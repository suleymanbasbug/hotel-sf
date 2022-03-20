import LviHotelDetailDesign from 'generated/my-components/LviHotelDetail';
import { themeService } from "../theme";
const originalHeight = themeService.getStyle('.lviHotelDetail').height;
export default class LviHotelDetail extends LviHotelDetailDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get hotelName(): string {
        return this.flHotelDetail.hotelName;
    }
    set hotelName(value: string) {
        this.flHotelDetail.hotelName = value;
    }
    get price(): string {
        return this.flHotelDetail.price;
    }
    set price(value: string) {
        this.flHotelDetail.price = value;
    }
    get priceType(): string {
        return this.flHotelDetail.priceType;
    }
    set priceType(value: string) {
        this.flHotelDetail.priceType = value;
    }
    get hotelImage(): string {
        return this.flHotelDetail.hotelImage;
    }
    set hotelImage(value: string) {
        this.flHotelDetail.hotelImage = value;
    }
    static getHeight(): number {
        return originalHeight;
    }
}
