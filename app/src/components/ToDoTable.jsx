import './ToDoTable.css'

export default function ToDoTable({ items, onDelete }) {

    return (
        <table className="ToDoTableBlock">
            <tbody>
                {items.map((element, index) => (
                    <tr key={index}>
                        <td>{element}</td>
                        <td><button onClick={() => onDelete(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}