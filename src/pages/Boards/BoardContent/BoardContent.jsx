import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import Columns from './ListColumns/Column/Columns'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { useEffect, useState } from 'react'
import { mapOrder } from '~/utilities/sorts'
import { arrayMove } from '@dnd-kit/sortable'
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  // PointerSensor,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  /*
  https://docs.dndkit.com/api-documentation/sensoqrs/touch#delay
  Nếu dùng PointerSensor mặc định thì phải kết hợp thuộc tính CSS touch-action: 'none' ở những phần tử kéo
  thả - nhưng mà còn bug
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  */

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  /*
  https://docs.dndkit.com/api-documentation/sensors/touch#delay
  Nhấn giữ 250ms và dung sai của cảm ứng (di chuyển/chênh lệch 5px) thì mới kích hoạt event
  Tolerance nó đại diện cho khoảng cách (tính bằng pixel) của chuyển động được chấp nhận trước khi thao tác giữ và kéo (drag) bị hủy bỏ. */
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  // Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để trải nghiệm trên mobile tốt nhất, không bị bug.
  // const mySensors = useSensors(pointerSensor)
  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  // Cùng 1 thời điểm chỉ có 1 phần tử đang được kéo (column hoặc card)
  const [activeDragItemId, setActiveDragItemId] = useState([null])
  const [activeDragItemType, setActiveDragItemType] = useState([null])
  const [activeDragItemData, setActiveDragItemData] = useState([null])

  useEffect(() => {
    setOrderedColumnsState(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // Tìm Column theo CardId
  const findColumnByCardId = (cardId) => {
    // Lưu ý: nên dùng c.cards thay vì c.cardOrderIds bởi vì bước handleDragOver sẽ làm
    // làm dữ liệu cho cards hoàn chỉnh trước rồi mới tạo ra cardOrderIds mới.
    return orderedColumnsState.find(column => column?.cards?.map(card => card._id)?.include(cardId))
  }

  // Trigger Khi bắt đầu kéo {drag} một phần tử
  `const handleDragStart = (event) => {
    // console.log('handleDragStart: ', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId
      ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }`

  // Trigger trong qúa trình kéo {drag} một phần tử
  const handleDragOver = (event) => {
    // Không làm gì thêm nếu đang kéo column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    // Còn nếu kéo card thì card thì xử lý thêm để có ther kéo card qua lại giữa các columns
    console.log('handleDragOver', event)
    const { active, over } = event

    // Cần đảm bảo nếu không tồn tại active hoặc over (khi kéo ra khỏi phạm vi cointainer) thì không
    // làm gì (tránh crash trang)
    if (!active || !over) return

    // activeDraggingCard: card đang được kéo
    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
    // overCard: card đang tương tác trên hoặc dưới so với card được kéo ở trên
    const { id: overCardId } = over

    // Tìm 2 columns theo cardId
  }
  // Trigger Khi bắt kết thúc hành động kéo {drag} một phần tử => Hành động thả {drop}
  const handleDragEnd = (event) => {
    // console.log('handleDragEnd: ', event)

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      // console.log('Action drag Card - And temporarily do nothing!')
      return
    }

    const { active, over } = event

    // Kiểm tra nếu không tồn tại over (kéo linh tinh ra ngoài thì return luôn tránh lỗi)
    if (!over) return

    // Nếu vị trí mới sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      // Lấy vị trí cũ (từ active)
      const oldIndex = orderedColumnsState.findIndex(c => c._id === active.id)
      // Lấy vị trí mới (từ over)
      const newIndex = orderedColumnsState.findIndex(c => c._id === over.id)

      /* Dùng arrayMove của thằng dnd-kit để sắp xếp lại mảng Columns ban đầu
      Code của arrayMove ở đây: dnd-kit/packages/sortable/src/utilities/arrayMove.ts */
      const dndOrderedColumns = arrayMove(orderedColumnsState, oldIndex, newIndex)

      /* 2 cái console.log dữ liệu này sau dùng để xử lý gọi API
      const dndOrderedColumns = orderedColumnsState.map(c => c._id)
      console.log('dndOrderedColumns: ', dndOrderedColumns)
      console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)
      */

      // Cập nhập lại state columns ban đầu sau khi đã kéo thả
      setOrderedColumnsState(dndOrderedColumns)
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  /**
   * Animation khi thả (Drop) phần tử - Test bằng cách kéo thả trực tiếp và nhìn phẩn giữ chỗ Ovelay
   (video 32)
  */
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: '0.5' } }
    })
  }

  return (
    <DndContext
      sensors={mySensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#323b53' : '#9c88ff'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumnsState}/>
        <DragOverlay dropAnimation={customDropAnimation}>
          {/* {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Columns column={activeDragItemData}/>}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData}/>} */}

          {/* Thay thế bằng toán tử 3 ngôi */}
          {!activeDragItemType ? null : (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? <Columns column={activeDragItemData}/>
            : (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD ? <Card card={activeDragItemData}/> : null ))}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
