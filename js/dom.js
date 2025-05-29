var container, sprite, name, dialogue, replies, back;

function init(){
  container = document.getElementById("container");
  sprite = document.getElementById("sprite");
  dialogue = document.getElementById("dialogue");
  replies = document.getElementById("replies");
  back = document.getElementById("back");
  back.onclick = function(){
    if (scene_history.length <= 1) {
      return;
    }
    var curr_index = scene_history.pop();
    curr_index = scene_history.pop();
    render(curr_index);
  }
  render(0);
}

function make_reply(text, index) {
  var reply = document.createElement("button");
  reply.className = "reply";
  reply.onclick = function (){
    render(index);
  }
  reply.innerHTML = text;
  return reply;
}

function render(index){
  // console.log('rendering', scene_history);
  if (scene_history.length<=0) {
    back.style.opacity = 0;
  } else {
    back.style.opacity = 1;
    
  }
  scene_history.push(index);
  var scene = scenes[index];
  if (scene.sprite!=null) {
    if (scene.sprite==false) {
      sprite.style.opacity = 0;
    } else {
      sprite.style.opacity = 1;  
      sprite.src = scene.sprite;
    }
  }
  if (scene.bg!=null) {
    if (scene.bg==false) {
        container.style.backgroundImage = "none";
    } else {
      container.style.backgroundImage = "url("+scene.bg+")";
    }
  }
  if (scene.name) {
    document.getElementById("name").innerHTML=scene.name;
    document.getElementById("name").style.opacity = 1;
    
  } else {
    document.getElementById("name").innerHTML= "";
    document.getElementById("name").style.opacity = 0;
  }
  
  dialogue.innerHTML = scene.dialogue;
  replies.innerHTML ="";
  for (var reply in scene.reply) {
    replies.append(make_reply(reply,scene.reply[reply]))
  }
  if (scene.callback) {
    scene.callback();
  }
  
}