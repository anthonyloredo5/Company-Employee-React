import React from "react";
import { TextField, MuiThemeProvider } from "material-ui";



const Search = (props) => {
    return (
        <MuiThemeProvider class="search">
            <form class="search" noValidate autoComplete="off">
                <TextField  onChange={props.handleState} class="search" id="outlined-basic" label="Outlined" variant="outlined" placeholder="search"/>
            </form>
        </MuiThemeProvider>
    );
}

export default Search;