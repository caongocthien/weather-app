import { useQuery } from '@tanstack/react-query'
import weatherApi from '~/apis/weather.api'
import { convertDatetoDay, getCountryCodeIso2, getLocation, getSessionInDayByUrl, useQueryParams } from '~/utils/utils'
import { useForm } from 'react-hook-form'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Skeleton from '~/components/Skeleton'
import weatherBackground from '~/constants/weather.constant'

export default function Homepage() {
  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [temp, setTemp] = useState(true)
  const queryParams: { q?: string } = useQueryParams()
  const configParam = {
    q: queryParams.q || `${location.latitude},${location.longitude}`
  }
  const navigate = useNavigate()
  const query = useQuery({
    queryKey: ['weather', configParam],
    queryFn: () => {
      return weatherApi.getWeatherWithState(configParam)
    },
    enabled: !(Object.keys(configParam).length === 0),
    keepPreviousData: true
  })

  const { handleSubmit, register } = useForm()
  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        q: data.name
      }).toString()
    })
  })
  useEffect(() => {
    getLocation<{ latitude: string; longitude: string }>()
      .then((location) => {
        setLocation({ latitude: location.latitude, longitude: location.longitude })
      })
      .catch((error) => {
        console.log(error)
        // handle the error here
      })
  }, [])

  const backgroundImage = () => {
    const result: any = weatherBackground.filter((item) => item.name === query.data?.data.current.condition.text)
    const session: string = getSessionInDayByUrl(query.data?.data.current.condition.icon as string)
    return result.length > 0 && result[0][session]
  }

  return (
    <div className=' bg-orange-50 w-screen h-screen relative'>
      <div
        style={{
          backgroundImage: `url(${backgroundImage()})`
        }}
        className={`m-auto absolute top-20 right-20 bottom-20 left-20 rounded-[3rem] px-20 py-10 shadow-sm bg-center bg-no-repeat bg-blend-multiply object-cover`}
      >
        {/* header */}
        <div className='flex justify-between items-center container'>
          <Link to={'/'} className='flex items-center'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width={64}
              height={64}
              viewBox='0 0 64 64'
            >
              <defs>
                <filter id='blur' width='200%' height='200%'>
                  <feGaussianBlur in='SourceAlpha' stdDeviation={3} />
                  <feOffset dx={0} dy={4} result='offsetblur' />
                  <feComponentTransfer>
                    <feFuncA type='linear' slope='0.05' />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in='SourceGraphic' />
                  </feMerge>
                </filter>
                <style
                  type='text/css'
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n/*\n** SUN\n*/\n@keyframes am-weather-sun {\n  0% {\n    -webkit-transform: rotate(0deg);\n       -moz-transform: rotate(0deg);\n        -ms-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n       -moz-transform: rotate(360deg);\n        -ms-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.am-weather-sun {\n  -webkit-animation-name: am-weather-sun;\n     -moz-animation-name: am-weather-sun;\n      -ms-animation-name: am-weather-sun;\n          animation-name: am-weather-sun;\n  -webkit-animation-duration: 9s;\n     -moz-animation-duration: 9s;\n      -ms-animation-duration: 9s;\n          animation-duration: 9s;\n  -webkit-animation-timing-function: linear;\n     -moz-animation-timing-function: linear;\n      -ms-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n      -ms-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@keyframes am-weather-sun-shiny {\n  0% {\n    stroke-dasharray: 3px 10px;\n    stroke-dashoffset: 0px;\n  }\n\n  50% {\n    stroke-dasharray: 0.1px 10px;\n    stroke-dashoffset: -1px;\n  }\n\n  100% {\n    stroke-dasharray: 3px 10px;\n    stroke-dashoffset: 0px;\n  }\n}\n\n.am-weather-sun-shiny line {\n  -webkit-animation-name: am-weather-sun-shiny;\n     -moz-animation-name: am-weather-sun-shiny;\n      -ms-animation-name: am-weather-sun-shiny;\n          animation-name: am-weather-sun-shiny;\n  -webkit-animation-duration: 2s;\n     -moz-animation-duration: 2s;\n      -ms-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n     -moz-animation-timing-function: linear;\n      -ms-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n      -ms-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n/*\n** SNOW\n*/\n@keyframes am-weather-snow {\n  0% {\n    -webkit-transform: translateX(0) translateY(0);\n       -moz-transform: translateX(0) translateY(0);\n        -ms-transform: translateX(0) translateY(0);\n            transform: translateX(0) translateY(0);\n  }\n\n  33.33% {\n    -webkit-transform: translateX(-1.2px) translateY(2px);\n       -moz-transform: translateX(-1.2px) translateY(2px);\n        -ms-transform: translateX(-1.2px) translateY(2px);\n            transform: translateX(-1.2px) translateY(2px);\n  }\n\n  66.66% {\n    -webkit-transform: translateX(1.4px) translateY(4px);\n       -moz-transform: translateX(1.4px) translateY(4px);\n        -ms-transform: translateX(1.4px) translateY(4px);\n            transform: translateX(1.4px) translateY(4px);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: translateX(-1.6px) translateY(6px);\n       -moz-transform: translateX(-1.6px) translateY(6px);\n        -ms-transform: translateX(-1.6px) translateY(6px);\n            transform: translateX(-1.6px) translateY(6px);\n    opacity: 0;\n  }\n}\n\n.am-weather-snow-1 {\n  -webkit-animation-name: am-weather-snow;\n     -moz-animation-name: am-weather-snow;\n      -ms-animation-name: am-weather-snow;\n          animation-name: am-weather-snow;\n  -webkit-animation-duration: 2s;\n     -moz-animation-duration: 2s;\n      -ms-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n     -moz-animation-timing-function: linear;\n      -ms-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n      -ms-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.am-weather-snow-2 {\n  -webkit-animation-name: am-weather-snow;\n     -moz-animation-name: am-weather-snow;\n      -ms-animation-name: am-weather-snow;\n          animation-name: am-weather-snow;\n  -webkit-animation-delay: 1.2s;\n     -moz-animation-delay: 1.2s;\n      -ms-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n  -webkit-animation-duration: 2s;\n     -moz-animation-duration: 2s;\n      -ms-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n     -moz-animation-timing-function: linear;\n      -ms-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n     -moz-animation-iteration-count: infinite;\n      -ms-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n        '
                  }}
                />
              </defs>
              <g filter='url(#blur)' id='snowy-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16), scale(1.2)'>
                    <g className='am-weather-sun'>
                      <g>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(45)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(90)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(135)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(180)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(225)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(270)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                      <g transform='rotate(315)'>
                        <line
                          fill='none'
                          stroke='orange'
                          strokeLinecap='round'
                          strokeWidth={2}
                          transform='translate(0,9)'
                          x1={0}
                          x2={0}
                          y1={0}
                          y2={3}
                        />
                      </g>
                    </g>
                    <circle cx={0} cy={0} fill='orange' r={5} stroke='orange' strokeWidth={2} />
                  </g>
                  <g>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#57A0EE'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                      transform='translate(-15,-5), scale(0.85)'
                    />
                  </g>
                </g>
                <g transform='translate(20,9)'>
                  <g className='am-weather-snow-1'>
                    <g transform='translate(7,28)'>
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth='1.2'
                        transform='translate(0,9), rotate(0)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth={1}
                        transform='translate(0,9), rotate(45)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth={1}
                        transform='translate(0,9), rotate(90)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth={1}
                        transform='translate(0,9), rotate(135)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                    </g>
                  </g>
                  <g className='am-weather-snow-2'>
                    <g transform='translate(16,28)'>
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth='1.2'
                        transform='translate(0,9), rotate(0)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth={1}
                        transform='translate(0,9), rotate(45)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth={1}
                        transform='translate(0,9), rotate(90)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                      <line
                        fill='none'
                        stroke='#57A0EE'
                        strokeLinecap='round'
                        strokeWidth={1}
                        transform='translate(0,9), rotate(135)'
                        x1={0}
                        x2={0}
                        y1='-2.5'
                        y2='2.5'
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span className='font-bold text-xl text-white'>Thien Weather</span>
          </Link>
          <div className='flex'>
            <button
              onClick={() => setTemp(!temp)}
              className='bg-transparent font-bold text-white outline-none border-none focus:outline-none hover:border-none'
            >
              {temp ? 'Fahrenheit' : 'Celsius'}
            </button>
            <form onSubmit={onSubmit}>
              <div className='relative'>
                <input
                  type='text'
                  className=' w-full p-3 pl-10 text-sm outline-none  text-gray-900 border rounded-3xl   '
                  placeholder='Search '
                  {...register('name')}
                />
                <button
                  type='submit'
                  className='text-white border-none outline-none focus:outline-none absolute right-2 bottom-2 font-medium text-xs'
                >
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        {(!query.data?.data || query.isLoading) && <Skeleton />}
        {query.data?.data && (
          <>
            {/* content */}
            <div className='container px-40 py-14'>
              <div className='text-white flex justify-evenly items-center '>
                <div className='flex flex-col'>
                  <div className='font-medium text-[13rem] leading-[13rem]'>
                    {Math.round((temp ? query.data?.data.current.temp_c : query.data?.data.current.temp_f) as number)}°
                    <span className='text-[10rem]'>{temp ? 'C' : 'F'}</span>
                  </div>
                  <div className='flex justify-around w-full'>
                    <div className='flex items-center'>
                      <div
                        className={`fi fi-${getCountryCodeIso2(query.data?.data.location.country as string)} w-8 h-8`}
                      ></div>
                      <div className='ml-2 font-medium text-xl'>{query.data?.data.location.name}</div>
                    </div>
                    <div className='flex items-center'>
                      <img
                        src={query.data?.data.current.condition.icon}
                        alt={query.data?.data.current.condition.text}
                        width={48}
                        height={48}
                      />
                      <div className='ml-2 font-medium text-xl'>{query.data?.data.current.condition.text}</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col mt-[-3rem]'>
                  <div className='flex mt-2 items-center'>
                    <span className='text-lg font-medium'>Wind:</span>
                    <span className='ml-3 font-medium text-lg'>{query.data?.data.current.wind_kph} km/h</span>
                  </div>
                  <div className='flex mt-2 items-center'>
                    <span className='text-lg font-medium'>Humidity:</span>
                    <span className='ml-3 font-medium text-lg'>{query.data?.data.current.humidity}%</span>
                  </div>
                  <div className='flex mt-2 items-center'>
                    <span className='text-lg font-medium'>Pressure:</span>
                    <span className='ml-3 font-medium text-lg'>{query.data?.data.current.pressure_in} in</span>
                  </div>
                </div>
              </div>
            </div>
            {/* panel */}
            <div className='w-full bg-[rgba(0,0,0,0.3)] flex p-6 justify-around rounded-3xl mt-2'>
              {query.data?.data.forecast.forecastday.map((item) => {
                return (
                  <div key={item.date} className='flex flex-col items-center'>
                    <span className='text-white capitalize font-bold'>{convertDatetoDay(item.date)}</span>
                    <img src={item.day.condition.icon} alt={item.day.condition.text} />
                    <div className='text-white font-thin'>{item.day.condition.text}</div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
