const flavor={1:"Strawberry",2:"Chocolate",3:"vannila",4:"butterscotch"};
const price={1:10,2:30,3:40,4:50};
const quantity={1:5,2:3,3:5,4:7}
flavor[5]="Pineapple";
price[5]=20;
quantity[5]=10;
quantity[4]=10;
let count = 0;
for (let key in quantity) {
  count += quantity[key];
}
for (let key in flavor) {
    console.log(`Flavor: ${flavor[key]}, Price: $${price[key]}, Quantity: ${quantity[key]}`);
  }
console.log("Count:"+count);

