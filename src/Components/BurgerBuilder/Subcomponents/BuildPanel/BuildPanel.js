import React, {useEffect} from 'react'
import styles from './BuildPanel.module.scss'
import ControlsWrap from './Subcomponents/ControsWrap/ControlsWrap'
import SummaryWrap from './Subcomponents/SummaryWrap/SummaryWrap'

const BuildPanel = (props) => {

   useEffect(() => {
      // Animate Controls Height
      document.querySelector('#BuildPanel').classList.add('animateHeight')
      document.querySelectorAll('.summaryDiv').forEach((el) => {
            el.classList.add('summaryDiv-show')
         })
      // Then, animate headings after first animation ends
      setTimeout(() => {
         document.querySelectorAll('#BuildPanel h5').forEach((el) => {
            el.classList.add('animateWidth')
         })
         document.querySelectorAll('.ControlToggle').forEach((el) => {
            setTimeout(
               () => el.classList.add('scaleUp'), 
               Math.round(Math.random() * 250)
            )
         })
      }, 750)
   }, [])

   return (
      <div id="BuildPanel" className={`${styles.BuildPanel}`}>

            <ControlsWrap {...props} />

            <SummaryWrap
               subTotal={props.subTotal}
               setShowModal={props.setShowModal}
               order={props.order}
            />

      </div>
   )
}

export default BuildPanel