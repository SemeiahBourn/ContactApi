const mongoose =require('mongoose')

module.exports= async () => {
try {
    await mongoose.connect(process.env.MONGODB_URI)
     mongoose.connection
     console.log('MongoDB connected')
} catch (error) {
    console.error(error)
}
}