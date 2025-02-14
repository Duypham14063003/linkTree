# Link Tree

> Trang cá nhân chứa liên kết đến các mạng xã hội và kênh liên hệ, được xây dựng với Next.js 13, TypeScript, và các thư viện UI.

## Giới thiệu

Dự án này là một trang “Link-in-bio” (tương tự Linktree) cho phép bạn hiển thị ảnh đại diện, thông tin cá nhân, danh sách các liên kết (link) quan trọng, đồng thời có thể chia sẻ link qua email hoặc mạng xã hội.  
- Sử dụng **Next.js 13** (App Router) để tận dụng lợi thế SSR, SSG, và các tính năng tối ưu.  
- Dùng **React** và **TypeScript** để code an toàn, dễ bảo trì.  
- Kết hợp **Tailwind CSS** (hoặc shadcn/ui) để xây dựng giao diện nhanh chóng.  
- Sử dụng **Framer Motion** để tạo hiệu ứng animation mượt mà.  
- Sử dụng **react-share** để chia sẻ liên kết qua email, Facebook, v.v.

## Mục lục

- [Tính năng](#tính-năng)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt](#cài-đặt)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Cách chạy dự án](#cách-chạy-dự-án)
- [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
- [Đóng góp](#đóng-góp)
- [Giấy phép](#giấy-phép)
- [Thông tin liên hệ](#thông-tin-liên-hệ)

## Tính năng

1. **Hiển thị thông tin cá nhân**: Ảnh đại diện, tên, mô tả ngắn gọn.  
2. **Danh sách liên kết**: Gồm nhiều link dẫn đến GitHub, Facebook, Email,...  
3. **Dialog chia sẻ**: Cho phép copy link, chia sẻ qua email, Facebook, v.v.  
4. **Animation mượt mà**: Sử dụng Framer Motion để thêm hiệu ứng hover, transition.  
5. **Giao diện tùy chỉnh**: Sử dụng Tailwind CSS/shadcn/ui dễ dàng tuỳ biến màu sắc, kích thước, v.v.

## Yêu cầu hệ thống

- **Node.js** >= 14 (khuyến khích 16+)
- **npm** >= 6 hoặc **yarn** >= 1.22
- Kết nối Internet (nếu cần cài đặt thư viện)

## Cài đặt

1. **Clone** repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
2. **Install** repository
   ```bash
    cd <your-repo>
    npm install
    # hoặc
    yarn install
3. **Run** Dự án
   ```bash
   npm run dev
   # hoặc
   yarn dev

