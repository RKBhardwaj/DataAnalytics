app.use((req, res, next) => {
  const err = new Error('404 Page Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500).json({ error: err.message });
});
