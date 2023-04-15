import ClearNight from '../assets/images/weather/Clear-night.jpg'
import CloudyDay from '../assets/images/weather/Cloudy-day.jpg'
import CloudyNight from '../assets/images/weather/Cloudy-night.jpg'
import IcePelletsDay from '../assets/images/weather/Ice-pellets-day.jpg'
import MistDay from '../assets/images/weather/Mist-day.jpg'
import MistNight from '../assets/images/weather/Mist-night.jpg'
import PatchiRainPossibleDay from '../assets/images/weather/Patchy-rain-possible-day.jpg'
import PatchiRainPossibleNight from '../assets/images/weather/Patchy-rain-possible-night.jpg'
import PatchiSnowPossibleDay from '../assets/images/weather/Patchy-snow-possible-day.jpg'
import PatchiSnowPossibleNight from '../assets/images/weather/Patchy-snow-possible-night.jpg'
import Sunny from '../assets/images/weather/Sunny.jpg'
import ThunderyOutBreaksPossibleDay from '../assets/images/weather/Thundery-outbreaks-possible-day.jpg'
import ThunderyOutBreaksPossibleNight from '../assets/images/weather/Thundery-outbreaks-possible-night.png'
const weatherBackground = [
  {
    name: 'Sunny',
    day: Sunny
  },
  {
    name: 'Partly cloudy',
    day: CloudyDay,
    night: CloudyNight
  },
  {
    name: 'Cloudy',
    day: CloudyDay,
    night: CloudyNight
  },
  {
    name: 'Mist',
    day: MistDay,
    night: MistNight
  },
  {
    name: 'Patchy rain possible',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Patchy snow possible',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Patchy sleet possible',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Patchy freezing drizzle possible',
    day: PatchiRainPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Thundery outbreaks possible',
    day: ThunderyOutBreaksPossibleDay,
    night: ThunderyOutBreaksPossibleNight
  },
  {
    name: 'Blowing snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Blizzard',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Fog',
    day: MistDay,
    night: MistNight
  },
  {
    name: 'Freezing fog',
    day: MistDay,
    night: MistNight
  },
  {
    name: 'Patchy light drizzle',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Light drizzle',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Freezing drizzle',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Heavy freezing drizzle',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Patchy light rain',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Light rain',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate rain at times',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate rain',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Heavy rain at times',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Heavy rain',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Light freezing rain',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate or heavy freezing rain',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Light sleet',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Moderate or heavy sleet',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Patchy light snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Light snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Patchy moderate snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Moderate snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Patchy heavy snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Heavy snow',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Ice pellets',
    day: IcePelletsDay,
    night: IcePelletsDay
  },
  {
    name: 'Light rain shower',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate or heavy rain shower',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Torrential rain shower',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Light sleet showers',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate or heavy sleet showers',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Light snow showers',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Moderate or heavy snow showers',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Light showers of ice pellets',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate or heavy showers of ice pellets',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Patchy light rain with thunder',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Moderate or heavy rain with thunder',
    day: PatchiRainPossibleDay,
    night: PatchiRainPossibleNight
  },
  {
    name: 'Patchy light snow with thunder',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Moderate or heavy snow with thunder',
    day: PatchiSnowPossibleDay,
    night: PatchiSnowPossibleNight
  },
  {
    name: 'Clear',
    night: ClearNight
  }
]
export default weatherBackground
