import styled from "@emotion/styled";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LeftSideMenu = styled("div")`
`;

interface Props {
    sections: string[];
  }

export default function LeftMenu({sections}:Props){
    const navigate = useNavigate();
    const handleMenuClick = (item:string)=>{

        const link = `/administration/${item.toLowerCase()}`;
        navigate(link);
    };

    return(
        <LeftSideMenu>
            <List sx={{ width: '100%', bgcolor: 'background.paper'}} disablePadding={true}> 
                {sections.map((item, index)=>(
                    <ListItemButton key={`${index}`} onClick={()=>{handleMenuClick(item)}}>
                        <ListItemText >{item}</ListItemText>
                    </ListItemButton >            
                ))}
            </List>
        </LeftSideMenu>
    )
}; 