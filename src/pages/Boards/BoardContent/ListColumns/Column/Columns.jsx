import { useState } from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ContentCutIcon from '@mui/icons-material/ContentCut'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import Button from '@mui/material/Button'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'


function Columns() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Box sx={{
      maxWidth: '300px',
      minWidth: '300px',
      bgcolor:  (theme) => (theme.palette.mode === 'dark' ? '#535c68' : '#ecf0f1'),
      ml: 2,
      borderRadius: '6px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
    }}>
      {/* Box Column Header */}
      <Box sx={{
        height: (theme) => theme.trello.columnHeaderHeight,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography variant="h6" sx={{
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
        >Column Title</Typography>
        <Box>
          <Tooltip title="More Options">
            <ExpandMoreIcon sx={{ color: 'text.primary', cursor: 'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby' : 'basic-column-dropdown'
            }}
          >
            <MenuItem>
              <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add new card</ListItemText>
              <ListItemIcon><ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/></ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCutIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <ListItemIcon><ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/></ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentCopyIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <ListItemIcon><ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/></ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><ContentPasteIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <ListItemIcon><ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/></ListItemIcon>
            </MenuItem>

            <Divider />
            <MenuItem>
              <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
              <ListItemIcon><ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/></ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
              <ListItemText>Archive this coulumn</ListItemText>
              <ListItemIcon><ArrowRightRoundedIcon sx={{ fontSize: '2em' }}/></ListItemIcon>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* List Cards */}
      <ListCards />
      {/* Box Column Footer */}
      <Box sx={{
        height: (theme) => theme.trello.columnFooterHeight,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }}/>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Columns