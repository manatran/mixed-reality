window.addEventListener('load', () => {
  // Yahoo API URL
  let city = "gent";
  const url = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2Cbe%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
  // Sidebar links
  const navLinks = document.querySelectorAll("nav a");
  // Data Elements
  const dateEl = document.querySelector(".date");
  const lowTempEl = document.querySelector(".low-temp .value");
  const hiTempEl = document.querySelector(".hi-temp .value");
  const descriptionEl = document.querySelector(".description");
  const inline = document.querySelector("inline");
  // Graph bars
  const minTemp = document.querySelectorAll("transform")[0];
  const maxTemp = document.querySelectorAll("transform")[1];

  // Global forecast variable
  let forecast = null;

  // Loader methods
  const loader = {
    spinner: document.querySelector(".spinner"),
    mainContent: document.querySelector(".main-content"),
    show: function () {
      this.mainContent.style.display = "none";
      this.spinner.style.display = "flex";
    },
    hide: function () {
      this.spinner.style.display = "none";
      this.mainContent.style.display = "flex";
    }
  };

  function setData(date, lowTemp, hiTemp, description, file) {
    // Set data
    dateEl.innerHTML = date;
    lowTempEl.innerHTML = lowTemp;
    hiTempEl.innerHTML = hiTemp;
    descriptionEl.innerHTML = description;
    inline.url = file;

    //Set graph height
    minTemp.scale = `0.2, ${lowTemp / 10}, 0.2`;
    maxTemp.scale = `0.2, ${hiTemp / 10}, 0.2`;
    loader.hide();
  }

  function getAsset(condition) {
    let asset = "storm";
    if (condition < 5) {
      asset = "storm";
    } else if (condition < 24) {
      asset = "cloud";
    } else if (condition < 31) {
      asset = "cloudy";
    } else if (condition < 37) {
      asset = "sun";
    }

    return `./assets/${asset}.x3d`;
  }

  // Set sidebar event listeners
  for (let i = 0; i < navLinks.length; i++) {
    let currLink = navLinks[i];
    currLink.addEventListener("click", e => {
      e.preventDefault();
      // Change sidebar classes
      const isVisible = document.querySelectorAll(".is-visible");
      if (isVisible) {
        isVisible.forEach(el => {
          el.classList.remove("is-visible");
        });
      }
      document.querySelector(".active").classList.remove("active");
      currLink.classList.add("active");

      const today = forecast[i];
      const date = `${today.day}, ${today.date}`;
      setData(
        date,
        today.low,
        today.high,
        today.text,
        getAsset(Number(today.code))
      );
    });
  }

  // Fake weatherdata
  loader.show();

  forecast = [{
      day: "Wed",
      date: "10 January 2019",
      low: 8,
      high: 16,
      text: "Sunny",
      code: 35
    },
    {
      day: "Thu",
      date: "11 January 2019",
      low: 1,
      high: 4,
      text: "Cloudy",
      code: 30
    },
    {
      day: "Fri",
      date: "12 January 2019",
      low: 3,
      high: 12,
      text: "Storm",
      code: 1
    }
  ];

  const today = forecast[0];
  const date = `${today.day}, ${today.date}`;

  setData(date, today.low, today.high, today.text, getAsset(Number(today.code)));
  loader.hide();
})

// Fetch weatherdata
// fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     // Get and inject forecast data
//     forecast = res.query.results.channel.item.forecast;
//     const today = forecast[0];
//     const date = `${today.day}, ${today.date}`;

//     setData(date, today.low, today.high, today.text, getAsset(Number(today.code)));
//   })
//   .catch(err => {
//     console.log(err);
//     loader.show();
//   });