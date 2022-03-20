import LviHotelInfoSectionDesign from 'generated/my-components/LviHotelInfoSection';
import { themeService } from 'theme';

const { height } = themeService.getStyle('.lviHotelInfoSection');

export default class LviHotelInfoSection extends LviHotelInfoSectionDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    static getHeight(): number {
        return height;
    }
    get overviewTitle(): string {
        return this.flHotelInfoSection.overviewTitle;
    }
    set overviewTitle(value: string) {
        this.flHotelInfoSection.overviewTitle = value;
    }
    get hotelInfo(): string {
        return this.flHotelInfoSection.hotelInfo;
    }
    set hotelInfo(value: string) {
        this.flHotelInfoSection.hotelInfo = value;
    }
}
