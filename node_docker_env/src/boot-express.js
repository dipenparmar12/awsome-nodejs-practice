
function expressHandler(app){
  console.log('boot-express.js::[3] boot-expressHandler', )
  
  process.on('uncaughtException', async (error) => {
    console.log(error);
  });

  process.on('unhandledRejection', async (ex) => {
    console.log(ex);
  });


  app.get('/', (_req, res) => {
    return res.status(200).json({ message: 'Service is running...', }).end();
  });
  

  app.use((_req, _res, next) => {
    const error = new Error('Endpoint could not find!');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    const level = error.status === 500 ?  'Server Error' : 'Client Error';
    return res.json({ message: error.message });
  });
}

export default async (app) => {
  expressHandler(app);
}