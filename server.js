require('newrelic');

var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  cors = require('cors'),
  prerender = require('prerender-node'),
  path = require('path'),
  port = process.env.PORT || 8080,
  databaseConfig = require('./config/database'),
  authenticationConfig = require('./config/authentication'),
  authenticate = require('./app/middleware/authenticate'),
  // Controllers
  SiteController = require('./app/controllers/siteController'),
  AuthenticationController = require('./app/controllers/authenticationController'),
  UsersController = require('./app/controllers/usersController'),
  ContactsController = require('./app/controllers/contactsController'),
  ArticlesController = require('./app/controllers/articlesController'),
  PlayersController = require('./app/controllers/playersController'),
  RankingsController = require('./app/controllers/rankingsController'),
  CollegesController = require('./app/controllers/collegesController'),
  CampsController = require('./app/controllers/campsController'),
  VideosController = require('./app/controllers/videosController'),
  ProductsController = require('./app/controllers/productsController'),
  MessageBoardsController = require('./app/controllers/messageBoardsController'),
  TournamentsController = require('./app/controllers/tournamentsController'),
  // Routers
  SiteRouter = require('./app/routers/siteRouter'),
  AuthenticationRouter = require('./app/routers/authenticationRouter'),
  ArticlesRouter = require('./app/routers/articlesRouter'),
  CampsRouter = require('./app/routers/campsRouter'),
  CollegesRouter = require('./app/routers/collegesRouter'),
  ContactsRouter = require('./app/routers/contactsRouter'),
  MessageBoardsRouter = require('./app/routers/messageBoardsRouter'),
  PlayersRouter = require('./app/routers/playersRouter'),
  ProductsRouter = require('./app/routers/productsRouter'),
  RankingsRouter = require('./app/routers/rankingsRouter'),
  TournamentsRouter = require('./app/routers/tournamentsRouter'),
  UsersRouter = require('./app/routers/usersRouter'),
  VideosRouter = require('./app/routers/videosRouter'),
  // Services
  ArticleDataService = require('./app/services/articleDataService'),
  CampDataService = require('./app/services/campDataService'),
  CollegeDataService = require('./app/services/collegeDataService'),
  ContactDataService = require('./app/services/contactDataService'),
  MessageBoardDataService = require('./app/services/messageBoardDataService'),
  PlayerDataService = require('./app/services/playerDataService'),
  ProductDataService = require('./app/services/productDataService'),
  RankingDataService = require('./app/services/rankingDataService'),
  TournamentDataService = require('./app/services/tournamentDataService'),
  UserDataService = require('./app/services/userDataService'),
  VideoDataService = require('./app/services/videoDataService');

mongoose.connect(databaseConfig.url);
mongoose.Promise = require('q').Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(prerender);
app.use(session({
  secret: authenticationConfig.secret,
  resave: true,
  saveUninitialized: true
}));
app.use('/app', express.static('public/app'));
app.use('/img', express.static('public/img'));
app.use('/assets', express.static('public/assets'));

var siteController = new SiteController();
var siteRouter = new SiteRouter(siteController);
app.use(siteRouter);

var userDataService = new UserDataService();
var authenticationController = new AuthenticationController(userDataService);
var authenticationRouter = new AuthenticationRouter(authenticationController)
app.use('/api', authenticationRouter);

var usersController = new UsersController(userDataService);
var usersRouter = new UsersRouter(usersController);
app.use('/api', usersRouter);

var contactDataService = new ContactDataService();
var contactsController = new ContactsController(contactDataService);
var contactsRouter = new ContactsRouter(contactsController);
app.use('/api', contactsRouter);

var playerDataService = new PlayerDataService();
var playersController = new PlayersController(playerDataService);
var playersRouter = new PlayersRouter(playersController);
app.use('/api', playersRouter);

var rankingDataService = new RankingDataService();
var rankingsController = new RankingsController(rankingDataService);
var rankingsRouter = new RankingsRouter(rankingsController);
app.use('/api', rankingsRouter);

var collegeDataService = new CollegeDataService();
var collegesController = new CollegesController(collegeDataService);
var collegesRouter = new CollegesRouter(collegesController);
app.use('/api', collegesRouter);

var videoDataService = new VideoDataService();
var videosController = new VideosController(videoDataService);
var videosRouter = new VideosRouter(videosController);
app.use('/api', videosRouter);

var productDataService = new ProductDataService();
var productsController = new ProductsController(productDataService);
var productsRouter = new ProductsRouter(productsController);
app.use('/api', productsRouter);

var messageBoardDataService = new MessageBoardDataService();
var messageBoardsController = new MessageBoardsController(messageBoardDataService);
var messageBoardsRouter = new MessageBoardsRouter(messageBoardsController);
app.use('/api', messageBoardsRouter);

var articleDataService = new ArticleDataService();
var articlesController = new ArticlesController(articleDataService);
var articlesRouter = new ArticlesRouter(articlesController);
app.use('/api', articlesRouter);

var campDataService = new CampDataService();
var campsController = new CampsController(campDataService);
var campsRouter = new CampsRouter(campsController);
app.use('/api', campsRouter);

var tournamentDataService = new TournamentDataService();
var tournamentsController = new TournamentsController(tournamentDataService);
var tournamentsRouter = new TournamentsRouter(tournamentsController);
app.use('/api', tournamentsRouter);

app.get(['/favicon.ico', '/apple-touch-icon.png'], function(req, res) {
  res.sendFile(req.path, {
    root: path.join(__dirname, '/public')
  });
});
app.get('/*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/public')
  });
});

app.listen(port);

module.exports = app;
