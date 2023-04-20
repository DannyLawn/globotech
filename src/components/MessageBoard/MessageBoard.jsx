import { useSelector } from "react-redux";
import styles from './MessageBoard.module.scss';

const MessageBoard = () => {

    const { boardMessage, sendingAnApplication } = useSelector(store => store.requestForm);

    return (
        <>
        { sendingAnApplication ? (
             <div className={styles.messageBoard}>
             <p className={styles.messageBoardTextContent}>{boardMessage}</p>
         </div>
        ) : (<div className={`${styles.messageBoard} ${styles.messageBoard_error}`}>
        <p className={styles.messageBoardTextContent}>{boardMessage}</p>
    </div>)}
        </>
       )
}

export default MessageBoard;