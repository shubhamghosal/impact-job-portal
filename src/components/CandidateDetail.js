import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class CandidateDetail extends Component {

    constructor(props) {
        super(props);
        this.onSelectCandidate = this.onSelectCandidate.bind(this);
        this.onRejectCandidate = this.onRejectCandidate.bind(this);

        this.state = {
            items: [],
            selectedCandidate: [],
            rejectedCandidate: []
        };
    }

    componentDidMount() {
        fetch(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json[this.props.match.params.id - 1001],
                });
                console.log(json);
            })
    }

    onSelectCandidate() {
        const selectedCandidate = [];

        localStorage.setItem('selectedCandidate', selectedCandidate.push(this.state.items));

        console.log(selectedCandidate);

    }

    onRejectCandidate() {
        const rejectedCandidate = [];

        localStorage.setItem('rejectedCandidate', rejectedCandidate.push(this.state.items));

        console.log(rejectedCandidate);
    }

    render() {
        const { items } = this.state;
        return (
            <div className='mini-card'>
                <h1 className='header-main'><u> Candidate Details </u></h1>
                <div className='card'>
                    <br />
                    <img src={items.Image} alt="Candidate" className='candidate-img' />
                    <div>
                        <h3>Id : {this.props.match.params.id}</h3>
                    </div>
                    <div>
                        <h3>Name : {items.name}</h3>
                    </div>
                </div>
                <br />
                <Button variant="success" onClick={this.onSelectCandidate}>Shortlist</Button>{' '}
                <Button variant="danger" onClick={this.onRejectCandidate}>Reject</Button>{' '}
            </div >
        )
    }
}
