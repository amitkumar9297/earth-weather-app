const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById("city_name");

const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");


const feel_like=document.getElementById('feel');
const pressure=document.getElementById('pressure');
const humidity=document.getElementById('humidity');
const speed=document.getElementById('speed');
const temp_min=document.getElementById('temp_min');
const temp_max=document.getElementById('temp_max');


const datahide=document.querySelectorAll(".middle_layer");

const getInfo = async () => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = "Please Write The Name Before Search";
        // datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f4dc4ac509932489072739af08e32f66`;

            const response = await fetch(url);
            // console.log(response);
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;
            // temp_status.innerText = arrdata[0].weather[0].main;

            const tempMood=arrdata[0].weather[0].main

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

            }

            // datahide.classList.add('data_hide');
            // cityVal = "";


            feel_like.innerHTML = `Feel Likes:  ${arrdata[0].main.feels_like}`;
            pressure.innerHTML = `Pressure:  ${arrdata[0].main.pressure}`;
            humidity.innerHTML = `Humidity:  ${arrdata[0].main.humidity}`;
            speed.innerHTML = `Speed:  ${arrdata[0].wind.speed} m/sec`;
            temp_min.innerHTML = `Temp_Min:  ${arrdata[0].main.temp_min}`;
            temp_max.innerHTML = `Temp_Max:  ${arrdata[0].main.temp_max}`;

        }
        catch (error) {
            cityVal = " ";
            datahide.classList.add('data_hide');
            city_name.innerText = "Please enter the city name properly";
            // console.log('please add the proper city name');
        }
    }
}

submitBtn.addEventListener('click', getInfo);