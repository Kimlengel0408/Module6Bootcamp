import { useState } from "react";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  Box,
} from "@mui/material";

export default function MUIForm() {
  const [age, setAge] = useState(10);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
      }}
    >
      <TextField required label="Greeting" defaultValue="Hello World" />

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Uncheck Me"
      />

      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained">Submit</Button>
    </Box>
  );
}
