import LviProfileDesign from 'generated/my-components/LviProfile';
import { themeService } from 'theme';
const originalHeight = themeService.getStyle('.lviProfile').height;

export default class LviProfile extends LviProfileDesign {
    pageName?: string | undefined;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get userName():string{
        return this.flProfile.userName;
    }
    set userName(value:string){
        this.flProfile.userName = value;
    }
    get userEmail():string{
        return this.flProfile.userEmail;
    }
    set userEmail(value:string){
        this.flProfile.userEmail = value;
    }
    get userImage():string{
        return this.flProfile.userImage;
    }
    set userImage(value:string){
        this.flProfile.userImage = value;
    }
    static getHeight():number{
        return originalHeight;
    }
}
