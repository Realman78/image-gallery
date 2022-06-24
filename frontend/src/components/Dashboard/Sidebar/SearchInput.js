import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/system'
import './SearchInput.css'
import {connect} from 'react-redux'
import { getPostActions } from '../../../store/actions/postActions'

const MainContainer = styled('div')({
  width: '90%',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px'
})

function SearchInput({getSearchTermPosts, getAllPosts}) {
  const [searchValue, setSearchValue] = useState('')
  const searchValueChangeHandler = (e)=>{
    setSearchValue(e.target.value)
  }
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchValue.length > 0) getSearchTermPosts(searchValue)
      else getAllPosts()
    }, 1000)

    return () => clearTimeout(delayDebounce)
  }, [searchValue])
  return (
    <MainContainer className={'searchWrapper'}>
      <input type="text" placeholder="Search.." name="search" onChange={searchValueChangeHandler}/>
      <button>
        <FontAwesomeIcon style={{color: '#101010'}} icon={faSearch} />
      </button>
    </MainContainer>
  )
}

const mapActionsToProps = dispatch =>{
  return {
    ...getPostActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(SearchInput)