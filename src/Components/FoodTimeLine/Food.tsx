import { useState } from 'react';
import './Food.scss';
import { foodTimeLine } from '@/data/food';

export default function FoodTimeLine() {
  console.log(foodTimeLine);
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const activeMeal = foodTimeLine.find((meal) => meal.id === selectedMeal);

  return (
    <div className="food-timeline-container">
      <h1 className="timeline-title">📅 What You Ate Throughout the Day</h1>

      {/* Timeline Navigation */}
      <div className="timeline">
        {foodTimeLine.map((meal) => (
          <div
            key={meal.id}
            className={`timeline-dot ${selectedMeal === meal.id ? "active" : ""}`}
            onClick={() => setSelectedMeal(meal.id)}
          >
            {meal.title}
          </div>
        ))}
      </div>

      {/* Selected Meal Details */}
      <div className="meal-details">
        <h2>{activeMeal?.title}</h2>
        <p>{activeMeal?.description}</p>

        {/* Most Eaten Item */}
        <p className="most-eaten">🔥 Most Eaten: {activeMeal?.mostEaten}</p>

        {/* Food Items Display */}
        <div className="food-items">
          {activeMeal?.foodItems.map((food) => (
            <div key={food.name} className="food-card">
              <img src={food.img} alt={food.name} />
              <p>{food.name}</p>
            </div>
          ))}
        </div>

        {/* Joke Macros */}
        <div className="joke-macros">
          <h3>🧮 Fake Nutrition Facts:</h3>
          <p>🍔 Calories: {activeMeal?.jokeMacros.calories}</p>
          <p>💪 Protein: {activeMeal?.jokeMacros.protein}</p>
          <p>🛢️ Fat: {activeMeal?.jokeMacros.fat}</p>
        </div>
      </div>
    </div>
  );
}