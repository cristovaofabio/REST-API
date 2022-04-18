import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log('The server is running...');
  console.log(`Check: http://localhost:${port}`);
});
