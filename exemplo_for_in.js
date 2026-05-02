const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023
};

for (let propriedade in carro) {
  console.log(propriedade + ": " + carro[propriedade]);
}