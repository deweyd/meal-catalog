import './FullScreenSwiper.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";

function FullScreenSwiper() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`
                );
                const data = await response.json();
                setMeals(data.meals.slice(0, 10));
            } catch (err) {
                console.error("Помилка завантаження страв:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    if (loading) return <p>Downloading...</p>;

    return (
        <div className={"top-banner"}>
            <div className="top-banner-title">Delicious Meals</div>
            <Swiper
                slidesPerView={1}
                loop={true}
                style={{ width: "100vw", height: "75vh" }}
            >
                {meals.map((meal) => (
                    <SwiperSlide key={meal.idMeal}>
                        <img
                            src={meal.strMealThumb || "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"}
                            alt={meal.strMeal}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                        <div className="swiper-meal-title">{meal.strMeal}</div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FullScreenSwiper;