import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="logo"
        height="140"
        image="/public/favicon.ico"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Con la màs alta tecnologia de Internet Computer es una red pública de blockchain habilitada por la nueva ciencia desde los primeros principios. 
        Es millones de veces más potente y puede reemplazar las nubes y la TI tradicional.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        a nueva forma de incorporar Blockchain es MAGRESTE LABS. Constactanos telf +54911326972 email magreste 5.0@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agenda tu cita</Button>
        <Button size="small">Atendedos en cualquier parte del mundo en los ideomas Español, Ingles y Portuguez</Button>
      </CardActions>
    </Card>
  );
}




    