// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

// icons
const icons = {
    FiberManualRecordOutlinedIcon
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const myproject = {
  id: 'myproject',
  title: 'My Project',
  type: 'group',
  children: [
    {
      id: 'Project1',
      title: 'Mobile App',
      type: 'item',
      url: '/Project1',
      icon: icons.FiberManualRecordOutlinedIcon,
    //   target: true
    },
    {
      id: 'Project2',
      title: 'Website Redesign',
      type: 'item',
      url: '/Project2',
      icon: icons.FiberManualRecordOutlinedIcon,
    //   target: true
    },
    {
        id: 'Project3',
        title: 'Design System ',
        type: 'item',
        url: '/Project3',
        icon: icons.FiberManualRecordOutlinedIcon,
        // target: true
      },
      {
        id: 'Project4',
        title: 'Wireframes',
        type: 'item',
        url: '/Project4',
        icon: icons.FiberManualRecordOutlinedIcon,
        // target: true
      }
  ]
};

export default myproject;
