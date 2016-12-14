'use strict';

class AsyncAPI
{
	static FakeGeoLocation() {
		var position = {
			coords: {
				latitude: 12345,
				longitude: 6789,
			}
		}
		
		return Promise.resolve(position);
	}
	
	static FakeWeather() {
		var data = {
			name: "Somewhere",
			weather: [ { icon:1, description: "Sunny" } ],
			main: {
				temp: 27.6
			}
		}
		return Promise.resolve(data);
	}
}