
const app = require('./app');

const PORT = process.env.PORT || 4000; // Default to port 4000 if PORT isn't set in the environment

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
