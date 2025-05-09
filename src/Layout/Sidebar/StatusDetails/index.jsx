import React from 'react'

const StatusDetails = ({ name = "Truck Grear", email = "jillali@onechanneladmin.com", initials = "TG", status = "BUSINESS" }) => {
  return (
    <div className="flex items-start statusBox border_gray justify-between  rounded-xl p-4 w-full">
      <div className="flex items-center mr-2	">
        <div className="relative mr-2">
          <div className="rounded-full trackLogo text-white flex items-center justify-center font-bold text-lg">
            {initials}
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>

        <div>
          <div className="flex items-center ">
            <span className="font-semibold  trackName mr-2">{name}</span>
            <span className="text-xs trackStatus text-uppercase px-2 py-0.5 rounded-full font-medium">
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-500 font-normal	 trackEmailId">{email}</p>
        </div>
      </div>
      <button className="text-sm changeStatusBox">
        Change Status
      </button>
    </div>
  )
}

export default StatusDetails
