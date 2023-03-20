import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Nombre Producto</label>
          <input type="text" placeholder="ej. camisa..." />
        </div>
        <div className="addProductItem">
          <label>Descripcion Producto</label>
          <input type="text" placeholder="Descripcion..." />
        </div>
        <div className="addProductItem">
          <label>Precio Producto</label>
          <input type="text" placeholder="1000" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select>
            <option value="true">Si</option>
            <option value="true">No</option>
          </select>
        </div>
        <button className="addProductButton">Agregar Producto</button>
      </form>
    </div>
  );
}
