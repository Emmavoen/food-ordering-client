import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
          <CircleUserRound className="text-orange-500" />
          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white w-45  py-4">
          <DropdownMenuItem className="hover:bg-gray-200">
            <Link
              to="/user-profile"
              className="font-bold hover:text-orange-500 text-lg "
            >
              User Profile
            </Link>
          </DropdownMenuItem>
          <Separator className="bg-gray-300" />
          <DropdownMenuItem className="hover:bg-gray-200">
            <Button
              onClick={() => logout()}
              className="flex flex-1 font-bold bg-orange-500 py-6 text-white text-lg hover:bg-slate-700 "
            >
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UsernameMenu;
