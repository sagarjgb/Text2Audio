import React, { useState } from "react";
import "./Donate.css";

function Donate() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [donationAmount, setDonationAmount] = useState(10);

  const handleDonation = (e) => {
    e.preventDefault();
    // Code to process donation payment
    console.log(`Processing payment of $${donationAmount} with card ending in ${cardNumber.slice(-4)}`);
    // Reset form
    setCardNumber("");
    setCardHolder("");
    setExpDate("");
    setCvv("");
    setDonationAmount(10);
  };

  return (
    <div className="donate-container">
      <h2>Make a Donation</h2>
      <form onSubmit={handleDonation}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <label htmlFor="cardHolder">Cardholder Name</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          required
        />
        <label htmlFor="expDate">Expiration Date</label>
        <input
          type="text"
          id="expDate"
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
          required
        />
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        <label htmlFor="donationAmount">Donation Amount</label>
        <input
          type="number"
          id="donationAmount"
          min="10"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          required
        />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
}

export default Donate;
