import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../state/weathermap/actions'

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }

    onInputChange(e) {
        this.setState({term: e.target.value})
    }

    onFormSubmit(e) {
        e.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.onFormSubmit(e)} className="input-group">
                    <input
                        placeholder="Get a five-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.term}
                        onChange={e => this.onInputChange(e)}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
