import React from 'react'
import IMCARDS from '../../assets/Cards.zip'
import {ImDownload} from 'react-icons/im'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={IMCARDS} download className='btn'> <ImDownload /> ZIP of cards</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA