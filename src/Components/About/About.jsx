import './About.scss'

import person from '../../assets/img/person.jpg'

const About = () =>{
    return(
        <div className="about">
            <h1 className='about__name'>About me</h1>
            <h3 className='about__text'>Brief information about myself.</h3>

            <div className="about__page">
                 <div className="about__list">
                 <img src={person}
                 className='about__img'
                 alt="" />
                 </div>
                <div className="about__list">
                 <h3 className='about__texts'>Hello dear!  I'm Muhammadislom Xojimuhammedov and I'm 18 years old. I'm from Uzbekistan, I live in Andijan.</h3>
                 <h3 className='about__texts'>I started frontend training independently in November 2021, and from April 2021 I took a 5-month course at IT TIME Academy. Now I have enough skills from HTML, CSS, SCSS, SASS, Tailwind CSS, Bootstrap,  JavaScript, React JS, Github, Material UI and Ant Design technologies.</h3>
                 <h3 className='about__texts'>I like my job and I will be very happy if I solve the given problems quickly.</h3>
                </div>
            </div>
        </div>
    )
}

export default About