import {useDialogViewedQuery} from "../../../../../services/dialogsApi.ts";
import sprite from '../../../../../assets/sprite.svg'
import s from './Message.module.css'



type Props={
    body:string
    messageId:string
    iconId: object
}
export const Message = (props:Props) => {

    const {data: messageViewed} = useDialogViewedQuery(props.messageId)
    console.log(`messageId ${props.messageId}`)
    console.log(`data ${messageViewed}`)

    return (
        <div>
            {props.body}
            {messageViewed ?
                <svg className={s.svgIcon} xmlns="http://www.w3.org/2000/svg" width="63" height="72" viewBox="0 0 63 72" fill="none">
                    <use xlinkHref={`${sprite}#${props.iconId}`}/>
                </svg>
                :
                <svg>
                    <use xlinkHref={`${sprite}#${props.iconId}`}/>
                </svg>}
        </div>
    );
};

