const Joi = require('@hapi/joi')
const express = require('express');

const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'JavaScript'}
];
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send(['html', 'css', 'javascript', 'java']);
});

//ENDPOINT to find a course
app.get('/api/courses/:id', (req, res) => {

    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) { //404
        res.status(404)
           .send(`Course with id: ${req.params.id} not found `);
    }else{
        res.send(course);
    }
});

//Endpoint to create a course
app.post('/api/courses', (req, res) => {
   
    const { error } =validateCourse(req.body)
    if( error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
    //To get the query params
    res.send(req.query);
});

//TO update a course
app.put('/api/courses/:id', (req, res) => {
    let course = courses.find( obj => obj.id === parseInt(req.params.id));
    
    const { error } = validateCourse(req.body)
    console.log(error);
    if( error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);

});

//TO delete a course
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find( c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course with given ID was not found.');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result =  Joi.validate(course, schema);
    console.log(result);
    return result;
}

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));