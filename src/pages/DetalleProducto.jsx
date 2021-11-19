import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import '../styles/DetalleProducto.css';


const DetalleProducto = () => {
    
    const [item, setItem] = useState('');
    const [description, setDescription] = useState('');

    let params = useParams();
    const API = `https://api.mercadolibre.com/items/${params.id}`;
    const APIdes = `https://api.mercadolibre.com/items/${params.id}/description`;

    useEffect(() => {
        (async () => {
          const response = await axios.get(API);
          const resp = response.data;
          const response_des = await axios.get(APIdes);
          const resp_des = response_des.data;
          setDescription(resp_des)
          setItem(resp);
        })()
    }, [API, APIdes]);



    const {thumbnail, pictures, price, title} = item;
    
    return (
        <>
            <Header/>

            <div className="detail-container">
                <div className="image-info-container">
                    <div className="picture-container">
                        <img src={(pictures && pictures[0].url) || thumbnail} alt="item" />
                    </div>
                    <div className="info-container">
                        <h2>{title}</h2>
                        <div className="prices">
                            <h2>${price}</h2>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="description-container">
                    <h2>Descripción</h2>
                    <h3>{description.plain_text}</h3>
                </div>
            </div>
        </>
    );
}
 
export default DetalleProducto;