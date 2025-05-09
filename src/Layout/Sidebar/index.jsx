import React from 'react'
import ContactActions from './ContactActions'
import BusinessDetailsForm from './BusinessDetails'
import StatusDetails from './StatusDetails'


const SideBar = () => {
  return (
    <div>
      <div className='flex lg:flex-col items-center'>
        <StatusDetails />
        <ContactActions />
      </div>
      <BusinessDetailsForm />
    </div>
  )
}

export default SideBar
