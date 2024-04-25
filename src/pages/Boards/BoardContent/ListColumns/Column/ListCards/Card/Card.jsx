import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Card({ card }) {
  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  // if (temporaryHideMedia) {
  //   return (
  //     <MuiCard sx={{
  //       cursor: 'pointer',
  //       boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
  //       overflow: 'unset'
  //     }}>
  //       <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
  //         <Typography>Card #1</Typography>
  //       </CardContent>
  //     </MuiCard>
  //   )
  // }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgb(0, 0, 0, 0.3)',
      overflow: 'unset'
    }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} title="ReactJS"/>}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {shouldShowCardAction() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupIcon />}>
            {card?.memberIds?.length}</Button>}
          {!!card?.comments?.length && <Button size="small" startIcon={<CommentIcon />}>
            {card?.comments?.length}</Button>}
          {!!card?.attachments?.length && <Button size="small" startIcon={<AttachmentIcon />}>
            {card?.attachments?.length}</Button>}
        </CardActions>
      }
    </MuiCard>
  )
}

export default Card
