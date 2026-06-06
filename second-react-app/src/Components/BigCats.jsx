function BigCats() {
  const cats = [
    { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus", image: "https://placehold.co/600x400?text=Cheetah"},
    { id: 2, name: "Cougar", latinName: "Puma concolor", image: "https://placehold.co/600x400?text=Cougar"},
    { id: 3, name: "Jaguar", latinName: "Panthera onca", image: "https://placehold.co/600x400?text=Jaguar"},
    { id: 4, name: "Leopard", latinName: "Panthera pardus", image: "https://placehold.co/600x400?text=Leopard"},
    { id: 5, name: "Lion", latinName: "Panthera leo", image: "https://placehold.co/600x400?text=Lion" },
    { id: 6, name: "Snow leopard", latinName: "Panthera uncia", image: "https://placehold.co/600x400?text=Snow_Leopard"},
    { id: 7, name: "Tiger", latinName: "Panthera tigris", image: "https://placehold.co/600x400?text=Tiger" },
  ];

  const catList = cats.map(cat => <Cats key={cat.id} {...cat}/>)

  function Cats({ name, latinName, image }) {
    return (
        <li>
            <h2>{name}(<i>{latinName}</i>)</h2> 
            <img src={image} alt=""></img><br></br><br></br>
        </li>
    )
  }

  return (
    <div className="catList">
        <ul>{catList}</ul>
    </div>
  )
}

export default BigCats;
