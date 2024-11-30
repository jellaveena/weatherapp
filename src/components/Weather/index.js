import './index.css'

const Weather = props => {
  const {eachDetails} = props
  const {
    temperatureinC,
    humidity,
    windspeed,
    weatherconditiontext,
    weatherconditionicon,
  } = eachDetails
  return (
    <li className="list-item">
      <h1>{temperatureinC}</h1>
      <p>{humidity}</p>
      <p>{windspeed}</p>
      <p>{weatherconditiontext}</p>
      <p>{weatherconditionicon}</p>
    </li>
  )
}
export default Weather
