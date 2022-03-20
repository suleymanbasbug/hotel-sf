import FlHotelInfoSectionDesign from 'generated/my-components/FlHotelInfoSection';

export default class FlHotelInfoSection extends FlHotelInfoSectionDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get overviewTitle(): string {
        return this.lblTitle.text;
    }
    set overviewTitle(value: string) {
        this.lblTitle.text = value;
    }
    get hotelInfo(): string {
        return this.lblHotelInfo.text;
    }
    set hotelInfo(value: string) {
        this.lblHotelInfo.text = value;
    }
}
