# QLDT Cookie Helper Extension

Extension này giúp bạn lấy cookies từ trang **qldt.hust.edu.vn** một cách dễ dàng để sử dụng trong ứng dụng Tracking Teacher.

## 🎯 Mục đích

- Lấy cookies từ trang QLDT sau khi đăng nhập
- Copy cookies vào clipboard để paste vào ứng dụng web
- Tránh phải copy thủ công từ DevTools

## 📦 Cài đặt Extension

### Cách 1: Cài đặt từ thư mục local (Developer mode)

1. Mở Chrome/Edge và vào trang extensions:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`

2. Bật **Developer mode** (góc trên bên phải)

3. Click **Load unpacked** (Tải tiện ích đã giải nén)

4. Chọn thư mục `extensionHelper/` trong project này

5. Extension sẽ xuất hiện trong danh sách extensions

### Cách 2: Sử dụng file .zip (nếu có)

1. Tải file `.zip` của extension
2. Giải nén vào thư mục bất kỳ
3. Làm theo các bước trong **Cách 1**

## 🚀 Cách sử dụng

### Bước 1: Đăng nhập QLDT

1. Truy cập [qldt.hust.edu.vn](https://qldt.hust.edu.vn)
2. Đăng nhập bằng tài khoản HUST của bạn

### Bước 2: Lấy Cookies

1. Click vào icon extension (🍪) trên thanh công cụ Chrome
2. Extension sẽ tự động phát hiện và hiển thị cookies
3. Click nút **📋 Copy Cookies**
4. Cookies đã được copy vào clipboard!

### Bước 3: Import vào ứng dụng

1. Mở ứng dụng Tracking Teacher
2. Đăng nhập (nếu cần)
3. Click vào phần **🍪 Cookie xác thực**
4. Click nút **📋 Paste từ Clipboard** (hoặc Ctrl+V)
5. Cookie sẽ được tự động điền vào

### Bước 4: Tra cứu

1. Nhập mã học phần (VD: IT4060)
2. Nhập mã lớp (tùy chọn)
3. Click **Tra cứu**

## 🔧 Tính năng

- ✅ Tự động phát hiện cookies từ QLDT
- ✅ Hiển thị trạng thái đăng nhập
- ✅ Copy cookies một click
- ✅ Làm mới cookies khi cần
- ✅ Giao diện đẹp, dễ sử dụng

## ⚠️ Lưu ý

### Bảo mật

- **Không chia sẻ cookies** của bạn với người khác
- Cookies chứa thông tin xác thực, giống như mật khẩu
- Chỉ dán cookies vào các trang web bạn tin tưởng

### Cookies hết hạn

- Cookies thường hết hạn sau một thời gian
- Nếu thấy lỗi xác thực, hãy:
  1. Đăng nhập lại vào QLDT
  2. Lấy cookies mới từ extension
  3. Cập nhật vào ứng dụng

### Permissions

Extension yêu cầu các quyền sau:

- `cookies` - Để đọc cookies từ qldt.hust.edu.vn
- `storage` - Để lưu trạng thái (nếu cần)
- `clipboardWrite` - Để copy cookies vào clipboard
- `host_permissions` - Chỉ truy cập qldt.hust.edu.vn

## 🐛 Xử lý sự cố

### Extension không hiển thị cookies

1. Kiểm tra xem bạn đã đăng nhập QLDT chưa
2. Click nút **🔄 Làm mới** trong extension
3. Thử đăng nhập lại vào QLDT

### Không thể copy cookies

1. Kiểm tra quyền clipboard của trình duyệt
2. Thử copy thủ công (Ctrl+C) từ textarea
3. Reload extension

### Extension không hoạt động

1. Kiểm tra xem extension có được bật không
2. Thử tắt và bật lại extension
3. Reload extension trong trang extensions

## 📁 Cấu trúc thư mục

```
extensionHelper/
├── manifest.json       # Cấu hình extension
├── popup.html          # Giao diện popup
├── popup.css           # Styles
├── popup.js            # Logic chính
├── README.md           # File này
└── icons/              # Icons (tùy chọn)
    └── ICONS_NOTE.md
```

## 🔄 So sánh với Extension cũ

| Tính năng | Extension cũ (`extension/`) | Extension mới (`extensionHelper/`) |
|-----------|---------------------------|----------------------------------|
| Mục đích | Tra cứu trực tiếp trong extension | Lấy cookies để dùng trong web app |
| Nguồn cookies | `e.hust.edu.vn` | `qldt.hust.edu.vn` |
| Tính năng chính | Tìm kiếm giảng viên | Export cookies |
| Workflow | Độc lập | Hỗ trợ cho web app |

## 📚 Tài liệu liên quan

- [Chrome Extension Development](https://developer.chrome.com/docs/extensions/)
- [Cookies API](https://developer.chrome.com/docs/extensions/reference/cookies/)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

## 📝 License

MIT License - Xem file LICENSE trong project

## 👨‍💻 Tác giả

HUST Teacher Tracking Project Team

---

**💡 Tip:** Pin extension vào thanh công cụ để truy cập nhanh hơn!
