import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import PropsDisplayer from "./Components/propsDisplayer";
import City from "./Components/City";
import Pet from "./Components/Pet";
import Greeting from "./Components/Greeting";
import FullName from "./Components/FullName";
import ComplexComment from "./Components/Comment";
import Callout from "./Components/Callout";
import MoviesList from "./Components/MoviesList";
import BigCats from "./Components/BigCats";
import MoodChanger from "./Components/MoodChanger"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <PropsDisplayer name="Harry Styles" age={29} />

      <City name="Newcastle">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,279 as of 2016
        </div>
      </City>

      <Pet type="Dog" colour="Mixed">
        <div> I love my pet dog</div>
      </Pet> */}

      <div className="excercise1">
        <Greeting name="John" />
        <p> I hope you are doing alright at this moment. </p>
      </div>

      <MoodChanger/>

      {/* <MoviesList />
      <BigCats />

      <FullName first="Taylor" middle="Alison" last="Swift" />

      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />

      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout> */}
    </>
  );
}

export default App;
