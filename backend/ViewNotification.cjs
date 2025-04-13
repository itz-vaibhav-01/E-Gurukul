router.get('/notifications', verifyToken, StudentController.viewNotifications);

module.exports = router;
