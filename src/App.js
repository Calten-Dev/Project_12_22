import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Summary from "./routes/Summary";
import PortFolioDetail from "./routes/PortFolioDetail";
import NotFound from "./routes/NotFound";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function App() {
  const mobileMatches = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Router>
        <Box>
          <Header />
          <Box
            sx={{
              paddingTop: mobileMatches ? "50px" : "90px",
              height: mobileMatches ? "calc(100vh - 50px)" : 1,
            }}
          >
            <Routes>
              <Route exact path="/" Component={Summary} />
              <Route path="/:selectedTicker" Component={PortFolioDetail} />
              <Route path="/positions" Component={Summary} />
              <Route path="/trades" Component={Summary} />
              <Route path="/orders" Component={Summary} />
              <Route path="/notfound" Component={NotFound} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </>
  );
}
