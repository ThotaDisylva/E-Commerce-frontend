import React, { useEffect, useState } from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Card, CardContent, CardHeader,Grid, IconButton, Typography ,styled} from '@mui/material';
import { Box } from '@mui/material';
import useAnalytics from '../../../hooks/useAnalytics';
import { useDispatch } from 'react-redux';


const Container = styled('div')({
    position:"relative",
    width:"100%",
    minHeight:"250px",
})
const renderStats =()=>{
    const [SalesDetails,setSalesDetails] = useState([]);
const fetchSalesDetails = async () => {
    try {
      const fetchedSalesDetails = await useAnalytics();
      setSalesDetails(fetchedSalesDetails)
    } catch (error) {
    }
  };
useEffect(() => {
    fetchSalesDetails();
})


const salesData=[
    {
        stats:SalesDetails.orderCount,
        tittle:'Sales',
        color:'#fce220',
        icon:<TrendingUpIcon sx= {{fontSize:"1.75rem"}}/>
    },
    {
        stats:SalesDetails.userCount,
        tittle:'Customers',
        color:'#88c788',
        icon:<AccountCircleIcon sx = {{fontSize:"1.75rem"}}/>
    },
    {
        stats:SalesDetails.productCount,
        tittle:'Products',
        color:'#ae3232',
        icon:<SettingsCellIcon sx= {{fontSize:"1.75rem"}}/>
    },
    {
        stats:SalesDetails.totalRevenue,
        tittle:'Revenue',
        color:'	#446eb5',
        icon:<AttachMoneyIcon sx= {{fontSize:"1.75rem"}}/>
    }
    
]
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index} >
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
                <Box> 
                    <Typography variant='caption'>{item.tittle}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>

                </Box>
            </Box>

        </Grid>))
    }
const Monthlyoverview = () => {
  return (
    <Card sx = {{width:"100%",mt:0 , height:'200px'}} >
        <Container>
        <CardHeader title="Monthly Overview"
            // subheader = {
            //     <Typography variant='body2'>
            //         <Box component='span' sx = {{fontWeight:600 ,color:'text.primary'}}>
            //             Total 40% Growth
            //         </Box>
            //           <p>this month</p>
            //     </Typography>
            //     }
                titleTypographyProps={{
                    sx:{
                        mt:2,
                        ml:2,
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
