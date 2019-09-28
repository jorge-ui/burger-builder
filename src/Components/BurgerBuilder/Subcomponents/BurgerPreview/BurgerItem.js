import React, {useEffect} from 'react'
import styles from './BurgerItem.module.scss'
import TopBread from './Ingredients/TopBread'
import BottomBread from './Ingredients/BottomBread'
import BurgerIngredient from './Ingredients/BurgerIngredient'

const BurgerItem = ({ingredients}) => {
   useEffect(() => {
      document.querySelector(`.${styles.BurgerItem}`).classList.add(styles.scaleUp)
   })
   let ingredientsList = [
      'mustard',
      'ketchup',
      'pickle',
      'mayo',
      'jalapeno',
      'onion',
      'spinach',
      'tomato',
      'egg',
      'bacon',
      'cheese',
      'meat',
   ]
   return (
      <div className={styles.BurgerItem}>
         <TopBread />
         {ingredientsList.map((ingredient, i) => (
            <BurgerIngredient
               key={ingredient+i}
               type={ingredient}
               count={ingredients[ingredient].count}
               z={ingredients[ingredient].z}
            />
         ))}
         <BottomBread />
      </div>
   )
}

export default BurgerItem

// Burger
// Cheese
// Bacon
// Egg
// Tomato
// Spinach
// Onion
// Jalapeno
// Mayo
// Pickle
// Ketchup
// Mustard