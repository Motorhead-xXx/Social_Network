import * as React from "react";
import {Box, Button, Drawer, List, ListItem} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import Navbar from "../Navbar/Navbar";

type Anchor = "left"

export const HeaderMenu = () => {
    const [state, setState] = React.useState({
        left: false,

    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor: Anchor) => (
        <Box
            style={{backgroundColor:"rgb(2, 152, 142)", height:"100%", padding:"0"}}
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{padding:"0", margin:"0"}}>
                <ListItem style={{padding:"0", margin:"0"}}>
                    <Navbar/>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <>
                <Button size={'large'} onClick={toggleDrawer("left", true)}> <Menu style={{color:"white"}} /> </Button>
                <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
            </>
        </div>
    );
}
