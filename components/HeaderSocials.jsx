import { FaYoutube } from 'react-icons/fa';
import {FaGithub} from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='text-white flex-col items-center gap-6 absolute top-80 left-20 bottom-12 hidden lg:flex md:flex'>
        <a href="https://www.youtube.com/channel/UCugP9o0GFBvoSg3xj0VJXqw" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://github.com/Simplevhick/Kevindavid" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.tiktok.com/@iamkevindavidkaydee" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        <a href="https://instagram.com/kevindavidkaydee/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://x.com/kevindavidkdee" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
    </div>
  )
}

export default HeaderSocials