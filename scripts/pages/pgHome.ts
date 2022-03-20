import PgHomeDesign from 'generated/pages/pgHome';
import { Route, Router } from '@smartface/router';
import { withDismissAndBackButton } from '@smartface/mixins';
import Color from '@smartface/native/ui/color';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import { banner } from "../data";
import * as ListViewItems from 'lib/listViewItemTypes';
import { HomeShowcases } from "../types"
import { onRowBind, onRowCreate, onRowHeight, onRowType } from 'lib/listView';
import { getShowcases } from 'service/hotel';
import SearchView from "@smartface/native/ui/searchview";
import { hideWaitDialog, showWaitDialog } from 'lib/waitDialog';

type Processor = | ListViewItems.ProcessorTypes.ILviHomeHotels;


export default class PgHome extends withDismissAndBackButton(PgHomeDesign) {
    leftItem: HeaderBarItem;
    data: Processor[];
    showcases: HomeShowcases[];
    mySearchView: SearchView;
    private disposeables: (() => void)[] = [];
    constructor(private router?: Router, private route?: Route) {
        super({});
    }
    initSearchView(): void {
        this.mySearchView = new SearchView();
        this.mySearchView.android.textFieldBorderRadius = 20;
        this.mySearchView.textFieldBackgroundColor = Color.WHITE;
        //@ts-ignore
        this.mySearchView.cursorColor = Color.BLACK;
        this.mySearchView.addToHeaderBar(this);
    }
    initListView() {
        this.lvMain.onRowType = onRowType.bind(this);
        this.lvMain.onRowHeight = onRowHeight.bind(this);
        this.lvMain.onRowCreate = onRowCreate.bind(this);
        this.lvMain.onRowBind = onRowBind.bind(this);
        this.lvMain.refreshEnabled = false;
    }
    refreshListView() {
        this.data = this.processor();
        this.lvMain.itemCount = this.data.length;
        this.lvMain.refreshData();

    }
    processor(): Processor[] {
        const processorItems = [
            ListViewItems.getLviBanner({
                icon: banner.iconUrl,
                info: banner.info
            })
        ];
        this.showcases.forEach((data) => {
            processorItems.push(
                ListViewItems.getLviShowcaseHeader({
                    showcaseTitle: data.title,
                    showcaseLinkText: "View All",
                    viewAllClick: () => {
                        this.router.push('viewAll', {
                            title: data.title,
                            showcaseId: data.id
                        })
                    }
                }))

            processorItems.push(
                ListViewItems.getLviHomeHotels({
                    items: data.hotels,
                    onHotelClick: (hotel) => {
                        this.router.push('hotelDetail', {
                            hotel
                        })
                    }
                })
            );
        })

        return processorItems;

    }

    async fetchShowcases() {
        try {
            const showcaseResponse = await getShowcases();
            if (showcaseResponse && showcaseResponse.length > 0) {
                this.showcases = showcaseResponse;
            }
            return showcaseResponse;
        } catch (error) {
            console.log(error)
        }
        finally {
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
     * This event is called when a page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        this.callServices();
    }

    /**
     * @event onLoad
     * This event is called once when page is created.
     */
    onLoad() {
        super.onLoad();
        const { headerBar } = this;
        headerBar.title = "Explore";
        this.leftItem = new HeaderBarItem();
        this.leftItem.image = 'images://location.png';
        this.headerBar.setLeftItem(this.leftItem);
        this.initListView();
        this.initSearchView();


    }

    onHide(): void {
        this.dispose();
    }

    dispose(): void {
        this.disposeables.forEach((item) => item());
    }

}
