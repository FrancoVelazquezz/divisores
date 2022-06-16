import "./styles.css";

function cantidadDeDivisores(n1: number): number {
  for (let i = 0; i <= n1; i++) {
    if (n1 % i === 0) console.log(`${i} --> ${n1}`);
  }
}

let a: number = Number(prompt("Ingrese numero: "));
cantidadDeDivisores(a);
