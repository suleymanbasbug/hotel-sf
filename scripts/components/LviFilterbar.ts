import LviFilterbarDesign from 'generated/my-components/LviFilterbar';

export default class LviFilterbar extends LviFilterbarDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
