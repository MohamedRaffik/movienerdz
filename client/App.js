import { connect } from 'react-redux';
import { updateFeed } from './actions';
import AppContainer from './AppContainer';

const mapStateToProps = (state, ownProps) => {
  return {
    trending: state.trending,      
    upcoming: state.upcoming,      
    popular: state.popular,       
    top_rated: state.top_rated,     
    latest: state.latest,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateFeed: (feed_type, data) => dispatch(updateFeed(feed_type, data)) 
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;