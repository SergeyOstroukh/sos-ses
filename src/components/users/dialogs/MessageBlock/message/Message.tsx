import {useDialogViewedQuery, useRemoveDialogMutation} from "../../../../../services/dialogsApi.ts";
import s from './Message.module.css'
import {ViewedMessage} from "../../../../../assets/ViewedMessage.tsx";
import {MessageNotViewed} from "../../../../../assets/MessageNotViewed.tsx";
import {Remote} from "../../../../../assets/Remote.tsx";




type Props={
    body:string
    messageId:string
}
export const Message = (props:Props) => {

    const {data: messageViewed, isLoading} = useDialogViewedQuery(props.messageId)
    const [removeMessage] = useRemoveDialogMutation()


    return (
        <div className={s.messageWrapper}>
            {props.body}
            {isLoading? (<span>загрузка</span>):
                messageViewed ?
                    <div className={s.iconsStyle}>
                        <ViewedMessage />
                        <Remote callback={()=>removeMessage(props.messageId)}/>
                    </div>

                        :
                    <div className={s.iconsStyle}>
                        <MessageNotViewed/>
                        <Remote callback={()=>removeMessage(props.messageId)}/>
                    </div>

                }


        </div>
    );
};

