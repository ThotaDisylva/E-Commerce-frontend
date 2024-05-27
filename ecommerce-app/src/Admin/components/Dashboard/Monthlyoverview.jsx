import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Card, CardContent, CardHeader,Grid, IconButton, Typography ,styled} from '@mui/material';
import { Box } from '@mui/material';

const Container = styled('div')({
    position:"relative",
    width:"100%",
    minHeight:"250px",
})
const salesData=[
    {
        stats:'300K',
        tittle:'Sales',
        color:'#fce220',
        icon:<TrendingUpIcon sx= {{fontSize:"1.75rem"}}/>
    },
    {
        stats:'10.5K',
        tittle:'Customers',
        color:'#88c788',
        icon:<AccountCircleIcon sx = {{fontSize:"1.75rem"}}/>
    },
    {
        stats:'50K',
        tittle:'Products',
        color:'#ae3232',
        icon:<SettingsCellIcon sx= {{fontSize:"1.75rem"}}/>
    },
    {
        stats:'30K',
        tittle:'Revenue',
        color:'	#446eb5',
        icon:<AttachMoneyIcon sx= {{fontSize:"1.75rem"}}/>
    }
    
]

const renderStats =()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx = {{
                display:'flex',
                alignItems:'center',justifyContent:'center'
            }}>
                <Avatar variant='rounded' sx = {{
                    mr:1,
                    width:44,
                    height:44,
                    boxShadow:3,
                    backgroundColor: `${item.color}`
                }}>
                    {item.icon}
                </Avatar>
                {/* <Box sx = {{display:'flex',flexDirection:'column'}}> */}
                <Box> 
                    <Typography variant='caption'>{item.tittle}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>

                </Box>
            </Box>

        </Grid>))
    }
const Monthlyoverview = () => {
  return (
    <Card sx = {{width:"100%",mt:2}}>
        <Container>
        <CardHeader title="Monthly Overview"
            // action = {
            //     <IconButton size = "small">
            //         <MoreVertIcon/>
            //     </IconButton>
            // }
            subheader = {
                <Typography variant='body2'>
                    <Box component='span' sx = {{fontWeight:600 ,color:'text.primary'}}>
                        Total 40% Growth
                    </Box>
                      <p>this month</p>
                </Typography>
                }
                titleTypographyProps={{
                    sx:{
                        mb:2.5,
                        lineHeight:'2rem !important',
                        letterSpacing:'.15px !important'
                    }
                }}
        />
        <CardContent sx = {{pt:theme=>`${theme.spacing(3)} !important`}}>
                <Grid container spacing={[5,0]}>
                    {renderStats()}
                </Grid>
        </CardContent>
        </Container>
        
    </Card>
  )
}

export default Monthlyoverview
