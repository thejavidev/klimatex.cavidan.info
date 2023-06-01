import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="loader1 w-full min-h-[100vh] fixed top-0 bg-[--bgef] z-[9999] overflow-hidden tansitionall2 flex justify-center items-center">
        <div className="flex items-center justify-center loaderScreen">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </>
  )
}

export default Loader
