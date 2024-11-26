import { Box, Button, Container, Divider, Fab, Grid2, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditCustomer from "./editCustomer";

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
    const handleAddCustomerClick= ()=>{
        alert('add customer');
    }

    const columns:IColumn[]=[
        {title:"Name",
            type:ColumnType.Text,
            classProperty:"customerName"},
             {title:"column 1",
            type:ColumnType.Text,
            classProperty:"customerField1"},
            {title:"column 2",
                type:ColumnType.Text,
                classProperty:"customerField2"},
            {title:"action column 1",
                type:ColumnType.Action,
            classProperty:""}
        ];

    const rows:ICustomerRow[]=[{
        id:"1-234",
        customerName:"Customer 1",
        customerField1:"1234-2345",
        customerField2:"addr12",
    },{id:"2-234",
        customerName:"Customer 2",
        customerField1:"2234-2345",
        customerField2:"addr 2",
    },{id:"3-234",
    customerName:"Customer 3",
    customerField1:"3326-2345",
    customerField2:"addr 3",
}]        ;

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
                    {rows.map((row, index) => (
                    <TableRow
                        key={`table-row-${index}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                          <TableCell>{row.customerName}</TableCell>
                          <TableCell>{row.customerField1}</TableCell>
                          <TableCell>{row.customerField2}</TableCell>
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