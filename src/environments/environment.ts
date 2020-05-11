// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.coloredstrategies.com',
  defaultMenuType: 'menu-default',
  subHiddenBreakpoint: 1440,
  menuHiddenBreakpoint: 768,
  themeColorStorageKey: 'vien-themecolor',
  isMultiColorActive: true,
  /*
  Color Options:
  'light.blueyale', 'light.blueolympic', 'light.bluenavy', 'light.greenmoss', 'light.greenlime', 'light.yellowgranola', 'light.greysteel', 'light.orangecarrot', 'light.redruby', 'light.purplemonster'
  'dark.blueyale', 'dark.blueolympic', 'dark.bluenavy', 'dark.greenmoss', 'dark.greenlime', 'dark.yellowgranola', 'dark.greysteel', 'dark.orangecarrot', 'dark.redruby', 'dark.purplemonster'
  */
  defaultColor: 'light.blueyale',
  isDarkSwitchActive: true,
  defaultDirection: 'ltr',
  themeRadiusStorageKey: 'vien-themeradius',
  isAuthGuardActive: true,
  firebase: {
    apiKey:"AIzaSyAWvmK7cavbsCrcTHV09fZbdDd1YYKjeGM",
    authDomain:"restaurantframework-775a5.firebaseapp.com",
    databaseURL:"https://restaurantframework-775a5.firebaseio.com",
    projectId:"restaurantframework-775a5",
    storageBucket:"restaurantframework-775a5.appspot.com",
    messagingSenderId:"846269478595",
    appId:"1:846269478595:web:f0c1a803c3a1f3b5aa1476",
    measurementId:"G-7V4Q3C2SCT"
    
  }
  
};
