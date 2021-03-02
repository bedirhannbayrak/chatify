import { useState } from 'react';
import { Icon, Menu, Popup } from "semantic-ui-react";
import CreateChannelForm from "../Channels/CreateChannelForm";

const SidePanel = () => {
    const [open,setOpen] = useState(false)

    const handleOpen = () => {  
        console.log("opened")
        setOpen(true);
        
    }
    const handleClose = () => {  
        setOpen(false);
    }

    return (
        <>
        <Menu
            vertical
            inverted
            secondary
            color="blue"
            fixed="left"
            style={{
                width: "346px",
                fontSize: "1.3rem",
            }}
            >
            <Menu.Item>
                {/* <UserPanel /> */}
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>
                    Channels
                    <span style={{ float: "right" }}>
                        <Popup
                            content="Create New Channel"
                            trigger={<Icon name="add" onClick={event => handleOpen()} />} >

                        </Popup>
                    </span>
                </Menu.Header>
            {
                [...new Array(10)].map((prop,index) => (
                    <Menu.Item key={index} name="A" as="a" icon="hashtag" />
                ))
            }

            </Menu.Item>
            </Menu>
            <CreateChannelForm
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            />
        </>
    );
};
export default SidePanel
