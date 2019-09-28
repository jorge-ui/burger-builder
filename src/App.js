import React, {useState, lazy, Suspense} from 'react'
import styles from './App.module.scss'
// Components
import Navbar from './Components/Layout/Navbar/Navbar'
import Loading from './Components/Loading/Loading'
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
   faHamburger,
   faPlus,
   faMinus,
   faSpinner,
   faTimes,
   faChevronRight
} from '@fortawesome/free-solid-svg-icons'
library.add(
   faHamburger,
   faPlus,
   faMinus,
   faSpinner,
   faTimes,
   faChevronRight
   )
// Lazy Components
const BurgerBuilder = lazy(() => import('./Components/BurgerBuilder/BurgerBuilder'))
const CheckoutModal = lazy(() => import('./Components/CheckoutModal/CheckoutModal'))
const Landing = lazy(() => import('./Components/Landing/Landing'))
const Delayed = lazy(() => import('react-delayed'))
   
const App = () => {
   const [showBuilder, setShowBuilder] = useState(false)
   const [showModal, setShowModal] = useState({show: false, order: {}})

   return (
      <div className={styles.App}>
         {/* Navbar */}
         <Navbar />

         {/* Landing */}
         <Suspense fallback={<Loading/>}>
            <Landing setShowBuilder={setShowBuilder} showBuilder={showBuilder} />
         </Suspense>

         {/* BurgerBuilder */}
         <Suspense fallback={<Loading/>}>
            <Delayed mounted={showBuilder} mountAfter={0} unmountAfter={700}>
               <BurgerBuilder
                  showBuilder={showBuilder}
                  setShowBuilder={setShowBuilder}
                  setShowModal={setShowModal}
               />
            </Delayed>
         </Suspense>

         {/* CheckoutModal */}
         <Suspense fallback={<Loading/>}>
            <Delayed mounted={showModal.show} mountAfter={0} unmountAfter={220}>
               <CheckoutModal
                  setShowModal={setShowModal}
                  order={showModal.order}
               />
            </Delayed>
         </Suspense>
      </div>
   )
}

export default App;
