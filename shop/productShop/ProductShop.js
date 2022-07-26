import * as productService from "../../../../Services/productService";
import className from 'classnames/bind';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./ProductShop.module.css";

const cx = className.bind(style)
function ProductShop() {
    const [apiData, setApiData] = useState([])

    const getApiData = () => {
        const getData = async () => {
            const data = await productService.getAll();
            setApiData(data)
        }
        getData();
    }

    useEffect(() => {
        getApiData();
    }, [])
    return (
        <>

            <div className={cx('row', 'justify-content-between')}>
                {
                    apiData.map((items, index) => {
                        return items.id < 20 ? (
                            <div className={cx('col-lg-4')} key={index}>
                                <img className={cx('w-100', 'mt-3')} src={items.image} />
                                <div className={cx('name-pro')}>

                                    <Link className={cx('pok', 'text-decoration-none')} to={`/product/${items.id}`}>{items.productName}</Link>
                                    <p>${items.price}.00</p>
                                </div>

                            </div>

                        ) : (
                            <div key={index}></div>
                        )
                    })
                }
            </div>


        </>
    );
}

export default ProductShop;