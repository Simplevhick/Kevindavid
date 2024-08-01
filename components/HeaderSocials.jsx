import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='text-white flex flex-col items-center gap-6 absolute top-80 left-20 bottom-12 hidden lg:flex'>
        <a href="https://linkdin.com"><BsLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://dribble.com"><FiDribbble /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaXTwitter /></a>
    </div>
  )
}

export default HeaderSocials