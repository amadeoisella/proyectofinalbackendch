mport { CartDao, ProductDao, UserDao } from './mongoose.daos.js';

export let Product: ProductDao;
export let Cart: CartDao;
export let User: UserDao;

let path = 'firestore';


if ('something' === 'something') {
  path = 'mongoose';
}
(() => {
  const res = import(`./${path}.daos`).then(({ CartDao, ProductDao, UserDao }) => {
    Cart = new CartDao();
    Product = new ProductDao();
    User = new UserDao();
  });

  return res;
})();