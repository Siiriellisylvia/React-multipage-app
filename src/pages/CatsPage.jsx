import { useState } from "react";

export default function CatsPage() {

    const [cats, setCats] = useState(["Fluffy", "Orange", "Stupid"]);

    return (
        <section className="page">
            <h1>Cats Page</h1>
            <p>The best cat qualities:</p>
            {cats}
        </section>
    );
}
