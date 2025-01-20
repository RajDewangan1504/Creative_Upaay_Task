// material-ui
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

// assets
import SearchOutlined from '@ant-design/icons/SearchOutlined';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search() {
  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: '100%', md: 300 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined style={{ color: '#8A92A6', fontSize: '18px' }} />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            'aria-label': 'search',
          }}
          placeholder="Search for anything..."
          sx={{
            backgroundColor: '#F4F5F7', // Light gray background
            borderRadius: '8px',    
            // width:'500px',   // Rounded corners
            padding: '4px 12px',       // Add padding for inner content
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',         // Remove border
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',         // Prevent border on hover
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
