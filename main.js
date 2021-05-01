"use strict";

const addMessage = document.querySelector(".add-message");
const bAdd = document.querySelector(".b-add");
const bDel = document.querySelector(".b-del");
const containerFortask = document.querySelector(".container-for-task");
const btnDone = document.querySelector(".button-done");
const btnDel = document.querySelector(".button-remove");

let toDoList = [];

if (localStorage.getItem("list")) {
  toDoList = JSON.parse(localStorage.getItem("list"));
  showMesseage(toDoList);
}

bAdd.addEventListener("click", () => {
  let result = getBoolean();

  if (result !== true) {
    let newToDo = {
      userValue: addMessage.value,
      valid: false,
    };
    toDoList.push(newToDo);

    localStorage.setItem("list", JSON.stringify(toDoList));
    createNewTask(addMessage.value);
    addMessage.value = "";
    // console.log(toDoList);
  }
});

bDel.addEventListener("click", () => {
  addMessage.value = "";
});

function createNewTask(prop) {
  const containerFortask = document.querySelector(".container-for-task");
  let result = getBoolean();

  if (result !== true) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-task");

    const userTask = document.createElement("p");
    userTask.classList.add("info-task");
    userTask.textContent = prop;
    wrapper.append(userTask);

    const bDone = document.createElement("button");
    bDone.classList.add("button-done");
    bDone.textContent = "Done";

    bDone.addEventListener("click", () => {
      let valueCurrentItem = userTask.textContent;
      for (let item of toDoList) {
        if (item.userValue === valueCurrentItem) {
          // console.log(item);
          if (item.valid === false) {
            item.valid = true;
            localStorage.setItem("list", JSON.stringify(toDoList));
            userTask.classList.add("valid");
            return (toDoList.valid = true);
          }
          if (item.valid === true) {
            item.valid = false;
            localStorage.setItem("list", JSON.stringify(toDoList));
            userTask.classList.remove("valid");
            return (toDoList.valid = false);
          }
        }
      }
    });

    const bDel = document.createElement("button");
    bDel.classList.add("button-remove");
    bDel.textContent = "Delete";

    bDel.addEventListener("click", () => {
      let valueCurrentItem = userTask.textContent;
      for (let i = 0; i < toDoList.length; i += 1) {
        if (toDoList[i]["userValue"] === valueCurrentItem) {
          // console.log(i);
          // console.log(toDoList[i]);
          let remove = toDoList.splice(i, 1);
          localStorage.setItem("list", JSON.stringify(toDoList));
          wrapper.remove();
        }
      }
    });

    wrapper.append(bDone, bDel);
    containerFortask.append(wrapper);
  }
}

function getBoolean() {
  return addMessage.value === "";
}

function showMesseage(arr) {
  for (let item of arr) {
    const containerFortask = document.querySelector(".container-for-task");

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper-task");

    const userTask = document.createElement("p");
    userTask.classList.add("info-task");
    userTask.textContent = item.userValue;
    if (item.valid === true) {
      userTask.classList.add("valid");
    }

    wrapper.append(userTask);

    const bDone = document.createElement("button");
    bDone.classList.add("button-done");
    bDone.textContent = "Done";

    bDone.addEventListener("click", () => {
      let valueCurrentItem = userTask.textContent;
      for (let item of toDoList) {
        if (item.userValue === valueCurrentItem) {
          // console.log(item);
          if (item.valid === false) {
            item.valid = true;
            localStorage.setItem("list", JSON.stringify(toDoList));
            userTask.classList.add("valid");
            return (toDoList.valid = true);
          }
          if (item.valid === true) {
            item.valid = false;
            localStorage.setItem("list", JSON.stringify(toDoList));
            userTask.classList.remove("valid");
            return (toDoList.valid = false);
          }
        }
      }
    });

    const bDel = document.createElement("button");
    bDel.classList.add("button-remove");
    bDel.textContent = "Delete";

    bDel.addEventListener("click", () => {
      let valueCurrentItem = userTask.textContent;
      for (let i = 0; i < toDoList.length; i += 1) {
        if (toDoList[i]["userValue"] === valueCurrentItem) {
          // console.log(i);
          // console.log(toDoList[i]);
          let remove = toDoList.splice(i, 1);
          localStorage.setItem("list", JSON.stringify(toDoList));
          wrapper.remove();
        }
      }
    });

    wrapper.append(bDone, bDel);
    containerFortask.append(wrapper);
  }
}

const clear = document.querySelector(".clear-local-store");
clear.addEventListener("click", () => localStorage.clear());
