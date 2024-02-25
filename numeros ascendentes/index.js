let message_span = document.querySelector('.message');
let first_array_numbers = [];
let second_array_numbers = [];
let array_join = [];

const wait_arrays_full = () => {
  let last_number = null;
  
  while (first_array_numbers.length < 5 && second_array_numbers.length < 5) {

    let numbers_first_list = parseInt(
      prompt("Ingrese números en forma ascendente (primera lista)")
    );

    if (!isNaN(numbers_first_list) && (last_number === null || numbers_first_list > last_number)) {
      first_array_numbers.push(numbers_first_list);
      last_number = numbers_first_list;
    } else {
      alert("Por favor ingrese un número válido y mayor que el anterior.");
    }

    let numbers_second_list = parseInt(
      prompt("Ingrese números en forma ascendente (segunda lista)")
    );

    if (!isNaN(numbers_second_list) && (last_number === null || numbers_second_list > last_number)) {
      second_array_numbers.push(numbers_second_list);
      last_number = numbers_second_list;
    } else {
      alert("Por favor ingrese un número válido y mayor que el anterior.");
    }
  }

  order_list(first_array_numbers, second_array_numbers);
};

const order_list = (first_list, second_list) => {
    array_join = first_list.concat(second_list);
    array_join.sort((first, second) => first - second);

    message_span.innerHTML = `Lista ordenada: ${array_join} <br> Primera Lista: ${first_array_numbers} <br> Segunda Lista: ${second_array_numbers}`
}

wait_arrays_full();

console.log('array', array_join);
console.log("Primera lista de números:", first_array_numbers);
console.log("Segunda lista de números:", second_array_numbers);
