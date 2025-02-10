import curryCheese from '../assets/currycheese.png';
import pancakeSandwiches from '../assets/pancakesandwiches.png'
import onigiri from '../assets/onigiri.png'
import yogurtDrink from '../assets/yogurtdrink.png'
import gyuDon from '../assets/gyudon.png'
import famiChiki from '../assets/famichiki.png'
import ikinari from '../assets/ikinari.png'
import pepperLunch from '../assets/pepperRice.png'
import hatena from '../assets/hatenaBurger.png'
import overpriced from '../assets/overpricedFood.png'
import lawsons from '../assets/lawsonschicken.png'
import sushi from '../assets/sushi.png'
import okonomiyaki from '../assets/okonomiyaki.png';
import yakiniku from '../assets/yakiniku.png'
import wagyu from '../assets/wagyu.png'
import ramen from '../assets/ramen.png'
import chashuCurry from '../assets/japanesecurry.png'

export const foodTimeLine = [
  {
    "id": "breakfast",
    "title": "Breakfast 🍳",
    "description": "You really lived off of the konbini food. Whatever happened to having a 'balanced' meal? ",
    "foodItems": [
      { "name": "Pancake Sandwiches", "img": pancakeSandwiches },
      { "name": "Curry Cheese Cup Noodles","img": curryCheese  },
      { "name": "Onigiri", "img": onigiri  },
      { "name": "Mapo Tofu", "img": "" },
      { "name": "Berry Yogurt Drink", "img": yogurtDrink },
      { "name": "Gyudon", "img": gyuDon },
      { "name": "Family Mart Chicken", "img": famiChiki },
      { "name": "Curry", "img": ""}
    ],
    "mostEaten": "Pancake Sandwiches!!",
    "timesEaten": "30 times",
    "foodDescription": "What the hell, you ate this every day since you got in, and even brought back 10 for your friends back home",
    "jokeMacros": {
      "calories": "700 kcal",
      "protein": "Did this even have any protein?? ",
      "fat": "2g (Basically water)"
    }
  },
  {
    "id": "lunch",
    "title": "Lunch 🍛",
    "description": "Ah Lunch, sometimes you had it, other times you didn't but here's some food you ate for lunch",
    "foodItems": [
      { "name": "Steak", "img": ikinari  },
      { "name": "Pepper Rice", "img": pepperLunch  },
      { "name": "Burger", "img": hatena  },
      { "name": "Overpriced Harry Potter food", "img": overpriced },
      { "name": "Family Mart Chicken", "img": lawsons },
    ],
    "mostEaten": "Family Mart Chicken",
    "jokeMacros": {
      "calories": "500 kcal? Who knows, who tracks? ",
      "protein": "Probably not even enough to hit your macros",
      "fat": "20g (Cheat meal vibes)"
    }
  },
  {
    "id": "dinner",
    "title": "Dinner 🍣",
    "description": "The most important meal of the day, more important than Breakfast, and more delicious than breakfast",
    "foodItems": [
      { "name": "Sushi", "img": sushi  },
      { "name": "Okonomiyaki", "img": okonomiyaki  },
      { "name": "Yakiniku", "img": yakiniku  },
      { "name": "Wagyu Beef", "img": wagyu },
      { "name": "Ramen", "img": ramen },
      { "name": "Cup Noodles", "img": curryCheese },
      { "name": "Chashu Curry", "img": chashuCurry}
    ],
    "mostEaten": "Yakiniku 🥩 (7x, pure protein power)",
    "jokeMacros": {
      "calories": "1800 kcal",
      "protein": "50g (Bodybuilder mode)",
      "fat": "60g (Worth every bite)"
    }
  }
]
