let message_span = document.querySelector('.message');
let array_of_ages = [];
let sum_age = 0;
let min_age_count = 0;
let max_age_count = 0;
let grandparents_count = 0;
let age_low = Number.MAX_VALUE;
let age_highest = Number.MIN_VALUE;

const calculate_ages_array = () => {
  do {
    let age_client = parseInt(prompt("Digite la edad de la persona"));

    if (Number.isInteger(age_client) && age_client >= 1 && age_client <= 120) {
      array_of_ages.push(age_client);
      sum_age += age_client;

      if (age_client < 18) {
        min_age_count++;
      } else if (age_client > 18 && age_client <= 60) {
        max_age_count++;
      } else {
        grandparents_count++;
      }

      age_low = Math.min(age_low, age_client);
      age_highest = Math.max(age_highest, age_client);
    } else {
      alert("Por favor ingresa un número entero entre 1 y 120.");
    }
  } while (array_of_ages.length < 10);

  let promedy = sum_age / array_of_ages.length;

  message_span.innerHTML = `Menores de edad: ${min_age_count} <br> Adultos: ${max_age_count} <br> Adultos mayores: ${grandparents_count} <br> Edad baja: ${age_low} <br> Edad más alta: ${age_highest} <br> Edad promedio: ${promedy.toFixed(2)}`;
};

calculate_ages_array();
