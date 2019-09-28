import React from 'react'
import PropTypes from 'prop-types'


function BurgerIngredient({count, type, z}) {
   // if(!count) return null
   let paddingBottom; 
   // TODO: fix static margin
   switch (type) {
      case 'bottomBread' :  paddingBottom = '30px';  break;
      case 'meat'        :  paddingBottom = '31px';  break;
      case 'cheese'      :  paddingBottom = '10px';  break;
      case 'bacon'       :  paddingBottom = '15px';  break;
      case 'egg'         :  paddingBottom = '20px';  break;
      case 'tomato'      :  paddingBottom = '15px';  break;
      case 'spinach'     :  paddingBottom = '21px';  break;
      case 'onion'       :  paddingBottom = '18px';  break;
      case 'jalapeno'    :  paddingBottom = '19px';  break;
      case 'mayo'        :  paddingBottom = '14px';  break;
      case 'pickle'      :  paddingBottom = '5px' ;  break;
      case 'ketchup'     :  paddingBottom = '4px' ;  break;
      case 'mustard'     :  paddingBottom = '8px' ;  break;
      case 'topBread'    :  paddingBottom = '34px';  break;
      default:                                       break;
   }
   return [...Array(count)].map((_, i) => {
      return (
         <div
            key={type + i}
            className={`ingredient ing-${type}`}
            style={{ height: 0,
                     paddingBottom
                  }}
         >
               <img
                  src={require(`./images/${type}.png`)}
                  alt={type}
                  style={{zIndex: z - i}}
                  className={'img-' + type}
               />
         </div>
      )
   })
   
}

BurgerIngredient.propTypes = {
   type: PropTypes.string.isRequired,
   count: PropTypes.number.isRequired,
   z: PropTypes.number.isRequired,
}

export default BurgerIngredient
