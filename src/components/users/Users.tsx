import {useGetUserQuery} from "../../services/usersApi.ts";
import Pagination from '@mui/material/Pagination';
import {ChangeEvent, useState} from "react";
import {UserCard} from './userCard/UserCard.tsx'
import s from './Users.module.css'

export const Users = () => {

    const [params, setParams]=useState({
        count: 12,
        page:1,
        term:""
    })
        const searchUserHandler =(e:ChangeEvent<HTMLInputElement>) =>{
                setParams({...params, term: e.currentTarget.value})
        }
    const {data:users} = useGetUserQuery(params)
    let total
    if (users){
         total = Math.ceil(users.totalCount / params.count);
    }

    return (
        <div className={s.user__page}>
            <input value={params.term} onChange={(e)=>searchUserHandler(e)}/>
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
