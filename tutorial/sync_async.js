sync: đồng bộ
	Ưu điểm: 
		chạy theo đúng thứ tự
		ko bị lỗi tiến trình
	Nhược điểm: 
		sinh ra trạng thái chờ không cần thiết
		bộ nhớ dễ bị tràn do lưu trữ trạng thái chờ

async: bất đồng bộ, hoạt động ko quy trình,ko chặt chẽ
	Ưu điểm: Xử lí nhiều công việc một lúc 
	Nhược điểm: ko thể sử dụng trong công việc có quy trình