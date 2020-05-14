import React from "react";
import { useSelector } from "react-redux";

const selectUser = reduxState => {
  return reduxState.user;
};

const selectPizzas = reduxState => {
    const sortedPizzas = reduxState.pizzas.sort((pizza_a, pizza_b) => {
        return pizza_b.bought - pizza_a.bought
    })
    return sortedPizzas
  };

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas)

  const pizzaList = pizzas.map((pizza) => {
    const { id, name, description, bought } = pizza;
    return (
        <ul  key={id}>
            <p><b>
                {name}
            </b></p>
            <li>
                {description}
            </li>
            <li>
                Number of times bought: {bought}
            </li>
        </ul>
    )
  })  

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
  Welcome back, <strong>{user.name}</strong>! Your favorite {pizzaList.length} pizzas:
      </p>
        {pizzaList} 
    </div>
  );
}