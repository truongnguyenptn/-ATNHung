const waterByMonth = [
  379.96, 378.5, 375.97, 371.71, 360.24, 372.86, 369.27, 366.33, 378.39, 375.44, 379.96, 373.98
]
function showMessage(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  // Add the "show" class to DIV
  if (x.className.includes("show")) x.className.replace("show", "");
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
  let messageContext = ""
  switch (index) {
    case 0: {
      messageContext = "Mực nước tháng 1 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 374) messageContext += "vùng cung cấp hạn chế 85%"
      else if (374 < waterByMonth[index] && waterByMonth[index] <= 380) messageContext += "vùng cung cấp hạn chế 85%"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;
    }
    case 1: {
      messageContext = "Mực nước tháng 2 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 375) messageContext += "vùng cung cấp hạn chế 85%"
      else if (375 < waterByMonth[index] && waterByMonth[index] <= 379) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 379 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;
    }
    case 2: {
      messageContext = "Mực nước tháng 3 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 373) messageContext += "vùng cung cấp hạn chế 85%"
      else if (373 < waterByMonth[index] && waterByMonth[index] <= 376) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 376 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;


    }
    case 3: {
      messageContext = "Mực nước tháng 4 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 368) messageContext += "vùng cung cấp hạn chế 85%"
      else if (368 < waterByMonth[index] && waterByMonth[index] <= 372) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 372 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 4: {
      messageContext = "Mực nước tháng 5 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 364) messageContext += "vùng cung cấp hạn chế 85%"
      else if (364 < waterByMonth[index] && waterByMonth[index] <= 368) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 368 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 5: {
      messageContext = "Mực nước tháng 6 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 358) messageContext += "vùng cung cấp hạn chế 85%"
      else if (358 < waterByMonth[index] && waterByMonth[index] <= 364) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 364 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 6: {
      messageContext = "Mực nước tháng 7 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 350) messageContext += "vùng cung cấp hạn chế 85%"
      else if (350 < waterByMonth[index] && waterByMonth[index] <= 360) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 360 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 7: {
      messageContext = "Mực nước tháng 8 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 344) messageContext += "vùng cung cấp hạn chế 85%"
      else if (344 < waterByMonth[index] && waterByMonth[index] <= 354) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 354 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 8: {
      messageContext = "Mực nước tháng 9 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 353) messageContext += "vùng cung cấp hạn chế 85%"
      else if (353 < waterByMonth[index] && waterByMonth[index] <= 380) messageContext += " vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 9: {
      messageContext = "Mực nước tháng 10 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 345) messageContext += "vùng cung cấp hạn chế 85%"
      else if (345 < waterByMonth[index] && waterByMonth[index] <= 356.5) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 356.5 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 10: {
      messageContext = "Mực nước tháng 11 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 357) messageContext += "vùng cung cấp hạn chế 85%"
      else if (357 < waterByMonth[index] && waterByMonth[index] <= 369.5) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 369.5 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;

    }
    case 11: {
      messageContext = "Mực nước tháng 12 nằm trong "
      if (waterByMonth[index] > 340 && waterByMonth[index] <= 370) messageContext += "vùng cung cấp hạn chế 85%"
      else if (370 < waterByMonth[index] && waterByMonth[index] <= 378) messageContext += "vùng cung cấp mức đảm bảo 90%"
      else if (waterByMonth[index] > 378 && waterByMonth[index] <= 380) messageContext += "vùng nâng cao cho phép tăng mức cung cấp lượng để phát điện đến mức tối đa"
      else if (waterByMonth[index] > 380) messageContext += "vùng xả lũ"
      else messageContext += "mức bình thường"
      break;
    }
  }

  month.addEventListener("click", () => showMessage(messageContext))
})