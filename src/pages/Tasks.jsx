import React, { useState, useEffect } from 'react';
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
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import AddIcon from '@mui/icons-material/Add';
import { getTodos, createTodo, getTags, createTag } from '../utils/api';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', done: false },
    { id: 2, title: 'Walk the dog', done: true },
  ]);
  const [newTask, setNewTask] = useState('');
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [openTagDialog, setOpenTagDialog] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [newTagColor, setNewTagColor] = useState('#2196f3');

  const addTask = async () => {
    if (!newTask || selectedTags.length === 0) {
      alert('Please enter a task title and select at least one tag');
      return;
    }
    
    try {
      const tagIds = selectedTags.map(tag => tag._id);
      const data = await createTodo(newTask, '', tagIds);
      setTasks([...tasks, data]);
      setNewTask('');
      setSelectedTags([]);
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Error creating task. Please try again.');
    }
  };

  const addNewTag = async () => {
    if (!newTagName.trim()) {
      alert('Please enter a tag name');
      return;
    }
    
    try {
      const newTag = await createTag(newTagName.trim(), newTagColor);
      setAvailableTags([...availableTags, newTag]);
      setNewTagName('');
      setNewTagColor('#2196f3');
      setOpenTagDialog(false);
    } catch (error) {
      console.error('Error creating tag:', error);
      alert('Error creating tag. Tag name might already exist.');
    }
  };

  const toggle = (id) => {
    setTasks(tasks.map((t) => (t._id === id ? { ...t, completed: !t.completed } : t)));
  };
  
  const remove = (id) => {
    setTasks(tasks.filter((t) => t._id !== id));
  };

  // The useEffect hook is a React hook that allows you to perform side effects in your component.
  // a useEffect takes two arguments:
  // 1. a function that will be executed after the component is mounted
  // 2. an array of dependencies
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [todosData, tagsData] = await Promise.all([
          getTodos(),
          getTags()
        ]);
        setTasks(todosData);
        setAvailableTags(tagsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card title="Add New Task">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Task title..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <Autocomplete
                multiple
                options={availableTags}
                getOptionLabel={(option) => option.name}
                value={selectedTags}
                onChange={(event, newValue) => setSelectedTags(newValue)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option.name}
                      style={{ backgroundColor: option.color, color: 'white' }}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select tags *"
                    placeholder="Choose tags for this task"
                  />
                )}
                sx={{ flexGrow: 1 }}
              />
              
              <IconButton 
                onClick={() => setOpenTagDialog(true)}
                color="primary"
                title="Create new tag"
              >
                <AddIcon />
              </IconButton>
            </Box>
            
            <Button variant="contained" onClick={addTask}>
              Add Task
            </Button>
          </Box>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Card title="Tasks List">
          <List>
            {tasks.map((task) => (
              <ListItem
                key={task._id}
                secondaryAction={
                  <IconButton edge="end" onClick={() => remove(task._id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      checked={task.completed}
                      onChange={() => toggle(task._id)}
                    />
                    <ListItemText
                      primary={task.title}
                      sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                    />
                  </Box>
                  
                  {task.tags && task.tags.length > 0 && (
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', ml: 5 }}>
                      {task.tags.map((tag, index) => (
                        <Chip
                          key={tag._id || index}
                          label={tag.name}
                          size="small"
                          style={{ 
                            backgroundColor: tag.color, 
                            color: 'white',
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              </ListItem>
            ))}
          </List>
        </Card>
      </Grid>

      {/* Create New Tag Dialog */}
      <Dialog open={openTagDialog} onClose={() => setOpenTagDialog(false)}>
        <DialogTitle>Create New Tag</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              fullWidth
              label="Tag Name"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2">Color:</Typography>
              <input
                type="color"
                value={newTagColor}
                onChange={(e) => setNewTagColor(e.target.value)}
                style={{ border: 'none', borderRadius: '4px', width: '40px', height: '40px' }}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTagDialog(false)}>Cancel</Button>
          <Button onClick={addNewTag} variant="contained">Create Tag</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}