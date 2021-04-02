//Styles
import React, { useEffect, useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
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
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Employee Name</TableCell>
              <TableCell align="right">Employee Id&nbsp;</TableCell>
              <TableCell align="right">Avatar&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          {/* {items.allPeople.length > 0 ? ( */}
          <TableBody>
            {/* key={items} */}
            <TableRow >
              <TableCell  component="th" scope="row">
                {items.companyData.name}<br />
                {items.companyData.phoneNumber}
              </TableCell>
              <TableCell align="right">
                <TableRow align="right">{items.companyData.users[0].name}<br /></TableRow>
                <TableRow align="right">{items.companyData.users[1].name}<br /></TableRow>
              </TableCell>
              <TableCell align="right">
                <TableRow align="right">{items.companyData.users[0].id}<br /></TableRow>
                <TableRow align="right">{items.companyData.users[1].id}<br /></TableRow>
              </TableCell>
              <TableCell align="right">
               <Avatar alt={items.companyData.users[0].name} src={items.companyData.users[0].avatar} />
               <Avatar alt={items.companyData.users[1].name} src={items.companyData.users[1].avatar} />
              </TableCell>
            </TableRow>
            {/* {peopleToDisplay.map((items) => {
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
            })} */}
          </TableBody>
          {/* ) : ""} */}
        </Table>
      </TableContainer>
    </div>
  );
}