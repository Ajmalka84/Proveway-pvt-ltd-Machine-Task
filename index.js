document.addEventListener("DOMContentLoaded", function () {
  const middleRadios = document.querySelectorAll(".middleRadio");

  // Hide all table elements at start
  const allTables = document.querySelectorAll(".pairLabelLeftTable");
  allTables.forEach((table) => {
    table.style.display = "none";
  });

  middleRadios.forEach((radio) => {
    const radioButton = radio.querySelector(".radio");
    radioButton.addEventListener("click", function () {
      // Hide all Table for all middleRadios
      allTables.forEach((table) => {
        table.style.display = "none";
      });

      // Remove active class and uncheck radio button
      middleRadios.forEach((radio) => {
        radio.classList.remove("active");
        const radioBtn = radio.querySelector(".radio");
        radioBtn.checked = false;
      });

      // Add active class and select the radio button for clicked middleRadio
      radio.classList.add("active");
      radioButton.checked = true;

      const selectedTable = radio.querySelector(".pairLabelLeftTable");
      selectedTable.style.display = "table";
    });
  });
});
