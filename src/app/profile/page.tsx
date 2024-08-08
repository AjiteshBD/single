import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const router = useRouter();

  const saveProfile = () => {
    // Save profile logic
    router.push('/sendPayment');
  };

  return (
    <div className="container">
      <h1>Setup Profile</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button onClick={saveProfile}>Save Profile</button>
    </div>
  );
}
