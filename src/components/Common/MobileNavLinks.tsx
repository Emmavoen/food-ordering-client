import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/user-profile"
        className="flex  text-xl items-center text-gray-400 font-bold hover:text-orange-500  "
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex text-white flex-col w-full items-center px-3 font-bold bg-slate-900 hover:bg-gray-500"
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
