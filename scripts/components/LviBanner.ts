import LviBannerDesign from 'generated/my-components/LviBanner';

export default class LviBanner extends LviBannerDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
  get icon():string{
      return this.flBanner.icon;
  }
  set icon(value:string){
      this.flBanner.icon = value;
  }
  get info():string{
      return this.flBanner.info;
  }
  set info(value:string){
      this.flBanner.info = value;
  }
}
