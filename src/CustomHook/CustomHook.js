import React, { useState, useEffect } from "react";
import { friendList } from '../constants';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    setIsOnline(Math.random() >= 0.5);
  });

  return isOnline;
}

export function CustomHook() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <select
        value={recipientID}
        onChange={e => setRecipientID(Number(e.target.value))}
      >
        {
          friendList.map(friend => (
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