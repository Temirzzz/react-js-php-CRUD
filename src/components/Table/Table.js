import React from 'react';
import RecordList from '../RecordList/RecordList';
import './Table.css';

class Table extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data : []
    }
  }


  async componentDidMount () {
    const response = await fetch('http://localhost/server/select.php')
    const data = await response.json();
    this.setState({
      data : data
    })
  }

  list () {
    return this.state.data.map((object, i) => {
      return <RecordList obj={object} key={i} />
    })
  }

  render (){

      return (
        <div className="myTable mt-5">
          <table className="col">
            <thead>
              <tr>
                <th scope="col">Product name</th>
                <th scope="col">Price</th>
                <th scope="col">From-date</th>
                <th scope="col">To-date</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.list()}
            </tbody>
          </table>
        </div>
      )
    }
  }

  export default Table;
