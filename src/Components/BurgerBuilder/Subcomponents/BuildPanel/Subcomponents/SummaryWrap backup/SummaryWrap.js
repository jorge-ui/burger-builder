import React, {useEffect} from 'react'
import styles from './SummaryWrap.module.scss'

const SummaryWrap = ({subTotal, setShowModal, order}) => {
   useEffect(() => {
      setTimeout(
         () => document.querySelector('#summaryContainer').style.opacity = 1,
         900
      )
   }, [])
   return (
      <div id="SummaryWrap" className={`summaryDiv ${styles.SummaryWrap}`}>
            <h5 className="d-none d-sm-block">Summary</h5>
            <div id="summaryContainer" className={styles.container}>
               <div className={styles.info}>
                  <label htmlFor="total">Subtotal:</label>
                  <span className="float-right" >
                     $<span className="subtotal">{Number(subTotal).toFixed(2)}</span>
                  </span>
               </div>
               <button className={styles.checkoutBtn} onClick={() => setShowModal({show: true, order})}>
                  Order
               </button>
            </div>
      </div>
   )

}

export default SummaryWrap