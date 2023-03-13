require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const { errors } = require('celebrate');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const centralizedErrorHandler = require('./middlewares/centralizedErrorHandler');
const {createUser, login} = require('./controllers/users');
const {signinValidator, signupValidator} = require('./utils/celebrateValidators');
const auth = require('./middlewares/auth');
const NotFoundError = require('./utils/errors/NotFoundError');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

