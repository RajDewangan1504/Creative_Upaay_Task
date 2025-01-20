import React from "react";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  Stack,
  Button,
  IconButton,
  Badge,
  Divider,

} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShareIcon from "@mui/icons-material/Share";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import avatar1 from "src/assets/images/users/avatar-1.png";
import avatar2 from "src/assets/images/users/avatar-2.png";
import avatar3 from "src/assets/images/users/avatar-3.png";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Mock Data
const columns = [
  {
    title: "To Do",
    color: "#7367F0",
    items: [
      {
        title: "Brainstorming",
        description: "Brainstorming brings team members' diverse experience into play.",
        priority: "Low",
        priorityColor: "#FFA000",
        comments: 12,
        files: 0,
        avatars: [avatar1, avatar2, avatar3],
      },
      {
        title: "Research",
        description: "User research helps you to create an optimal product for users.",
        priority: "High",
        priorityColor: "#FF5252",
        comments: 10,
        files: 3,
        avatars: [avatar2, avatar3],
      },
    ],
  },
  {
    title: "On Progress",
    color: "#FFAB00",
    items: [
      {
        title: "Wireframes",
        description: "Low fidelity wireframes include the most basic content and visuals.",
        priority: "High",
        priorityColor: "#FF5252",
        comments: 8,
        files: 1,
        avatars: [avatar3, avatar2],
      },
    ],
  },
  {
    title: "Done",
    color: "#00C853",
    items: [
      {
        title: "Design System",
        description: "It just needs to adapt the UI from what you did before.",
        priority: "Completed",
        priorityColor: "#00C853",
        comments: 15,
        files: 5,
        avatars: [avatar2, avatar1],
      },
    ],
  },
];

// Component to Render a Single Card
const TaskCard = ({ title, description, priority, priorityColor, comments, files, avatars }) => (
  <Box
    sx={{
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      borderRadius: 2,
      p: 2,
      mb: 2,
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.03)",
      },
    }}
  >
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography
        variant="caption"
        sx={{
          backgroundColor: "#DFA87433",
          color: "#D58D49",
          borderRadius: 1,
          px: 1,
          py: 0.25,
          fontSize: "0.75rem",
        }}
      >
        {priority}
      </Typography>
      <IconButton size="small">
        <MoreHorizIcon />
      </IconButton>
    </Stack>
    <Typography variant="h6" sx={{ fontWeight: 600, mt: 1 }}>
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
      {description}
    </Typography>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <AvatarGroup max={4} sx={{ "& .MuiAvatar-root": { width: 24, height: 24 } }}>
        {avatars.map((avatar, index) => (
          <Avatar key={index} src={avatar} />
        ))}
      </AvatarGroup>
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="row" spacing={0.5} alignItems="center">
          <CommentIcon fontSize="small" />
          <Typography variant="caption">{comments} comments</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <InsertDriveFileIcon fontSize="small" />
          <Typography variant="caption">{files} files</Typography>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);

// Main Component
export default function TaskBoard() {
  return (
    <Box sx={{ minHeight: "100vh", px:{px :0 ,sm :3} , py: {px :0 ,sm :3} }}   >
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        {/* Title and Action Icons */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            {/* Title */}
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '24px', color: '#0D062D' }}>
              Mobile App
            </Typography>
            {/* Action Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton
                sx={{
                  backgroundColor: '#F4F4F4',
                  color: '#5030E5',
                  width: '32px',
                  height: '32px',
                  fontSize: '16px',
                }}
              >

                <CreateOutlinedIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#F4F4F4',
                  color: '#5030E5',
                  width: '32px',
                  height: '32px',
                  fontSize: '16px',
                }}
              >
                <LinkIcon />
              </IconButton>
            </Stack>
          </Stack>

          {/* Invite Button, Avatars, and Share Icon */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              display: { xs: "none", sm: "flex" }, // Hidden on xs (mobile) screens
            }}
          >
            <Button
              variant="outlined"
              startIcon={<AddIcon fontSize="16px" />}
              sx={{
                textTransform: "capitalize",
                color: "#5030E5",
                fontSize: "14px",
                fontWeight: "500",
                marginRight: "1rem",
                px: 2,
                py: 0.5,
              }}
            >
              Invite
            </Button>
            <AvatarGroup max={4}>
              <Avatar alt="User 1" src={avatar1} />
              <Avatar alt="User 2" src={avatar2} />
              <Avatar alt="User 3" src={avatar3} />
              <Avatar alt="User 4" src={avatar1} />
              <Avatar
                sx={{
                  bgcolor: "#F4D7DA",
                  color: "#D25B68",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                +2
              </Avatar>
            </AvatarGroup>
          </Stack>
        </Stack>

        {/* Buttons Row */}
        <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between" }}>
          {/* Filter Button */}
          <Box direction="row" spacing={2} >
            <Button
              variant="outlined"
              startIcon={<FilterAltIcon />}
              endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#F5F5F5',
                borderColor: '#E4E4E4',
                color: '#787486',
                fontSize: '14px',
                fontWeight: '500',
                marginRight: "1rem",
                px: 2,
                py: 0.5,
                '&:hover': {
                  backgroundColor: '#EAEAEA',
                  borderColor: '#E4E4E4',
                },
              }}
            >
              Filter
            </Button>

            {/* Today Button */}
            <Button
              variant="outlined"
              startIcon={<CalendarTodayIcon />}
              endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#F5F5F5',
                borderColor: '#E4E4E4',
                color: '#787486',
                fontSize: '14px',
                fontWeight: '500',
                px: 2,
                py: 0.5,
                '&:hover': {
                  backgroundColor: '#EAEAEA',
                  borderColor: '#E4E4E4',
                },
              }}
            >
              Today
            </Button>
          </Box>

          {/* View and More Options */}
          <Box sx={{
              display: { xs: "none", sm: "flex" }, // Hidden on xs (mobile) screens
            }}>
            <Button
              variant="outlined"
              startIcon={<GroupOutlinedIcon fontSize="16px" />}
              // endIcon={<ExpandMoreIcon />}
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#F5F5F5',
                borderColor: '#E4E4E4',
                color: '#787486',
                fontSize: '14px',
                fontWeight: '500',
                marginRight: "2rem",
                px: 2,
                py: 0.5,

                '&:hover': {
                  backgroundColor: '#EAEAEA',
                  borderColor: '#E4E4E4',
                },
              }}
            >
              Share
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#5030E5',
                color: '#fff',
                minWidth: 'auto',
                marginRight: "0.5rem",
                p: 0.5,
                '&:hover': { backgroundColor: '#382BC1' },
              }}
            >
              <ViewComfyIcon />
            </Button>
            <IconButton>
              <GridViewOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      {/* Task Columns */}
      <Grid container spacing={3}>
        {columns.map((column, colIndex) => (
          <Grid item xs={12} md={4} key={colIndex}>
            <Box
              sx={{
                backgroundColor: "#f4f5f7",
                borderRadius: 2,
                p: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                // backgroundColor: "",
              }}

            >
              {/* Column Header */}
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Badge
                    color="primary"
                    variant="dot"
                    sx={{
                      "& .MuiBadge-dot": {
                        backgroundColor: column.color,
                      },
                    }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "black", px: 1 }}>
                    {column.title} ({column.items.length})
                  </Typography>
                </Stack>
                <IconButton size="small" sx={{ color: column.color }}>
                  <AddIcon />
                </IconButton>
              </Stack>
              <Divider sx={{ borderColor: column.color, borderWidth: 2, mt: 1, mb: 2 }} />
              {/* Tasks in Column */}
              {column.items.map((item, itemIndex) => (
                <TaskCard key={itemIndex} {...item} />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
