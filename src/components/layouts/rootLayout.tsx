import { Button, Container, Grid2, styled } from "@mui/material";
import LeftMenu from "../navigation/leftMenu";
import TabsMenu from "../navigation/tabsMenu";
import {  useOutlet } from "react-router-dom";


const MainContainer = styled(Container)`
    display:grid
`;

const DataContainer = styled("main")`
    border:2px solid green;
`;

const LEFT_MENU=["Customers", "Suppliers", "Banks", "wewe"];

export function RootLayout() {
    const outlet = useOutlet();
 
    return(
            <Container maxWidth={"xl"}>
                <TabsMenu  />
                <Grid2 container spacing={2} sx={{marginTop:"10px"}}>
                    <Grid2 size={2}>
                        <LeftMenu sections={LEFT_MENU} />
                    </Grid2>
                    <Grid2 size={10} >
                    <DataContainer>
                        {outlet}
                    </DataContainer>
                    </Grid2>
                </Grid2>    
            </Container>
    );
};