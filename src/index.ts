import express from 'express';

const app = express();

app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log('server is running on port 3000'); 
});

app.use(express.json());

// app.use('/todolist', todolistRoutes.router);
