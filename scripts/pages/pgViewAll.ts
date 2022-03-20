import PgViewAllDesign from 'generated/pages/pgViewAll';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import { onRowBind, onRowCreate, onRowHeight, onRowType } from 'lib/listView';
import * as ListViewItems from 'lib/listViewItemTypes';
import { getShowcases } from 'service/hotel';
import { HomeShowcases } from "../types";
import LviFilterbar from 'components/LviFilterbar';
import LviHotelCard from 'components/LviHotelCard';
type Processor = | ListViewItems.ProcessorTypes.ILviHotelCard;


export default class PgViewAll extends withDismissAndBackButton(PgViewAllDesign) {
    routeData: any
    showcases: HomeShowcases[]
    showcaseId: number
    data: Processor[]
    constructor(private router?: Router, private route?: Route) {
        super({});
    }

    initListView() {
        this.lvMain.onRowType = onRowType.bind(this);
        this.lvMain.onRowHeight = onRowHeight.bind(this);
        this.lvMain.onRowCreate = onRowCreate.bind(this);
        this.lvMain.onRowBind = onRowBind.bind(this);
        this.lvMain.onRowSelected = (item:LviFilterbar | LviHotelCard, index) => {
            if(item instanceof LviHotelCard){
                this.router.push('hotelDetail',{
                    hotel : item.hotel
                })
            }

        }
        this.lvMain.refreshEnabled = false;
    }

    refreshListView() {
        this.data = this.processor();
        this.lvMain.itemCount = this.data.length;
        this.lvMain.refreshData();
    }
    processor(): Processor[] {
        const processorItems = [
            ListViewItems.getLviFilterbar({})
        ];
        this.showcases.find((data) => data.id == this.showcaseId).hotels.forEach((hotel) => {
            processorItems.push(
                ListViewItems.getLviHotelCard({
                    hotelName: hotel.name,
                    hotelImage: hotel.imageUrl,
                    hotelInfo: hotel.hotelInfo,
                    priceType: hotel.priceType,
                    hotelPrice: `₹ ${hotel.price}`,
                    hotel
                })
            )
        })
        return processorItems;

    }

    async fetchShowcases() {
        try {
            const showcaseResponse = await getShowcases();
            this.showcases = showcaseResponse;
            return showcaseResponse
        } catch (err) {
            console.log(err);
        }
    }

    async callServices() {
        try {
            await Promise.all([this.fetchShowcases()]);
        } catch (error) {
            alert(error.message);
        } finally {
            this.refreshListView();
        }
    }
    /**
     * @event onShow
     * This event is called when the page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        this.initBackButton(this.router); //Addes a back button to the page headerbar.
        this.callServices();
    }

    /**
     * @event onLoad
     * This event is called once when the page is created.
     */
    onLoad() {
        super.onLoad();
        this.headerBar.title = this.route.getState().routeData.title;
        this.showcaseId = this.route.getState().routeData.showcaseId;
        this.initListView();
    }
}
