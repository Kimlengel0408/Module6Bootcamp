function PropsDisplayer({ name, age }) {
  // convert object to string
  return (
    <div className="PropsDisplayer componentBox">
      <h2>Check out my props!</h2>
      <p>Name: {name} is {age} years old</p>
      {/* what happens if we try to render the object {props} ? */}
    </div>
  );
}
// export this component so we can import it elsewhere
export default PropsDisplayer;
