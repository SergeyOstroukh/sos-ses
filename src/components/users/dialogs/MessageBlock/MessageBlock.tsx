import Card from "@mui/material/Card";
import s from './messageBlock.module.css'
import { useGetDialogWithFriendQuery} from "../../../../services/dialogsApi.ts";
import {Message} from "./message/Message.tsx";

type Props = {
    userId: number
}

export const MessageBlock = (props: Props) => {
    const {data, isLoading} = useGetDialogWithFriendQuery({userId: props.userId})

    if (isLoading) return '...Loading'

    return (
        <div className={s.messageBlock__wrapper}>
            <Card>{data?.items.map(el=>{
                return(
                        <Message
                        body={el.body}
                        messageId={el.id}
                        iconId={{
                            picther: 'picther',
                            github:'github'
                            }}
                        />
                )
            })}</Card>
        </div>
    );
};