import {useParams} from "react-router-dom";
import {useGetUserProfileQuery} from "../../services/profileApi.ts";
import {useSendMessageMyFriendMutation} from "../../services/dialogsApi.ts";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import s from './Profile.module.css'
import Button from "@mui/material/Button";

export const Profile = () => {
    const {userId} = useParams();
    const {data, isLoading} = useGetUserProfileQuery(+userId!)
    const [open, setOpen] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const [sendMessage] = useSendMessageMyFriendMutation()
    const sendMessageHandler = () => {
        sendMessage({userId, text})
        setOpen(false)
    }
    if (isLoading) return 'Loading...'
    return (

        <div>
            <p>About me: {data?.aboutMe}</p>
            <p>{data?.contacts.instagram}</p>
            <span>{data?.lookingForAJobDescription}</span>
            <p>{data?.userId}</p>
            <p>{data?.fullName}</p>
            <img src={data?.photos.large} alt='tyt может быть ваша реклама'/>
            <div>
                <Button onClick={()=>setOpen(true)}>Send message</Button>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box className={s.profile__modal__box}>
                        <h2>Send message to {data?.fullName}</h2>
                        <TextField onChange={(e)=>setText(e.currentTarget.value)} id="outlined-basic" label="text something" variant="outlined"/>
                        <div className={s.profile__modal__box__buttons}>
                            <Button onClick={()=>setOpen(false)}>Cancel</Button>
                            <Button onClick={sendMessageHandler}>Send message</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

