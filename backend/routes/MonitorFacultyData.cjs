router.get('/faculty', verifyToken, verifyHOD, HODController.getAllFaculty);

module.exports = router;
