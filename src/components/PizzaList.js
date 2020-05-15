import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user
};

const selectPizzas = (reduxState) => {
  return reduxState.pizzas
    .sort((a, b) => {
      return b.bought - a.bought;
    })
    .map((pizza) => {
      return {
        ...pizza,
        isFavorite: reduxState.user.favorites.includes(pizza.id)
      };
    });
};

const selectFavorites = (reduxState) => {
  return reduxState.user.favorites;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const favoritePizza = useSelector(selectFavorites)
  const dispatch = useDispatch()


  console.log("pizza???", pizzas)
  console.log("fav?", favoritePizza)
  console.log("fav2?", user.favorites)

  const pizzaList = pizzas.map((pizza) => {
    const { id, name, description, bought } = pizza;
    return (
      <ul key={id}>
        <p>
          <b>
            {name} {" "}
            <button onClick={() => {
              dispatch({
                type: "TOGGLE_FAVORITE_PIZZA",
                payload: pizza.id
              })
            }}> 
              ♡
            </button>
          </b>
        </p>
        <li>{description}</li>
        <li>Number of times bought: {bought}</li>
      </ul>
    );
  });

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your {pizzaList.length} favorite{" "} pizzas:
      </p>
      {pizzaList}
    </div>
  );
}
