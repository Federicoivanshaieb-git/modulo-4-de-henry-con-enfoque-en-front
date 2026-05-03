import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 15 Pro",
    price: 999,
    description: "Experience the pinnacle of mobile technology with the iPhone 15 Pro: featuring a strong and light aerospace-grade titanium design, the powerful A17 Pro chip for next-level gaming, and a versatile Pro camera system.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrr8Pdn7pWyzqFEHfbeviliGjplby8Eb_BA&s",
    categoryId: 1,
    stock: 15,
  },
  {
    name: "MacBook Pro 14-inch",
    price: 1599,
    description: "Unleash your creative potential with the MacBook Pro featuring M3 chips: stunning Liquid Retina XDR display, pro ports for connectivity, and an advanced camera and audio system.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbOjlMiMwfeI18jt243R5ogbzTAKdDMgDJA&s",
    categoryId: 2,
    stock: 8,
  },
  {
    name: "iPad Pro",
    price: 999,
    description: "The ultimate iPad experience: featuring the breakthrough M2 chip, a stunning Liquid Retina XDR display, and superfast wireless. Perfect for professional workflows and creative projects.",
    image: "https://www.ventasrosario.com.ar/wp-content/uploads/2024/07/Ipad-Pro-m4-11-foto-3-2.jpg",
    categoryId: 3, 
    stock: 10,
  },
  {
    name: "AirPods Pro (2nd gen)",
    price: 249,
    description: "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music and calls.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo45ujBdBwuR5E87axpdY75FWZXO7ic7O6Kw&s",
    categoryId: 4, 
    stock: 10,
  },
  {
    name: "Studio Display",
    price: 1599,
    description: "A big, beautiful window into new worlds: the Studio Display features a 27-inch 5K Retina screen, a 12MP Ultra Wide camera with Center Stage, and a studio-quality six-speaker sound system.",
    image: "https://dcdn-us.mitiendanube.com/stores/001/555/911/products/nano-texture-21-f4c6381821678f0b3b16794193032616-1024-1024.webp",
    categoryId: 7, 
    stock: 6,
  },
  {
    name: "iPhone 15",
    price: 799,
    description: "A huge leap forward for iPhone: featuring the Dynamic Island, a 48MP Main camera, and USB-C, all in a durable color-infused glass and aluminum design.",
    image: "https://smartfix.com.ar/wp-content/uploads/2025/06/image-8.webp",
    categoryId: 1, 
    stock: 25,
  },
  {
    name: "MacBook Air 15-inch",
    price: 1299,
    description: "Impossibly thin and incredibly fast: the 15-inch MacBook Air with M3 chip gives you more room for what you love with a spacious Liquid Retina display.",
    image: "https://www.apple.com/v/macbook-air/w/images/overview/hero/hero_static__c9sislzzicq6_large.png",
    categoryId: 2,
    stock: 12,
  },
  {
    name: "iPad Air",
    price: 599,
    description: "Light, bright, and full of might: the iPad Air features the M2 chip, a stunning Liquid Retina display, and support for Apple Pencil Pro.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDsmja9gcv53i1ZPcWauFSFErLJYgcZd84Q&s",
    categoryId: 3,
    stock: 12,
  },
  {
    name: "AirPods Max",
    price: 549,
    description: "The ultimate personal listening experience: AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation and a breathable knit mesh canopy.",
    image: "https://www.ventasrosario.com.ar/wp-content/uploads/2021/03/airpods-max-select-spacegray-202011_FV1_FMT_WHH.jpg",
    categoryId: 4, 
    stock: 7,
  },
  {
    name: "Apple Watch Ultra 2",
    price: 799,
    description: "The most rugged and capable Apple Watch ever: designed for endurance, exploration, and adventure. Featuring a lightweight titanium case and extra-long battery life.",
    image: "https://www.ventasrosario.com.ar/wp-content/uploads/2024/12/MYPD3ref_VW_34FRwatch-case-49-titanium-black-ultra2_VW_34FRwatch-face-49-ocean-ultra2_VW_34FR.jpg",
    categoryId: 9,
    stock: 5,
  },
  {
    name: "Magic Mouse",
    price: 79,
    description: "Seamlessly navigate your Mac: the Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMgE4rkWHCPqeB8_QdCRhNHz98_8dmiKUmQ&s",
    categoryId: 9, 
    stock: 35,
  },
  {
    name: "Magic Keyboard",
    price: 149,
    description: "Fast, easy, and secure: Magic Keyboard with Touch ID provides a remarkably comfortable and precise typing experience. Wireless and rechargeable.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_677133-MLA99444393602_112025-T.webp",
    categoryId: 9, 
    stock: 20,
  },
  {
    name: "Apple TV 4K",
    price: 129,
    description: "The ultimate cinematic experience: Apple TV 4K brings the best of TV together with your favorite Apple devices and services with 4K Dolby Vision.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetUaf13O-zwOfNd9A5j8neEPGDNMZIDAA5w&s",
    categoryId: 9, 
    stock: 20,
  },
  {
    name: "HomePod mini",
    price: 99,
    description: "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub in a compact design.",
    image: "https://http2.mlstatic.com/D_Q_NP_748831-MLA96433930192_102025-O.webp",
    categoryId: 9,
    stock: 10,
  },
  {
    name: "AirTag (4 Pack)",
    price: 99,
    description: "Lose your knack for losing things: AirTag is an easy way to keep track of your stuff. Attach one to your keys or slip another in your backpack.",
    image: "https://acdn-us.mitiendanube.com/stores/001/116/601/products/airtagg-f3fcacb75b345af46617576183580618-1024-1024.webp",
    categoryId: 9, 
    stock: 50,
  },
  {
    name: "Mac mini",
    price: 599,
    description: "More muscle, more hustle: Mac mini with M2 is so fast you can get more done, quicker. Handles work and play with incredible ease.",
    image: "https://www.apple.com/v/mac-mini/specs/a/images/meta/mac-mini__dvce2jrm11w2_og.jpg",
    categoryId: 2, 
    stock: 10,
  },
  {
    name: "Apple QuickTake 100",
    price: 749,
    description: "Digital photography starts here: one of the first consumer digital cameras. Capture 24-bit color images at 640x480 resolution directly to internal storage.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMebcP-c6XGp3u0JbUQSemoDP30Zdi5EhPg&s",
    categoryId: 5, 
    stock: 3,
  },
  {
    name: "External Hard Drive 20MB",
    price: 599,
    description: "Massive storage for your desktop: the Apple Hard Disk 20 provides reliable external SCSI storage for your system's growing database.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnS9nxOHQ-JO_9Bo6-RRPrISfAN1RmzQ5SA&s",
    categoryId: 8, 
    stock: 5,
  },
  {
    name: "LaserWriter Pro 630",
    price: 1249,
    description: "Professional printing performance: high-quality PostScript output with 600 dpi resolution for crisp text and detailed graphics in your office.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhPsUT9boz5HWdZcAn9Z7vVu2cchwY9mt5CA&s",
    categoryId: 6, 
    stock: 4,
  },
  {
    name: "Apple Studio Display 17",
    price: 499,
    description: "The CRT legend: 17-inch Natural Flat Diamondtron screen. Perfect color calibration for graphic design professionals working on System 7.",
    image: "https://p.turbosquid.com/ts-thumb/La/tKuuFr/1SXargIg/studio_display_17_inch_crt_thumbnails_square_0000/jpg/1439906750/600x600/fit_q87/2e54d1957f577fa179ed439b545b2a7a67241d18/studio_display_17_inch_crt_thumbnails_square_0000.jpg",
    categoryId: 7, 
    stock: 8,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};