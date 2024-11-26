import { AppBar, Box, Button, Container, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";

const HeaderTabsMenu = styled("div")`
    border:2px solid blue;
    height: 10vh;

    width:100%;
`;

export default function TabsMenu (){
    return(
            <AppBar color="primary"  position="static" >
            <Container maxWidth="xl">
            <Toolbar disableGutters>
            
            <Typography>
                LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    key="Administration"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    administration
                </Button>
                <Button
                    key="Invoices"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Invoices
                </Button>
            </Box>
            
            </Toolbar>
      </Container>
      </AppBar>
    )
}