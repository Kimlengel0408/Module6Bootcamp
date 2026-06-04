function City(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.country}</p>
    </div>
  );
}

export default City;