import {Component} from 'react'

import Weather from '../Weather'

import './index.css'

class WeatherCard extends Component {
  state = {weatherDetails: []}

  componentDidMount() {
    this.getTheData()
  }

  getTheData = async () => {
    const api =
      'https://api.weatherapi.com/v1/current.json?key=073621804ab1479387351417243011&q=London&units=metric'
    const option = {
      method: 'GET',
    }
    const response = await fetch(api, option)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const formattedData = data.current.map(each => ({
        temperatureinC: each.temp_c,
        temperatureinF: each.temp_f,
        humidity: each.humidity,
        windspeed: each.wind_kph,
        weatherconditiontext: each.condition.text,
        weatherconditionicon: each.condition.icon,
      }))
      this.setState({weatherDetails: formattedData})
    }
  }

  render() {
    const {weatherDetails} = this.state
    return (
      <div>
        <input type="search" className="sear" placeholder="Search" />
        <div>
          <ul className="items-details">
            {weatherDetails.map(each => (
              <Weather eachDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default WeatherCard
