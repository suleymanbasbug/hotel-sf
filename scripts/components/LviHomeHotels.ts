import LviHomeHotelsDesign from 'generated/my-components/LviHomeHotels';
import { Hotel } from "../types"
import GviHotelItem from "./GviHotelItem"
import Screen from '@smartface/native/device/screen';

export default class LviHomeHotels extends LviHomeHotelsDesign {
    pageName?: string | undefined;
    private __items: Hotel[] = [];
    private __onHotelClick:(hotel:Hotel) => void;

    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get items(): Hotel[] {
        return this.__items;
    }
    set items(value: Hotel[]) {
        this.__items = value;
        this.initGridView();
        this.refreshGridView();
    }
    static getHeight(): number {
        return 260;
    }
    get onHotelClick(): ( hotel:Hotel) => void {
        return this.__onHotelClick;
    }
    set onHotelClick(value: (hotel:Hotel) => void) {
        this.__onHotelClick = value;
    }

    private initGridView() {
        this.gvHotels.layoutManager.onItemLength = () => Screen.width / 2;
        this.gvHotels.onItemBind = (GridViewItem: GviHotelItem, hotelIndex: number) => {
            GridViewItem.hotelName = this.items[hotelIndex].name
            GridViewItem.hotelPrice = `₹ ${this.items[hotelIndex].price}`
            GridViewItem.hotelImage = this.items[hotelIndex].imageUrl
        }
        this.gvHotels.onItemSelected = (GridViewItem: GviHotelItem,hotelIndex:number) => {
            this.onHotelClick(this.items[hotelIndex]);
        }
    }
    refreshGridView() {
        this.gvHotels.itemCount = this.items.length;
        this.gvHotels.refreshData();
    }
}
