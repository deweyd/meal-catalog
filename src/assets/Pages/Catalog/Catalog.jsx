import './Catalog.scss';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Catalog() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [letterIndex, setLetterIndex] = useState(0);
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    const fetchMeals = async (letter = "a") => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            const data = await response.json();
            if (data.meals) {
                setMeals(prev => [...prev, ...data.meals]);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMeals(letters[letterIndex]);
    }, [letterIndex]);

    const loadMore = () => {
        if (letterIndex < letters.length - 1) {
            setLetterIndex(prev => prev + 1);
        }
    };

    if (error) return <p>Помилка: {error}</p>;

    return (
        <div className="container-wrap">
            <div className="container container-direction">
                <h1>Catalog of Meals</h1>

                <div className="catalog-box">
                    {meals.map(meal => (
                        <div key={meal.idMeal} className="catalog-item">
                            <Link to={`/catalog/${meal.idMeal}`}>
                                <img
                                    src={meal.strMealThumb || "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"}
                                    alt={meal.strMeal}
                                />
                                <span>{meal.strMeal}</span>
                                <p>{meal.strCategory || "Unknown Category"}</p>
                            </Link>

                        </div>
                    ))}
                </div>

                {loading && <p>Loading...</p>}

                {letterIndex < letters.length - 1 && !loading && (
                    <button
                        className="btn-load-more"
                        onClick={loadMore}
                        style={{
                            background: "black",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginTop: "30px",
                        }}
                    >
                        Load more
                    </button>
                )}
            </div>
        </div>
    );
}

export default Catalog;

