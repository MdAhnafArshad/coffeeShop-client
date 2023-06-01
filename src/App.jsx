import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard';

function App() {

  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData)

  return (
    <>
      
      <h1>add the coffee {coffeeData.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {coffees.map(res => <CoffeeCard 
        key={res._id} 
        coffee={res}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)}
      </div>
    </>
  )
}

export default App
