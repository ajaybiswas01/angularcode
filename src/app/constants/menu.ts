export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'dashboard',
    icon: 'iconsminds-air-balloon-1',
    label: 'dashboard',
    to: '/app/dashboard',
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.start',
        to: '/app/dashboard/second'
      }
    ]
  },
  {
    id: 'orders',
    icon: 'iconsminds-three-arrow-fork',
    label: 'Orders',
    to: '/app/orders'
  },
  {
    id: 'foodmenu',
    icon: 'iconsminds-bucket',
    label: 'Foodmenu',
    to: '/app/foodmenu'
  },
  {
    id: 'settings',
    icon: 'iconsminds-library',
    label: 'Settings',
    to: '/app/settings'
  },
  {
    id: 'profile',
    icon: 'iconsminds-library',
    label: 'Profile',
    to: '/app/profile'
  }
];
export default data;
