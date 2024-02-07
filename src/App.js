import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Summary from "./routes/Summary";
import PortFolioDetail from "./routes/PortFolioDetail";
import PositionDetail from "./routes/PositionDetail";
import NotFound from "./routes/NotFound";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { financeApis } from "./apis";

export default function App() {
  const mobileMatches = useMediaQuery("(min-width:700px)");
  const [managerList, setManagerList] = useState([]);
  const [managerId, setManagerId] = useState("");
  // const [selectedManagerData, setSelectedManagerData] = useState([]);
  const fetchManagerList = () => {
    financeApis.getManagerList().then(setManagerList);
  };

  useEffect(() => {
    fetchManagerList();
    const intervalId = setInterval(fetchManagerList, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleManagerClickOnFollowedTable = (value) => {
    setManagerId(value);
  };

  return (
    <>
      <Router>
        <Box>
          <Header managerList={managerList} managerId={managerId} />
          <Box
            sx={{
              paddingTop: mobileMatches ? "50px" : "90px",
              height: mobileMatches ? "calc(100vh - 50px)" : 1,
            }}
          >
            <Routes>
              {/* <Route exact path="/" Component={Summary}  /> */}
              <Route
                exact
                path="/"
                element={<Summary handleManagerClickOnFollowedTable={handleManagerClickOnFollowedTable} />}
              />
              <Route path="/:selectedTicker" Component={PortFolioDetail} />
              {/* <Route exact path="/positions" Component={Summary} /> */}
              <Route path="/positions/:managerId" Component={PositionDetail} />
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
