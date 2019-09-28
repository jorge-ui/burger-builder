import React, {useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Loading = () => {
   useEffect(() => {
      document.querySelector('#spinner').style.opacity = 1
   }, [])

   return (
      <div id="spinner" style={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0000003d',
      opacity: '0',
      transition: 'opacity 1.6s'
   }}>
      <FontAwesomeIcon icon="spinner" spin size="3x" style={{
         color: 'white',
         textShadow: '0 0 4px white'
      }} />
   </div>
   )
   
}

export default Loading