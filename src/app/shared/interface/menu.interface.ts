export interface Menu {
  title: string;
  path?: string; //nullable syntax
  icon?: string;
  type: string; //menu or link
  active?: boolean;
  children?: Menu[];
}
