import { useState } from 'react';
import AddForm from './AddForm';
import ProductListing from './ProductListing';

const Main = () => {
  const [formVisibility, setFormVisibility] = useState(false);
  const toggleVisibility = () => setFormVisibility(!formVisibility);

  return (
    <main>
      <ProductListing />
      <p>
        <button className="add-product-button" onClick={toggleVisibility}>
          Add A Product
        </button>
      </p>
      <AddForm formVisibility={formVisibility} />
    </main>
  );
};

export default Main;
