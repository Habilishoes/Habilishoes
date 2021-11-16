import React from "react";
import TablaProductosDisponibles from "../components/TablaProductosDisponibles";

const ProductosDisponibles = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Productos más vendidos</h1>,
      <TablaProductosDisponibles />
    </div>
  );
};

export default ProductosDisponibles;