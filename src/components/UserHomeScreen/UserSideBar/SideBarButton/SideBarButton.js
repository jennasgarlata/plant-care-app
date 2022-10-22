import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function SideBarButton({sideBarName, setSelectedScreen}) {
  return (
    <div className='user-sidebar-button' onClick={()=>setSelectedScreen(sideBarName)}>
    <Card sx={{ minWidth: 350 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sideBarName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
