import FlFilterbarDesign from 'generated/my-components/FlFilterbar';

export default class FlFilterbar extends FlFilterbarDesign {
  pageName?: string | undefined;
  constructor(props?: any, pageName?: string) {
    // Initalizes super class for this scope
    super(props);
    this.pageName = pageName;
  }
}
