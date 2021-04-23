import React, { useState, useEffect } from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    content:{
        padding:theme.spacing(5),
        paddingTop:theme.spacing(11),
    },

}))

const NavMenuContent = () =>{
    const classes = useStyles();

    return(
        <>
            <div className={classes.content}>
               NAVMENT
            </div>
            
        </>
    )
}
export default NavMenuContent