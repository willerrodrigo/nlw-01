import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// Request Param: Parâmetros que vem na própria rota que identificam um resurso (entidade).
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação, etc.
// Request body: Parâmetros para criação/atualização de informações.