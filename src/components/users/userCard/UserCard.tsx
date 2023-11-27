import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import  {Users} from "../../../types/userTypes.ts";

type Props = {
    user:Users
}
export const UserCard = (props:Props) => {
    const userImg = props.user.photos && props.user.photos.small ? props.user.photos.small : props.user.photos && props.user.photos.large;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={userImg? userImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'}
                    alt="avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.user.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.user.status}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {
                        props.user.followed? 'Follow': 'Unfollow'
                    }
                </Button>
            </CardActions>
        </Card>
    );
};

