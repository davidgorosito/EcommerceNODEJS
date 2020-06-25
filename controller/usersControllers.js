const fs = require('fs');
const  bcrypt = require('bcryptjs')
const path = require('path')
const session = require('express-session')
const { validationResult } = require('express-validator');

