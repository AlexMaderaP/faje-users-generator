import { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import UserTable from "./components/UserTable";

function App() {
  const [region, setRegion] = useState("");
  const [seed, setSeed] = useState("");
  const [errorNum, setErrorNum] = useState(0);

  return (
    <Container component="main" maxWidth="md">
      <Header />
      <ControlPanel
        region={region}
        setRegion={setRegion}
        seed={seed}
        setSeed={setSeed}
        errorNum={errorNum}
        setErrorNum={setErrorNum}
      />
      <UserTable region={region} seed={seed} errorNum={errorNum} />
    </Container>
  );
}

export default App;
