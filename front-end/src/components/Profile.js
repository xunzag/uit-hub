import React from 'react'
import cutie from "../images/cutie.jpg"


function Profile() {
  return (
    <div className="image-container">
      <img src={cutie} alt="Centered Image" className="centered-image" />
    </div>
  )
}

export default Profile