import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const CategoriesContainer = styled(Box)(({ theme }) => ({
  margin: '80px',
  [theme.breakpoints.down('md')]: {
    margin: '80px 16px'
  }
}))

export const Category = styled(Box)(({ theme }) => ({
  boxShadow: `8px -8px ${theme.palette.success.main}`,
  background: theme.palette.warning.main,
  marginTop: '16px',
  padding: '8px',
  textAlign: 'center',
  transition: '.2s',
  '&:hover': {
    background: theme.palette.success.main,
    boxShadow: 'none',
    color: 'white',
  }
}))

export const CategorySaly = styled('img')(({ theme }) => ({
  position: 'relative',
  width: '90%',
  right: '-80px',
  top: '-80px',
  zIndex: '0',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))