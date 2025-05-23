import style from './ToDoTable.module.css'

export default function ToDoTable({ items, onDelete, onEdit }) {

    return (
        <table className={style.ToDoTableBlock}>
            <tbody>
                {items.map((element, index) => (
                    <tr key={index}>
                        <td>{element}</td>
                        <td><button onClick={() => onDelete(index)}>Delete</button><button onClick={() => onEdit(index)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}