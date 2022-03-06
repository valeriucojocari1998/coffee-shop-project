export const NavigationKeys = {
  Home: {
    label: 'Main',
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
        label: 'Products Board',
        route: '/products/board',
      },
      {
        label: 'Coffee Beans',
        route: '/products/beans',
      },
    ],
  },
};

export type NavigationKeys = typeof NavigationKeys[keyof typeof NavigationKeys];
