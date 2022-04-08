import {  Grid, Typography } from '@mui/material'
import { CategoriesContainer, Category, CategorySaly } from './categories.styled'

const Categories = () => {
  return (
    <CategoriesContainer>
      <Typography component="h3">Kategori:</Typography>
      
      <Grid container>
        <Grid item xs={12} md={6} zIndex={1}>
          <Category>1# UMUM</Category>
          <Category>2# MUSIC</Category>
          <Category>3# SEJARAH</Category>
          <Category>4# MATEMATIKA</Category>
          <Category>5# KIMIA</Category>
        </Grid>

        <Grid item xs={12} md={6}>
          <CategorySaly src="/asset/img/Saly-13.png" alt="Picture of the Saly 3D illustration using Laptop." />
        </Grid>
      </Grid>
    </CategoriesContainer>
  )
}
 
export default Categories