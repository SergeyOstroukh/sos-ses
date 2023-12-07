import { MessageNotViewed, Remove, ViewedMessage } from '@/assets'
import { useDialogViewedQuery, useGetAuthMeQuery, useRemoveDialogMutation } from '@/services'

import s from './Message.module.css'

type Props = {
  body: string
  messageId: string
  userId: number
}
export const Message = (props: Props) => {
  const { data: myProfileId } = useGetAuthMeQuery({})
  const { data: messageViewed, isLoading } = useDialogViewedQuery(props.messageId)
  const [removeMessage] = useRemoveDialogMutation()
  const isYourMessage = myProfileId?.data.id === props.userId ? s.message__text : s.message__myText

  if (isLoading) {
    return '...Loading'
  }

  return (
    <div className={s.message__wrapper}>
      <div className={isYourMessage}>{props.body}</div>
      <div className={s.message__iconWrapper}>
        {messageViewed && <ViewedMessage />}
        {!messageViewed && <MessageNotViewed />}
        <div className={s.message__removeIcon}>
          <Remove callback={() => removeMessage(props.messageId)} />
        </div>
      </div>
    </div>
  )
}
