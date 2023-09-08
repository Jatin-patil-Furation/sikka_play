import React from 'react'

const Overlay = ({closeDrawer}:any) => {
  return (
    <div
          className="hidden md:block fixed inset-0 bg-black opacity-50 z-[50] mt-20    "
          onClick={closeDrawer}
        ></div>
  )
}

export default Overlay