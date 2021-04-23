import React, { useState, useEffect } from "react";
import { version } from "react-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Typography,
  } from "@material-ui/core"
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const typeList = [
    {
        imgPath:'/img/1.jpg',
        title:'Seguridad'
    },
    {
        imgPath:'/img/1.jpg',
        title:'Cocina'
    },
    {
        imgPath:'/img/1.jpg',
        title:'Contaduria'
    },
    {
        imgPath:'/img/1.jpg',
        title:'Seguridad'
    },
]
const contentItemList = [
    {
        title:'Guardia de seguridad',
        price:'$16.00/hr',
        location:'Santiago Centro-Region Metropolitana',
        date:'15 de abril-15mayo',
        time:'09:00 a 17:00 hrs'
    },
    {
        title:'Guardia de seguridad',
        price:'$16.00/hr',
        location:'Santiago Centro-Region Metropolitana',
        date:'15 de abril-15mayo',
        time:'09:00 a 17:00 hrs'
    },
    {
        title:'Guardia de seguridad',
        price:'$16.00/hr',
        location:'Santiago Centro-Region Metropolitana',
        date:'15 de abril-15mayo',
        time:'09:00 a 17:00 hrs'
    },
    {
        title:'Guardia de seguridad',
        price:'$16.00/hr',
        location:'Santiago Centro-Region Metropolitana',
        date:'15 de abril-15mayo',
        time:'09:00 a 17:00 hrs'
    }
]

const useStyles = makeStyles((theme) => ({
    titlePart:{
        '& h6':{
          paddingBottom:'0px'
        }
      },
      spacingLine:{
        margin:theme.spacing(2),
        marginLeft:-theme.spacing(3),
        marginRight:-theme.spacing(3),
        height:theme.spacing(1),
        backgroundColor:'rgba(0, 0, 0, 0.12)'
      },
      smallTitle:{
          display:'flex',
          justifyContent:'space-between',
          '& button':{
              padding:'0px'
          },
          '& h5':{
            padding:'0px'
          }

      },
      filter:{
        border:'1px solid #bbbbbb',
        borderRadius:'5px',
        padding: '3px 5px',
        '& h6':{
            paddingBottom:'0px'
        }

      },
      typePart:{
        marginTop:theme.spacing(2),
        overflowX:'scroll',
        whiteSpace: 'nowrap',
        overflowY:'hidden'

      },
      typePartContent:{
        display: 'flex',
      },
      typeItem:{
        
        borderRadius:'5px',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        padding: '5px 7px',
        marginRight: '15px',
        border:'1px solid #bbbbbb',

        '& img':{
            borderRadius: '50%',
            width: '15px',
            marginRight:theme.spacing(1)
        },
        '& h6':{
            padding:'0px'
        }
      },
      selected:{
        backgroundColor:theme.palette.primary.main,
        '& h6':{
         color:'white'
        }
      },
      noselect:{
     
      },
      contentPart:{
        marginTop:theme.spacing(2)
      },
      contentItem:{
        boxShadow:'0px 0px 5px 5px #dadada',
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
        padding:theme.spacing(2),
        paddingTop:theme.spacing(3),
        paddingBottom:theme.spacing(3),

        borderRadius:'10px'
      },
      contentItemHeader:{
        display:'flex',
        justifyContent:'space-between',
        paddingBottom:theme.spacing(1),
        marginBottom:theme.spacing(1),

        '& h5':{
            padding:'0px'
        }
      },
      contentItemPrice:{
        color:'white',
        backgroundColor:'black',
        borderRadius:'5px',
        padding:'3px 10px',
        alignSelf:'center'
      },
      contentItemDateTime:{
          display:'flex',
          justifyContent:'space-between',
        marginBottom:theme.spacing(1),

      },
      contentItemDate:{
        display:'flex',
        
        '& h6':{
            padding:'0px',
            marginLeft:'3px'
        },
        '& svg':{
            width:'19px'
        }
      },
      contentItemLocation:{
        paddingBottom:theme.spacing(1),
        marginBottom:theme.spacing(1),
        display:'flex',
        '& h6':{
            padding:'0px',
            marginLeft:'3px'
        },
        
      },
      contentItemTime:{
        '& h6':{
            fontWeight:'900'
        },
      }
    
}))

const Test = () =>{
    const [currentType,setcurrentType] = useState(1);
    const theme = useTheme();
    const classes = useStyles();
    const selectType = (type) =>{
        setcurrentType(type);
    }
    return(
        <>
        <div className={classes.titlePart}>
                <Typography variant="h4">
                  Hola Felipe
                </Typography>
                <Typography variant="subtitle1">
                  Ve los turnos que tenemos para
                </Typography>
              </div>
              <div className={classes.spacingLine}>
        </div>
        <div className={classes.smallTitle}>
            <Typography variant="h5">
                Turnos disponibles
            </Typography>
            <div className={classes.filter}>
                <Typography variant="subtitle1">
                    +Filtros
                </Typography>
            </div>
        </div>
     
        <div className={classes.typePart}>
            <div className={classes.typePartContent}>
                {
                    typeList.map((type,index)=>{
                        let selClass = index == currentType ? classes.selected : classes.noselect;
                        return(
                            <div className={classes.typeItem + ' ' + selClass} onClick={()=>{selectType(index)}}>
                            <img src={type.imgPath}/>
                            <Typography variant='subtitle1'>
                                {type.title}
                            </Typography>
                        </div>
                        )
                    })
                }                  
            </div>
        </div>
        <div className={classes.contentPart}>
                {
                    contentItemList.map((item,index)=>{
                        return(
                            <div className={classes.contentItem}>
                                <div className={classes.contentItemHeader}>
                                    <Typography variant='h5'>{item.title}</Typography>
                                    <Typography className={classes.contentItemPrice} variant='subtitle1'>{item.price}</Typography>

                                    {/* <Button variant="primary">{item.price}</Button> */}
                                </div>
                                <div className={classes.contentItemLocation}>
                                    <RoomOutlinedIcon color='primary'></RoomOutlinedIcon>
                                    <Typography variant="subtitle1">{item.location}</Typography>
                                </div>
                                <div className={classes.contentItemDateTime}>
                                    <div className={classes.contentItemDate}>
                                        <CalendarTodayIcon color='primary'></CalendarTodayIcon>
                                        <Typography variant="subtitle1">{item.date}</Typography>

                                    </div>
                                    <div className={classes.contentItemTime}>
                                        <Typography variant="subtitle1">{item.time}</Typography>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
        </div>
        </>
    )
}
export default Test