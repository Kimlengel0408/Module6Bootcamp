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
import MoodChanger from "./Components/MoodChanger";
import EmojiChanger from "./Components/Emoji";
import BirthdayTranslator from "./Components/BirthdayTranslator";
import Form from "./Components/avoidRedundantState";
import Weather from "./Components/Weather";
import LoginForm from "./Components/LoginForm";
import AddMovieForm from "./Components/MovieForm";
import ErrorBoundary from "./Components/ErrorMessage";
import ErrorMessage from "./Components/ErrorMessage";
import ClockDisplay from "./HookComponents/Clock";
import ActivityFinder from "./HookComponents/ActivityFinder";
import BitcoinRates from "./HookComponents/BitcoinRates";
import RefCounter from "./HookComponents/RefCounter";
import VideoPlayer from "./HookComponents/VideoPlayer";
import ReducerCounter from "./HookComponents/ReducerCounter";
import PostListReducer from "./HookComponents/PostListReducer";
import SubscribeForm from "./HookComponents/SubscribeForm";
import { UserProvider } from "./Context/UserContext";
import MyThemeProvider from "./Context/MyThemeProvider";
import AppRoutes from "./Routes/AppRoutes";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <NavBar />
          <AppRoutes />
        </MyThemeProvider>
      </UserProvider>

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

      {/*
<div className="excercise1">
        <Greeting name="John" />
        <p> I hope you are doing alright at this moment. </p>
      </div>
      <MoodChanger />
      <EmojiChanger />
      <SubscribeForm />
      
      <ActivityFinder />
      <BitcoinRates />
      <ErrorBoundary FallbackComponent= {ErrorMessage}>
        <LoginForm/>
      <ClockDisplay />
      <ReducerCounter />
      <RefCounter />

      </ErrorBoundary>
      
      <VideoPlayer />
      <AddMovieForm/>
      <BigCats />
      <Weather />
      <MoviesList />
      <BirthdayTranslator />
      <PostListReducer />
      <Form />


      
      

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
