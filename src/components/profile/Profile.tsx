import {useParams} from "react-router-dom";
import {useGetUserProfileQuery} from "../../services/profileApi.ts";
import {useSendMessageMyFriendMutation} from "../../services/dialogsApi.ts";

export const Profile = () => {
    const { userId } = useParams();
    const {data, isLoading} = useGetUserProfileQuery(+userId!)
    const [sendMessage]= useSendMessageMyFriendMutation()
 const sendMessageHandler =()=>{
        sendMessage(userId)
 }
    if(isLoading) return 'Loading...'
    return (

        <div>
            <p>About me: {data?.aboutMe}</p>
            <p>{data?.contacts.instagram}</p>
            <span>{data?.lookingForAJobDescription}</span>
            <p>{data?.userId}</p>
            <p>{data?.fullName}</p>
            <img src={data?.photos.large} alt='tyt может быть ваша реклама'/>
            <button onClick={sendMessageHandler}>Send message</button>
        </div>
    );
};

