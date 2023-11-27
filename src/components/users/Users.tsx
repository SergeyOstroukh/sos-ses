import {useGetUserQuery} from "../../services/usersApi.ts";
import {UserCard} from "./userCard/UserCard.tsx";
import Pagination from '@mui/material/Pagination';
import {useState} from "react";

export const Users = () => {

    const [params, setParams]=useState({
        count: 10,
        page:1,
        term:""
    })
    console.log(params)
    const {data:users} = useGetUserQuery(params)
    let total
    if (users){
         total = Math.ceil(users.totalCount / params.count);
    }

    return (
        <div>
            {users?.items.map((el => {
                return(
                    <UserCard
                        key={el.id}
                        user={el}
                    />
                    )
            }))}
            <Pagination siblingCount={5}  count={total} onChange={(_, page)=>setParams({...params, page: page})}/>
        </div>
    );
}
