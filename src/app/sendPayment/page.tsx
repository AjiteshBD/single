import { useState } from 'react';

export default function SendPayment() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const sendPayment = () => {
    // Logic to send payment
    alert(`Sent ${amount} to ${recipient}`);
  };

  return (
    <div className="container">
      <h1>Send Payment</h1>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={sendPayment}>Send Payment</button>
    </div>
  );
}
