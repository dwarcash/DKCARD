import React, { useState } from 'react'
import { storage } from '../../firebase';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Gallery = ({ data, setData }) => {

    const [images, setImages] = useState([])

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const deleteHandler = (url) => {
        let gallery = [...data.gallery]
        gallery = gallery.filter(img => img !== url)

        setData(oldData => {

            const finalData = {
                ...oldData,
                gallery
            }

            localStorage.setItem('data', JSON.stringify(finalData))

            console.log(finalData)
            return finalData
        })
    }

    const ImageUploadHandler = () => {
        const urls = []

        Array.from(images).forEach((image) => {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                (snapshot) => { },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(async (url) => {
                            urls.push(url)
                            console.log(urls)

                            if (urls.length === images.length) {
                                const responseData = await sendRequest(
                                    process.env.REACT_APP_BACKEND_URL + '/addGallery',
                                    'POST',
                                    JSON.stringify({
                                        loginEmail: data.loginEmail,
                                        urls
                                    }),
                                    {
                                        'Content-Type': 'application/json',
                                    }
                                );

                                const gallery = [...data.gallery]
                                gallery.push(...urls)

                                setData(oldData => {

                                    const finalData = {
                                        ...oldData,
                                        gallery
                                    }

                                    localStorage.setItem('data', JSON.stringify(finalData))

                                    return finalData
                                })
                            }
                        });
                }
            );
        });




    };

    return (
        <div class="section-container" id="gallery-section">
            <h2 class="section-header">Gallery</h2>
            <div class="p-10"></div>

            <div class="images-container">

                {data.gallery.map(url => {
                    return (
                        <div class="image-wrapper" key={url}>
                            <button onClick={() => deleteHandler(url)}>DELETE</button>
                            <img onclick="" alt="Image 1" src={url} style={{ width: '100%' }} />
                        </div>
                    )
                })}

            </div>

            <div className="card">
                <h3 class="card-title">Add Image</h3>
                <input multiple type="file" onChange={(e) => setImages(e.target.files)} />
                <button onClick={ImageUploadHandler}>Upload</button>
            </div>
            <div class="section-close"></div>
        </div>
    )
}

export default Gallery
