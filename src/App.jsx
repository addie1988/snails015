import Header from './Header'
import Banner from './Banner'
import SocialVideos from './SocialVideos'
import Carousel from './Carousel'
import Photo from './Photo'
import Message from './Message'
import As_seen_in from './As_seen_in'
import Advertise from './Advertise'
import Partners from './Partners'
import Footer from './Footer'
import './Style.css'

function App() {
  return (
    <div className='main'>
      <Header />
      <Banner />
      <SocialVideos />
      <Carousel />
      <Photo />
      <Message />
      <As_seen_in />
      <Advertise />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
