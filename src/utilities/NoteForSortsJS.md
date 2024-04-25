
export const mapOrder = (originalArray, orderArray, key) => {
  // Kiểm tra xem có đủ thông tin đầu vào không
  if (!originalArray || !orderArray || !key) return [];

  // Bước 1: Tạo bản sao của mảng gốc
  const clonedArray = [...originalArray];

  // Bước 2: Sắp xếp mảng sao chép dựa trên thứ tự của `orderArray`
  const orderedArray = clonedArray.sort((a, b) => {
    // Sử dụng `indexOf` để lấy vị trí của giá trị `key` trong `orderArray`
    const indexA = orderArray.indexOf(a[key]);
    const indexB = orderArray.indexOf(b[key]);

    // Trả về kết quả so sánh
    return indexA - indexB;
  });

  // Bước 3: Trả về mảng đã sắp xếp
  return orderedArray;
};


Dòng mã return indexA - indexB; là cách hàm so sánh hai phần tử trong quá trình sắp xếp mảng. 

Giải thích cụ thể:

indexA: Là vị trí của giá trị a[key] trong mảng orderArray. Nếu a[key] không tồn tại trong orderArray, giá trị của indexA sẽ là -1.

indexB: Tương tự như indexA, là vị trí của giá trị b[key] trong mảng orderArray. Nếu b[key] không tồn tại trong orderArray, giá trị của indexB sẽ là -1.

Khi trả về indexA - indexB, mục đích là sắp xếp các phần tử dựa trên thứ tự của chúng trong mảng orderArray. Các trường hợp có thể xảy ra:

Nếu indexA và indexB đều khác -1: Điều này có nghĩa là cả hai giá trị a[key] và b[key] đều tồn tại trong orderArray. Khi đó, indexA - indexB sẽ trả về một số nguyên dương nếu indexA lớn hơn indexB, và ngược lại. Điều này sẽ đảm bảo rằng giá trị a sẽ được đặt trước giá trị b trong mảng đã sắp xếp.

Nếu indexA hoặc indexB bằng -1: Nếu một trong hai giá trị không tồn tại trong orderArray, chúng ta sẽ đặt giá trị có index lớn hơn (không bằng -1) trước giá trị có index bé hơn (bằng -1). Điều này giúp đưa các giá trị không có trong orderArray xuống cuối mảng sau quá trình sắp xếp.

Đồng thời, nếu cả hai giá trị đều bằng -1, chúng sẽ được coi là bằng nhau trong quá trình sắp xếp, vì indexA - indexB sẽ trả về 0.

Kết quả là mảng clonedArray sẽ được sắp xếp theo thứ tự của các giá trị trong orderArray.