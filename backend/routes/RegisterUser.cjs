router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const user = await User.create({ name, email, password: hashedPassword, role });
      res.status(201).json({ message: 'User Registered Successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error registering user', error });
    }
  });