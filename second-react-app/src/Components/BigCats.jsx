import { useState } from "react";

function BigCats() {
const cats = [
  {
    id: 1,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://placehold.co/60x40?text=Tiger",
  },
  {
    id: 2,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "https://placehold.co/60x40?text=Cheetah",
  },
  {
    id: 3,
    name: "Snow Leopard",
    latinName: "Panthera uncia",
    image: "https://placehold.co/60x40?text=Snow_Leopard",
  },
  {
    id: 4,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "https://placehold.co/60x40?text=Cougar",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "https://placehold.co/60x40?text=Lion",
  },
  {
    id: 6,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "https://placehold.co/60x40?text=Jaguar",
  },
  {
    id: 7,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "https://placehold.co/60x40?text=Leopard",
  },
];

  function Cats({ name, latinName, image }) {
    return (
      <li>
        <h2>
          {name}(<i>{latinName}</i>)
        </h2>
        <img src={image} alt=""></img>
        <br></br>
        <br></br>
      </li>
    );
  }

  const [currentCats, setCurrentCats] = useState(cats);

  const catList = currentCats.map((cat) => <Cats key={cat.id} {...cat} />);

  const sortAlphabetically = () => {
    let newBigCats = [...currentCats];
    newBigCats.sort((c1, c2) => c1.name > c2.name ? 1 : -1);
    setCurrentCats(newBigCats);
  };

  const reverseTheList = () => {
    let newBigCats = [...currentCats];
    newBigCats.reverse();
    setCurrentCats(newBigCats);
  };

  const filterPanthera = () => {
    let newBigCats = [...currentCats];
    newBigCats = newBigCats.filter(cat => {
      return cat.latinName.split(' ')[0] === "Panthera";
    });
    setCurrentCats(newBigCats)
  }

  const resetButton = () => {
    let newBigCats = [...cats];
    setCurrentCats(newBigCats);
  }

  return (
    <div className="catList">
      <ul>{catList}</ul>
      <button onClick={sortAlphabetically}>Sort Alphabetically</button>
      <button onClick={reverseTheList}>Reverse the List</button>
      <button onClick={filterPanthera}>Filter Panthera</button>
      <button onClick={resetButton}> Reset </button>
    </div>
  );
}

export default BigCats;
