export const NavigationKeys = {
  Home: {
    label: 'Home',
    icon: 'bi-house-fill',
    tabs: [
      {
        label: 'Home',
        route: '/home',
      },
    ],
  },
  Products: {
    label: 'Products',
    icon: 'bi-flower1',
    tabs: [
      {
        label: 'Coffee Beans',
        route: '/products/beans',
      },
    ],
  },
};

export type NavigationKeys = typeof NavigationKeys[keyof typeof NavigationKeys];
