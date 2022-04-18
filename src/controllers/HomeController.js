// import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    /*
    const newStudent = await Student.create(
      {
        firstname: 'Mike',
        lastname: 'Tomas',
        email: 'miketomas@gmail.com',
        age: 55,
        weight: 95,
        height: 1.87,
      },
    );

    res.json(newStudent);
    */
    res.json('index home');
  }
}

export default new HomeController();
