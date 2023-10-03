import { useEffect, useState } from "react";
import CatItem from "../components/CatItem";

export default function CatsPage() {

    // const [cats, setCats] = useState([]);

    // useEffect(() => {
    //     async function getCats() {
    //         const url="https://potato-meal-planner-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         const catsArray = Object.keys(data).map(key => ({id: key, ...data[key]}));
            
    //         setCats(catsArray);
    //     }

    //     getCats();
    // }, []);

    const [cats, setCats] = useState([]);

    useEffect(() => {
        setCats([
            {
                id:1,
                caption:"Orange", 
                image:"https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
            },
        
            {
                id:2,
                caption:"Fluffy", 
                image:"https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmx1ZmZ5JTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            },
        
            {
                id:3,
                caption:"Stupid", 
                image:"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dXBpZCUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
            }
        ]);
    }, []);


    return (
        <section className="page">
            <h1>Cats</h1>
            <p>The best cat qualities:</p>
            <section className="grid">
                {cats.map(cat => (

                <CatItem cat={cat} key={cat.id} />
    ))}
            </section>
        </section>
    )}
