const fakeDatabase = [
    {
        id: Date.now(),
        title:'Red Shoes',
        brand: 'Nike',
        price: 18999,
        description: 'Comfy and Lightweight:',
        image: 'https://i.pinimg.com/originals/75/46/90/7546906555c282ba386dc5fe244d810e.jpg',
    },
    {
        id:Date.now(),
        title:'Blue Shoes',
        brand: 'Adidas',
        price: 10999,
        description: 'Comfy and Lightweight:',
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d26dadfa21c740cb9003aba0000b0ac2_9366/X_PLR_Shoes_Blue_FY9056_01_standard.jpg.webp',
    },
    {
        id:Date.now(),
        title:'Black Shoes',
        brand: 'Mizuno',
        price: 13999,
        description: 'Comfy and Lightweight:',
        image: 'https://www.mepjhu.com/wp-content/uploads/2020/12/mizuno-wave-prophecy-ls-kuro-black-menswomens-sneakers.jpg',
    },
    {
        id:Date.now(),
        title:'Green Shoes',
        brand: 'Nike',
        price: 15999,
        description: 'Comfy and Lightweight:',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1690aca0-bf99-4ddf-b9b0-6edffc76549e/air-max-pre-day-lx-shoes-jxsMrq.png',
    },
    {
        id:Date.now(),
        title:'Pink Shoes',
        brand: 'Nike',
        price: 16999,
        description: 'Comfy and Lightweight:',
        image: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/38f9b09b-01b6-46f8-8c6c-513b81d2565c/nikecourt-air-zoom-gp-turbo-naomi-osaka-womens-hard-court-tennis-shoes-b6pbVp.png',
    },
    {
        id:Date.now(),
        title:'Yellow Shoes',
        brand: 'Nike',
        price: 14999,
        description: 'Comfy and Lightweight:',
        image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F03%2Fnike-dunk-high-sneakers-dark-sulfur-yellow-white-colorway-price-release-1.jpg?q=75&w=800&cbr=1&fit=max',
    }
];



export const fetchProducts = () => new Promise((resolve, reject) => {
    console.log('fetching Data from database')
    setTimeout(() => {
        try {
            resolve(fakeDatabase)
        } catch (error) {
            reject(error);
        }
    }, 1000);
  });