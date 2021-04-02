import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Container, Grid, TableRowColumn } from '@material-ui/core';
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
    backgroundColor: grey,
  },
  cell: {
    paddingLeft: "80px",
  }
});

export default function BasicTable() {

  const classes = useStyles();


  const [items, setItems] = useState({
    allPeople: [],
    companyData: [],
  });


  useEffect(function () {
    axios.get("https://6065d7a7b8fbbd001756786c.mockapi.io/companies")
      .then((response) => {
        console.log(response, "Response from api");
        setItems({ ...items, allPeople: response.data[0].users, companyData: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  var companies = items.companyData;
  console.log(companies, "should be company data in array form");


  return (
    <div>
      <TableContainer component={Paper}>
        {/* Table container with comparments */}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableRow>
                  <TableCell>
                    Company&nbsp;
                  </TableCell>
                  <TableCell className={classes.cell}>
                    Employees&nbsp;
                  </TableCell>
                  <TableCell>
                    Employee Id&nbsp;
                  </TableCell>
                  <TableCell>
                    Employee Avatar&nbsp;
                  </TableCell>
                </TableRow>
              </TableCell>
            </TableRow>
          </TableHead>
          {companies.map(company => (
            <TableBody>
              <TableRow>
                <TableRow>
                  <TableCell rowSpan={company.users.length + 1}>
                    {company.name}<br />
                    {company.phoneNumber}
                  </TableCell>
                  {company.users.map(user => (
                    <TableRow>
                      <TableCell >
                        {user.name}
                      </TableCell>
                      <TableCell >
                        {user.id}
                      </TableCell>
                      <TableCell>
                        <Avatar alt={user.name} src={user.avatar} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableRow>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div >
  );
}