import Card from "@mui/material/Card";
import s from './messageBlock.module.css'
import {useGetDialogWithFriendQuery} from "../../../../services/dialogsApi.ts";

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
                    <div>
                        {el.body}
                    </div>
                )
            })}</Card>
        </div>
    );
};