import React from 'react'
import styles from './ControlsWrap.module.scss'
import ControlToggle from './ControlToggle'

const ControlsWrap = (props) => {  
   let ingredientsList = [
      'meat',
      'cheese',
      'bacon',
      'egg',
      'tomato',
      'spinach',
      'onion',
      'jalapeno',
      'mayo',
      'pickle',
      'ketchup',
      'mustard',
   ]
   
   return (
      <div id="ControlsWrap" className={styles.ControlsWrap}>
         <h5>Pick Ingredients</h5>
         <div className="container-fluid h-100" style={{overflow: 'visible'}} >
            <section className={styles.row}>
                  {[...Array(3)].map((_, c) => (
                     <div key={`c-${(c+1)}`} className={styles.col}>
                        {[...Array(4)].map((_, r) => {
                           let type = ingredientsList[((c*4) + (r))]
                           return (
                              <ControlToggle
                                 key={`r-${type}`}
                                 type={type}
                                 add={props.addIngredient}
                                 remove={props.removeIngredient}
                                 reset={props.resetIngredient}
                                 count={props.ingredients[type].count}
                              />
                           )
                        })}
                     </div>
                  ))}
            </section>
         </div>
      </div>
   )
}

export default ControlsWrap