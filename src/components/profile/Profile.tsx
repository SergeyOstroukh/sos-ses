import {useParams} from "react-router-dom";
import {useGetUserProfileQuery} from "../../services/profileApi.ts";
import s from './Profile.module.css'

export const Profile = () => {
    const { userId } = useParams();
    const {data, isLoading} = useGetUserProfileQuery(+userId!)

    if(isLoading) return 'Loading...'
    return (
        <div className={s.header}>

        </div>

        // <div>
        //     {/*<p>About me: {data?.aboutMe}</p>*/}
        //     {/*<p>{data?.contacts.instagram}</p>*/}
        //     {/*<span>{data?.lookingForAJobDescription}</span>*/}
        //     {/*<p>{data?.userId}</p>*/}
        //     {/*<p>{data?.fullName}</p>*/}
        //     {/*<img src={data?.photos.large} alt='tyt может быть ваша реклама'/>*/}
        // {/*</div>*/}
    );
};

