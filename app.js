const express = require('express');
const app = express();
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const ArticleRouter = require('./routers/article.router');
const VersionRouter = require('./routers/version.router');
const ImageRouter = require('./routers/image.router');

app.use(cors());
app.use(express.json());

app.use('/api/v1/', UserRouter, ArticleRouter, VersionRouter, ImageRouter);

module.exports = app;