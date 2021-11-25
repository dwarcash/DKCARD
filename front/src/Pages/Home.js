import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router'
import { useHttpClient } from '../shared/hooks/http-hook'

export default function Home({ data, setData }) {

    const { id } = useParams()

    const [uid, setUid] = useState(id)

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const check = async () => {
        const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + '/fetchUser',
            'POST',
            JSON.stringify({
                uid
            }),
            {
                'Content-Type': 'application/json',
            }
        );
        setData({ ...responseData, public: true })
        console.log('arrived', data)
    }

    useEffect(() => {
        if (uid) {
            check()
        } 
    }, [uid])


    return (


        <React.Fragment>
            {data &&
                <div>
                    <Profile data={data} setData={setData} />
                    <AboutUs data={data} setData={setData} />
                    <Products data={data} setData={setData} />
                    <Gallery data={data} setData={setData} />
                    <Feedback data={data} setData={setData} />
                    {!data.public && <Enquiry data={data} setData={setData} />}
                    <Footer data={data} setData={setData} />
                    <Menu />

                    <ImageModal />
                    <ShareModal />
                </div>

            }


        </React.Fragment>
    )
}
