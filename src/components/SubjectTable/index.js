import React, { useEffect, useState } from "react";
import { Box, Table, TableBody, TableHead, TableRow, Tabs, Tab } from "@mui/material";
import { SubjectTableHeader } from "./StyledComponents";
import { StyledTableHeaderCell, StyledTableRow, StyledTableBodyCell } from "../StyledComponents";
import { FcKey } from "react-icons/fc";
import { customizedTheme } from "../CustomizedTheme";
import { StyledSubjectTableContainer } from "./StyledComponents";

const exampleData = [
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "Second",
    subject: "Second subject",
    recieved: "12/21/2023",
  },
  {
    from: "Third",
    subject: "Third subject",
    recieved: "12/21/2023",
  },
  {
    from: "Forth",
    subject: "Forth subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
  {
    from: "First",
    subject: "First subject",
    recieved: "12/21/2023",
  },
];

function SubjectTable() {
  const [tabValue, setTabValue] = useState([]);
  useEffect(() => {
    setTabValue("Notes");
  }, []);
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        border: "1px solid #000000",
        borderRadius: "4px",
        padding: "4px",
        margin: "4px",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <SubjectTableHeader>
        <Tabs sx={{ position: "absolute", bottom: 0 }} value={tabValue}>
          <Tab
            label="Notes"
            sx={{
              marginLeft: "5px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D2D2D2",
              borderRadius: "4px 4px 0px 0px",
            }}
            value={tabValue}
          />
          <Tab
            label="Orders"
            sx={{
              marginLeft: "5px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D2D2D2",
              borderRadius: "4px 4px 0px 0px",
            }}
          />
        </Tabs>
      </SubjectTableHeader>
      <StyledSubjectTableContainer value={tabValue}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableHeaderCell align={"left"}>From</StyledTableHeaderCell>
              <StyledTableHeaderCell align={"left"}>
                <FcKey />
              </StyledTableHeaderCell>
              <StyledTableHeaderCell align={"left"}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  Subject
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component={"img"} src="dic.png" sx={{ height: "20px", width: "20px", paddingX: "5px" }}></Box>
                    <Box component={"span"} sx={{ [customizedTheme.breakpoints.down("md")]: { display: "none" } }}>
                      Dictionary
                    </Box>
                    <Box
                      component={"img"}
                      src="cloud.png"
                      sx={{ height: "20px", width: "20px", paddingX: "5px" }}
                    ></Box>
                    <Box component={"span"} sx={{ [customizedTheme.breakpoints.down("md")]: { display: "none" } }}>
                      Cloud
                    </Box>
                    <Box
                      component={"img"}
                      src="filter.png"
                      sx={{ height: "20px", width: "20px", paddingX: "5px" }}
                    ></Box>
                    <Box component={"span"} sx={{ [customizedTheme.breakpoints.down("md")]: { display: "none" } }}>
                      Filter
                    </Box>
                  </Box>
                </Box>
              </StyledTableHeaderCell>
              <StyledTableHeaderCell align={"right"}>Recieved</StyledTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exampleData &&
              exampleData.length > 0 &&
              exampleData.map((item, index) => (
                <StyledTableRow key={index} index={index}>
                  <StyledTableBodyCell type={"normal"}>{item.from}</StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"normal"}></StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"normal"}>
                    {item.subject}
                  </StyledTableBodyCell>
                  <StyledTableBodyCell align={"right"} type={"normal"}>
                    {item.recieved}
                  </StyledTableBodyCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </StyledSubjectTableContainer>
    </Box>
  );
}

export default SubjectTable;
