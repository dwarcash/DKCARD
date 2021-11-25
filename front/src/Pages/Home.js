import React from 'react'
import Profile from '../Components/Profile/Profile'
import AboutUs from '../Components/AboutUs/AboutUs'
import Products from '../Components/Products/Products'
import Gallery from '../Components/Gallery/Gallery'
import Feedback from '../Components/Feedback/Feedback'
import Enquiry from '../Components/Enquiry/Enquiry'
import Footer from '../Components/Footer/Footer'
import Menu from '../Components/Menu/Menu'
import ImageModal from '../Components/ImageModal/ImageModal'
import ShareModal from '../Components/ShareModal/ShareModal'

export default function Home({data}) {
    return (
        <React.Fragment>

            <Profile data={data}/>
            <AboutUs data={data}/>
            <Products data={data}/>
            <Gallery data={data}/>
            <Feedback data={data}/>
            <Enquiry data={data}/>
            <Footer data={data}/>
            <Menu />

            {/* Functional Rendering */}
            <ImageModal />
            <ShareModal />



            
            {/* Scripts */}
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/intlTelInput.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.min.js"></script>
            <script src="../templates/common/js/star-rating.js"></script>
            <script src="../templates/common/js/script.js"></script> */}

        </React.Fragment>
    )
}
