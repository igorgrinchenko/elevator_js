document.addEventListener("DOMContentLoaded", function (event) {
    let cabina = document.querySelector('.cabina');
    let openDoor = document.querySelector('.openDoor');
    let closeDoor = document.querySelector('.closeDoor');
    let leftDoor = document.querySelector('.leftDoor');
    let rightDoor = document.querySelector('.rightDoor');
    let floor4 = document.querySelector('.floor4');
    let floor3 = document.querySelector('.floor3');
    let floor2 = document.querySelector('.floor2');
    let floor1 = document.querySelector('.floor1');
    let fourthFloor = document.querySelector('.fourthFloor');
    let thirdFloor = document.querySelector('.thirdFloor');
    let secondFloor = document.querySelector('.secondFloor');
    let firstFloor = document.querySelector('.firstFloor');
    let go = document.querySelector('.go');
    let floorNumber = document.querySelector('.floorNumber');
    let arrow = document.querySelector('.arrow');
    let currentFloor = 1;
    let choosedFloor;
    let floorNum;
    let direction;
    let doorStatus = false;


    function openDoorAuto() {
        leftDoor.style.marginRight = '90px';
        rightDoor.style.marginLeft = '90px';
    }

    function closeDoorAuto() {
        leftDoor.style.marginRight = '-90px';
        rightDoor.style.marginLeft = '90px';
    }

    function arrowDirection() {
        if (currentFloor < floorNum) {
            direction = '<img  class="img" src="https://bit.ly/2MvSWgW" alt="">';
            currentFloor = floorNum;
        } else if (currentFloor > floorNum) {
            direction = '<img  class="img" src="https://bit.ly/3cGWXd0" alt="">';
            currentFloor = floorNum;
        }
    }

    openDoor.addEventListener('click', function () {
        openDoorAuto();
        doorStatus = true;
    })

    closeDoor.addEventListener('click', function () {
        closeDoorAuto();
        doorStatus = false;
    })


    firstFloor.addEventListener('click', function () {
        choosedFloor = 600;
        floorNum = 1;
        arrowDirection();
        floorNumber.innerText = floorNum;
        arrow.innerHTML = direction;
        // doorStatus = true;
    })

    secondFloor.addEventListener('click', function () {
        choosedFloor = 400;
        floorNum = 2;
        arrowDirection();
        floorNumber.innerText = floorNum;
        arrow.innerHTML = direction;
        // doorStatus = true;
    })

    thirdFloor.addEventListener('click', function () {
        choosedFloor = 200;
        floorNum = 3;
        arrowDirection();
        floorNumber.innerText = floorNum;
        arrow.innerHTML = direction;
        // doorStatus = true;
    })

    fourthFloor.addEventListener('click', function () {
        choosedFloor = 0;
        floorNum = 4;
        arrowDirection();
        floorNumber.innerText = floorNum;
        arrow.innerHTML = direction;
        // doorStatus = true;
    })

    go.addEventListener('click', function () {
        if (doorStatus === true) {
            alert('Двері відкриті!');
            alert('Двері зачиняться автоматично!');
            closeDoorAuto();
            alert('Натисність `GO`')
            doorStatus = false;
        } else if (doorStatus === false) {
            cabina.style.top = choosedFloor + 'px';
        }
    })
});
