import FlBannerDesign from 'generated/my-components/FlBanner';

export default class FlBanner extends FlBannerDesign {
    private __iconUrl:string;
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
  get icon():string{
      return this.__iconUrl;
  }
  set icon(value:string){
      this.__iconUrl = value;
      this.imgIcon.loadFromUrl({
        url: this.__iconUrl,
        useHTTPCacheControl: true
      })
  }
  get info():string{
      return this.lblInfo.text;
  }
  set info(value:string){
      this.lblInfo.text = value;
  }
}
