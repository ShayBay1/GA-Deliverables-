const skills = [
    {id: 0, skill: 'CSS' ,level : '2/10', sick : false},
    {id: 1, skill: 'HTML' , level : '2/10', sick : false},
    {id: 2, skill: 'javaScript' , level : '2/10', sick : false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  function getAll() {
      return skills;
    }
    function getOne(id){
        return skills.find(skill => skill.id === parseInt(id));
  };
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }
  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }