import React from 'react'
import Button  from '@mui/material/Button'

function CustomPrimaryButton({label, additionalStyles, disabled, onClick}) {
  return (
    <Button variant='contained' sx={{
        bgColor: '#5865f2',
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
    }} style={additionalStyles ? additionalStyles : {}} disabled={disabled} onClick={onClick}>{label}</Button>
  )
}

export default CustomPrimaryButton