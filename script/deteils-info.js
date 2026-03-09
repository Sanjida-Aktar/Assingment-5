// details data load

// "id": 33,
// "title": "Add bulk operations support",
// "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
// "status": "open",
// "labels": [
// "enhancement"
// ],
// "priority": "low",
// "author": "bulk_barry",
// "assignee": "",
// "createdAt": "2024-02-02T10:00:00Z",
// "updatedAt": "2024-02-02T10:00:00Z"

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

  //level hightlight
  const labelColors = {
  bug: "bg-red-100 text-red-600 border",
  enhancement: "bg-green-100 text-green-600 border",
  
};
  
  let levelhighlight = info.labels.map(lvl => {

  const color = labelColors[lvl] || "bg-yellow-100 text-yellow-600 border";

  return `
    <span class="${color} text-xs px-2 py-1 rounded-2xl mr-1">
      ${lvl}
    </span>
  `;

}).join("");


    detailsbox.innerHTML = `
    
    <h2 class="text-xl font-bold mb-2">${info.title}</h2>
    <div class="gap-4 mb-6">
    <p class="bg-green-600 text-white rounded-2xl px-2 inline-block mr-2">Opened</p>
    <button class="bg-gray-600 rounded-full w-2 h-2 text-center mr-2" ></button>
    <span class=" text-sm text-gray-500 mr-2">Opend by Sanjida Aktar </span>
    <button class="bg-gray-600 rounded-full w-2 h-2 text-center mr-2" ></button>
    <span class=" text-sm text-gray-500">${info.createdAt.slice(0,9)}</span>
    </div>
    <span class="pb-2 pt-4 mb-6">${levelhighlight}</span>
    <p class="mb-2 text-gray-500 mt-6">${info.description}</p>

    <div class="bg-slate-300 rounded p-4 mt-5 flex gap-10">
    <div class="flex-1"> 
    <p class="text-gray-500 text-lg">Assignee:</p>
    <p class="text-xl font-bold">Sanjida Aktar</p>
    </div>
    <div class="flex-1">
    <p class="text-gray-500 text-lg">Priority:</p>
    <p class="bg-red-600 text-white rounded-2xl px-2 inline-block ">${info.priority}</p>
    </div>
    </div>
  `;
    document.getElementById("details_modal").showModal();
   
}