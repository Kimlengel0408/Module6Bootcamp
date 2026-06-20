import { useState } from "react";
import { useFormInput } from "./Form/useFormInput";
import { MyThemeContext } from "../Context/MyThemeProvider";

export default function SubscribeForm() {
  const { theme, darkMode } = useContext(MyThemeContext);

  const [status, setStatus] = useState("");
  // use our custom hook instead of useState directly
  const [nameInputProps, resetName] = useFormInput("Mary");
  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");
  function handleSubscribe() {
    resetName();
    resetEmail();
    setStatus("Thanks for subscribing!");
  }
  return (
    <div
      className="SubscribeForm componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <label>
        First name: <input {...nameInputProps} />
      </label>
      <label>
        Email: <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
