import LviShowcaseHeaderDesign from 'generated/my-components/LviShowcaseHeader';

export default class LviShowcaseHeader extends LviShowcaseHeaderDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }

  get showcaseTitle():string{
      return this.flProductHeader.showcaseTitle;
  }
  set showcaseTitle(value:string){
      this.flProductHeader.showcaseTitle = value;
  }
  get showcaseLinkText():string{
      return this.flProductHeader.showcaseLinkText;
  }
  set showcaseLinkText(value:string){
      this.flProductHeader.showcaseLinkText = value;
  }
  get viewAllClick():(...args) => void{
      return this.flProductHeader.viewAllClick;
  }
  set viewAllClick(value: (...args)=> void){
      this.flProductHeader.viewAllClick = value;
  }

  
}
