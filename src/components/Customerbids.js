import React, { useEffect, useState } from "react";
import axios from "axios";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

import { Search } from "@material-ui/icons";
import useTable from "./useTable";
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },

  { id: "email", label: "Email Address" },
  { id: "mobile", label: "Phone Number" },
];
const Customerbids = () => {
  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>
    axios
      .get("https://intense-tor-76305.herokuapp.com/merchants")
      .then(function (response) {
        // handle success
        console.log(response, "response");
        setRecords(response.data);
      });
  // const data2 = async () => {
  //   const data = await fetch(
  //     "https://intense-tor-76305.herokuapp.com/merchants"
  //   );
  //   const items = await data.json();
  console.log(records, "items");
  // };
  const { TblContainer, TblHead } = useTable(records, headCells);

  return (
    <Paper className={classes.pageContent}>
      <TblContainer>
        <TblHead />

        <TableBody>
          {records.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.firstname}</TableCell>
              <TableCell>{item.lastname}</TableCell>
              <TableCell>{item.email}</TableCell>

              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.hasPremium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      {/* <TblPagination /> */}
    </Paper>
  );
};

export default Customerbids;
