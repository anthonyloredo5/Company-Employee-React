import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Container, Grid } from '@material-ui/core';
import axios from "axios";

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


  var users = items.allPeople;
  var companies = items.companyData;
  console.log(companies, "should be company data in array form");

  return (
    <div>
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
          {companies.map(company => (
            <TableBody>
                <TableRow>
                    <Container maxWidth="xl">
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
                    </Container>
                </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </div >
  );
}