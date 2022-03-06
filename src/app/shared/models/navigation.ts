export interface NavigationParent {
  label: string;
  tabs: NavigationChild[];
}

export interface NavigationChild {
  label: string;
  route: string;
}
