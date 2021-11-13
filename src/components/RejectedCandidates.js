import React, { Component } from 'react'

export default class RejectedCandidates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.setState({
            items: JSON.parse(localStorage.getItem('rejectedCandidate'))
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <h1 className='header-main'><u> Rejected Candidates </u></h1>
                <div className='mini-card'>
                    {items ? (
                        <div>
                            {items.map((item) => (
                                <ul key={item.id} >
                                    <div className="card">
                                        <br />
                                        <img src={item.Image} alt="Candidate" className='candidate-img' />
                                        <div className="container">
                                            <h4><b>Name: {item.name}</b></h4>
                                            <div>Candidate Id: {item.id}</div>
                                        </div>
                                    </div>
                                </ul>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h3><b>No Rejected Candidates</b></h3>
                        </div>
                    )}
                </div>
            </div >
        )
    }
}
