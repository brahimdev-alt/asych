

async function awaitCall() {
    const simulatedAPI = new Promise((resolve, reject) => {
      setTimeout(() => {
  
        reject("Erreur lors de l'obtention des données du produit de l'API");
      }, 2000);
    });
  
    try {
      const product = await simulatedAPI;
      console.log(`Produit: ${product.name}, Prix: ${product.price}€`);
    } catch (error) {
      console.error("Une erreur s'est produite : ", error);
    }
  }
  

  awaitCall();
  
  module.exports = awaitCall;
  