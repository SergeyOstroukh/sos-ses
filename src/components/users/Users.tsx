import { ChangeEvent, useState } from 'react'

import { UserCard } from '@/components'
import { useGetUserQuery } from '@/services'
import Pagination from '@mui/material/Pagination'

import s from './Users.module.css'

export const Users = () => {
  const [params, setParams] = useState({
    count: 12,
    page: 1,
    term: '',
  })
  const searchUserHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParams({ ...params, term: e.currentTarget.value })
  }
  const { data: users } = useGetUserQuery(params)
  let total

  if (users) {
    total = Math.ceil(users.totalCount / params.count)
  }

  return (
    <div className={s.user__page}>
      <input onChange={e => searchUserHandler(e)} value={params.term} />
      <div className={s.users}>
        {users?.items.map(el => {
          return <UserCard key={el.id} user={el} />
        })}
      </div>
      <Pagination
        count={total}
        onChange={(_, page) => setParams({ ...params, page: page })}
        page={params.page}
        siblingCount={1}
      />
    </div>
  )
}
