import Box from '@mui/material/Box'
import Columns from './Column/Columns'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  /**
   * Thằng SortableContext yêu cầu items là một dạng ['id-1', 'id-2'] chứ không phỉa [(id: 'id-1')],
   (id: 'id-2')]
   * Nếu không đúng thì vẫn kéo thả được nhưng không có animation
   * https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512
   */
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { margin: 2 }
      }}>
        {/* {columns?.map((column) => {return <Columns key={column._id}/>})} {} use for modify */}
        {/* {columns?.map(column => (<Columns key={column._id}/>))}
        only 1 parameter no need to use () for (column) and no need to use return if you use () */}
        {columns?.map(column => <Columns key={column._id} column={column}/>)} {/* no need to use () if you only return 1 component only */}

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
    </SortableContext>
  )
}

export default ListColumns
