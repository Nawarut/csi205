import { useState } from 'react'
import Value from '../Components/Value'
import Adder from '../Components/adder'
import Timer from '../Components/Timer'
import Temperature from '../Components/Temperatures'

const Components = () => {
  const [value, setValue] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        COMPONENTS PAGE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Counter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Value name="COUNTER" value={value} setValue={setValue} />
        </div>

        {/* Adder */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Adder />
        </div>

        {/* Temperature */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Temperature />
        </div>

        {/* Timer */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Timer />
        </div>
      </div>
    </div>
  )
}

export default Components

