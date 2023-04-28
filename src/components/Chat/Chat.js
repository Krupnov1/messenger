import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { theme } from '../Theme/Theme';

export const Chat = ({ id, name, text, deleteChats }) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: theme.palette.secondary.main }}> 
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
              </Typography>
              {text}
              <br></br>
              <br></br>
              <span onClick={() => deleteChats(id)}>delete</span>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};