import React from 'react'
import styles from './BurgerPreview.module.scss'
import BurgerItem from './BurgerItem'


const BurgerPreview = (props) => (
   <div className={styles.BurgerPreview}>
      <div onClick={props.reset} className={styles.reset}>
         Reset
      </div>
      <div id="closeBuilder" onClick={props.hideBuilder} className={styles.close}>
         x
      </div>
      <div className={styles.Preview}>
         <BurgerItem {...props} />
      </div>
   </div>
)

export default BurgerPreview