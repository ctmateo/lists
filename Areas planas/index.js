let area = 0;
let perimeter = 0;
let message_span = document.querySelector(".message");

const FLAT_FIGURES = {
  TRIANGLE() {
    let a = parseInt(prompt('Digita la medida (mm) del lado derecho de tu triangulo'))
    let c = parseInt(prompt('Ahora la medida (mm) del lado izquierdo de tu triangulo'))
    let b = parseInt(prompt('Digita la medida (mm) de la base de tu triangulo '))

    perimeter = a + c + b;
    area = Math.sqrt(perimeter/2 * (perimeter/2 -  a) * (perimeter/2 - c) * (perimeter/2 - b))
    
    message_span.innerHTML=`Perimetro: ${perimeter} <br> Area: ${area}`
    setTimeout(choose_option, 200);
  },
  RECTANGLE(){
    let b = parseInt(prompt('Digita la medida (mm) de la base de tu rectangulo'));
    let a = parseInt(prompt('Digita la medida (mm) de un lado de tu rectangulo'));

    perimeter = 2 * a+b
    area = a * b
    message_span.innerHTML=`Perimetro: ${perimeter} <br> Area: ${area}`
    setTimeout(choose_option, 200);
  },
  SQUARE(){
    let a = parseInt(prompt('Digita la medida (mm) de un lado de tu cuadrado'));

    perimeter = 4 * a
    area = Math.pow(a, 2)
    message_span.innerHTML=`Perimetro: ${perimeter} <br> Area: ${area}`
    setTimeout(choose_option, 200);
  },
  CIRCLE(){
    let r = parseInt(prompt('Digita la medida (mm) del radio de tu circulo'));

    perimeter = 2 * 3.1415 * r
    area = Math.PI * Math.pow(r, 2)
    message_span.innerHTML=`Perimetro: ${perimeter} <br> Area: ${area}`
    setTimeout(choose_option, 200);
  },
};

const choose_option = () => {
  let option = parseInt(
    prompt(
      "Menu para hallar perimetros y areas de las siguientes figuras, por favor digita el numero con el que deseas hallar area y perimetro (1). Triangulo (2). Rectangulo (3). Cuadrado (4). Circulo (0). Salir "
    )
  );

  switch (option) {
    case 1:
      FLAT_FIGURES.TRIANGLE();
      break;
    case 2:
      FLAT_FIGURES.RECTANGLE();
      break;
    case 3:
      FLAT_FIGURES.SQUARE();
      break;
    case 4:
      FLAT_FIGURES.CIRCLE(); 
      break;
    case 0:
      alert('Gracias por usar esta calculadora de areas');
      break;     
  }
};

choose_option();
