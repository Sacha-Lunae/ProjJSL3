import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {ImInstagram} from 'react-icons/im'
import {ImSpotify} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="www.linkedin.com/in/sacha-guenoun-97225a1b8" target="_blank"> <ImLinkedin /></a>
        <a href="https://www.instagram.com/aanmit/" target="_blank"><ImInstagram /></a>
        <a href="https://open.spotify.com/user/eternalsach?si=8ffadcd746c4488b" target="_blank"> <ImSpotify /></a>
    </div>
  )
}

export default HeaderSocials