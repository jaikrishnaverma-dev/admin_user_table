import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import GroupsIcon from '@mui/icons-material/Groups';
import Info from '@mui/icons-material/Info';
import UserTable from "../components/pages/UserTable";
export const panelChildren = [
    {
      path: "users",
      element: <UserTable />,
      icon: <ManageAccountsIcon />,
      inNav: true,
    },
    {
      path: "update",
      element: <UserTable />,
      icon: <ManageAccountsIcon />,
      inNav: false,
    },
    {
      path: "groups",
      element: <UserTable />,
      icon: <GroupsIcon />,
      inNav: true,
    },
    {
      path: "profile",
      element: <UserTable />,
      icon: <AccountBoxIcon />,
      inNav: true,
    },
    {
      path: "about",
      element: <UserTable />,
      icon: <Info />,
      inNav: true,
    },
    {
      path: "*",
      element: <UserTable />,
      icon: <AccountBoxIcon />,
      inNav: false,
    },
  ];