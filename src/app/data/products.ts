import { IProduct } from './api.service';

const data: IProduct[] = [
  {
    id: 1,
    title: 'Marble Cake',
    img: '/assets/img/marble-cake-thumb.jpg',
    category: 'Cakes',
    date: '02.04.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Wedding cake with flowers Macarons and blueberries',
    sales: 1647,
    stock: 62
  },
  {
    id: 2,
    title: 'Fat Rascal',
    category: 'Cupcakes',
    img: '/assets/img/fat-rascal-thumb.jpg',
    date: '01.04.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Cheesecake with chocolate cookies and Cream biscuits',
    sales: 1240,
    stock: 48
  },
  {
    id: 3,
    title: 'Chocolate Cake',
    img: '/assets/img/chocolate-cake-thumb.jpg',
    category: 'Cakes',
    date: '25.03.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Homemade cheesecake with fresh berries and mint',
    sales: 1080,
    stock: 57
  },
  {
    id: 4,
    title: 'Goose Breast',
    img: '/assets/img/goose-breast-thumb.jpg',
    category: 'Cakes',
    date: '21.03.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Chocolate cake with berries',
    sales: 1014,
    stock: 41
  },
  {
    id: 5,
    title: 'Petit Gâteau',
    category: 'Cupcakes',
    img: '/assets/img/petit-gateau-thumb.jpg',
    date: '02.06.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Chocolate cake with mascarpone',
    sales: 985,
    stock: 23
  },
  {
    id: 6,
    title: 'Salzburger Nockerl',
    img: '/assets/img/salzburger-nockerl-thumb.jpg',
    category: 'Desserts',
    date: '14.07.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Wedding cake decorated with donuts and wild berries',
    sales: 962,
    stock: 34
  },
  {
    id: 7,
    title: 'Napoleonshat',
    img: '/assets/img/napoleonshat-thumb.jpg',
    category: 'Desserts',
    date: '05.02.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Cheesecake with fresh berries and mint for dessert',
    sales: 921,
    stock: 31
  },
  {
    id: 8,
    title: 'Cheesecake',
    img: '/assets/img/cheesecake-thumb.jpg',
    category: 'Cakes',
    date: '18.08.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Delicious vegan chocolate cake',
    sales: 887,
    stock: 21
  },
  {
    id: 9,
    title: 'Financier',
    img: '/assets/img/financier-thumb.jpg',
    category: 'Cakes',
    date: '15.03.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 865,
    stock: 53
  },
  {
    id: 10,
    title: 'Genoise',
    img: '/assets/img/genoise-thumb.jpg',
    category: 'Cupcakes',
    date: '11.06.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Christmas fruit cake, pudding on top',
    sales: 824,
    stock: 55
  },
  {
    id: 11,
    title: 'Gingerbread',
    img: '/assets/img/gingerbread-thumb.jpg',
    category: 'Cakes',
    date: '10.04.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Wedding cake decorated with donuts and wild berries',
    sales: 714,
    stock: 12
  },
  {
    id: 12,
    title: 'Magdalena',
    img: '/assets/img/magdalena-thumb.jpg',
    category: 'Cakes',
    date: '22.07.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Christmas fruit cake, pudding on top',
    sales: 702,
    stock: 14
  },
  {
    id: 13,
    title: 'Parkin',
    img: '/assets/img/parkin-thumb.jpg',
    category: 'Cakes',
    date: '22.08.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description:
      'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
    sales: 689,
    stock: 78
  },
  {
    id: 14,
    title: 'Streuselkuchen',
    img: '/assets/img/streuselkuchen-thumb.jpg',
    category: 'Cakes',
    date: '22.07.2018',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Delicious vegan chocolate cake',
    sales: 645,
    stock: 55
  },
  {
    id: 15,
    title: 'Tea loaf',
    img: '/assets/img/tea-loaf-thumb.jpg',
    category: 'Cakes',
    date: '10.09.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Cheesecake with fresh berries and mint for dessert',
    sales: 632,
    stock: 20
  },
  {
    id: 16,
    title: 'Merveilleux',
    img: '/assets/img/merveilleux-thumb.jpg',
    category: 'Cakes',
    date: '18.02.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Chocolate cake with mascarpone',
    sales: 621,
    stock: 6
  },
  {
    id: 17,
    title: 'Fruitcake',
    img: '/assets/img/fruitcake-thumb.jpg',
    category: 'Cakes',
    date: '12.01.2019',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Chocolate cake with berries',
    sales: 595,
    stock: 17
  },
  {
    id: 18,
    title: 'Bebinca',
    img: '/assets/img/bebinca-thumb.jpg',
    category: 'Cakes',
    date: '04.02.2019',
    status: 'PROCESSED',
    statusColor: 'secondary',
    description: 'Homemade cheesecake with fresh berries and mint',
    sales: 574,
    stock: 16
  },
  {
    id: 19,
    title: 'Cremeschnitte',
    img: '/assets/img/cremeschnitte-thumb.jpg',
    category: 'Desserts',
    date: '04.03.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Cheesecake with chocolate cookies and Cream biscuits',
    sales: 562,
    stock: 9
  },
  {
    id: 20,
    title: 'Soufflé',
    img: '/assets/img/souffle-thumb.jpg',
    category: 'Cupcakes',
    date: '16.01.2018',
    status: 'ON HOLD',
    statusColor: 'primary',
    description: 'Wedding cake with flowers Macarons and blueberries',
    sales: 524,
    stock: 14
  }
];

export default data;
