const waterByMonth = [
  379.96, 378.5, 375.97, 371.71, 360.24, 372.86, 369.27, 366.33, 378.39, 375.44, 379.96, 373.98
]
function showMessage(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.innerHTML = message;

  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 6000);
}
const waterData = waterByMonth.map((water, index) => {
  return (
    `<tr class="waterByMonth">
      <td>${index + 1}</td>
      <td>${water}</td>
    </tr>`
  )
});
const tableData = `<table class="styled-table">
<tr>
  <th>Tháng</th>
  <th>Mức nước</th>
</tr>
${waterData.join('')}
</table>`
const table = document.getElementById("table")
table.innerHTML = tableData
const months = document.querySelectorAll(".waterByMonth")
months.forEach((month, index) => {
  let messageContext = "Mực nước trong hồ đang ở mức bình thường"
  if (waterByMonth[index] < 340) messageContext = "Mực nước trong hồ dưới mực nước chết không thể vận hành được"
  else if (waterByMonth[index] >= 340 && waterByMonth[index] <= 380) {
    if (waterByMonth[index] > 374 && waterByMonth[index] < 376) messageContext = "Vùng cung cấp nâng cao , cho phép tăng mức cung cấp lưu lượng để phát điện (đến mức tối đa), đặc biệt vào mùa lũ ( thời khì tích nước tháng 10 đến tháng 1) để tránh xả thừa."
    else if (waterByMonth[index] > 364 && waterByMonth[index] < 366) messageContext = " “Vùng cung cấp với mức nước đảm bảo”, lưu lượng trung bình được cung cấp bằng với giá trị lưu lượng đảm bảo tần số 90% (23.3 m3/s)."
    else if (waterByMonth[index] < 356) messageContext = "vùng cung cấp hạn chế 85% mức đảm bảo”, lưu lượng trung bình được cung cấp bằng 85% giá trị lưu lượng đảm bảo tần suất 90% (19,8m3/s)."
  }
  month.addEventListener("click", () => showMessage(messageContext))
})