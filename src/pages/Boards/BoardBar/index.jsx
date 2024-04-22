import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const avatar_styles = {
  gap: 0.5,
  '& .MuiAvatar-root': {
    width: 32,
    height: 32,
    fontSize: 16,
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    '&: first-of-type': { bgcolor: '#a4b0be' }
  }
}
const menu_styles = {
  color: 'white',
  bgcolor: 'transprarent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '5px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderBottom: '1px solid white',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#323b53' : '#9c88ff')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Chip
          sx={menu_styles}
          icon={<DashboardIcon />}
          label="Dash Board"
          onClick={() => {}}/>
        <Chip
          sx={menu_styles}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          onClick={() => {}}/>
        <Chip
          sx={menu_styles}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => {}}/>
        <Chip
          sx={menu_styles}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}/>
        <Chip
          sx={menu_styles}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}}/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Button variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: '#bdc3c7' }
          }}
        >Invite</Button>

        <AvatarGroup max={4} sx={avatar_styles}>
          <Tooltip title ="John">
            <Avatar alt="John" src="/static/images/avatar/2.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
          <Tooltip title ="Hemy">
            <Avatar alt="Hemy Sharp" src="/static/images/avatar/2.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
          <Tooltip title="Temy">
            <Avatar alt="Temy Sharp" src="/static/images/avatar/3.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
          <Tooltip title="Sherry">
            <Avatar alt="Sherry Sharp" src="/static/images/avatar/1.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ ...avatar_styles, bgcolor: '#a4b0be' }}/>
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
