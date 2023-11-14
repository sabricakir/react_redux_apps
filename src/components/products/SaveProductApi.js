import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';
import { saveProduct } from '../../redux/actions/productActions';
import ProductDetail from './ProductDetail';
import { useParams, useNavigate } from 'react-router-dom';

function SaveProductApi({
  products,
  categories,
  getCategories,
  saveProduct,
}) {
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});

  const productId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories.length) {
      getCategories();
    }

    setProduct(
      productId && products.length
        ? getProductById(products, productId)
        : {}
    );
  }, [categories, getCategories, productId, products]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'categoryId' ? parseInt(value, 10) : value,
    }));

    validate(name, value);
  };

  const validate = (name, value) => {
    if (value === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'This field is required',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveProduct(product).then(() => {
      navigate('/');
    });
  };

  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

function getProductById(products, productId) {
  return products.find((product) => product.id === parseInt(productId)) || null;
}

const mapStateToProps = (state) => {
  return {
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
};

const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveProductApi);
