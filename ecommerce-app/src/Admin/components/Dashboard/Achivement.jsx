import React from 'react'
import { Button, Card, CardContent, Typography, styled } from '@mui/material'

const Container = styled('div')({
  position: 'relative',
  width: '100%', 
  minHeight: '250px',

})

const TrignleImg = styled("img")({
  width: '100%', 
  position: "absolute",
  bottom: 0,
})

const TrophyImg = styled("img")({
  height: '100px', 
  position: "absolute",
  right: '50px', 
  bottom: '50px', 
})

const Achivement = () => {
  return (
    <Card sx = {{width:'100%',mt:0,ml:0,height:'200px'}}>
      <Container>
        <CardContent>
          <Typography variant='h6' sx={{letterSpacing:".30px" ,lineHeight:'2rem'}}>Achivements and Sales</Typography>
          <Typography variant='body2'>Congratulations 👏</Typography>
          <Typography variant='h5' sx = {{my:3.1}}>100K</Typography>
          {/* <Button size='small' variant='contained'>View Sales</Button> */}
        </CardContent>
        <TrignleImg src=""></TrignleImg>
        <TrophyImg src='https://previews.123rf.com/images/pikepicture/pikepicture1702/pikepicture170200025/71262102-achievement-vector-star-with-red-ribbon-yellow-sign-place-for-text-golden-decoration-symbol-3d-shine.jpg'/>
      </Container>
    </Card>
  )
}

export default Achivement
