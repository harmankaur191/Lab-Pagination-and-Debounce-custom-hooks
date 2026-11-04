
export default function PageList({ items }) {
    return (
        <ul className="border-white border-1">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))

            }
        </ul>
    )
}