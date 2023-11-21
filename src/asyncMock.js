import shop from './images/onlineshop.png';
import home from './images/home.png'
const products = [
    {
        id: "1",
        name: "Remera Oversize",
        price: "18000",
        category: "shirts",
        img: shop,
        stock: "8",
        description: "Descripcion del product"
    },

    {
        id: "2",
        name: "Musculosa Oversize",
        price: "16000",
        category: "shirts",
        img: shop,
        stock: "5",
        description: "Descripcion del product"
    },

    {
        id: "3",
        name: "Pantalon Oversize",
        price: "23000",
        category: "pants",
        img: shop,
        stock: "4",
        description: "Descripcion del product"
    },

    {
        id: "4",
        name: "Remera Crops",
        category: "shirts",
        img: shop,
        stock: "9",
        description: "Descripcion del product"
        
    },

    {
        id: "5",
        name: "HOME DEL SITIO IN PROGRESS",
        category: "home",
        img: home
        
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((prod) => prod.category === categoryId)
            resolve(filteredProducts);
        }, 500)
    })
}