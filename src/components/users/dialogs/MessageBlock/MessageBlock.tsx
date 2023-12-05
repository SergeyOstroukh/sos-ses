import s from './messageBlock.module.css'
import { useGetDialogWithFriendQuery} from "../../../../services/dialogsApi.ts";
import {Message} from "./message/Message.tsx";
import {useGetUserProfileQuery} from '../../../../services/profileApi.ts';

type Props = {
    userId: number
}

export const MessageBlock = (props: Props) => {
    const {data, isLoading} = useGetDialogWithFriendQuery({userId: props.userId}, {pollingInterval:3000})
    console.log(data)
    const { data: userInfo, isLoading: userInfoLoading } = useGetUserProfileQuery(props.userId)
    if (isLoading) return '...Loading'
    if (userInfoLoading) return '...Loading'
    const userImg = userInfo?.photos && userInfo?.photos.small ? userInfo?.photos.small : userInfo?.photos && userInfo?.photos.large;
    return (
        <div className={s.messageBlock__wrapper}>
            <div className={s.messageBlock__dialogInfo}>
                {userInfo?.fullName}
                <img
                    className={s.messageBlock__userImage}
                    src={userImg ? userImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'} alt="userPhoto"/>
            </div>
         <div className={s.messageBlock__message}>
             {data?.items.map(el=>{
                 return(
                     <Message
                         body={el.body}
                         messageId={el.id}
                         userId={el.senderId}
                     />
                 )
             })}
         </div>
            <div className={s.messageBlock__sendForm}>

            </div>
        </div>
    );
};