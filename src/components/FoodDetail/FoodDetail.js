import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../fakeData/fakeData';

const FoodDetail = () => {
  // step1
  const productKey = useParams();
  const [productDetail, setProductDetail] = useState(null);
  //console.log(productDetail);
  useEffect(() => {
    const productData = data.filter(
      itemPd => itemPd.id === parseInt(productKey.id)
    );
    setProductDetail(productData[0]);
  }, [productKey]);

  console.log(productDetail);

  return (
    <div>
      {productDetail ? (
        <h3>{productDetail && productDetail.price}</h3>
      ) : (
        <h3> Problem fixed then try </h3>
      )}
    </div>
  );
};

export default FoodDetail;
