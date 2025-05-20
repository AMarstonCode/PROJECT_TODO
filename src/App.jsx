import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Analytics from './pages/Analytics';

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/tasks">Tasks</Button>
          <Button color="inherit" component={Link} to="/analytics">Analytics</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Container>
    </>
  );
}