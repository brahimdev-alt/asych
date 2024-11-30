

async function iterateWithAsyncAwait(products) {
    for (const product of products) {
      console.log(`Produit: ${product.name}, Prix: ${product.price}€`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
    }
  }
  
  
  const products = [
    { name: "Produit 1", price: 10 },
    { name: "Produit 2", price: 20 },
    { name: "Produit 3", price: 30 },
    { name: "Produit 4", price: 40 },
  ];
  
  iterateWithAsyncAwait(products);
  
  module.exports = iterateWithAsyncAwait;
  