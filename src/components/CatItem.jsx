export default function CatItem({cat}) {

return (
    <article key={cat.id}>
        <h3>{cat.caption}</h3>
        <img src={cat.image} />
    </article>
)
}
