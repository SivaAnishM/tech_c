import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import zoomRoutes from './routes/zoomRoutes.js';

const app = express();

// Use morgan to log requests to the console
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/api/zoom', zoomRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

