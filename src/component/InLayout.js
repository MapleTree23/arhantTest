import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NavMenuContent from './NavMenuContent'
import { BrowserRouter, Route, Switch ,useLocation } from 'react-router-dom';
import TestPage from "../pages/Testpage"
import Test from "../pages/Test/Test"


const navWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
      // display: 'flex',
    },
    logo:{
      marginLeft: theme.spacing(2),
      backgroundColor: '#fdc400',
      padding: '5px 10px',
      borderRadius:'10px',
      '& p':{
        color:'white',
        paddingBottom:'0px'
      }
    },
    grow: {
      flexGrow: 1,
    },
    toolbar: {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      
      textAlign:'center',
      display:'flex',
      position:'fixed',
      width:'100%',
    }, 
    navMenuContent: {
      width: navWidth,
    },
    content: {
      flexGrow: 1,
      position:'relative',
      paddingBottom:'46px'
    },
    mainContent:{
      padding:theme.spacing(3),
      paddingTop:theme.spacing(8),
    },
  }));
const InLayout = (props) =>{
    const { window } = props;
    const theme = useTheme();
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const container = window !== undefined ? () => window().document.body : undefined;
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return(
        <div className={classes.root}>
 
          <nav className={classes.navMenu}>
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.navMenuContent,
                }}
                style={{width:'240px'}}

                ModalProps={{
                  keepMounted: true, 
                }}
              >
             
                <NavMenuContent/>
              </Drawer>
          
          </nav>

          <main className={classes.content}>
            <div className={classes.toolbar}>
              <div className={classes.logo}>
                <Typography>
                  Logo
                </Typography>
              </div>
              <div className={classes.grow}/>
                <IconButton>
                    <NotificationsNoneIcon />
                </IconButton>
                
                <IconButton 
                  edge="start" 
                  color="inherit" 
                  aria-label="menu"
                  color="primary"
                  className={classes.trayButton}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon variant="outlined"/>
                  
                </IconButton>
            </div>
            
            
            <div className={classes.mainContent}>
              
              <Switch>
                  <Route path="/test">
                      <TestPage/>
                  </Route>
                  <Route path="/">
                      <Test/>
                  </Route>
              </Switch>
              
            </div>
            
          </main>
        </div>
    )
}
export default InLayout;