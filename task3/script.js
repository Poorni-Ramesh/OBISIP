const input=document.querySelector('.label');
const btn=document.querySelector('.addTask > .btnAdd');

btn.addEventListener('click',addList);

function addList(e){
    const pendingTask =document.querySelector('.pendingTask');
    const completedTask =document.querySelector('.completedTask');

    const newLi = document.createElement('li');
    const doneBtn = document.createElement('button');
    const delBtn =document.createElement('button');

    doneBtn.innerHTML='<i class="doneBtn">DONE</i>';
    delBtn.innerHTML='<i class="delBtn">DEL</i>';

    if(input.value!==''){
        newLi.textContent=input.value;
        input.value='';
        pendingTask.appendChild(newLi);
        newLi.appendChild(doneBtn);
        newLi.appendChild(delBtn);
     }

     doneBtn.addEventListener('click',function(){
         const parent=this.parentNode;
         parent.remove();
         completedTask.appendChild(parent);
         doneBtn.style.display='none';

     })

     delBtn.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();
     })
    
}