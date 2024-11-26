import { Box, Button, Card, CardActions, CardContent, Divider, TextField, Typography } from "@mui/material";

interface Props{
    isEdit:boolean;
    id:string|null;
    name:string|null;
    value1:string|null;
    value2:number|null;
}


export default function EditCustomer({isEdit, id, name, value1, value2}:Props){
    const header = isEdit? "Edit customer": "New customer";

    const handleSaveClick = () =>{
        alert('Save');
    };

    const handleCancelClick = () =>{
        alert('Cancel');
    };

    return(
    <Box sx={{marginRight:'20px'}}>
    <Card>
        <CardContent>
        <Typography gutterBottom variant="h6">
            {header}
            </Typography>
            <Divider />
        <TextField required id="name" label="Customer name" value={name}  size="small"  margin="normal" />
            <TextField required id="value1" label="Value 1" value={value1}  size="small"  margin="normal"/>
            <TextField id="value2" label="Value 2" value={value2}  size="small"  margin="normal"/>
        </CardContent>
        <CardActions sx={{}}>
            <Button  variant="contained" onClick={handleSaveClick}>Save</Button>
            <Button  variant="outlined" onClick={handleCancelClick}>Cancel</Button>
        </CardActions>
    </Card>
    </Box>);
}