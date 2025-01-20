// assets
import { DashboardOutlined } from '@ant-design/icons';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


// import {Home} from "src/assets/icons/home.svg";

// icons
const icons = {
  GridViewOutlinedIcon,
  TextsmsOutlinedIcon,
  PlaylistAddCheckOutlinedIcon,
  SupervisedUserCircleOutlinedIcon,
  SettingsOutlinedIcon
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-navigation',
  title: '',
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/',
      icon: icons.GridViewOutlinedIcon
      , // Replace with the actual icon for "Home"
      breadcrumbs: false
    },
    {
      id: 'messages',
      title: 'Messages',
      type: 'item',
      url: '/messages',
      icon: icons.TextsmsOutlinedIcon
      , // Replace with the actual icon for "Messages"
      breadcrumbs: false
    },
    {
      id: 'tasks',
      title: 'Tasks',
      type: 'item',
      url: '/tasks',
      icon: icons.PlaylistAddCheckOutlinedIcon, // Replace with the actual icon for "Tasks"
      breadcrumbs: false
    },
    {
      id: 'members',
      title: 'Members',
      type: 'item',
      url: '/members',
      icon: icons.SupervisedUserCircleOutlinedIcon, // Replace with the actual icon for "Members"
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.SettingsOutlinedIcon, // Replace with the actual icon for "Settings"
      breadcrumbs: false
    }
  ]
};


export default dashboard;
