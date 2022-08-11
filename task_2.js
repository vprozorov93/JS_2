function pushItemToBasket(basket, item, count) {
    if (item.available) {
        basket.push({good: item, amount: count})
        console.log(`Товар ${item.name} добавлен в корзину.`)
    } else {
        console.log(`В настоящий момент товар не доступен для покупки.`) 
    }

}

function removeItemFromBasket(basket, item){
    const cache = []
    for (let i = 0; i<basket.length; i++) {
        if (basket[i]==undefined) {
            continue
        }
        cache.push(basket[i].good)
    }
    const itemIndexInBasket = cache.indexOf(item, 0)
    if (itemIndexInBasket != -1) {
        delete basket[itemIndexInBasket]
        console.log(`Товар ${item.name} удален из корзины`)
    } else {
        console.log(`Товара ${item.name} нет в корзине`)
    }
    
}

function clearBasket(basket) {
    basket.length = 0
}

function showInfoAboutBasket(basket) {
    let totalAmount = 0
    let totalSumm = 0
    for (let i = 0; totalAmount <= basket.length; i++) {
        if (basket[i]==undefined) {
            continue
        }
        totalAmount += basket[i].amount
        totalSumm += basket[i].good.price * basket[i].amount
    }
    return {'totalAmount': totalAmount, 'totalSumm': totalSumm}
}

const shoppingBasket = []

const good1 = {
    id: 1,
    'name': 'Кроссовки Adidas',
    description: 'Лучшие на рынке',
    sizes: [41, 42, 43],
    price: 11990,
    available: true,
}
const good2 = {
    id: 2,
    'name': 'Кроссовки Nike',
    description: 'Лучшие на рынке',
    sizes: [41, 43],
    price: 12990,
    available: true,
}
const good3 = {
    id: 3,
    'name': 'Кроссовки Kappa',
    description: 'Лучшие на рынке',
    sizes: [44, 45],
    price: 9990,
    available: false,
}
const good4 = {
    id: 4,
    'name': 'Кроссовки Puma',
    description: 'Лучшие на рынке',
    sizes: [40, 41, 44, 45],
    price: 13990,
    available: false,
}
const good5 = {
    id: 5,
    'name': 'Кроссовки КаждыйДень',
    description: 'Лучшие из доступных',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    price: 2990,
    available: true,
}

pushItemToBasket(shoppingBasket, good1, 1)
pushItemToBasket(shoppingBasket, good2, 2)
pushItemToBasket(shoppingBasket, good3, 3)
pushItemToBasket(shoppingBasket, good4, 4)
pushItemToBasket(shoppingBasket, good5, 5)

removeItemFromBasket(shoppingBasket, good2)
removeItemFromBasket(shoppingBasket, good4)
showInfoAboutBasket(shoppingBasket)
clearBasket(shoppingBasket)

