// LogOutPage.tsx
import { useNavigate} from 'react-router-dom';
import profileService from "../../services/ProfileService.ts";


const LogoutPage = async () => {


  const navigate = useNavigate()
  await profileService.logout()
  localStorage.clear();
  sessionStorage.clear();

  navigate("/")


  return (<></>)
};

export default LogoutPage;
