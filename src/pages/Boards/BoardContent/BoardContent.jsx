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

  // Trigger Khi bắt đầu kéo {drag} một phần tử
  const handleDragStart = (event) => {
    // console.log('handleDragStart: ', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId
      ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }

  // Trigger Khi bắt kết thúc hành động kéo {drag} một phần tử => Hành động thả {drop}
  const handleDragEnd = (event) => {
    // eslint-disable-next-line no-console
    // console.log('handleDragEnd: ', event)
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
