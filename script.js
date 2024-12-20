function changeColor(){
    const colores = ["green", "blue", "red"];
    const numero_aleatorio = Math.floor(Math.random() * colores.length);
    const color = document.getElementById("color");
    color.style.color = colores[numero_aleatorio ];
}
