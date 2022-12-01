import React from 'react'
import CV from '../../assets/CV.pdf'
import {ImDownload} from 'react-icons/im'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> <ImDownload /> CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA