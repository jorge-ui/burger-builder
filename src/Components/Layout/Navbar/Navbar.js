import React from 'react'
import styles from './Navbar.module.scss'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'

const Navbar = (props) => (
   <nav className={`navbar navbar-expand-lg navbar-light ${styles.Navbar}`}>
      <li className="navbar-brand" onClick={() => {
         let close = document.querySelector('#closeBuilder')
         close && close.click()
      }}>
         <Icon icon="hamburger" />
         BurgerBuilder
      </li>
   </nav>
)

export default Navbar