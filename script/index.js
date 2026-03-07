const allIssue = () => {

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(data => displayissue(data.data))
    .catch(err => console.error(err));

};

const displayissue = (issues) => {

  const issueContainer = document.getElementById("all-issue");

  issueContainer.innerHTML = "";

  for (let issue of issues) {
   const shortDescription = issue.description.slice(0, 30) + "...";

   let borderColor = "border-gray-300"; 
    if (issue.status.toLowerCase() === "open") {
      borderColor = " border-green-500";
    } else if (issue.status.toLowerCase() === "closed") {
      borderColor = "border-purple-500";
    }

     let icon = "";
    let priorityClass = "";
    if(issue.priority && issue.priority.toLowerCase() === "high"){
        icon = `<img src="assets/Open-Status.png" alt="" class="w-6 h-6 inline-block mr-1"/>`;
        priorityClass = "bg-red-100 border text-black-500 rounded-full px-2 py-1 text-white text-xs font-bold";
    }
    else if(issue.priority  === "medium"){
        icon = `<img src="assets/Open-Status.png" alt="" class="w-6 h-6 inline-block mr-1"/>`;
        priorityClass = "bg-yellow-100 text-yellow-500 border rounded-full px-2 py-1 text-white text-xs font-bold";
    }
    
    const div = document.createElement("div");

    div.innerHTML = `
         <div class="p-4 border-y-4 ${borderColor} rounded mb-2 h-[180px] flex flex-col justify-between shadow-lg">
        <div class="flex justify-between items-center gap-2">
          ${icon} <span class="${priorityClass}">${issue.priority }</span>
        </div>
        <h2 class="font-bold">${issue.title}</h2>
        <p>${shortDescription}</p>
      </div>
    `;

    issueContainer.appendChild(div);
  }
};

allIssue();