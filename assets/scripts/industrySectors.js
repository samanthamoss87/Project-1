const data = {
    labels: ["2011", "2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "Installed base estimate Earing",
        data: [930000, 1100000, 1300000, 1530000, 1800000, 2120000],
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
        text: 'Chart Title',
      }
    }
  
  };
  
  const ctx = document.getElementById("myChart");
  
  const chart = new Chart(ctx, config);
  
  function handleChartClick(event, elements, chart) {
    if (elements[0]) {
      const i = elements[0].index;
      const dataLabel = chart.data.labels[i];
      const dataValue = chart.data.datasets[0].data[i];
  
      const popupBlock = document.getElementById("extendedChartInfo");
      const popup = document.getElementById("chartInfoText");
      popupBlock.classList.remove("hidden");
      popup.textContent = `In ${dataLabel}, video telematics estimated installed base value is: ${dataValue}`;
    }
  }
  
  var close = document.getElementById("closeBtn");
  const popupBlock = document.getElementById("extendedChartInfo");
  console.log(popupBlock);
  
  close.addEventListener("click", () => {
    popupBlock.classList.add("hidden");
  });
  