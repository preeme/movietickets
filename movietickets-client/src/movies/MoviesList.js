/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { getMovies } from './actions';
import Movie from './Movie';

class MoviesList extends PureComponent {
  componentDidMount() {
    const { getMovies, isLoaded } = this.props;
    if (!isLoaded) getMovies();
  }

  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <LoadingText>Is Loading</LoadingText>;
    return <MovieGrid>{movies.map(movie => <Movie key={movie.id} movie={movie} />)}</MovieGrid>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

const LoadingText = styled.h1`
  color: white;
  text-align: center;
`;
