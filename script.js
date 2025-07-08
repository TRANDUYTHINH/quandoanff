// Ẩn 2 bảng kia với hiệu ứng
document.getElementById("registerBox").style.display = "none";
document.getElementById("loginBox").style.display = "none";

// Hiện bảng Dashboard có hiệu ứng trượt
const dash = document.getElementById("dashboard");
dash.style.display = "block";
dash.style.animation = "slideInUp 0.6s ease";
document.getElementById("dashboard").style.display = "none";

const reg = document.getElementById("registerBox");
const log = document.getElementById("loginBox");

reg.style.display = "block";
log.style.display = "block";

if (!users.some(u => u.email === "admin@ytb.com")) {
  users.push({ name: "Admin", email: "admin@ytb.com", pass: "123456", role: "admin" });
  saveUsers(); // đảm bảo lưu lại
}
