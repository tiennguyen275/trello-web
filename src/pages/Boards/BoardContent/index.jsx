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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COULUMN_HEADER_HEIGHT = '50px'
const COULUMN_FOOTER_HEIGHT = '50px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#323b53' : '#9c88ff'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          margin: 2
        }
      }}>
        {/* Box Column #1*/}
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
            height: COULUMN_HEADER_HEIGHT,
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
          {/* Box List Card */}
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
              ${theme.trello.boardContentHeight} -
              ${theme.spacing(5)} -
              ${COULUMN_HEADER_HEIGHT} -
              ${COULUMN_FOOTER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx-1024x512.jpg"
                title="ReactJS"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>ReactJS</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Box Column Footer */}
          <Box sx={{
            height: COULUMN_FOOTER_HEIGHT,
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

        {/* Box Column #2 */}
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
            height: COULUMN_HEADER_HEIGHT,
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
          {/* Box List Card */}
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
              ${theme.trello.boardContentHeight} -
              ${theme.spacing(5)} -
              ${COULUMN_HEADER_HEIGHT} -
              ${COULUMN_FOOTER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx-1024x512.jpg"
                title="ReactJS"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>ReactJS</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card #1</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Box Column Footer */}
          <Box sx={{
            height: COULUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  )
}

export default BoardContent
