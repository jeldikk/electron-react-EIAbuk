import React from "react";

import "bootstrap/dist/css/boostrap.min.css"

import {Col, Container, Row} from "react-bootstrap"

class Application extends React.Component{

  constructor(props){
      super(props);

      this.state = {
          count: 0,
      }
  }

  decrementButtonClickHandle = (event) => {
      this.setState({count : this.state.count - 1 })
  }

  incrementButtonClickHandle = (event) => {
      this.setState({count: this.state.count + 1})
  }

  render(){
      return (
          <Container>
              <Row>
                  <Col xs={12} sm={6} md={8}>
                      Elit amet aute consequat amet aliqua excepteur et ex et eiusmod est excepteur. Velit laborum culpa laboris pariatur ullamco reprehenderit fugiat. Aliqua laboris eu enim excepteur do ut qui.
                  </Col>
                  <Col xs={12} sm={6} md={4}>
                      Dolor commodo deserunt duis id pariatur laborum. Cillum officia fugiat aute labore. Occaecat commodo sunt eu et aute est pariatur commodo commodo nisi labore sunt. Aute deserunt laborum sunt cillum veniam sunt aliqua. Fugiat eu nostrud proident veniam voluptate quis officia ad consequat aliqua nisi. Officia non sit cillum aliqua nostrud quis ut dolore reprehenderit proident pariatur excepteur eu.
                  </Col>
              </Row>
          </Container>
      )
  }
}


// const Application = ()=>{

//     const buttonClickHandle = ()=>{
//         console.log("clickable button clicked")
//     }

//     return (
//         <div className="application">
//             <h1>Hello World</h1>
//             <button className="fill-width" onClick={buttonClickHandle}>This is clickable button</button>
//         </div>
//     )
// }
export default Application;
