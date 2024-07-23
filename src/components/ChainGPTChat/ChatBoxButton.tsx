import {useEffect, useState} from 'react';
import {ChainGPTLogo} from './components/ChainGPTLogo/ChainGPTLogo.tsx';
import {TipBox} from './components/TipBox/TipBox.tsx';
import {CustomChatBox} from './components/CustomChatBox/CustomChatBox.tsx';
import styles from './style.module.css';
import preflightStyles from '../../styles/tailwindPreflight.module.scss';

export function ChatBoxButton({apiUri}: {apiUri: string}) {
  const [hiddenTip, setHiddenTip] = useState(true);
  const [hiddenChat, setHiddenChat] = useState(true);
  const [readyToShow, setReadyToShow] = useState(false);
  useEffect(() => {
    const chainGPTTalked = localStorage.getItem('chainGPT');
    if (!chainGPTTalked) {
      setHiddenTip(false);
      localStorage.setItem('chainGPT', 'chainGPT talked');
    }
    setReadyToShow(true);
  }, []);

  return <div className={preflightStyles.tailwindContainer}>
    { hiddenTip ? '' : readyToShow && <TipBox />}
    <div
      className={hiddenChat ? styles.chatBlock : styles.chatHidden}
      onClick={() => {
        setHiddenTip(true);
        setHiddenChat(false);
      }}><ChainGPTLogo className={styles.cursorPointer}/></div>
    <div className={!hiddenChat ? styles.chatBlock : styles.chatHidden}>
      <CustomChatBox
        onClose={() => {
          setHiddenChat(true);
        }}
        apiUri={apiUri}
      />
    </div>
  </div>
}
