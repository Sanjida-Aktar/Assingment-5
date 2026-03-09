// details data load
function detailsData(id){
 const url= `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
 fetch(url)
 .then(res => res.json())
 .then(data=> displaydetailsData(data.data));
}

function displaydetailsData(info){
  console.log(info);
  const detailsbox = document.getElementById("details-container");
  console.log(detailsbox);
    detailsbox.innerHTML = `
    
    <h2 class="text-xl font-bold mb-2">${info.title}</h2>
    <p class="mb-2">${info.description}</p>
  `;
    document.getElementById("details_modal").showModal();
   
}