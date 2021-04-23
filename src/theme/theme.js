import { createMuiTheme } from '@material-ui/core/styles';
import { grey, deepPurple, amber,teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#416bdd'
    },
    secondary: {
      main:'#000',
    },
  },
  typography:{
    fontFamily: `"Poppins", sans-serif`,
    fontWeight:'bold',
  }
});

theme.overrides = {
  MuiTypography:{
    root:{
      fontWeight:600,
      paddingBottom:theme.spacing(1)
    },
    h4:{
      fontSize:'24px'
    },
    h5:{
      fontSize:'18px'
    },
    body1:{
      fontSize:'14px'
    },
    subtitle1:{
   
      fontSize:'12px'
    },
    subtitle2:{
   
         fontSize:'10px'
       },
    body1:{
      fontWeight:'500',
    },
    colorPrimary:{
      color:theme.palette.primary.dark,

    }
  },

};

export default theme;
