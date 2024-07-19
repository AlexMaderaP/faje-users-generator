import {
  Box,
  TextField,
  Button,
  Slider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { getRandSeed } from "../services/fakerUtils";

function ControlPanel({
  region,
  setRegion,
  seed,
  setSeed,
  errorNum,
  setErrorNum,
}) {
  function handleRandomSeed() {
    setSeed(getRandSeed());
  }

  function handleErrorNumChange(e) {
    let value = e.target.value;
    if (value < 0) value = 0;
    if (value > 1000) value = 1000;
    setErrorNum(value);
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      gap={4}
      justifyContent="space-between"
      mb={4}
    >
      <FormControl>
        <InputLabel id="region">Region</InputLabel>
        <Select
          id="region"
          label="Region"
          value={region}
          style={{ minWidth: 150 }}
          onChange={(e) => setRegion(e.target.value)}
        >
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Poland">Poland</MenuItem>
          <MenuItem value="Mexico">Mexico</MenuItem>
        </Select>
      </FormControl>
      <Box display="flex" alignItems="center">
        <Slider
          value={Math.min(10, errorNum)}
          step={1}
          min={0}
          max={10}
          label="Num"
          valueLabelDisplay="auto"
          onChange={(e) => setErrorNum(e.target.value)}
          style={{ width: 200 }}
        />
        <TextField
          label="Number of errors"
          type="number"
          value={errorNum}
          onChange={(e) => handleErrorNumChange(e)}
          inputProps={{ min: 0, max: 1000 }}
          style={{ width: 150, marginLeft: 8 }}
        />
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          label="Seed"
          type="text"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          style={{ width: 150 }}
        />
        <Button variant="contained" color="primary" onClick={handleRandomSeed}>
          Random
        </Button>
      </Box>
    </Box>
  );
}

export default ControlPanel;
