export const mockData = {
  board: {
    _id: 'board-id-01',
    title: 'Dash Board',
    description: 'Pro MERN stack Course',
    type: 'public', // 'private'
    ownerIds: [], // Những users là Admin của board
    memberIds: [], // Những users là member bình thường của board
    columnOrderIds: ['column-id-01', 'column-id-03', 'column-id-02'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards

    columns: [
      {
        _id: 'column-id-01', // Định danh duy nhất cho cột
        boardId: 'board-id-01', // Định danh của bảng mà cột thuộc về
        title: 'Column Tilte #1', // Tiêu đề của cột
        cardOrderIds: ['card-id-01', 'card-id-02', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-06',
          'card-id-07'], // Thứ tự của các thẻ trong cột
        cards: [
          {
            _id: 'card-id-01', // Định danh duy nhất cho thẻ
            boardId: 'board-id-01', // Định danh của bảng mà thẻ thuộc về
            columnId: 'column-id-01', // Định danh của cột mà thẻ thuộc về
            title: 'ReactJS + Vite', // Tiêu đề của thẻ
            description: 'Markdown Syntax (sẽ ở khóa nâng cao nhé)', // Mô tả của thẻ
            cover: 'https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx-1024x512.jpg', // Đường dẫn hình ảnh bìa cho thẻ
            memberIds: ['test-user-id-01'], // Một mảng các ID người dùng được gán cho thẻ
            comments: ['test comment 01', 'test comment 02'], // Một mảng các bình luận trên thẻ
            attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03'] // Một mảng các tệp đính kèm liên quan đến thẻ
          },
          { _id: 'card-id-02', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card #2', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-03', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card #3', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-04', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card #4', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-05', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card #5', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-06', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card #6', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-07', boardId: 'board-id-01', columnId: 'column-id-01', title: 'Title of card #7', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'Inprogress Column #2',
        cardOrderIds: ['card-id-08', 'card-id-09', 'card-id-10'],
        cards: [
          { _id: 'card-id-08', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card #8', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-09', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card #9', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-10', boardId: 'board-id-01', columnId: 'column-id-02', title: 'Title of card #10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'Done Column #3',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
        cards: [
          { _id: 'card-id-11', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card #11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-12', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card #12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
          { _id: 'card-id-13', boardId: 'board-id-01', columnId: 'column-id-03', title: 'Title of card #13', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
        ]
      }
    ]
  }
}