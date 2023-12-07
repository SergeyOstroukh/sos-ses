import { useEffect, useState } from 'react'

import { MessageNotViewed, Remove, ViewedMessage } from '@/assets'
import { useDialogViewedQuery, useGetUserProfileQuery, useRemoveDialogMutation } from '@/services'
import { formatRelative, subDays } from 'date-fns'

import s from './Message.module.css'

type Props = {
  body: string
  messageId: string
  time: string
  userId: number
}
export const Message = (props: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1100px)')

    const handleResize = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    handleResize(mediaQuery)
    mediaQuery.addEventListener('change', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, [])
  const [hover, setHover] = useState(false)
  const { data: messageViewed, isLoading } = useDialogViewedQuery(props.messageId)
  const [removeMessage] = useRemoveDialogMutation()
  const distance = formatRelative(subDays(new Date(), 3), new Date())
  const { data: profile } = useGetUserProfileQuery(props.userId)
  const userImg =
    profile?.photos && profile?.photos.small
      ? profile?.photos.small
      : profile?.photos && profile?.photos.large

  if (isLoading) {
    return '...Loading'
  }

  return (
    <div className={s.message__wrapper}>
      <div className={s.message__oneMessage}>
        <img
          alt={'userPhoto'}
          className={s.message__userPhoto}
          src={
            userImg
              ? userImg
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'
          }
        />
        <div
          className={s.message__text}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className={s.message__time}>{profile?.fullName}</div>
          <p className={s.message__paragraph}>{props.body}</p>
        </div>
      </div>
      {hover && !isMobile && (
        <div className={s.message__iconWrapper}>
          {distance}
          {messageViewed && <ViewedMessage />}
          {!messageViewed && <MessageNotViewed />}
          <div className={s.message__removeIcon}>
            <Remove callback={() => removeMessage(props.messageId)} />
          </div>
        </div>
      )}
    </div>
  )
}
