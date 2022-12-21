const waterByMonth = [
  379.96, 378.5, 375.97, 371.71, 360.24, 372.86, 369.27, 366.33, 378.39, 375.44, 379.96, 373.98
]
function showMessage(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.innerHTML = message;
  if (x.className.includes("show")) x.className.replace("show", "");
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
months.forEach((waterByMonth, index) => {
  let messageContext = "Mực nước trong hồ đang ở mức bình thường"
  switch (index) {
    case 0: {
      messageContext = "Mực nước tháng 1 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 374) messageContext += "vùng cung cấp hạn chế 85%"
      else if (374 < waterByMonth && waterByMonth <= 380) messageContext += "vùng cung cấp hạn chế 85%"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 1: {
      messageContext = "Mực nước tháng 2 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 375) messageContext += "vùng cung cấp hạn chế 85%"
      else if (375 < waterByMonth && waterByMonth <= 379) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 379 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 2: {
      messageContext = "Mực nước tháng 3 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 373) messageContext += "vùng cung cấp hạn chế 85%"
      else if (373 < waterByMonth && waterByMonth <= 376) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 376 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 3: {
      messageContext = "Mực nước tháng 4 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 368) messageContext += "vùng cung cấp hạn chế 85%"
      else if (368 < waterByMonth && waterByMonth <= 372) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 372 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 4: {
      messageContext = "Mực nước tháng 5 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 364) messageContext += "vùng cung cấp hạn chế 85%"
      else if (364 < waterByMonth && waterByMonth <= 368) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 368 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 5: {
      messageContext = "Mực nước tháng 6 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 358) messageContext += "vùng cung cấp hạn chế 85%"
      else if (358 < waterByMonth && waterByMonth <= 364) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 364 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 6: {
      messageContext = "Mực nước tháng 7 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 350) messageContext += "vùng cung cấp hạn chế 85%"
      else if (350 < waterByMonth && waterByMonth <= 360) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 360 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 7: {
      messageContext = "Mực nước tháng 8 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 344) messageContext += "vùng cung cấp hạn chế 85%"
      else if (344 < waterByMonth && waterByMonth <= 354) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 354 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 8: {
      messageContext = "Mực nước tháng 9 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 353) messageContext += "vùng cung cấp hạn chế 85%"
      else if (353 < waterByMonth && waterByMonth <= 380) messageContext += " vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 9: {
      messageContext = "Mực nước tháng 10 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 345) messageContext += "vùng cung cấp hạn chế 85%"
      else if (345 < waterByMonth && waterByMonth <= 356.5) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 356.5 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 10: {
      messageContext = "Mực nước tháng 11 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 357) messageContext += "vùng cung cấp hạn chế 85%"
      else if (357 < waterByMonth && waterByMonth <= 369.5) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 369.5 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
    case 11: {
      messageContext = "Mực nước tháng 12 nằm trong"
      if (waterByMonth > 340 && waterByMonth <= 370) messageContext += "vùng cung cấp hạn chế 85%"
      else if (370 < waterByMonth && waterByMonth <= 378) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth > 378 && waterByMonth <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth > 380) messageContext += "vùng xả lũ"
    }
  }

  month.addEventListener("click", () => showMessage(messageContext))
})