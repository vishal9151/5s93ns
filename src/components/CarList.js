

const CarList=({cars})=>{
  return (
    <>
       {cars.map((car,index)=>(
         <>
           <div key={index}>BrandName: {car.brand}</div>
           <div>ModelName: {car.model}</div>
           <div>Quantity: {car.quantity}</div>
         </>
       ))}
    </>
  )
}

export default CarList;