import { useQuery } from '@tanstack/react-query'
import React from 'react'
import weatherApi from '~/apis/weather.api'
import { BsSnow3 } from 'react-icons/bs'
import { RiWindyLine } from 'react-icons/ri'
import { MdOutlineWbSunny } from 'react-icons/md'

import { useQueryString } from '~/utils/utils'

export default function Homepage() {
  const queryString: { q?: string } = useQueryString()

  const query = useQuery({
    queryKey: ['weather', queryString],
    queryFn: () => {
      return weatherApi.getWeatherWithState(queryString)
    }
  })
  console.log(query)

  return (
    <div className=' bg-orange-50 w-screen h-screen relative'>
      <div className=' m-auto absolute top-20 right-20 bottom-20 left-20 rounded-[3rem] px-20 py-10 shadow-sm bg-center bg-no-repeat bg-[url("https://cdn.wallpapersafari.com/43/51/iQEfDy.jpg")] bg-gray-700 bg-blend-multiply object-cover'>
        {/* header */}
        <div className='flex justify-between items-center container'>
          <div className='flex items-center'>
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
            <span className='font-bold text-xl'>Thien Cao</span>
          </div>
          <div>
            <form>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <input
                  type='search'
                  id='default-search'
                  className=' w-full p-3 pl-10 text-sm outline-none  text-gray-900 border border-gray-300 rounded-3xl  focus:ring-gray-500 focus:border-gray-500'
                  placeholder='Search '
                  required
                />
                <button
                  type='submit'
                  className='text-white border-none outline-none absolute right-2 bottom-2 font-medium text-xs'
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
        {/* content */}
        <div className='container relative px-40'>
          <div className='text-white flex justify-evenly items-center '>
            <div className='flex flex-col'>
              <div className='font-medium text-[13rem]'>18C</div>
              <div className='flex justify-around w-full'>
                <div className='flex items-center'>
                  <div className='fi fi-gr'></div>
                  <div className='ml-2 font-medium text-xl'>Finland</div>
                </div>
                <div className='flex items-center'>
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
                    </defs>
                    <g filter='url(#blur)' id='cloudy'>
                      <g transform='translate(20,10)'>
                        <g className='am-weather-cloud-1'>
                          <path
                            d='M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                            fill='#91C0F8'
                            stroke='white'
                            strokeLinejoin='round'
                            strokeWidth='1.2'
                            transform='translate(-10,-8), scale(0.6)'
                          />
                        </g>
                        <g className='am-weather-cloud-2'>
                          <path
                            d='M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                            fill='#57A0EE'
                            stroke='#FFFFFF'
                            strokeLinejoin='round'
                            strokeWidth='1.2'
                            transform='translate(-20,-11)'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className='ml-2 font-medium text-xl'>Cloud</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-[-3rem]'>
              <div className='flex mt-2 items-center'>
                <BsSnow3 />
                <span className='ml-3 font-medium text-lg'>26%</span>
              </div>
              <div className='flex mt-2 items-center'>
                <RiWindyLine />
                <span className='ml-3 font-medium text-lg'>16 km/h</span>
              </div>
              <div className='flex mt-2 items-center'>
                <MdOutlineWbSunny />
                <span className='ml-3 font-medium text-lg'>6.5 h</span>
              </div>
            </div>
          </div>
        </div>
        {/* panel */}
        <div className='w-full bg-[rgba(0,0,0,0.3)] flex p-6 justify-around rounded-3xl mt-2'>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Mon</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Tue</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Wed</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Thu</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Fri</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Sat</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-white capitalize font-bold'>Sun</span>
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
              </defs>
              <g filter='url(#blur)' id='cloudy-day-1'>
                <g transform='translate(20,10)'>
                  <g transform='translate(0,16)'>
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
                  <g className='am-weather-cloud-2'>
                    <path
                      d='M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z'
                      fill='#C6DEFF'
                      stroke='white'
                      strokeLinejoin='round'
                      strokeWidth='1.2'
                      transform='translate(-20,-11)'
                    />
                  </g>
                </g>
              </g>
            </svg>
            <div className='text-white font-thin'>Patchy rain possible</div>
          </div>
        </div>
      </div>
    </div>
  )
}
