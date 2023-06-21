//LocationSelectSidebar.js

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PlaceIcon from '@mui/icons-material/Place';
import { Button } from '@mui/material';


export default function LocationSelectSidebar() {

  return (

    <Paper elevation={2} style={{ textAlign: "center" }}>
      <List>
        <ListItemText primary={"Group 1"} />
        <ListItem>
          <Button href="/subzone1">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary={"Palo Alto"} disableTypography={true} />
          </Button>
        </ListItem>

        <ListItem>
          <Button href="/subzone2">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary={"Austin"} disableTypography={true} />
          </Button>
        </ListItem>

        <ListItem>
          <Button href="/subzone3">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary={"St. John's"} disableTypography={true} />
          </Button>
        </ListItem>

        <Divider />

        <ListItemText primary={"Group 2"} />
        <ListItem>
          <Button href="/region2-sub1">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary={"Sub Zone 1"} disableTypography={true} />
          </Button>
        </ListItem>

        <ListItem>
          <Button href="region2-sub2">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary={"Sub Zone 2"} disableTypography={true} />
          </Button>
        </ListItem>

        <ListItem>
          <Button href="region2-sub3">
            <ListItemIcon><PlaceIcon /></ListItemIcon>
            <ListItemText primary={"Sub Zone 3"} disableTypography={true} />
          </Button>
        </ListItem>

      </List>
    </Paper>

  );
}
