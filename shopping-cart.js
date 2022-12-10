// Экспорт модуля

console.log('Экспорт модуля');

const shippingCost = 20;
export const cart = [];

export const addProoductToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} в количестве ${quantity} шт добавлено в корзину`);
};

const totalPrice = 300;
const totalQuantity = 7;

export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} в количестве ${quantity} шт добавлено в корзину`);
}
