interface Entity {
  name: string;
}

export function sortBy<T>(items: T[], keyOf: (item: T) => any): T[] {

  const itemsCopy = items.slice(0); // copy array
  itemsCopy.sort((x, y) => {
    const a = keyOf(x);
    const b = keyOf(y);
    return a < b ? -1 : 
           a > b ? 1 : 0;
  });
  
  return itemsCopy;

}

// test
export interface Product {
    name: string;
    price: number;
    id: number;
}

export const products = [
    { name: "Orange" , price: 4.20 , id: 5},
    { name: "Banana" , price: 2.20 , id: 2},
    { name: "Apple" , price: 1.20 , id: 1},
    { name: "Cherry" , price: 3.20 , id: 4}
]

export const sortedProducts = sortBy<Product>(products, (item) => item.price);
