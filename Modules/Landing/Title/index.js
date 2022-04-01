import { Fragment } from 'react'
import { Box, Typography } from '@mui/material'

const Title = () => {
  return (
    <Fragment>
      <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
        <Typography variant="h1" component="h1" fontWeight="bold">QUIZ</Typography>
        <Typography variant="h1" component="h1" fontSize="6.192rem">Experiment</Typography>
      </Box>
    </Fragment>
  )
}
 
export default Title