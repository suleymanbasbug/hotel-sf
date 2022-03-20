import HotelCardListViewItemDesign from 'generated/my-components/HotelCardListViewItem';

export default class HotelCardListViewItem extends HotelCardListViewItemDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
