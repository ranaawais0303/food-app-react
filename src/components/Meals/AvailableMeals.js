import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const url = "https://my-react-bbfab-default-rtdb.firebaseio.com/FoodList.json";
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    //because fetch meals is async function must use await
    //or catch error to resolve promise not reject
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>is Loading...</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }
  const meanList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meanList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
