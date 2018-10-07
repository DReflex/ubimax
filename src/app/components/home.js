import React from 'react';
import Background from './home-slider'
import "./home.scss";

class Home extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello Home</h1>
            <Background />
            <Heading/>
            <ContentQuote />
            <Video/>
            <ContentRed />
            <Customers />
            <ContentGray />
            <Events />
            <News />
            </div>
        )
    }
}
export default Home
// function Background(){
//     let height = window.innerHeight ;
//     console.log(height);
    

//         return (
//             <div className="home" style={{height:height}}>

//             <div className="home-slider">
//             <div className="home-gradient"></div>
//             <div className="home-text">
//             <h1>some big text for picture</h1>
//             <h2>for something something</h2>
//             </div>
//             </div>
//             </div>
//         )
            

// }
function Heading(){
    return(
        <div className="Heading">

            <h1 className="heading-head">
                wear IT at work
            </h1>
            <p className="heading-highlight">We help frontline workers to maximize their productivity and to make their work more attractive.</p>
            <p className="text-lg">
            More than 200 enterprises around the globe already trust Ubimax Wearable Computing and Augmented Reality Solutions. Most of them are achieving an astonishing 35% or more in productivity improvements. Join them now and start to wear IT at work!
            </p>
        </div>
        
    );
}
function ContentQuote(){
    return(
        <div>
            <p>"</p>
            <p className="text-lg">
            Ubimax is the global Market Leader for Enterprise Wearables and Augmented Reality Solutions, with a robust partner base and suite of offerings spanning end-to-end.
            </p>
            <p className="text-author">-Some Author</p>
        </div>
    )
}
function Video(){
    return(
        <div className="video-content">
            <img src="https://www.ubimax.com/img/ff4ad55a.image-video.jpg" />
            <div className="video-overlay">
                <div className="video-description">
                    <h2>Ubimax intro</h2>
                </div>
            </div>
        </div>
    );
}
function ContentRed(){
    return (
        <div className="content-red">
        <div className="red-text">
            <h1> Ubimax Frontline</h1>
            <p>
                Ubimax Frontline is a fully integrated Productivity Solution Suite. It improves work efficiency and simplifies processes for 80% of today’s workforce – those who work outside of the office and away from desks.
            </p>
        </div>
            <div className="image-gallery">
                <div className="image"> <img src="https://www.ubimax.com/img/gallery/9926445d.xpick.jpg"/></div>
                <div className="image"> <img src="https://www.ubimax.com/img/gallery/9926445d.xpick.jpg" /></div>
                <div className="image"> <img src="https://www.ubimax.com/img/gallery/9926445d.xpick.jpg" /></div>
                <div className="image"> <img src="https://www.ubimax.com/img/gallery/9926445d.xpick.jpg" /></div>
            </div>
            <div className="button">
                <div className="btn btn-default">Discover More</div>
            </div>
        </div>
    )
}
function Customers (){
    return (
        <div>
            <h1 className="heading-head">More than 200 Customers</h1>
            <div className="grid-table">
                <div className="customer">
                    <div className="customer-head">Add backend</div>
                    <img className="img img-responsive other-images" src="https://www.ubimax.com/cms/customers-20170713-1-Pu0y7qPF.png" />
                    <div className="links">
                        <div className="link-container">
                            <a>Add backend for links</a>
                        </div>
                    </div>
                </div>
                <div className="customer">

                </div>
                <div className="customer">

                </div>
                <div className="customer">

                </div>
            </div>
            <div className="button">
            <div className="btn btn-default">show More</div>
            </div>
        </div>
    )
}
function ContentGray(){
    return(
        <div className="content-gray">
        <h1 className="heading-head">Why Ubimax Frontline</h1>
        <div className="items-container">
            <div className="gray-item">
                    <img className="img img-responsive gray-image" src="https://www.ubimax.com/img/benefits/c051765e.speed.png"/>
                    <p>Bug's free</p>
            </div>
            <div className="gray-item"></div>
            <div className="gray-item"></div>
            <div className="gray-item"></div>
        </div>
        <div className="button">
            <div className="btn btn-default">Learn More</div>
        </div>
        </div>
    )
}
function Events (){
    return(
        <div className="events">
            <h1 className="heading-head">Events</h1>
            <div className="grid-table">
                <div className="event-item">
                    <div className="customer-head event-head">Add backend date</div>
                    <div className="image-container">
                        <img className="img img-responsive" src="https://www.ubimax.com/cms/events-20180813-1-Ubkd6ngd.png" />
                    </div>
                    <h3 className="event-describe">Describe</h3>
                </div>
                <div className="event-item"></div>
                <div className="event-item"></div>
            </div>
            <div className="button">
                <div className="btn btn-default">Show events</div>
            </div>
        </div>
    )
}
function News (){
    return(
        <div className="news">
            <h1 className="heading-head">Latest news</h1>
            <div className="grid-table">
                <div className="news-post">
                    <div className="image-container">
                        <img className="img img-responsive" src="https://www.ubimax.com/cms/news-20180927-1-0KpQ6gAC.jpg"/>
                    </div>
                    <div className="caption">Captopn || No Caption</div>
                    <div className="content">
                        <h3>News Heading</h3>
                        <p>lorem ipsum
                        </p>
                    </div>
                    <span className="read">read more</span>
                </div>
                <div className="news-post"></div>
                <div className="news-post"></div>
            </div>
            <div className="button">
                <div className="btn btn-default">all Posts</div>
            </div>
        </div>
    )
}