import React from 'react'
import styles from './ControlToggle.module.scss'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'

const ControlToggle = ({type, add, remove, reset, count}) => {
   let name = type[0].toUpperCase() + type.slice(1)

   function forMobileClick() {
      if(window.innerWidth > 576) return
      // returns 'full' if count is 3 (max)
      let isFull = add(type)
      // reset if full
      isFull && reset(type)
   }
   return (
      <div id={`ControlToggle-${name}`} className={`${styles.ControlToggle} ControlToggle`} onClick={forMobileClick}>
         <div className={styles.imgHoverDetect}>
            <div className={`${styles.buttonsWrap} d-none d-sm-flex`}>
               <div className={styles.buttonContainer}>
                  <button onClick={() => remove(type)} disabled={!count}>
                     <Icon icon="minus" />
                  </button>
                  {/* <section /> */}
                  <button onClick={() => add(type)} disabled={count > 2}>
                     <Icon icon="plus" />
                  </button>
               </div>
            </div>
         </div>
         <img
            id={`icon-${type}`}
            src={require(`./icons/${type}-icon.png`)}
            alt={`${type} icon`}
         />
         <span className={styles.name}>{name}</span>
      </div>      
   )
}

export default ControlToggle