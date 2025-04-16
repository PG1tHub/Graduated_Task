import IphoneImage from './images/iphone13.png';
import MacBookProImage from './images/macbookpro.png';
import PS5Image from './images/ps5.png';
import SwitchImage from './images/switch.png';
import AppleWatchImage from './images/applewatchse.png';
import IPhone14ProImage from './images/iphone14pro.png';

const sampleData = [
  {
    "itemId": 1, //id -> itemId
    "itemName": "아이폰 13",  //title -> itemName
    "price": 950000,
    "image": IphoneImage, //imageYrl -> image
    "time": "10분 전", //createAt -> time
    "category": "휴대폰",
    "priceSimilar": true, //isPriceSimilar->priceSimilar
    "itemState": 5,
    "minPrice": 880000, //recommenedMinPrice->minPrice
    "maxPrice": 1020000 //maxPrice
  },

  {
    "itemId": 2,
    "itemName": "맥북 프로 16인치",
    "price": 2400000,
    "image": MacBookProImage,
    "time": "35분 전",
    "category": "노트북",
    "priceSimilar": true,
    "itemState": 5,
    "minPrice": 2200000,
    "maxPrice": 2600000
  },

  {
    "itemId": 3,
    "itemName": "플레이스테이션 5",
    "price": 700000,
    "image": PS5Image,
    "time": "2일 전",
    "category": "게임",
    "priceSimilar": true,
    "itemState": 5,
    "minPrice": 550000,
    "maxPrice": 660000
  },
  
  {
    "itemId": 4,
    "itemName": "닌텐도 스위치",
    "price": 280000,
    "image": SwitchImage,
    "time": "24일 전",
    "category": "게임",
    "priceSimilar": true,
    "itemState": 2,
    "minPrice": 250000,
    "maxPrice": 310000
  },
  
  {
    "itemId": 5,
    "itemName": "애플워치 SE",
    "price": 350000,
    "image": AppleWatchImage,
    "time": "30일 전",
    "category": "웨어러블",
    "priceSimilar": true,
    "itemState": 4,
    "minPrice": 320000,
    "maxPrice": 385000
  },

  {
    "itemId": 6,
    "itemName": "아이폰 14 프로",
    "price": 1400000,
    "image": IPhone14ProImage,
    "time": "30일 전",
    "category": "휴대폰",
    "priceSimilar": true,
    "itemState": 5,
    "minPrice": 1300000,
    "maxPrice": 1500000
  }


  // {
    //     "itemId": 7,
  //     "itemName": "APPLE-WATCH-SE2-6",
  //     "price": 285443,
  //     "image": "",
  //     "time": "하루 전",
  //     "priceSimilar": false
  // },
  // {
  //     "itemId": 8,
  //     "itemName": "APPLE-WATCH-SE2-7",
  //     "price": 146114,
  //     "image": "",
  //     "time": "47분 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 9,
  //     "itemName": "APPLE-WATCH-SE2-8",
  //     "price": 237956,
  //     "image": "",
  //     "time": "3일 전",
  //     "priceSimilar": false
  // },
  // {
  //     "itemId": 10,
  //     "itemName": "APPLE-WATCH-SE2-9",
  //     "price": 183610,
  //     "image": "",
  //     "time": "19일 전",
  //     "priceSimilar": false
  // },
  // {
  //     "itemId": 11,
  //     "itemName": "APPLE-WATCH-SE2-10",
  //     "price": 38015,
  //     "image": "",
  //     "time": "1시간 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 12,
  //     "itemName": "APPLE-WATCH-SE2-11",
  //     "price": 85458,
  //     "image": "",
  //     "time": "일주일 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 13,
  //     "itemName": "APPLE-WATCH-SE2-12",
  //     "price": 47308,
  //     "image": "",
  //     "time": "1시간 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 14,
  //     "itemName": "APPLE-WATCH-SE2-13",
  //     "price": 129679,
  //     "image": "",
  //     "time": "38분 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 15,
  //     "itemName": "APPLE-WATCH-SE2-14",
  //     "price": 206830,
  //     "image": "",
  //     "time": "5시간 전",
  //     "priceSimilar": false
  // },
  // {
  //     "itemId": 16,
  //     "itemName": "APPLE-WATCH-SE2-15",
  //     "price": 240888,
  //     "image": "",
  //     "time": "8일 전",
  //     "priceSimilar": false
  // },
  // {
  //     "itemId": 17,
  //     "itemName": "APPLE-WATCH-SE2-16",
  //     "price": 19569,
  //     "image": "",
  //     "time": "12분 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 18,
  //     "itemName": "APPLE-WATCH-SE2-17",
  //     "price": 130043,
  //     "image": "",
  //     "time": "3분 전",
  //     "priceSimilar": true
  // },
  // {
  //     "itemId": 19,
  //     "itemName": "APPLE-WATCH-SE2-18",
  //     "price": 193862,
  //     "image": "",
  //     "time": "44분 전",
  //     "priceSimilar": false
  // },
  // {
  //     "itemId": 20,
  //     "itemName": "APPLE-WATCH-SE2-19",
  //     "price": 194804,
  //     "image": "",
  //     "time": "5시간 전",
  //     "priceSimilar": false
  // }
];

export default sampleData;