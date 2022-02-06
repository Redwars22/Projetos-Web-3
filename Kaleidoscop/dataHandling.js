//Salvar dados na memória

function saveData() {
  let countryName = $("#country-name").text();
  let countryFlag = $(".flag").attr("src");
  let population = $("#population").attr("value");
  let altitude = $("#altitude").attr("value");
  let latitude = $("#latitude").attr("value");
  let longitude = $("#longitude").attr("value");
  let averageTemperature = $("#average-temperature").attr("value");
  let independenceDAY = $("#independence-day").attr("value");
  let totalArea = $("#total-area").attr("value");
  let IDH = $("#idh").attr("value");
  let phoneCode = $("#phone-code").attr("value");
  let density = $("#density").attr("value");
  let climate = $("#climate").attr("value");
  let gdp = $("#gdp").attr("value");
  let water = $("#water").attr("value");

  localStorage.setItem("country-name", countryName);
  localStorage.setItem("country-flag", countryFlag);
  localStorage.setItem("population", population);
  localStorage.setItem("altitude", altitude);
  localStorage.setItem("latitude", latitude);
  localStorage.setItem("longitude", longitude);
  localStorage.setItem("average-temperature", averageTemperature);
  localStorage.setItem("independence-day", independenceDAY);
  localStorage.setItem("total-area", totalArea);
  localStorage.setItem("idh", IDH);
  localStorage.setItem("phone-code", phoneCode);
  localStorage.setItem("density", density);
  localStorage.setItem("climate", climate);
  localStorage.setItem("gdp", gdp);
  localStorage.setItem("water", water);
}

//Recuperar dados já salvos na memória

function retrieveData() {
  let countryName = localStorage.getItem("country-name");
  let countryFlag = localStorage.getItem("country-flag");
  let population = localStorage.getItem("population");
  let altitude = localStorage.getItem("altitude");
  let latitude = localStorage.getItem("latitude");
  let longitude = localStorage.getItem("longitude");
  let averageTemperature = localStorage.getItem("average-temperature");
  let independenceDAY = localStorage.getItem("independence-day");
  let totalArea = localStorage.getItem("total-area");
  let IDH = localStorage.getItem("idh");
  let phoneCode = localStorage.getItem("phone-code");
  let density = localStorage.getItem("density");
  let climate = localStorage.getItem("climate");
  let gdp = localStorage.getItem("gdp");
  let water = localStorage.getItem("water");

  $("#country-name").text(countryName);
  $(".flag").attr("src", countryFlag);
  $("#population").attr("value", population);
  $("#altitude").attr("value", altitude);
  $("#latitude").attr("value", latitude);
  $("#longitude").attr("value", longitude);
  $("#average-temperature").attr("value", averageTemperature);
  $("#independence-day").attr("value", independenceDAY);
  $("#total-area").attr("value", totalArea);
  $("#idh").attr("value", IDH);
  $("#phone-code").attr("value", phoneCode);
  $("#density").attr("value", density);
  $("#climate").attr("value", climate);
  $("#gdp").attr("value", gdp);
  $("#water").attr("value", water);
}

//Apagar dados da memória (localStorage) e limpar os campos de texto
function emptyAllInputs() {
  $("#country-name").text("Nome do País");
  $("#population").attr("value", "");
  $("#altitude").attr("value", "");
  $("#latitude").attr("value", "");
  $("#longitude").attr("value", "");
  $("#average-temperature").attr("value", "");
  $("#independence-day").attr("value", "");
  $("#total-area").attr("value", "");
  $("#idh").attr("value", "");
  $("#phone-code").attr("value", "");
  $("#density").attr("value", "");
  $("#climate").attr("value", "");
  $("#gdp").attr("value", "");
  $("#water").attr("value", "");
}

function clearData() {
  let deleteEverythingOrNot = confirm(
    "Tem certeza de que deseja deletar TUDO?! ISSO É IRREVERSÍVEL!!!!"
  );

  if (deleteEverythingOrNot) {
    localStorage.removeItem("country-name");
    localStorage.removeItem("population");
    localStorage.removeItem("altitude");
    localStorage.removeItem("latitude");
    localStorage.removeItem("longitude");
    localStorage.removeItem("average-temperature");
    localStorage.removeItem("independence-day");
    localStorage.removeItem("total-area");
    localStorage.removeItem("idh");
    localStorage.removeItem("phone-code");
    localStorage.removeItem("density");
    localStorage.removeItem("climate");
    localStorage.removeItem("gdp");
    localStorage.removeItem("water");

    emptyAllInputs();
  }
}
