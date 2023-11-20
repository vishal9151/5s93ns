import { useRef } from "react";

export default function CarForm({ hanldeSubmit }) {
  const brand = useRef();
  const name = useRef();
  const quantity = useRef();
  const handleClick = () => {
    hanldeSubmit(
      brand.current.value,
      name.current.value,
      quantity.current.value
    );
  };
  return (
    <>
      <h3>Brand name</h3>
      <input type="text" ref={brand} />
      <h3>Model Name</h3>
      <input type="text" ref={name} />
      <h3>Quantity</h3>
      <input type="text" ref={quantity} />
      <br />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}
