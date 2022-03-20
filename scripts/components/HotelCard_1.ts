import HotelCard_1Design from 'generated/my-components/HotelCard_1';

export default class HotelCard_1 extends HotelCard_1Design {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
