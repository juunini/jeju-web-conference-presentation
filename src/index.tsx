import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Box from './Box';
import Head from './Head';
import GitHubGrass from './GitHubGrass';
import GitHubGrass1 from './GithubGrass/Grass1';
import GitHubGrass2 from './GithubGrass/Grass2';
import GitHubGrass3 from './GithubGrass/Grass3';
import GitHubGrass4 from './GithubGrass/Grass4';
import GitHubGrass5 from './GithubGrass/Grass5';
import GitHubGrass6 from './GithubGrass/Grass6';
import GitHubGrass7 from './GithubGrass/Grass7';
import GitHubGrass8 from './GithubGrass/Grass8';
import GitHubGrass9 from './GithubGrass/Grass9';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/box" element={<Box />} />
        <Route path="/head" element={<Head />} />
        <Route path="/grass" element={<GitHubGrass />} />
        <Route path="/grass/1" element={<GitHubGrass1 />} />
        <Route path="/grass/2" element={<GitHubGrass2 />} />
        <Route path="/grass/3" element={<GitHubGrass3 />} />
        <Route path="/grass/4" element={<GitHubGrass4 />} />
        <Route path="/grass/5" element={<GitHubGrass5 />} />
        <Route path="/grass/6" element={<GitHubGrass6 />} />
        <Route path="/grass/7" element={<GitHubGrass7 />} />
        <Route path="/grass/8" element={<GitHubGrass8 />} />
        <Route path="/grass/9" element={<GitHubGrass9 />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
