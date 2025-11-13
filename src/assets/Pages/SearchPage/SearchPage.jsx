import { Link, useLocation } from 'react-router-dom';
import './SearchPage.scss';
import React, { useEffect, useState } from 'react';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchPage() {
    const query = useQuery().get('query') || '';
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query) return;

        const fetchMeals = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
                );
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const data = await response.json();

                setMeals(data.meals || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, [query]);

    return (
        <div className="container-wrap">
            <div className="container">
                <div className="search-page">
                    <h1>Результати пошуку: "{query}"</h1>

                    {loading && <p>Завантаження...</p>}
                    {error && <p>Помилка: {error}</p>}

                    {!loading && meals.length > 0 ? (
                        <div className="search-results">
                            {meals.map(meal => (
                                <Link
                                    to={`/catalog/${meal.idMeal}`}
                                    key={meal.idMeal}
                                    className="search-item"
                                >
                                    <img
                                        src={meal.strMealThumb || "https://via.placeholder.com/150"}
                                        alt={meal.strMeal}
                                    />
                                    <p>{meal.strMeal}</p>
                                    <p>{meal.strCategory || "Unknown Category"}</p>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        !loading && <p>Страва не знайдена</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchPage;