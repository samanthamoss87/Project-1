const data = {
  labels: ["2021", "2022", "2023", "2024", "2025", "2026"],
  datasets: [
    {
      label: "Installed base",
      data: [930000, 1100000, 1300000, 1530000, 1800000, 2120000],
      borderWidth: 1,
    },
    {
      label: "Unit Shipments",
      data: [280000, 320000, 380000, 440000, 520000, 610000],
      borderWidth: 1,
    },
    {
      label: "Market value ($)",
      data: [312500000, 366800000, 430200000, 502500000,  586700000, 685600000],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    onClick: handleChartClick,
  },
  plugins: {
    title: {
      display: true,
      text: "Chart Title",
    },
  },
};

const ctx1 = document.getElementById("myChart");

const chart1 = new Chart(ctx1, config);

function handleChartClick(event, elements, chart) {
  if (elements) {
    elements.forEach((element) => {
      const i = element.index;
      const dsIndex = element.datasetIndex
      
      const dataLabel = chart.data.labels[i];
      const dataValue = chart.data.datasets[dsIndex].data[i];
      const itemName = chart.data.datasets[dsIndex].label
      const popupBlock = document.getElementById("extendedChartInfo");
      const popup = document.getElementById("chartInfoText");
      popupBlock.classList.remove("hidden");
      popup.textContent = `In ${dataLabel}, video telematics estimated ${itemName} is: ${dataValue}`;
    });
  }
}

const close = document.getElementById("closeBtn");
const popupBlock = document.getElementById("extendedChartInfo");

close.addEventListener("click", () => {
  popupBlock.classList.add("hidden");
});
