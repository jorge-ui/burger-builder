// import React, { Component } from 'react'
import React, { Component, lazy, Suspense } from 'react'
import styles from './BurgerBuilder.module.scss'
import Loading from '../Loading/Loading'
//Subcomponents
// import BurgerPreview from './Subcomponents/BurgerPreview/BurgerPreview'
// import BuildPanel from './Subcomponents/BuildPanel/BuildPanel'
const BurgerPreview = lazy(() => import('./Subcomponents/BurgerPreview/BurgerPreview'))
const BuildPanel = lazy(() => import('./Subcomponents/BuildPanel/BuildPanel'))

class BurgerBuilder extends Component {
   state = {
      ingredients: {
         meat:     {count: 0, price: 2.50, z: 20 },
         cheese:   {count: 0, price: 0.70, z: 30 },
         bacon:    {count: 0, price: 0.80, z: 40 },
         egg:      {count: 0, price: 1.00, z: 50 },
         tomato:   {count: 0, price: 0.30, z: 60 },
         spinach:  {count: 0, price: 0.30, z: 70 },
         onion:    {count: 0, price: 0.30, z: 80 },
         jalapeno: {count: 0, price: 0.30, z: 90 },
         mayo:     {count: 0, price: 0.25, z: 100},
         pickle:   {count: 0, price: 0.30, z: 110},
         ketchup:  {count: 0, price: 0.25, z: 120},
         mustard:  {count: 0, price: 0.25, z: 130},
      },
      subTotal: 0
   }

   reset = () => {
      this.setState({
         ingredients: {
            meat:     {count: 0, price: 2.50, z: 20 },
            cheese:   {count: 0, price: 0.70, z: 30 },
            bacon:    {count: 0, price: 0.80, z: 40 },
            egg:      {count: 0, price: 1.00, z: 50 },
            tomato:   {count: 0, price: 0.30, z: 60 },
            spinach:  {count: 0, price: 0.30, z: 70 },
            onion:    {count: 0, price: 0.30, z: 80 },
            jalapeno: {count: 0, price: 0.30, z: 90 },
            mayo:     {count: 0, price: 0.25, z: 100},
            pickle:   {count: 0, price: 0.30, z: 110},
            ketchup:  {count: 0, price: 0.25, z: 120},
            mustard:  {count: 0, price: 0.25, z: 130},
         },
         subTotal: 0
      })
   }

   resetIngredient = (type) => {
      this.setState({
         ingredients: {
            ...this.state.ingredients,
            [type]: {
               ...this.state.ingredients[type],
               count: 0
            }
         }
      }, () => {
         this.updateSubtotal()
      })
   }

   addIngredient = (type) => {
      if(this.state.ingredients[type].count === 3) return 'full'
      this.setState({
         ingredients: {
            ...this.state.ingredients,
            [type]: {
               ...this.state.ingredients[type],
               count: this.state.ingredients[type].count + 1
            }
         }
      }, () => {
         this.updateSubtotal()
      })
   }

   removeIngredient = (type) => {
      if(!this.state.ingredients[type].count) return 'empty'
      this.setState({
         ingredients: {
            ...this.state.ingredients,
            [type]: {
               ...this.state.ingredients[type],
               count: this.state.ingredients[type].count - 1
            }
         }
      }, () => {
         this.updateSubtotal()
      })
   }

   updateSubtotal = () => {
      let state = {...this.state.ingredients}
      let result = Object.entries(state).reduce((result, current) => {
         return result = result + current[1].count * current[1].price
      }, 0)
      this.setState({
         subTotal: result.toPrecision(result < 1 ? 2 : (result >= 10 ? 4 : 3))
      })
   }

   hideBuilder = (e) => {
      if(!this.props.showBuilder) return
      e.preventDefault()
      // Hide the whole builder
      document.querySelector('#BuildWrapper').classList.remove(`${styles.ShowWrapper}`)
      // Fade out summary container
      document.querySelector('#summaryContainer').style.opacity = 0

      if(window.screen.width > 576) {
         // Hide scaling down each control toggle
         document.querySelectorAll('.ControlToggle').forEach((el) => el.classList.remove('scaleUp'))
      }
      
      
      document.querySelector('#BuildPanel').classList.remove('animateHeight')
      this.props.setShowBuilder(false)
   }

   componentDidMount() {
      setTimeout(
         () => document.querySelector('#BuildWrapper').classList.add(styles.ShowWrapper),
         150
      )
   }

   render() {
      return (
         <div className={styles.BuildWrapper} id="BuildWrapper">
            <div className={styles.BurgerBuilder} id="BurgerBuilder">
               <div className={`container ${styles.container}`}>
                  <Suspense fallback={<Loading/>}>
                     <BurgerPreview
                        ingredients={this.state.ingredients}
                        reset={this.reset}
                        hideBuilder={this.hideBuilder}
                     />
                  </Suspense>
                  <Suspense fallback={<Loading/>}>
                     <BuildPanel
                        ingredients={this.state.ingredients}
                        addIngredient={this.addIngredient}
                        removeIngredient={this.removeIngredient}
                        resetIngredient={this.resetIngredient}
                        subTotal={this.state.subTotal}
                        setShowModal={this.props.setShowModal}
                        order={this.state.ingredients}
                     />
                  </Suspense>
               </div>
            </div>
         </div>
      )
   }
}

export default BurgerBuilder