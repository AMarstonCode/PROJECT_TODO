import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '../components/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', done: false },
    { id: 2, title: 'Walk the dog', done: true },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, done: false }]);
    setNewTask('');
  };
  const toggle = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  const remove = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card title="Add New Task">
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              label="Task title..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button variant="contained" onClick={addTask}>
              Add
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card title="Tasks List">
          <List>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                secondaryAction={
                  <IconButton edge="end" onClick={() => remove(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <Checkbox
                  checked={task.done}
                  onChange={() => toggle(task.id)}
                />
                <ListItemText
                  primary={task.title}
                  sx={{ textDecoration: task.done ? 'line-through' : 'none' }}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}