import mongoose from 'mongoose';
 
import Lead from './lead';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
 
const models = { Lead };
 
export { connectDb };
 
export default models;