import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {Users} from "../../../types/userTypes.ts";
import s from './UserCard.module.css'
import {useFollowUserMutation, useUnFollowUserMutation} from "../../../services/usersApi.ts";
import {NavLink} from "react-router-dom";

type Props = {
    user: Users
}
export const UserCard = (props: Props) => {
    const userImg = props.user.photos && props.user.photos.small ? props.user.photos.small : props.user.photos && props.user.photos.large;
    const [followUser] = useFollowUserMutation()
    const [unFollowUser] = useUnFollowUserMutation()


    return (
        <Card className={s.card} sx={{ width: 200, height: 300, }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={userImg ? userImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'}
                    alt="avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <NavLink
                            to={`/profile/${props.user.id}`}>{props.user.name}
                        </NavLink>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.user.status}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    !props.user.followed?
                        <div>
                        <Button size="small" color="primary" onClick={()=>followUser(props.user.id)}>
                            follow
                        </Button>
                        </div>
                    :
                        <Button size="small" color="primary" onClick={()=>unFollowUser(props.user.id)}>
                            unFollow
                        </Button>
                }
            </CardActions>
        </Card>
    );
};

