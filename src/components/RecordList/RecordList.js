import React from 'react';
import { Link } from 'react-router-dom';
import './RecordList.css';


class RecordList extends React.Component {
  delete = () => {
    fetch('http://localhost/server/delete.php?id=' + this.props.obj.id)
      .then(console.log('deleted'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  render () {
    return (
      <tr>
      <td>{this.props.obj.name}</td>
      <td>{this.props.obj.price}</td>
      <td>{this.props.obj.fromDate}</td>
      <td>{this.props.obj.toDate}</td>
      <td>
      <Link to={"/edit/"+this.props.obj.id} className="editBtn" style={{ textDecoration: 'none' }} onClick={this.edit} >edit</Link>
      </td>
      <td>
      <button className="deleteBtn" onClick={this.delete} >&#10008;</button>
      </td>
      </tr>
    )
  }
}

export default RecordList;
