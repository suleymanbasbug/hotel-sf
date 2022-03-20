import PgHotelDetailDesign from 'generated/pages/pgHotelDetail';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import { onRowBind, onRowCreate, onRowHeight, onRowType } from 'lib/listView';
import { Hotel } from 'types';
import * as ListViewItems from 'lib/listViewItemTypes';

type Processor = | ListViewItems.ProcessorTypes.ILviHotelDetail | ListViewItems.ProcessorTypes.ILviGenericSlider;


export default class PgHotelDetail extends withDismissAndBackButton(PgHotelDetailDesign) {
    hotel: Hotel;
    data: Processor[];
    constructor(private router?: Router, private route?: Route) {
        super({});
    }
    initListView() {
        this.lvMain.onRowBind = onRowBind.bind(this);
        this.lvMain.onRowCreate = onRowCreate.bind(this);
        this.lvMain.onRowHeight = onRowHeight.bind(this);
        this.lvMain.onRowType = onRowType.bind(this);
        this.lvMain.refreshEnabled = false;
    }

    refreshListView() {
        this.data = this.processor();
        this.lvMain.itemCount = this.data.length;
        this.lvMain.refreshData();
    }

    processor(): Processor[] {
        const processorItems = [
             ListViewItems.getLviGenericSlider({
                 images: this.hotel.images.map((image) => {
                     return image;
                 })
             })
        ];
        processorItems.push(
            ListViewItems.getLviHotelInfoSection({
                overviewTitle:'Name',
                hotelInfo:this.hotel.name
            })
        )
        processorItems.push(
            ListViewItems.getLviHotelInfoSection({
                overviewTitle:'Price',
                hotelInfo:`₹ ${this.hotel.price} - ${this.hotel.priceType}`
            })
        )
        processorItems.push(
            ListViewItems.getLviHotelInfoSection({
                overviewTitle:'Description',
                hotelInfo:this.hotel.hotelInfo
            })
        )
        return processorItems;
    }

    /**
     * @event onShow
     * This event is called when the page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        this.initBackButton(this.router); //Addes a back button to the page headerbar.
        this.refreshListView();

    }

    /**
     * @event onLoad
     * This event is called once when the page is created.
     */
    onLoad() {
        super.onLoad();
        this.headerBar.title = this.route.getState().routeData.hotel.name;
        this.hotel = this.route.getState().routeData.hotel;
        this.initListView();

    }
}
