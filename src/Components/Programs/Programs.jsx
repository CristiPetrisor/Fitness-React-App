import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program1.avif'
import program_2 from '../../assets/program2.jpeg'
import program_3 from '../../assets/program3.jpg' 
import program_1_icon from '../../assets/program1-icon.png'
import program_2_icon from '../../assets/program2-icon.png'
import program_3_icon from '../../assets/program3-icon.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_1_icon} alt="" />
            <p>Weight Loss</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_2_icon} alt="" />
            <p>Mantain Weight</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_3_icon} alt="" />
            <p>Muscle Grow</p>
        </div> 
      </div>
    </div>
  )
}

export default Programs
