import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import AppSettingsAltRoundedIcon from '@mui/icons-material/AppSettingsAltRounded'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import LaptopWindowsRoundedIcon from '@mui/icons-material/LaptopWindowsRounded'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded'

function Workspaces() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        sx={{ color: 'white' }}
        id="basic-button-workspaces"
        aria-controls={open ? 'basic-menu-workspaces' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Workspaces
      </Button>
      <Menu
        id="basic-menu-workspaces"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby' : 'basic-button-workspaces'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <AppSettingsAltRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Applications</ListItemText>
          <ListItemIcon>
            <ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FolderRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Folders</ListItemText>
          <ListItemIcon>
            <ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/>
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <HandymanRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Tools</ListItemText>
          <ListItemIcon>
            <ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LaptopWindowsRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Windows</ListItemText>
          <ListItemIcon>
            <ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Add Item to Menu...</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Customize Menu...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Workspaces
