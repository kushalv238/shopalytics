const TableRow = (props) => {
    return (
        <tr>
            <td className="td-team">
                <div className="img-1">
                    <img src={props.image} alt={props.title} />
                </div>
            </td>
            <td>{props._id}</td>
            <td>{props.title}</td>
            <td>{props.visits}</td>
            <td>
                <span className="badge success">Available</span>
            </td>
        </tr>
    )
}

export default TableRow