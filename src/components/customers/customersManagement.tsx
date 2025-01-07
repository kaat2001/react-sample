import { Box, Button, Container, Divider, Fab, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditCustomer from "./editCustomer";
import { getCustomers } from "./commands";
import { BaseGetQuery, CustomerDto } from "../../api/GeneratedApiClient";
import { useCallback, useEffect, useState } from "react";

enum ColumnType{
    Text,
    Action
}

interface IColumn{
    title:string;
    classProperty:string;
    type:ColumnType
}

interface ICustomerRow{
    id:string;
    customerName:string;
    customerField1:string;
    customerField2:string;
}

export default function CustomersManagement() {
    const [customers, setCustomers] = useState<CustomerDto[]>([]);
    const handleAddCustomerClick= ()=>{
        alert('add customer');
    }

    const fetchData = useCallback(async () => {
    
    const queryParams: BaseGetQuery = {};
    var data = await getCustomers(queryParams);
    setCustomers(data);
    },[]);

    useEffect(() => {
        fetchData();
      }, [fetchData]);

    const columns:IColumn[]=[
        {
            title:"Name",
            type:ColumnType.Text,
            classProperty:"name"
        },
        {
            title:"Id",
            type:ColumnType.Text,
            classProperty:"id"
        },
    ];


    return(
        <Container maxWidth={false} sx={{border:"1px solid red", paddingTop:'10px'}} >
            <Box  sx={{ display:"flex", flexDirection:"row",alignItems:'center' }} width={500}>
            <Typography variant="h5" color="textPrimary" sx={{ paddingRight:"20px"}}>Customers management</Typography>
            <Fab color="primary" aria-label="add" size="small" onClick={handleAddCustomerClick}>
                <AddIcon />
            </Fab>
            </Box>

<Grid2 container sx={{padding:'20px 0px'}}>
    <Grid2 size={3}>
            <EditCustomer isEdit={false} id={null} name={null} value1={null} value2={null}></EditCustomer></Grid2>
            <Grid2 size={9}>
            <TableContainer component={Paper} >
            <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    {columns.map((column) =>(
                    <TableCell>{column.title}</TableCell>               
                ))}
                </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((row, index) => (
                    <TableRow
                        key={`table-row-${index}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                          <TableCell>{row.name}</TableCell>
                          <TableCell>edit</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
            </TableContainer>
            </Grid2>
            </Grid2>
        </Container>
    );
};