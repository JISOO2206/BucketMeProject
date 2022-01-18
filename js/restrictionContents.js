document.addEventListener('DOMContentLoaded', () => {
    const newList = document.querySelector("#restrictionBox");
    const insertText = document.querySelector("#insertText");
    /*const plusButton = document.querySelector("#plusList");*/
    /* const minusButton = document.querySelector("#minusList");*/

    const addList = () => {

        if(insertText.value.trim() === '') {
            alert('내용을 입력하세요');
            return;
        }

        const listContainer = document.createElement("div");
        const inputText = document.createElement("span");
        const minusButton = document.createElement("button");

        listContainer.appendChild(inputText);
        listContainer.appendChild(minusButton);
        minusButton.innerText = "X";
        minusButton.style.backgroundColor = "rgb(26, 29, 41)";
        minusButton.style.color="tomato";
        minusButton.style.border="none";
        minusButton.style.marginLeft ="2px";
        listContainer.style.marginBottom="2px";

        newList.appendChild(listContainer);

        inputText.textContent = insertText.value;

        insertText.value = '';   //글이 삽입되면 insertText 안에 입력된 내용 비우기

        minusButton.addEventListener("click", removeList)
    }


    const removeList = () => {
        const removeOne = event.target.parentElement;
        removeOne.remove();
        countNum--;
        console.log(countNum)
    }

    /*plusButton.addEventListener("click", addList);*/
    insertText.addEventListener("keyup", (event) => {
        const ENTER = 13;
        if(event.keyCode === ENTER) {
            addList();
        }
    })
});