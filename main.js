
let user = "";
let option = 0;
let quantity = 0;
let subTotal = 0;
let total = 0;
let totalPlusIVA = 0;
let continueBuying = true;

//Solicitud  de nombre
const userName = () => {
    do{
        user = prompt('Ingrese un nombe: ');
    } while (!user);

}
userName ();

//creamos clase de objetos de los productos

class Product {
    constructor(name, weight, price) {
        this.name = name,
        this.weight = weight,
        this.price = Number(price);
    }
};

const coffe1 = new Product ('Bolivia', '250 gr', 2000);
const coffe2 = new Product ('Bolivia Caturra 48', '250gr', 2500 );
const coffe3 = new Product ('Bolivia Caturra 72', '250gr', 2500 );
const coffe4 = new Product ('Bolivia Caturra NAT', '250gr', 1500 );
const coffe5 = new Product ('Brasil', '250gr', 3000 );



//creamos arrays de productos

const products = [
    coffe1,
    coffe2,
    coffe3,
    coffe4,
    coffe5
];

const purchase = [] // array carrito vacio

// for (const product of products){
//     console.log (product)
// }


// Funcion para mostrar un resúmen de las cantidades
const quantitySummary = (name, quantity) => `${name} x ${quantity} unit/s.`;

//Con esta funcion obtengo la cantidad y el subtotal
const subTotalByQuantity = (price) => {
    do {
        quantity = parseInt(prompt('Choose quantity: '));        
} while (!(Number(quantity)));
    subTotal = price * quantity;
    return subTotal;
};
//Con esta funcion agrego el Iva al subTotal
const pluIVA = (total) => total * 1.21;


//Selecion del  prodcto
do {
    let price = 0;
    let name = "";
    let summary = "";
    
    option = parseInt(prompt('Welcome ' + user + ' Choose product number:\n1. Café Bolivia x 250gr $ 2.000\n2. Café Bolivia Caturra 48 x 250gr $ 2.500\n3. Café Bolivia Caturra 72 x 250gr $ 2.500\n4. Café Bolivia Caturra NAT x 250gr $ 1.500\n5. Café Brasil 250gr $ 3.000'));

        switch (option){
            case 1:
                name = coffe1.name
                price = coffe1.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity)
                break;
            
            case 2:
                name = coffe2.name
                price = coffe2.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity)
                break;
            
            case 3:
                name = coffe3.name
                price = coffe3.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity)
                break;
            
            case 4:
                name = coffe4.name
                price = coffe4.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity)
                break;
            
            case 5:
                name = coffe5.name
                price = coffe5.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity)
                break;
            
            default:
                alert('Enter a valid option');
                break
        }

    purchase.push(summary + "\n");
    total += subTotal;
    totalPlusIVA = (pluIVA(total)).toFixed(2);

    continueBuying = confirm  ('Do you want to continue buying??');

} while (continueBuying);

alert(`The products choosed are: \n ${purchase} \n subtotal: $${total} \n Total + IVA: $${totalPlusIVA} \n\n Thank you for buying `)

