import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function servicios() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="SERVICIOS"
        subheader="B2B y B2C"
      />
      <CardMedia
        component="img"
        height="194"
        image="/public/casa-jpg"
        alt="casa"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          B2B:Nuestros servicios atienden a empresasde diferentes ubicadas en distintos sectores como
          pùblicas y privadas dedicadas  a Desarrollos Industriales, Habitacionales o <Turistico></Turistico>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>B2C</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Atender a clientes con la excelencia que nos caracteriza nos permite ofrecer un rapido y oportuno
            servicio con la didamica que nos ofrece nuetsros desarrollos dentro de la Blockchain
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            En 3 simples pasos:
            1.Verificación de documentos Es el proceso mediante el cual una empresa confirma la autenticidad y validez de un documento. 
            2.Realizar el desarrollo de la solicitud del cliente en la Blockchain.
            3. Comercializaciòn
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Con nuestros Productos de Tokenizacion pequeños inversionistas pueden ahorrar y tener una renta mensual y revalorizar su inversiòn
            Inmuebles para :
            Renta fija 
            Renta para turismo 
            En este tipo de inversionista ganarà una semana de disfrute dependiendo de su inversiòn/Fija>
          </Typography>
          <Typography>
            Contactanos por medio de Linkelind MAGRESTE LABS y agendaremos una cita
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
