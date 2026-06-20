import { useState, useContext } from "react";
import { useData } from "./Form/useData";
import { MyThemeContext } from "../Context/MyThemeProvider";

export default function ActivityFinder() {
  // Fetches a random activity
  const [participants, setParticipants] = useState(1);
  const {theme, darkMode} = useContext(MyThemeContext);
  // uses custom hook to handle the effect for loading externaldata;
  const data = useData(
    "https://bored.api.lewagon.com/api/activity?" +
      "participants=" +
      participants,
  );
  // get the activity from the json or show error message if failed
  const activity = data ? data.activity : "not found";
  return (
    <div
      className="ActivityFinder componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <h3>Activity Finder</h3>
      <label>
        Choose number of participants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggested Activity:</strong>
        {activity}
      </div>
    </div>
  );
}
