import './Portfolio.scss'


//Images
import tesla from '../../assets/img/tesla.jpg'
import youtube from '../../assets/img/youtube.jpg'
import food from '../../assets/img/food.jpg'
import github from '../../assets/img/github.png'
import link from '../../assets/img/link.png'
import movie from '../../assets/img/movie.jpg'
import pixer from '../../assets/img/pixer.jpg'

const Portfolio = () =>{
    return(
        <div className="section">
            <h1 className='section__name'>Portfolio</h1>
            <h3 className='section__full'>Check my portfolios</h3>

            <div className="section__list">
                <img src={tesla} alt="" className="section__img" />
                <div className="section__item">
                    <h3 className='section__names'>Tesla auto</h3>
                    <p className='section__text'>You can buy the car market any way you want.</p>
                    <div className="section__items">
                        <div className="section__title">
                            <a href="https://github.com/muhammadislom2004" className="section__link">Source</a>
                            <a href="https://github.com/muhammadislom2004"><img className='section__picture' src={github} alt="" /></a>
                        </div>
                         <div className="section__titles">
                            <a href="#" className="section__links">Demo</a>
                            <img className='section__pictures' src={link} alt="" />
                         </div>
                    </div>
                </div>
            </div>

            <div className="section__list">
                <div className="section-item">
                    <h3 className='section__names'>You Tube</h3>
                    <p className='section__text'>You can watch the movie by logging in to the  clone version  Youtube.</p>
                    <div className="section__items">
                        <div className="section__title">
                            <a href="https://github.com/muhammadislom2004" className="section__link">Source</a>
                            <a href="https://github.com/muhammadislom2004"><img className='section__picture' src={github} alt="" /></a>
                        </div>
                         <div className="section__titles">
                            <a href="#" className="section__links">Demo</a>
                            <img className='section__pictures' src={link} alt="" />
                         </div>
                    </div>
                </div>
                <img src={youtube} alt="" className="section__pic" />
            </div>

            <div className="section__list">
                <img src={food} alt="" className="section__img" />
                <div className="section__item">
                    <h3 className='section__names'>Food shop</h3>
                    <p className='section__text'>You can buy the car market any way you want.</p>
                    <div className="section__items">
                        <div className="section__title">
                            <a href="https://github.com/muhammadislom2004" className="section__link">Source</a>
                            <a href="https://github.com/muhammadislom2004"><img className='section__picture' src={github} alt="" /></a>
                        </div>
                         <div className="section__titles">
                            <a href="#" className="section__links">Demo</a>
                            <img className='section__pictures' src={link} alt="" />
                         </div>
                    </div>
                </div>
            </div>

            <div className="section__list">
                <div className="section-item">
                    <h3 className='section__names'>Movie film</h3>
                    <p className='section__text'>You can watch the movie by logging in to the  clone version  Youtube.</p>
                    <div className="section__items">
                        <div className="section__title">
                            <a href="https://github.com/muhammadislom2004" className="section__link">Source</a>
                            <a href="https://github.com/muhammadislom2004"><img className='section__picture' src={github} alt="" /></a>
                        </div>
                         <div className="section__titles">
                            <a href="#" className="section__links">Demo</a>
                            <img className='section__pictures' src={link} alt="" />
                         </div>
                    </div>
                </div>
                <img src={movie} alt="" className="section__pic" />
            </div>

            <div className="section__list">
                <img src={pixer} alt="" className="section__img" />
                <div className="section__item">
                    <h3 className='section__names'>Pixer</h3>
                    <p className='section__text'>You can buy the car market any way you want.</p>
                    <div className="section__items">
                        <div className="section__title">
                            <a href="https://github.com/muhammadislom2004" className="section__link">Source</a>
                            <a href="https://github.com/muhammadislom2004"><img className='section__picture' src={github} alt="" /></a>
                        </div>
                         <div className="section__titles">
                            <a href="#" className="section__links">Demo</a>
                            <img className='section__pictures' src={link} alt="" />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio