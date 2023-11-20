import { useState } from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import "./styles.css";

export default function App() {
  const [cars, setCars] = useState([]);
  console.log(cars);
  const handleSubmit = (brandName, modelName, quantity) => {
    console.log(brandName, modelName, quantity);
    const car = cars.filter((car) => car.brand == brandName);
    if (car.length > 0) {
      const newCars = cars.map((car) => {
        if (car.brand == brandName && car.model == modelName) {
          const quant = car.quantity + Number(quantity);
          return { ...car, quantity: quant };
        }
        return car;
      });
      setCars(newCars);
    } else {
      setCars([
        ...cars,
        { brand: brandName, model: modelName, quantity: Number(quantity) }
      ]);
    }
  };
  return (
    <div className="App">
      <h1>Car Parking system</h1>
      <CarForm hanldeSubmit={handleSubmit} />
      <CarList cars={cars} />
    </div>
  );
}
