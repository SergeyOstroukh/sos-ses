import {useGetUserQuery} from "../../services/usersApi.ts";
import Pagination from '@mui/material/Pagination';
import {useState} from "react";
import {UserCard} from './userCard/UserCard.tsx'
import s from './Users.module.css'

export const Users = () => {

    const [params, setParams]=useState({
        count: 12,
        page:1,
        term:""
    })

    const {data:users} = useGetUserQuery(params)
    let total
    if (users){
         total = Math.ceil(users.totalCount / params.count);
    }

    return (
        <div className={s.user__page}>
            <div className={s.users}>
                {users?.items.map((el => {
                    return(
                        <UserCard
                            key={el.id}
                            user={el}
                        />
                    )
                }))}
            </div>
            <Pagination
                siblingCount={1}
                count={total}
                page={params.page}
                onChange={(_, page)=>setParams({...params, page: page})}/>
        </div>
    );
}
