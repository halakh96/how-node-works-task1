const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
  console.log('There was a new Sale');
});

myEmitter.on('newSale', () => {
  console.log('costumer name : Hala');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});
myEmitter.emit('newSale', 9);
