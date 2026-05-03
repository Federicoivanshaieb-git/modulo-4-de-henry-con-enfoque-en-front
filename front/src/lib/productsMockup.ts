const appleProducts = [

  {

    name: "iPhone 15 Pro",

    price: 999,

    description: "Experience the pinnacle of mobile technology with the iPhone 15 Pro: featuring a strong and light aerospace-grade titanium design, the powerful A17 Pro chip for next-level gaming, and a versatile Pro camera system.",

    image: "https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro__f72u16p7i36u_og.png",

    categoryId: 1, // Smartphones

    stock: 15,

  },

  {

    name: "MacBook Pro 14-inch",

    price: 1599,

    description: "Unleash your creative potential with the MacBook Pro featuring M3 chips: stunning Liquid Retina XDR display, pro ports for connectivity, and an advanced camera and audio system.",

    image: "https://www.apple.com/v/macbook-pro-14-and-16/e/images/meta/macbook-pro-14-and-16__bc9nu4969j7y_og.png",

    categoryId: 2, // Laptops

    stock: 8,

  },

  {

    name: "iPad Pro",

    price: 999,

    description: "The ultimate iPad experience: featuring the breakthrough M2 chip, a stunning Liquid Retina XDR display, and superfast wireless. Perfect for professional workflows and creative projects.",

    image: "https://www.apple.com/v/ipad-pro/p/images/meta/ipad-pro__bc9nu4969j7y_og.png",

    categoryId: 3, // Tablets

    stock: 10,

  },

  {

    name: "AirPods Pro (2nd gen)",

    price: 249,

    description: "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music and calls.",

    image: "https://www.apple.com/v/airpods-pro/a/images/meta/og__c1zv8c8n7q06.png",

    categoryId: 4, // Headphones

    stock: 10,

  },

  {

    name: "Studio Display",

    price: 1599,

    description: "A big, beautiful window into new worlds: the Studio Display features a 27-inch 5K Retina screen, a 12MP Ultra Wide camera with Center Stage, and a studio-quality six-speaker sound system.",

    image: "https://www.apple.com/v/studio-display/b/images/meta/studio-display__bc9nu4969j7y_og.png",

    categoryId: 7, // Monitors

    stock: 6,

  },

  {

    name: "iPhone 15",

    price: 799,

    description: "A huge leap forward for iPhone: featuring the Dynamic Island, a 48MP Main camera, and USB-C, all in a durable color-infused glass and aluminum design.",

    image: "https://www.apple.com/v/iphone-15/i/images/meta/iphone-15__cle6s6cn69gu_og.png",

    categoryId: 1, // Smartphones

    stock: 25,

  },

  {

    name: "MacBook Air 15-inch",

    price: 1299,

    description: "Impossibly thin and incredibly fast: the 15-inch MacBook Air with M3 chip gives you more room for what you love with a spacious Liquid Retina display.",

    image: "https://www.apple.com/v/macbook-air-13-and-15-m3/b/images/meta/macbook-air-13-and-15-m3__cre7s6cn69gu_og.png",

    categoryId: 2, // Laptops

    stock: 12,

  },

  {

    name: "iPad Air",

    price: 599,

    description: "Light, bright, and full of might: the iPad Air features the M2 chip, a stunning Liquid Retina display, and support for Apple Pencil Pro.",

    image: "https://www.apple.com/v/ipad-air/s/images/meta/ipad-air__br6v9uep9guu_og.png",

    categoryId: 3, // Tablets

    stock: 12,

  },

  {

    name: "AirPods Max",

    price: 549,

    description: "The ultimate personal listening experience: AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation and a breathable knit mesh canopy.",

    image: "https://www.apple.com/v/airpods-max/e/images/meta/og__cx28ucp85beu.png",

    categoryId: 4, // Headphones

    stock: 7,

  },

  {

    name: "Apple Watch Ultra 2",

    price: 799,

    description: "The most rugged and capable Apple Watch ever: designed for endurance, exploration, and adventure. Featuring a lightweight titanium case and extra-long battery life.",

    image: "https://www.apple.com/v/apple-watch-ultra-2/b/images/meta/apple-watch-ultra-2__b6u6u4969j7y_og.png",

    categoryId: 9, // Accessories

    stock: 5,

  },

  {

    name: "Magic Mouse",

    price: 79,

    description: "Seamlessly navigate your Mac: the Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk.",

    image: "https://www.apple.com/v/mac/accessories/images/meta/mac-accessories__bc9nu4969j7y_og.png",

    categoryId: 9, // Accessories

    stock: 35,

  },

  {

    name: "Magic Keyboard",

    price: 149,

    description: "Fast, easy, and secure: Magic Keyboard with Touch ID provides a remarkably comfortable and precise typing experience. Wireless and rechargeable.",

    image: "https://www.apple.com/v/mac/accessories/images/meta/mac-accessories__bc9nu4969j7y_og.png",

    categoryId: 9, // Accessories

    stock: 20,

  },

  {

    name: "Apple TV 4K",

    price: 129,

    description: "The ultimate cinematic experience: Apple TV 4K brings the best of TV together with your favorite Apple devices and services with 4K Dolby Vision.",

    image: "https://www.apple.com/v/apple-tv-4k/n/images/meta/apple-tv-4k__br6v9uep9guu_og.png",

    categoryId: 9, // Accessories

    stock: 20,

  },

  {

    name: "HomePod mini",

    price: 99,

    description: "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub in a compact design.",

    image: "https://www.apple.com/v/homepod-mini/a/images/meta/og__d5k62k8b4qka.png",

    categoryId: 9, // Accessories

    stock: 10,

  },

  {

    name: "AirTag (4 Pack)",

    price: 99,

    description: "Lose your knack for losing things: AirTag is an easy way to keep track of your stuff. Attach one to your keys or slip another in your backpack.",

    image: "https://www.apple.com/v/airtag/e/images/meta/airtag__b6u6u4969j7y_og.png",

    categoryId: 9, // Accessories

    stock: 50,

  },

  {

    name: "Mac mini",

    price: 599,

    description: "More muscle, more hustle: Mac mini with M2 is so fast you can get more done, quicker. Handles work and play with incredible ease.",

    image: "https://www.apple.com/v/mac-mini/q/images/meta/mac-mini__b6u6u4969j7y_og.png",

    categoryId: 2, // Laptops (Categorizado como equipo de computación)

    stock: 10,

  }

];

