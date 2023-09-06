// const search = () =>{
//     console.log("hello")
// const searchbox = document.getElementById("search-item").value.toUpperCase();
// const product = document.querySelectorAll(".product");
// const pname = document.querySelectorAll(".card-text");

//     for(var i =0 ; i < pname.length ; i++)
//     {
//         let match = product[i].getElementsByTagName("h3")[0]; 
//         if(match)
//         {
//             let textvalue = match.textContent || match.innerHTML
//             if(textvalue.toUpperCase().indexOf(searchbox) > -1)
//             {
//                 product[i].style.display ="";  
//             }
//             else{
//                 product[i].style.display ="none";
//             }
//         }
//     }
// }

$("#searchBar").keyup(function (){
    let searchText = $(this).val().toLowerCase();

    $(".product").filter(function (){
      
      let cardText = $(this).text().toLowerCase();

      console.log(cardText)

      if(cardText.indexOf(searchText) > -1){
        $(this).show()
      }
      else{
        $(this).hide()
      }
    })
})
