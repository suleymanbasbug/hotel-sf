import HotelCardDesign from 'generated/my-components/HotelCard';

export default class HotelCard extends HotelCardDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
