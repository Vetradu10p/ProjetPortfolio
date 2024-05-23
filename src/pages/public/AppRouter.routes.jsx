import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Not404 } from '@/pages/public/index';
import Layout from '@/layouts/layout';

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Not404 />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;
