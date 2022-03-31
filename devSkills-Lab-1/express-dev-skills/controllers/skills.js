const Skill = require('../model/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    delete: deleteSkill
}

function newSkill(req, res) {
    res.render('/skills/new');
  }

function index(req, res){
    console.log('index')
    res.render('/skills/index', {
        skills: Skill.getAll(),
        time: req.time 
    })
}
function show(req, res){
    console.log(req.params,  " < - req.params in show function")
    res.render('/skills/show', {
        skillNum: req.params.id,
        skill: Skill.getOne(req.params.id)
    })
}
function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }
  function deleteSkill(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/skills');
}
