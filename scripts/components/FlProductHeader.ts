import View from '@smartface/native/ui/view';
import FlProductHeaderDesign from 'generated/my-components/FlProductHeader';

export default class FlProductHeader extends FlProductHeaderDesign {
  pageName?: string | undefined;
  _viewAllClick:(...args) => void;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
    this.lblViewAll.on(View.Events.TouchEnded, ()=>{
        this._viewAllClick && this._viewAllClick();
    })
  }

  get showcaseTitle():string{
      return this.lblTitle.text;
  }
  set showcaseTitle(value:string){
    this.lblTitle.text = value;
  }
  get showcaseLinkText():string{
      return this.lblViewAll.text;
  }
  set showcaseLinkText(value:string){
      this.lblViewAll.text = value;
  }
  get viewAllClick(): (...args) => void{
      return this._viewAllClick;
  }
  set viewAllClick(value:(...args)=>void){
      this._viewAllClick = value;
  }
}
