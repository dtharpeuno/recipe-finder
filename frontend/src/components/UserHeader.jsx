import {
  Typography
} from "@mui/material";
import {
  useUserStorage
} from "../hooks/main";

const UserHeader = () => {
  const { user } = useUserStorage()

  return (
    <Typography
      variant='body3'
      color='success'
      marginTop={1}
      paddingX={2}
      marginBottom={2}
    >
      Welcome,  {user.firstName} {user.lastName} / {user.emailAddress}
    </Typography>
  );
}

export default UserHeader