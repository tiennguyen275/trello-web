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
  '& .MuiAvatar-root': {
    width: 30,
    height: 30,
    fontSize: 16
  }
}
const menu_styles = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: '#f3e5f5'
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
      borderTop: '1px solid #8A2BE2'
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
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>

        <AvatarGroup max={4} sx={avatar_styles}>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={avatar_styles}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Hemy Sharp" src="/static/images/avatar/2.jpg" sx={avatar_styles}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Temy Sharp" src="/static/images/avatar/3.jpg" sx={avatar_styles}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={avatar_styles}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={avatar_styles}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={avatar_styles}/>
          </Tooltip>
          <Tooltip title>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={avatar_styles}/>
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
