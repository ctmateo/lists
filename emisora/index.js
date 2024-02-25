let client_data = {};
const TYPE_DATA = {
  name_client: "",
  id_client: "",
  birthday: "",
  email: "",
  city_residence: "",
  city_born: "",
  author_song: {},
};

const get_data_client = () => {
  let id = prompt("Ingresa tu ID");
  client_data[id] = {};

  for (let key in TYPE_DATA) {
    switch (key) {
      case "name_client":
        let name = prompt(`Ingresa tu nombre completo`);
        client_data[id][key] = name;
        break;
      case "birthday":
        let birthday = prompt(
          `${client_data[id].name_client} Ingresa tu fecha de cumpleaños AAAA/MM/DD`
        );
        client_data[id][key] = birthday;
        break;
      case "email":
        let email = prompt(`Ingresa tu correo electronico`);
        client_data[id][key] = email;
        break;
      case "city_residence":
        let city_residence = prompt(`Ingresa tu ciudad de residencia`);
        client_data[id][key] = city_residence;
        break;
      case "city_born":
        let city_born = prompt(`Ingresa tu ciudad de nacimiento`);
        client_data[id][key] = city_born;
        break;
      case "author_song":
        let favorite_artist = prompt(`Ingresa tu cantante favorito`);
        client_data[id][key][favorite_artist] = [];
        for (let i = 0; i < 3; i++) {
          let favorite_song = prompt(`Ingresa una canción favorita de ${favorite_artist}`);
          client_data[id][key][favorite_artist].push(favorite_song);
        }
        break;
    }
  }

  console.log(client_data);
};

get_data_client();
