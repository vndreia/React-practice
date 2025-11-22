import { data } from "../utils/constants";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => {
    return item.name === selectedAnimal;
  });

  return <img src={animal.image} alt={animal.name} />;
}

export default Animal;

// NOTES:
// What React creates behind the scenes:
// props = { selectedAnimal: "gato" }
//
// Two ways to access it:
// Without destructuring:
// function Animal(props) {
//   console.log(props.selectedAnimal); // "gato"
// }
//
// With destructuring (what you have):
// function Animal({ selectedAnimal }) {
//   console.log(selectedAnimal); // "gato"
// }
