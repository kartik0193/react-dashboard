import React from 'react'
import Status from './Status'
import ContactActions from './ContactActions'
import BusinessDetailsForm from './BusinessDetails'

const SideBar = () => {
  return (
    <div>
      <Status />
      <ContactActions />
      <BusinessDetailsForm  />
    </div>
  )
}

export default SideBar
