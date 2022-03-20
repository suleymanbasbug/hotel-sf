import LviFilterbarDesign from 'generated/my-components/LviFilterbar';
import { themeService } from "../theme";
const originalHeight = themeService.getStyle('.lviFilterbar').height;
export default class LviFilterbar extends LviFilterbarDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    static getHeight():number{
        return originalHeight;
    }
}
