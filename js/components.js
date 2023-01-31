
// //Using Class we can show images 
// class showImages extends HTMLElement {
//     //

//     constructor() {
//         super();
//         this.innerHTML = `<div class="col-lg-3">
//         <div class="card w-100 h-100">
//         <a href="#" onclick="deleteImage(${this.getAttribute('index')})" style="right:0px; top:0px; position: absolute; padding:5px; margin:5px;">Delete</a><br>
//           <div class="card-body text-center">
//             <h5 class="card-title">Special title treatment</h5>
//             <img src=${this.getAttribute('imgSrc')} alt="" class="image">
//           </div>
//         </div>
//       </div>`;
//     }
// }

// customElements.define('show-image', showImages);



// 
// 
// 
//Using template we can show images 

const data = document.createElement('template');
data.innerHTML = `<div class="col-lg-3">
<div class="card w-100 h-100">
<a href="#" class="delete-index" style="right:0px; top:0px; position: absolute; padding:5px; margin:5px;">Delete</a><br>
  <div class="card-body text-center">
    <h5 class="card-title">Special title treatment</h5>
    <img src="" alt="" id="img-src" class="image">
  </div>
</div>
</div>`;




class showImages extends HTMLElement {
    //
    constructor() {
        super();
        this.innerHTML = data.innerHTML;
        this.querySelector('.delete-index').addEventListener('click', () => {
            deleteImage(this.getAttribute('index'));
        });
        this.querySelector('.image').src = this.getAttribute('imgSrc');
    }
}

customElements.define('show-image', showImages);



// Aditya will teach us Shadow dom (document object model) with Example:
