import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
export default class App extends Component {
    constructor(props) {
        super(props)
        axios.get('/employees').then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return <form>
            <TextField id="EmployeeName" label="Employee Name" fullWidth margin="normal"  variant="outlined"></TextField>
            <TextField id="FirstName" label="FirstName" fullWidth margin="normal"  variant="outlined"></TextField>
            <TextField id="LastName" label="LastName" fullWidth margin="normal"  variant="outlined"></TextField>
            <TextField id="PhoneNumber" label="PhoneNumber" type="number" fullWidth margin="normal"  variant="outlined"></TextField>
            <TextField id="Address" label="Address" multiline rowsMax="4" margin="normal" fullWidth  variant="outlined"></TextField>
            <TextField id="Company" label="Company" fullWidth margin="normal"  variant="outlined"></TextField>
            <TextField id="Designation" label="Designation" fullWidth margin="normal"  variant="outlined"></TextField>
            <TextField id="HighestEducation" label="HighestEducation" fullWidth margin="normal"  variant="outlined"> </TextField>
        </form>
    }
}