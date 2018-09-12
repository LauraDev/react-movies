import React from 'react'
import { connect } from 'react-redux'
import FilmList from './FilmList';

class Favorite extends React.Component {

    constructor(props) {
        super(props)
            this.state = { 
            films: undefined,
            isLoading: true
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    render() {
        return (
            <FilmList 
                films={this.props.favoritesFilm}
                navigation={this.props.navigation}
                favoriteList={true}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorite)