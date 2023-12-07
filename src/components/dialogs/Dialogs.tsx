import { useState } from 'react'

import { MessageNotViewed, ViewedMessage } from '@/assets'
import { MessageBlock } from '@/components'
import { useGetAllDialogsQuery, useGetDialogsByIdMutation } from '@/services'
import { formatRelative, subDays } from 'date-fns'

import s from './Dialogs.module.css'

export const Dialogs = () => {
  const { data, isLoading } = useGetAllDialogsQuery({})
  const [startChatting] = useGetDialogsByIdMutation()

  const [user, setUser] = useState(30449)
  const choseUser = (id: number) => {
    setUser(id)
    startChatting(id)
  }

  if (isLoading) {
    return '...Loading'
  }

  return (
    <div className={s.dialogs__wrapper}>
      <div className={s.dialogs__usersBlock}>
        {data?.map(el => {
          const distance = formatRelative(subDays(new Date(el.lastUserActivityDate), 3), new Date())
          const userImg =
            el?.photos && el?.photos.small ? el?.photos.small : el?.photos && el?.photos.large

          return (
            <div className={s.dialogs__users} key={el.id} onClick={() => choseUser(el.id)}>
              <img
                alt={'photos'}
                className={s.dialogs__usersPhoto}
                src={
                  userImg
                    ? userImg
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'
                }
              />
              <div className={s.dialogs__usersInfo}>
                <div>{el.userName}</div>
                <div>last activity: {distance}</div>
              </div>
              {/*{*/}
              {/*    el.hasNewMessages && `have a new message ${<MessageBlock userId={el.id}/>}`*/}
              {/*}*/}
            </div>
          )
        })}
      </div>
      <MessageBlock userId={user} />
    </div>
  )
}
