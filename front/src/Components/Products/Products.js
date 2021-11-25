import React, { useState } from 'react'
import { storage } from '../../firebase';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Products = ({ data, setData }) => {


    const [productName, setProductName] = useState()
    const [productImage, setProductImage] = useState()

    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const deleteHandler = (name) => {
        let products = [...data.products]
        products = products.filter(product => product.name !== name)

        setData(oldData => {

            const finalData = {
                ...oldData,
                products
            }

            localStorage.setItem('data', JSON.stringify(finalData))

            console.log(finalData)
            return finalData
        })
    }

    const addProductHandler = () => {

        const product = {
            name: productName,
            image: productImage
        }


        const uploadTask = storage.ref(`images/${product.name}`).put(product.image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(product.name)
                    .getDownloadURL()
                    .then(async url => {

                        product.image = url

                        const responseData = await sendRequest(
                            process.env.REACT_APP_BACKEND_URL + '/addProduct',
                            'POST',
                            JSON.stringify({
                                loginEmail: data.loginEmail,
                                name: product.name,
                                image: product.image
                            }),
                            {
                                'Content-Type': 'application/json',
                            }
                        );

                        const products = [...data.products]
                        products.push(product)

                        setData(oldData => {

                            const finalData = {
                                ...oldData,
                                products
                            }

                            localStorage.setItem('data', JSON.stringify(finalData))

                            console.log(finalData)
                            return finalData
                        })

                    });
            }
        );



    }

    return (
        <div class="section-container" id="products-services-section">
            <h2 class="section-header">Products/Services</h2>
            <div class="p-10"></div>
            <div>

                {data.products.map((product) => {
                    return (
                        <div class="card" key={product.name}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h3 class="card-title">{product.name}</h3>
                                <button onClick={() => deleteHandler(product.name)}>DELETE</button>
                            </div>


                            <img onclick="" alt="Digital Marketing Intelligence" src={product.image} style={{ width: '100%', marginBottom: '15px' }} />
                            <div class="product-enquiry-section">
                                <div class="product-price">

                                </div>
                                <a href={`https://wa.me/91${data.mobile}?text=Hi, I am interested in your product/service: ${product.name}. Please provide more details.`} target="blank" class="product-enquiry-btn">Enquiry</a>
                            </div>
                        </div>
                    )
                })}

                <div className="card">
                    <h3 class="card-title">Add Product/Service</h3>
                    <input type="file" onChange={(e) => setProductImage(e.target.files[0])} />
                    <input type="text" placeholder="name" onChange={(e) => setProductName(e.target.value)} />
                    <button onClick={addProductHandler}>Add</button>
                </div>


            </div>
            <div class="section-close"></div>

        </div>
    )

}

export default Products