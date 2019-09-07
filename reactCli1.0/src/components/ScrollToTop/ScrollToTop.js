import {Component} from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentWillUpdate(prveProps){
    window.scrollTo(0,0);
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)