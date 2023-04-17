const express = require('express');
const app = express();
const cors = require('cors');
const UserRouter = require('./routers/user.router');
const ArticleRouter = require('./routers/article.router');
const VersionRouter = require('./routers/version.router');
const ImageRouter = require('./routers/image.router');
const PoleRouter = require('./routers/pole.router');
const AgentRouter = require('./routers/agent.router');
const PrestationRouter = require('./routers/prestation.router');
const RoleRouter = require('./routers/role.router');
const SiteRouter = require('./routers/site.router');
const DirectionRouter = require('./routers/direction.router');


app.use(cors());
app.use(express.json());

app.use('/api/v1/', UserRouter, ArticleRouter, VersionRouter, ImageRouter, PoleRouter, AgentRouter, PrestationRouter, RoleRouter, SiteRouter, DirectionRouter);

module.exports = app;