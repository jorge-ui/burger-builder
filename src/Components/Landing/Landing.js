import React from 'react'
import styles from './Landing.module.scss'

const Landing = ({setShowBuilder, showBuilder}) => {
   return (
      <div className={styles.Landing} style={{opacity: Number(!showBuilder)}}>
            <div>
               <h3>Build your custom burger!</h3>
               <button className="btn btn-primary" onClick={() => setShowBuilder(true)}>
                  Make a Burger
               </button>
            </div>
      </div>
   )

}

export default Landing