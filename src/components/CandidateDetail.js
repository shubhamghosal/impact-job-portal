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
            rejectedCandidate: [],
        };
    }

    componentDidMount() {
        fetch(
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json[json.findIndex(x => x.id === this.props.match.params.id)],
                });
                console.log(json[json.findIndex(x => x.id === this.props.match.params.id)]);
            })
    }

    onSelectCandidate() {
        var selectedCandidate = JSON.parse(sessionStorage.getItem('selectedCandidate'));

        if (selectedCandidate === null) {
            selectedCandidate = [];
            selectedCandidate.push(this.state.items);
            sessionStorage.setItem('selectedCandidate', JSON.stringify(selectedCandidate));
        } else {
            if (selectedCandidate.find(x => x.id === this.state.items.id)) {
                alert("Candidate Already Selected");
            } else {
                selectedCandidate.push(this.state.items);
                sessionStorage.setItem('selectedCandidate', JSON.stringify(selectedCandidate));
            }
        }

        console.log(sessionStorage.getItem('selectedCandidate'));

    }

    onRejectCandidate() {
        var rejectedCandidate = JSON.parse(sessionStorage.getItem('rejectedCandidate'));

        if (rejectedCandidate === null) {
            rejectedCandidate = [];
            rejectedCandidate.push(this.state.items);
            sessionStorage.setItem('rejectedCandidate', JSON.stringify(rejectedCandidate));
        } else {
            if (rejectedCandidate.find(x => x.id === this.state.items.id)) {
                alert("Candidate Already Rejected");
            } else {
                rejectedCandidate.push(this.state.items);
                sessionStorage.setItem('rejectedCandidate', JSON.stringify(rejectedCandidate));
            }
        }

        console.log(sessionStorage.getItem('rejectedCandidate'));
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
                <Button variant="success" href="/home" onClick={this.onSelectCandidate}>Shortlist</Button>{' '}
                <Button variant="danger" href="/home" onClick={this.onRejectCandidate}>Reject</Button>{' '}
            </div >
        )
    }
}
