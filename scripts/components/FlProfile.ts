import FlProfileDesign from 'generated/my-components/FlProfile';

export default class FlProfile extends FlProfileDesign {
    pageName?: string | undefined;
    private __imageUrl:string;
    constructor(props?: any, pageName?: string) {
        // Initalizes super class for this scope
        super(props);
        this.pageName = pageName;
    }
    get userName():string{
        return this.lblProfileName.text;
    }
    set userName(value:string){
        this.lblProfileName.text = value;
    }
    get userEmail():string{
        return this.lblProfileEmail.text;
    }
    set userEmail(value:string){
        this.lblProfileEmail.text = value;
    }
    get userImage():string{
        return this.__imageUrl;
    }
    set userImage(value:string){
        this.__imageUrl = value;
        this.imgProfile.loadFromUrl({
            url:this.__imageUrl,
            useHTTPCacheControl: true
        })
    }
}
