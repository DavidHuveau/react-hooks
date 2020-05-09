import React, { useState, useEffect } from "react";

export const FRIEND_LIST = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(Math.random() >= 0.5);
  });

  return isOnline;
}

export function CustomHook1() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {
          FRIEND_LIST.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))
        }
      </select>
      <span style={{ backgroundColor: isRecipientOnline ? 'green' : 'red' }}>Status</span>
    </>
  );
}