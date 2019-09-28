import React, { useEffect, useState } from 'react';
import styles from './CheckoutModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckoutForm from './Subcomponents/CheckoutForm/CheckoutForm';

const CheckoutModal = ({ setShowModal, order }) => {
  const [success, setSuccess] = useState(false);
  // component effect
  useEffect(() => {
    let container = document.querySelector(`.${styles.container}`);
    container.style.transform = 'unset';
    container.style.opacity = 'unset';
    document.querySelector(`.${styles.CheckoutModal}`).style.backgroundColor =
      '#000000b5';
  }, []);

  function hideModal() {
    let container = document.querySelector(`.${styles.container}`);
    container.style.transform = null;
    container.style.opacity = null;
    document.querySelector(
      `.${styles.CheckoutModal}`
    ).style.backgroundColor = null;
    setShowModal({ show: false, order: {} });
  }

  function renderSuccess() {
    let close = document.querySelector('#closeBuilder');
    setTimeout(() => close && close.click(), 1000);
    setTimeout(
      () =>
        (document.querySelector(`.${styles.container}`).style.height = '350px'),
      100
    );
  }

  let summary = Object.entries(order)
    .filter(el => el[1].count > 0)
    .map(el => ({ ...el[1], name: el[0] }));
  let total = summary
    .reduce((sum, { price, count }) => (sum = sum + price * count), 0)
    .toFixed(2);
  if (success) {
    renderSuccess();
    return (
      <div
        id="CheckoutModal"
        className={styles.CheckoutModal}
        onClick={({ target }) => {
          // close if clicked outside of container
          target.contains(document.querySelector('#CheckoutModal')) &&
            hideModal();
        }}
      >
        <div className={styles.container}>
          <div className={styles.success}>
            <span>Success! Enjoy your burger! :)</span>
            <button onClick={hideModal}>Ok!</button>
          </div>
        </div>
      </div>
    );
  }

  function onSuccess() {
    setTimeout(() => setSuccess(true), 550);
  }

  return (
    <div
      id="CheckoutModal"
      className={styles.CheckoutModal}
      onClick={({ target }) => {
        // close if clicked outside of container
        target.contains(document.querySelector('#CheckoutModal')) &&
          hideModal();
      }}
    >
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div id="closeModal" onClick={hideModal} className={styles.close}>
            <FontAwesomeIcon icon="times" />
          </div>
        </div>
        {/* Body */}
        <div className="container container-summary">
          <h3>
            <strong>Order Summary</strong>
          </h3>
          {/* Items List */}
          <div className={styles.summaryLine}>
            <span>
              <strong>Ingredients</strong>
            </span>
            <span>
              <strong>Each</strong>
            </span>
          </div>
          <div className={styles.itemsList}>
            {summary.map(({ name, price, count }, i) => (
              <div key={name + i} className={styles.summaryLine}>
                <span>
                  {name} {count > 1 && <strong>{`x${count}`}</strong>}
                </span>
                <span>${price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          {/* Total */}
          <div className={`${styles.summaryLine} ${styles.total}`}>
            <h4>
              <strong>Total:</strong>
            </h4>
            <h4>
              <strong>${total}</strong>
            </h4>
          </div>
          {/* Card Fields */}
          <div className={styles.formWrap}>
            <CheckoutForm total={Number(total)} onSuccess={onSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
