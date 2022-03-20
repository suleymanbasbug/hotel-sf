import LviAccountDesign from 'generated/my-components/LviAccount';
import { themeService } from 'theme';
const originalHeight = themeService.getStyle('.lviAccount').height;

export default class LviAccount extends LviAccountDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
  static getHeight():number{
      return originalHeight;
  }
  get topLine():boolean{
      return this.flAccountTopLine.visible;
  }
  set topLine(value:boolean){
      this.flAccountTopLine.visible = value;
  }
  get bottomLine():boolean{
      return this.flAccountBottomLine.visible;
  }
  set bottomLine(value:boolean){
      this.flAccountBottomLine.visible = value;
  }
  get itemTitle():string{
      return this.lblAccountTitle.text;
  }
  set itemTitle(value:string){
      this.lblAccountTitle.text = value;
  }
  get leftIcon():string{
      return this.lblAccountIcon.text;
  }
  set leftIcon(value:string){
      this.lblAccountIcon.text = value;
  }
}
