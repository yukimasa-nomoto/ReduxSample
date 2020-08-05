import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter , Route} from 'react-router-dom';

import promise from 'redux-promise';

// import App from './components/app';
import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// class Hello extends React.Component{
//   render()
//   {
//     return <div>Hello World</div>
//   }
// }

// class GoodBye extends React.Component{
//   render()
//   {
//     return <div>GoodBye World</div>
//   }
// }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <BrowserRouter>
      <div>
        {/* <Route path="/hello" component={Hello}/>
        <Route path="/goodbye" component={GoodBye}/> */}

        <Route path="/" component={PostsIndex} />
        
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
