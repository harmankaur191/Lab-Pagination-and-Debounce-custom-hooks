
export default function PageList({ items }) {
    return (
        <ul className="">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))

            }
        </ul>
    )
}