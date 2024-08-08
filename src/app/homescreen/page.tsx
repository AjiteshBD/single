export default function Homescreen() {
    return (
      <div className="container">
        <div className="rooms">
          <h1>Send Payment</h1>
          <div className="room-card">
            <p>Recipient</p>
            <input type="text" placeholder="Recipient Address" />
          </div>
          <div className="room-card">
            <p>Amount</p>
            <input type="number" placeholder="Amount" />
          </div>
          <button className="send-payment">Send Payment</button>
        </div>
      </div>
    );
  }
  