import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Input } from 'reactstrap';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);

    this.state = {
      items: [],
      searchName: "",
      message: "",
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });

    if (searchName === "" || searchName === null) {
      this.setState({
        message: "Please enter a valid name"
      });
    }
    else if (this.state.items.findIndex(item => item.name === searchName) === -1) {
      this.setState({
        message: "No such candidate found"
      });
    }
    else {
      this.setState({
        message: "Candidate Found!!! Click on Search."
      });
    }
  }

  render() {
    const { DataisLoaded, items, searchName, message } = this.state;
    if (!DataisLoaded)
      return <div><h1> Loading!!! Please wait for some time.... </h1> </div>;
    return (
      <div>
        <div className='mini-card'>
          <br />
          <h1 className='header-main'><u> Search by Candidate Name </u></h1>
          <br />
          <div>
            <Input type="text" placeholder="Enter Candidate's Full Name..." onChange={this.onChangeSearchName} className='search-name' />
            <span className='msg-display'>{message}</span>
            <div>
              <br />
              <Button variant="success" href={`candidate/${items.findIndex(item => item.name === searchName) + 1001}`}>Search</Button>{' '}
            </div>
          </div>

        </div>
        <br />
        <div className='mini-card'>
          <h1 className='header-main'><u>Candidate List </u></h1>
          {
            items.map((item) => (
              <ul key={item.id} >
                <div className="card">
                  <br />
                  <img src={item.Image} alt="Candidate" className='candidate-img' />
                  <div className="container">
                    <h4><b>Name: {item.name}</b></h4>
                    <div>Candidate Id: {item.id}</div>
                    <Button variant="success" href={`candidate/${item.id}`}>See Candidate Details</Button>{' '}
                  </div>
                </div>

              </ul>
            ))
          }
        </div>
        <br />
        <div className='mini-card'>
          <h1 className='header-main'><u> Candidate Status </u></h1>
          <Button variant="success" href="/shortlisted">Shortlisted Candidates</Button>{' '}
          <Button variant="danger" href="/rejected">Rejected Candidates</Button>{' '}
          <br />
        </div>

      </div>
    )
  }
}
