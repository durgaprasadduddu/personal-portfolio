
//     function LoadPage(page_name){
        
//     }
//      document.querySelector("section").innerHTML = LoadHome()




//     //  demo for loading
//         function LoadPage(page_name) {
//     $.ajax({
//         method: "get",
//         url: `/public/pages/${page_name}`,
//         success: (response) => {
//             $("section").html(response);
//         }
//     })
// }

// $(() => {

//     // Sarting with home page
//     LoadPage("home.html");

//     // New User Button click -on home
//     $(document).on("click", "#btnNewUser", () => {
//         LoadPage("home.html");
//     });
// });







document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');

        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.querySelector('section').innerHTML = data;
            })
            .catch(error => {
                document.querySelector('section').innerHTML = "<p>Error loading page.</p>";
                console.error(error);
            });
    });
});
