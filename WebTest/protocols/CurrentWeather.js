'use strict';

class CurrentWeather
{		
	static GetCoords(position)
	{		
		return {
			lat: position.coords.latitude, 
			lon: position.coords.longitude,
			appid: '7c3c986e9fc7eb0542a52143f983a70b',
			units: 'metric'
		};
	}
	
	static FormatWeather(data)
	{		 
		 return {
			 place: data.name,
			 description: data.weather[0].description,
			 icon: data.weather[0].icon,
			 temp: data.main.temp
		 };
	}
	
}

if (typeof module !== 'undefined' && module && module.exports) {
	module.exports = CurrentWeather;
}