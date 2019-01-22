import { connect } from 'react-redux';
import { updateFeed } from './actions';
import AppContainer from './AppContainer';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateFeed: (feed_type, data) => dispatch(updateFeed(feed_type, data)) 
  }
}

const App = connect(mapDispatchToProps)(AppContainer);

export default App;