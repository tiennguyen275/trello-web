import Box from '@mui/material/Box'
import Columns from './Column/Columns'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns() {

  return (
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
      <Columns />
      <Columns />

      {/* Box Add new column CTA */}
      <Box sx={{
        maxWidth: '200px',
        minWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor:  (theme) => (theme.palette.mode === 'dark' ? '#535c68' : '#a29bfe')
      }}>
        <Button startIcon={<NoteAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumns
