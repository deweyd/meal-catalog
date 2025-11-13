import './Catalog-item.scss';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function YouTubePlayer({ url }) {
    if (!url) return null;

    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId?.indexOf("&");
    const cleanVideoId = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;

    return (
        <div className="youtube-container" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src={`https://www.youtube.com/embed/${cleanVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
        </div>
    );
}
function CatalogItem() {
    const { id } = useParams(); // передаємо ID рецепта з каталога
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const data = await response.json();
                if (data.meals && data.meals.length > 0) {
                    setMeal(data.meals[0]);
                } else {
                    setError("Рецепт не знайдено");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeal();
    }, [id]);

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error}</p>;
    if (!meal) return <p>Рецепт не знайдено</p>;

    return (
        <div className="container-wrap">
            <div className="container container-direction">
                <div className="catalog-item-bl">
                    <h1>{meal.strMeal}</h1>
                    <h2>{meal.strArea} - {meal.strCategory}</h2>
                    <h2>{meal.strTags}</h2>
                    <img
                        src={meal.strMealThumb || "https://via.placeholder.com/300"}
                        alt={meal.strMeal}
                    />
                    <p><b>Instructions:</b></p>
                    <p>{meal.strInstructions}</p>
                    {meal.strSource ? (
                        <p><a href={meal.strSource} target="_blank" rel="noopener noreferrer">
                            See also
                        </a></p>
                    ) : null}
                    {meal.strYoutube && <YouTubePlayer url={meal.strYoutube} />}
                </div>
            </div>
        </div>
    );
}

export default CatalogItem;