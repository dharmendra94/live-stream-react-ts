
import { Button } from '@mui/material';
import { useContext } from 'react';
import { SocketContext } from '../../socket-context';

const Notifications = () => {
    // TODO: Remove any
    const { answerCall, call, callAccepted } = useContext(SocketContext) as any;

    return (
        <>
            {
                call.isReceivedCall && !callAccepted && (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1>{call.name} is calling: </h1>
                        <Button variant='contained' color="primary" onClick={answerCall}>
                            Answer
                        </Button>
                    </div>
                )
            }
        </>
    )
}

export default Notifications;