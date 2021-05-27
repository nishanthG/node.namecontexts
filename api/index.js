import express from 'express';
import data from '../src/testData.json';

const apirouter = express.Router();

apirouter.get('/contests', (req,res)=>{
    res.send({contests: data.contests});
});

export default apirouter;