const mongoose = require('mongoose');

const testConnection = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect("mongodb+srv://Aritrakar19:RNWjg.YAgCDwCy2@cluster0.4byyy.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');

    // Get all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\nCollections in database:');
    collections.forEach(collection => {
      console.log(`- ${collection.name}`);
    });

    // Get all jobs
    const Job = mongoose.model('Job', new mongoose.Schema({}, { strict: false }));
    const jobs = await Job.find({});
    
    console.log('\nTotal jobs:', jobs.length);
    console.log('\nJob List:');
    jobs.forEach((job, index) => {
      console.log(`\nJob ${index + 1}:`);
      console.log(`Title: ${job.title}`);
      console.log(`Company: ${job.company}`);
      console.log(`Location: ${job.location}`);
      console.log(`Type: ${job.type}`);
      console.log('-------------------');
    });

    process.exit();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

testConnection(); 