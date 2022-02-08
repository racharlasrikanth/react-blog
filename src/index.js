import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { CreateBlogProvider } from './context/create_blog_context';

ReactDOM.render(
  <CreateBlogProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CreateBlogProvider>,
  document.getElementById('root')
);
