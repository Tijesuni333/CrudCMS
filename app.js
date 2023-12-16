let form = document.getElementById("form");
let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    acceptData();
});
let data ={};
let acceptData =()=>{
    data["text"]= input.value;
    data["email"]= input2.value;
    data["number"]= input3.value;
    console.log(data);

    createPost();
};
let createPost =()=>{
    posts.innerHTML += 
    
    `<tr>
        <td>${data.text}</td>
        <td>${data.email}</td>
        <td>${data.number}</td>
        <td>
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
              </span>
        </td>
    </tr>`
    input.value = "";
    input2.value = "";
    input3.value= "";
}

let deletePost = (e)=>{
    e.parentElement.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    input2.value = e.parentElement.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    input3.value = e.parentElement.parentElement.previousElementSibling.innerHTML;
   
   
    e.parentElement.parentElement.parentElement.remove();
};
