import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({ product, categories, onChange, onSave, errors }) => {
  return (
    console.log(errors),
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "Add"}</h2>

      <TextInput
        name="productName"
        label="Product Name"
        placeHolder="Enter Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Select"
        options={categories.map(category => ({
          value: category.id,
          text: category.name
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Unit Price"
        placeHolder="Enter Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        placeHolder="Enter Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        placeHolder="Enter Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}

export default ProductDetail;