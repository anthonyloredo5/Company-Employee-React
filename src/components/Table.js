//Styles
import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@material-ui/core';
import axios from "axios";
import Search from './Search'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: grey,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  const [items, setItems] = useState({
    allPeople: [],
    companyData: [],
    searchTerm: ''
  });

  useEffect(function () {
    axios.get("https://6065d7a7b8fbbd001756786c.mockapi.io/companies")
      .then((response) => {
        console.log(response, "Response from api");
        setItems({ ...items, allPeople: response.data[0].users, companyData: response.data[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  //builds the filtered people item in the state object by comparing user input to user inout to our existing allPeople item
  const handleState = (e) => {
    var array = [];
    for (let i = 0; i < items.allPeople.length; i++) {
      var name = items.allPeople[i].name.first.slice(0, e.target.value.length);
      if (name === e.target.value) {
        array.push(items.allPeople[i]);
        console.log(array);
      }
    }
    setItems({ ...items, searchTerm: e.target.value, filteredPeople: array });
  }

  var users = items.allPeople;
  console.log(users, "should be company data in array form");
  var companies = items.companyData;
  console.log(companies, "should be company data in array form");

  //Changes table row display based on user input
  // var peopleToDisplay = items.allPeople;
  // if( items.filteredPeople.length > 0){
  //   peopleToDisplay = items.filteredPeople
  // }else if(items.searchTerm.length > 0 && items.filteredPeople.length < 1){
  //   peopleToDisplay = [];
  // }

  return (
    <div>
      <Search handleState={handleState} />
      <TableContainer component={Paper}>
        {/* Table container with comparments */}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Employees</TableCell>
              <TableCell>Employee Id</TableCell>
              <TableCell>Employee Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Fragment>
              <TableRow>
                <TableCell rowSpan={users.length + 1}>
                  {items.companyData.name}<br />
                  {items.companyData.phoneNumber}
                </TableCell>
              </TableRow>
              {users.map(item => (
                <TableRow>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell>
                    {item.id} 
                  </TableCell>
                  <TableCell>
                    <Avatar alt={item.name} src={item.avatar} />
                  </TableCell>
                </TableRow>
              ))}
            </Fragment>
          </TableBody>
        </Table>

        {/* <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Employee Name</TableCell>
              <TableCell align="right">Employee Id&nbsp;</TableCell>
              <TableCell align="right">Avatar&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          {items.allPeople.length > 0 ? (
          <TableBody>
            
            <TableRow key={items}>
              <TableCell  component="th" scope="row">
                {items.companyData.name}<br />
                {items.companyData.phoneNumber}
              </TableCell>
              <TableCell align="right">
              </TableCell>
            </TableRow>
            {peopleToDisplay.map((items) => {
              return (
                <TableRow key={items}>
                  <TableCell component="th" scope="row">
                    {items.name.first}
                  </TableCell>
                  <TableCell align="right">{items.email}</TableCell>
                  <TableCell align="right">{items.location.state}</TableCell>
                  <TableCell align="right">{items.dob.age}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
           ) : ""} 
        </Table> */}
      </TableContainer>
    </div>
  );
}