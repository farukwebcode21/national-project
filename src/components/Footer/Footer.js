import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import footer from '../../images/footer.png'

const Footer = () => {
  return (
    <Container>
            <Grid item xs={12}>
                <img  style={{width:'100%'}} src={footer} alt=""/>
            </Grid>
    </Container>
  )
}

export default Footer