{

let tasks = [ ];
let hiddenTasksDone = false;


const toggleDone = (index) =>{
    tasks = [
        ...tasks.slice(0,index),
    { ...tasks[index], done: !tasks[index].done},
    ...tasks.slice(index + 1),
    ];

    render();
};

const removeTask = (index) => {
    tasks = [
        ...tasks.slice(0,index),
        ...tasks.slice(index + 1),
    ];

    render();
};
const markAllTasksDone = (index) => {
    tasks = tasks.map((content)=>({
        ...content,
        done:true,
    }));

    render();
};   

const toggleTaskItemHidden = () => {
hiddenTasksDone = !hiddenTasksDone;

render();
};

const removeAllTasksDone = () =>{
    tasks = [];

    render();
};

const bindEventsButtons = () => {
const buttonHideAllDone = document.querySelector(".js-buttonHideAll");
const buttonAllTaskDone = document.querySelector(".js-buttonDoneAll");
const removeTasksButtons = document.querySelector(".js-removeAllTasksDone");

if(tasks.lenght !==0){
    buttonAllTaskDone.addEventListener("click",()=>{
        markAllTasksDone();
    });
};

if(buttonHideAllDone){
    buttonHideAllDone.addEventListener("click",()=>{
        toggleTaskItemHidden();
    });
};

if(removeTasksButtons){
    removeTasksButtons.addEventListener("click",()=>{
        removeAllTasksDone();

    });
 
};

};


const autoFocus = () =>{
    document.querySelector(".js-input").value= "";
    document.querySelector(".js-input").focus();
};

const bindEvents = () =>{

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((deleteButton,index)=>{
        deleteButton.addEventListener("click",()=>{
            removeTask(index);
        });
    });

    const toggleDoneButton = document.querySelectorAll(".js-done");

    toggleDoneButton.forEach((doneButton,index)=>{
        doneButton.addEventListener("click",()=>{
            toggleDone(index);
        });

    });



};
const renderTasks = () =>{

    let htmlContent = "";

    for(const task of tasks){
        
        htmlContent +=
        `
        <li class="li__item ${task.done && hiddenTasksDone ? " tasksItemHiddenStyle" : ""}">
        <button class="button__list js-done"> ✔ </button>
            <span ${task.done ? "class=\" task__done\"" : ""}>${task.content}</span>
            <button class="button__list js-remove"> 🗑️ </button>
        </li>
        `
    };

    document.querySelector(".js-taskList").innerHTML = htmlContent;
 

  
 
};

const renderButtons = () =>{

    const tasksEvents = document.querySelector(".js-tasksEvents");

    if(tasks.lenght === 0){
        tasksEvents.innerHTML = "";
    } else {
        tasksEvents.innerHTML = 
        `
        <button class="buttons__style js-buttonHideAll"> ${hiddenTasksDone ? "Unhide" : "Hide"} Done Tasks</button>
        <button class="buttons__style js-buttonDoneAll" ${tasks.every(task=> task.done) ? "disabled" : ""}>Complete All</button>
        <button class="buttons__style js-removeAllTasksDone">Remove All</button>
        `;
    };
};


const addNewTask = (newTaskContent) =>{
    tasks = [
        ...tasks,
        {content:newTaskContent},
    ];
    render();
};
 

const render = () =>{
    renderTasks();

    renderButtons();
    bindEventsButtons();
    bindEvents();
    autoFocus();
 
}


const initial = () => {
    render();


const Add = document.querySelector(".js-buttonAdd");

Add.addEventListener("click",(e)=>{
    e.preventDefault();

    const newTaskContent = document.querySelector(".js-input").value.trim();

    if(newTaskContent === ""){
        return;
    }
    
    addNewTask(newTaskContent);

});

};

initial();



























}

