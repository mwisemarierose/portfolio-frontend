const port = document.querySelector('.portifolio__container');

fetch("http://localhost:3000/api/post/getAll")
.then(data=>data.json())
.then(data=>{
    data.data.map(blog=>{
        port.innerHTML += `<div class="blog__content grid swiper-slide">
        <h3 class="blog__title">${blog.title}</h3>`;
        port.innerHTML += blog.thumb ? `<img src="${blog.thumb}" class="blog__img" width="50%" height="100%"/>` : '';
     port.innerHTML += `<div class="blog_">
        <p>${blog.desc} </p>
         <a href="Blog.html?blog_id=${blog._id}"  class="button button--flex button--small portfolio__button"> 
         READ MORE
         </a>
         </div> 
         
         </div>`;
        })
    })

    // post blog
const postForm = document.querySelector("#postBlog");
const postTitle = document.querySelector("#postTitle");
const postDetails = document.querySelector("#postDetails");
const postImage = document.querySelector("#postImage");

if(postForm){
    postForm.addEventListener("submit", e=> {
        e.preventDefault();
        
let formData = new FormData();
formData.append("thumb", postImage.files[0]);
formData.append('title', postTitle.value);
formData.append('desc', postDetails.value);
fetch("http://localhost:3000/api/post/post", {
        method: "post",
        body: formData
      })
      .then( (response) => { 
         console.log(response);
        });
})



    }
   
