import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ChooseMeme from 'pages/choose-meme/ChooseMeme';
import Editor from 'pages/editor';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <ChooseMeme />
        </Route>
        <Route path='/editor/custom'>
          <Editor custom={true} />
        </Route>
        <Route path='/editor/:id'>
          <Editor custom={false} />
        </Route>
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
