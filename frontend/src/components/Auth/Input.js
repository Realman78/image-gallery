import React from 'react'
import { styled } from '@mui/system'

const Wrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "98%",
  });
  
  const Label = styled("p")({
    color: "black",
    fontWeight: "600",
    fontSize: "16px",
    marginBottom: '2px',

  });
  
  const InputStyled = styled("input")({
    flexGrow: 1,
    height: "40px",
    border: "3px solid #e7ebef",
    borderRadius: "5px",
    color: "black",
    background: "#3533f",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px",
  });

function Input(props) {
    const { value, setValue, label, type, placeholder } = props
    const handleValueChange = (e) => {
        setValue(e.target.value)
    }
    return <Wrapper>
        <Label>{label}</Label>
        <InputStyled value={value} onChange={handleValueChange} type={type} placeholder={placeholder} />
    </Wrapper>
}

export default Input