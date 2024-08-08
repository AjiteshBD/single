import { useState } from 'react';

export default function AddContact() {
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const addContact = () => {
    // Logic to add contact
    alert(`Added ${contact} with address ${address}`);
  };

  return (
    <div className="container">
      <h1>Add Contact</h1>
      <input
        type="text"
        placeholder="Contact Name"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contact Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
}
