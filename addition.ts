function addition(a: number, b: number): number{
    return a + b;
}

console.log(addition(1, "test"));

export { addition }; // Exporter la fonction pour pouvoir l'utiliser dans un autre fichier