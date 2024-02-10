/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const authMiddleware = middleware.authHandler()
  router.post('/auth/getToken', controller.auth.getAuthToken)
  router.get('/students/list',authMiddleware, controller.student.list);
  router.get('/students/get/:sid', authMiddleware, controller.student.get);
  // router.post('/students/add', controller.student.add)
};
