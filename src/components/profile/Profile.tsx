import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetUserProfileQuery, useSendMessageMyFriendMutation } from '@/services'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'

import s from './Profile.module.css'

export const Profile = () => {
  const { userId } = useParams()
  const [text, setText] = useState<string>('')
  const { data, isLoading } = useGetUserProfileQuery(+userId!)
  const [open, setOpen] = useState<boolean>(false)
  const [sendMessage] = useSendMessageMyFriendMutation()
  const sendMessageHandler = () => {
    if (userId) {
      sendMessage({ text, userId })
      setOpen(false)
    }
  }

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <div>
      <p>About me: {data?.aboutMe}</p>
      <p>{data?.contacts.instagram}</p>
      <span>{data?.lookingForAJobDescription}</span>
      <p>{data?.userId}</p>
      <p>{data?.fullName}</p>
      <img alt={'tyt может быть ваша реклама'} src={data?.photos.large} />
      <div>
        <Button onClick={() => setOpen(true)}>Send message</Button>
        <Modal
          aria-describedby={'parent-modal-description'}
          aria-labelledby={'parent-modal-title'}
          onClose={() => setOpen(false)}
          open={open}
        >
          <Box className={s.profile__modal__box}>
            <h2>Send message to {data?.fullName}</h2>
            <TextField
              id={'outlined-basic'}
              label={'text something'}
              onChange={e => setText(e.currentTarget.value)}
              variant={'outlined'}
            />
            <div className={s.profile__modal__box__buttons}>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={sendMessageHandler}>Send message</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
