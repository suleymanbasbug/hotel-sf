import PgWishlistDesign from 'generated/pages/pgWishlist';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import Application from '@smartface/native/application';
import Color from '@smartface/native/ui/color';
import * as ListViewItems from 'lib/listViewItemTypes';
import { onRowBind, onRowCreate, onRowHeight, onRowType } from 'lib/listView';
import { Hotel } from 'types';
import { getHotels, getHotelsForFilter } from 'service/hotel';
import SearchView from "@smartface/native/ui/searchview";
import debounce from "../lib/debounce"
import { DEBOUNCE_TIMEOUT } from "../constants"
import { hideWaitDialog, showWaitDialog } from 'lib/waitDialog';
import LviHotelCard from 'components/LviHotelCard';
type Processor = | ListViewItems.ProcessorTypes.ILviHotelCard;




export default class PgWishlist extends withDismissAndBackButton(PgWishlistDesign) {
    leftItem: HeaderBarItem;
    data: Processor[];
    hotels: Hotel[];
    mySearchView: SearchView;

    constructor(private router?: Router, private route?: Route) {
        super({});
    }
    async onTextChanged(searchText: string) {
        if (searchText.length > 1) {
            try {
                const hotelResponse = await this.getHotelsByFilter(searchText);
                this.hotels = hotelResponse;
                this.refreshListView();
            } catch (err) {
                console.log(err);
            }
        }
        if(searchText.length <= 1){
            this.callServices();
        }
    }
    initSearchView(): void {
        this.mySearchView = new SearchView();
        this.mySearchView.android.textFieldBorderRadius = 20;
        this.mySearchView.textFieldBackgroundColor = Color.WHITE;
        //@ts-ignore
        this.mySearchView.cursorColor = Color.BLACK;
        this.mySearchView.addToHeaderBar(this);
        this.mySearchView.on(
            SearchView.Events.TextChanged,
            debounce(this.onTextChanged, DEBOUNCE_TIMEOUT).bind(this)
        );
    }

    initListView() {
        this.lvMain.onRowType = onRowType.bind(this);
        this.lvMain.onRowHeight = onRowHeight.bind(this);
        this.lvMain.onRowCreate = onRowCreate.bind(this);
        this.lvMain.onRowBind = onRowBind.bind(this);
        this.lvMain.refreshEnabled = false;
        this.lvMain.onRowSelected = (item: LviHotelCard, index) => {
            this.router.push('hotelDetail', {
                hotel: item.hotel
            })
        };
    }
    refreshListView() {
        this.data = this.processor();
        this.lvMain.itemCount = this.data.length;
        this.lvMain.refreshData();
    }
    processor(): Processor[] {
        const processorItems = [
        ];
        this.hotels.forEach(hotel => {
            if (hotel.isSaved) {
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
            }
        });
        return processorItems;
    }
    async getHotelsByFilter(searchText: string) {
        try {
            showWaitDialog();
            const hotelResponse = await getHotelsForFilter(searchText);
            this.hotels = hotelResponse;
            return hotelResponse;
        } catch (err) {
            console.log(err);
        }
        finally {
            hideWaitDialog();
        }
    }
    async fetchHotels() {
        try {
            const hotelResponse = await getHotels();
            if (hotelResponse && hotelResponse.length > 0) {
                this.hotels = hotelResponse;
            }
            return hotelResponse;
        } catch (err) {
            console.log(err)
        } finally {
        }
    }
    async callServices() {
        try {
            await Promise.all([this.fetchHotels()]);
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
        const { headerBar } = this;
        super.onShow();
        this.initBackButton(this.router);
        Application.statusBar.visible = true;
        headerBar.visible = true;
        this.callServices();

    }

    /**
     * @event onLoad
     * This event is called once when the page is created.
     */
    onLoad() {
        super.onLoad();
        const { headerBar } = this;
        headerBar.title = "Wishlist"
        this.leftItem = new HeaderBarItem();
        this.leftItem.title = "left";
        this.leftItem.color = Color.BLACK;
        this.headerBar.setLeftItem(this.leftItem);
        this.initListView();
        this.initSearchView();

    }
}
