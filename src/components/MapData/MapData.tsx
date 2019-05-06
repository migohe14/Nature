import React from 'react';
import axios from 'axios';

export class MapData extends React.Component {
  state: any = {
    data: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        this.state.data = res.data;
        // console.log(this.state.data)
        // this.setState({ persons });
      })
  }

  render() {
    return (
        <div>
            <p>{}</p>
            {/* {this.state.data.map((item: any) => {
                console.log(item)
              return <div key={item.id} >
              <div>
                <h4><b>{item.name}</b></h4> 
              </div>
            </div>
            })} */}
        </div>
    )
  }
}