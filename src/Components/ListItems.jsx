function ListItems({list, onDelete}) {
    return (
      <>
        <ul className="list-group">
            {list.map((item, index) => (
                <li key={index} className="list-group-item d-flex">
                    <div className="col-6">{item.item}</div>
                    <div className="col-5">{item.date}</div>
                    <div className="col-1"><button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button></div>
                </li>
            ))}
        </ul>
      </>
    )
  }
  
  export default ListItems
  