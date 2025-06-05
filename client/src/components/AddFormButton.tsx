interface AddFormButtonProps {
  toggleVisibility: () => void;
}

const AddFormButton = ({ toggleVisibility }: AddFormButtonProps) => {
  return (
    <p>
      <button className={`add-product-button`} onClick={toggleVisibility}>
        Add A Product
      </button>
    </p>
  );
};

export default AddFormButton;
