import PgAccountDesign from 'generated/pages/pgAccount';
import { Route, Router } from '@smartface/router';
import { withDismissAndBackButton } from '@smartface/mixins';
import * as ListViewItems from 'lib/listViewItemTypes';
import { onRowBind, onRowCreate, onRowHeight, onRowType } from 'lib/listView';
import { accountMenuItems } from "data";
import { user } from "../data";
type Processor = | ListViewItems.ProcessorTypes.ILviAccount | ListViewItems.ProcessorTypes.ILviProfile
export default class PgAccount extends withDismissAndBackButton(PgAccountDesign) {
    data: Processor[];
    routeData: any;
    parentController: any;
    constructor(private router?: Router, private route?: Route) {
        super({});
    }
    initListView() {
        this.lvMain.onRowType = onRowType.bind(this);
        this.lvMain.onRowHeight = onRowHeight.bind(this);
        this.lvMain.onRowCreate = onRowCreate.bind(this);
        this.lvMain.onRowBind = onRowBind.bind(this);
        this.lvMain.refreshEnabled = false;
        this.refreshListView();
    }
    refreshListView() {
        this.data = this.processor();
        this.lvMain.itemCount = this.data.length;
        this.lvMain.refreshData();
    }
    processor(): Processor[] {
        const processorItems = [
            ListViewItems.getLviProfile({
                userName: user.name,
                userEmail:user.email,
                userImage: user.imgUrl
            })
        ]
        accountMenuItems.forEach((accountMenuItem) => {
            processorItems.push(
                ListViewItems.getLviAccount({
                    itemTitle: accountMenuItem.title,
                    leftIcon: accountMenuItem.icon
                })
            )
        })
        return processorItems;
    }
    /**
     * @event onShow
     * This event is called when a page appears on the screen (everytime).
     */
    onShow() {
        super.onShow();
        this.initBackButton(this.router);
        this.initDismissButton(this.router);
        this.refreshListView();

    }

    /**
     * @event onLoad
     * This event is called once when page is created.
     */
    onLoad() {
        super.onLoad();
        this.initListView();

    }
}
