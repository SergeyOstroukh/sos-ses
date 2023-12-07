import { NavLink } from 'react-router-dom'

import { Users } from '@/assets/types/userTypes'
import { useFollowUserMutation, useUnFollowUserMutation } from '@/services'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import s from './UserCard.module.css'

type Props = {
  user: Users
}
export const UserCard = (props: Props) => {
  const userImg =
    props.user.photos && props.user.photos.small
      ? props.user.photos.small
      : props.user.photos && props.user.photos.large
  const [followUser] = useFollowUserMutation()
  const [unFollowUser] = useUnFollowUserMutation()

  return (
    <Card className={s.card} sx={{ height: 300, width: 200 }}>
      <CardActionArea>
        <CardMedia
          alt={'avatar'}
          component={'img'}
          height={'140'}
          image={
            userImg
              ? userImg
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'
          }
        />
        <CardContent>
          <Typography component={'div'} gutterBottom variant={'h5'}>
            <NavLink to={`/profile/${props.user.id}`}>{props.user.name}</NavLink>
          </Typography>
          <Typography component={'div'} gutterBottom variant={'h5'}>
            {props.user.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!props.user.followed ? (
          <div>
            <Button color={'primary'} onClick={() => followUser(props.user.id)} size={'small'}>
              follow
            </Button>
          </div>
        ) : (
          <Button color={'primary'} onClick={() => unFollowUser(props.user.id)} size={'small'}>
            unFollow
          </Button>
        )}
      </CardActions>
    </Card>
  )
}
