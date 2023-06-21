import LocationSelectSidebar from "./components/LocationSelectSidebar";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Subzone1 from "./pages/Subzone1";
import Subzone2 from "./pages/Subzone2";
import Subzone3 from "./pages/Subzone3";

const App = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={2} >
        <LocationSelectSidebar />
      </Grid>
      <Router>
        <Routes>
          <Route path={"/"} element={<p style={{ "padding": "10% 0 0 35%", "font-size": "300%" }}>Select Location</p>} />
          <Route path={"/Subzone1"} element={<Subzone1 />} />
          <Route path={"/Subzone2"} element={<Subzone2 />} />
          <Route path={"/Subzone3"} element={<Subzone3 />} />
        </Routes>
      </Router>

    </Grid>

  );
}

export default App;
