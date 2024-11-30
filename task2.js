

async function awaitCall() {
    const simulatedAPI = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "Produit API", price: 25 });
      }, 2000); 
    });
  
    const product = await simulatedAPI;
    console.log(`Produit: ${product.name}, Prix: ${product.price}€`);
  }
  

  awaitCall();
  
  module.exports = awaitCall;
  