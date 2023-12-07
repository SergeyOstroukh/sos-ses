import { Message } from '@/components'
import { useGetDialogWithFriendQuery, useGetUserProfileQuery } from '@/services'

import s from './messageBlock.module.css'

type Props = {
  userId: number
}

export const MessageBlock = (props: Props) => {
  const { data, isLoading } = useGetDialogWithFriendQuery(
    { userId: props.userId },
    { pollingInterval: 3000 }
  )

  const { data: userInfo, isLoading: userInfoLoading } = useGetUserProfileQuery(props.userId)

  if (isLoading) {
    return '...Loading'
  }
  if (userInfoLoading) {
    return '...Loading'
  }
  const userImg =
    userInfo?.photos && userInfo?.photos.small
      ? userInfo?.photos.small
      : userInfo?.photos && userInfo?.photos.large

  return (
    <div className={s.messageBlock__wrapper}>
      <div className={s.messageBlock__dialogInfo}>
        {userInfo?.fullName}
        <img
          alt={'userPhoto'}
          className={s.messageBlock__userImage}
          src={
            userImg
              ? userImg
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'
          }
        />
      </div>
      <div className={s.messageBlock__message}>
        {data?.items.map(el => {
          return (
            <Message
              body={el.body}
              key={el.id}
              messageId={el.id}
              time={el.addedAt}
              userId={el.senderId}
            />
          )
        })}
        {data?.items.length === 0 && (
          <div className={s.messageBlock__description}>начните диалог</div>
        )}
      </div>
      <div className={s.messageBlock__sendForm}></div>
    </div>
  )
}
