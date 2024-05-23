import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Error404 } from '@/pages/public/index';
import Service from '@/components/service/Services';
import Work from '@/components/work/Work';
import Testimonial from '@/components/testimonial/Testimonial';
import Contact from '@/components/contact/Contact';
import Layout from '@/layouts/layout';

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;