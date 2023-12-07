import { MessageNotViewed, Remove, ViewedMessage } from '@/assets'
import { useDialogViewedQuery, useGetUserProfileQuery, useRemoveDialogMutation } from '@/services'
import { format } from 'date-fns'

import s from './Message.module.css'

type Props = {
  body: string
  messageId: string
  time: string
  userId: number
}
export const Message = (props: Props) => {
  const { data: messageViewed, isLoading } = useDialogViewedQuery(props.messageId)
  const [removeMessage] = useRemoveDialogMutation()
  const { data: profile } = useGetUserProfileQuery(props.userId)
  const distance = format(new Date(props.time), 'HH:mm')

  const userImg =
    profile?.photos && profile?.photos.small
      ? profile?.photos.small
      : profile?.photos && profile?.photos.large

  if (isLoading) {
    return '...Loading'
  }

  return (
    <div className={s.message__wrapper}>
      <img
        alt={'userPhoto'}
        className={s.message__userPhoto}
        src={
          userImg
            ? userImg
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'
        }
      />
      <div className={s.message__text}>
        <div className={s.message__time}>
          {profile?.fullName} {'   '} {distance}
        </div>
        <p className={s.message__paragraph}>{props.body}</p>
      </div>
      <div className={s.message__iconWrapper}>
        {messageViewed && <ViewedMessage />}
        {!messageViewed && <MessageNotViewed />}
        <Remove callback={() => removeMessage(props.messageId)} />
      </div>
    </div>
  )
}
