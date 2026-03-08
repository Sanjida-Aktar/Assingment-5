let alldataissue=[];
const allIssue = () => {

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(data => {
      alldataissue = data.data;
      displayissue(alldataissue);
      updateCounts(alldataissue);

    })
    .catch(err => console.error(err));
}


const displayissue = (issues) => {
document.getElementById("issue-count").innerText = issues.length;
  const issueContainer = document.getElementById("all-issue");

  issueContainer.innerHTML = "";

  for (let [index, issue] of issues.entries()) {
   const shortDescription = issue.description.slice(0, 40) + "...";

   const updatedate = issue.updatedAt.slice(0, 9)

   let borderColor = "border-gray-300"; 
    if (issue.status.toLowerCase() === "open") {
      borderColor = " border-green-500";
    } else if (issue.status.toLowerCase() === "closed") {
      borderColor = "border-purple-500";
    }

    // level hightlight kora
   let levelhighlight = issue.labels.map((lvl, index) => {

  const bgColor = index === 0 ? "bg-red-100 text-red-600 border" : "bg-yellow-100 text-yellow-600 border";

  return `<span class="${bgColor} text-xs px-2 py-1 rounded-2xl mr-1">     
            ${lvl}
          </span>`;

}).join("");

    // priority besed design
     let icon = "";
    let priorityClass = "";
    if(issue.priority === "high"){
        icon = `<img src="assets/Open-Status.png" alt="" class="w-6 h-6 inline-block mr-1"/>`;
        priorityClass = "bg-red-100 text-red-500 border  rounded-full px-2 py-1  text-xs font-bold";
    }
    else if(issue.priority  === "medium"){
        icon = `<img src="assets/Open-Status.png" alt="" class="w-6 h-6 inline-block mr-1"/>`;
        priorityClass = "bg-yellow-100 text-yellow-500 border rounded-full px-2 py-1  text-xs font-bold";
    }
    else if(issue.priority  === "low"){
        icon = `<img src="assets/Closed- Status .png" alt="" class="w-6 h-6 inline-block mr-1"/>`;
        priorityClass = "bg-gray-100 text-gray-500 border rounded-full px-2 py-1  text-xs font-bold";
    }
    
    const div = document.createElement("div");

    div.innerHTML = `
         <div class="p-4 border-t-4 ${borderColor} rounded mb-2 h-[250px] flex flex-col justify-between shadow-lg">
        <div class="flex justify-between items-center gap-2">
          ${icon} <span class="${priorityClass}">${issue.priority }</span>
        </div>
        <h2 class="font-bold">${issue.title}</h2>
        <p>${shortDescription}</p>
        <span class="pb-2">${levelhighlight}</span>
        <hr class="text-gray-300">
        <p class="text-gray-500">#${index+1} by john_doe</p>
        <p class="text-gray-500">${updatedate}</p>
      </div>
    `;

    issueContainer.appendChild(div);
  }
};

// Update counts
const updateCounts = (issues) => {
  document.getElementById("all-count").innerText = issues.length;
  document.getElementById("open-count").innerText = issues.filter(i => i.status === "open").length;
  document.getElementById("closed-count").innerText = issues.filter(i => i.status === "closed").length;
};
// Switch tab filter
const switchTab = (status, btn) => {
  // Remove active from all buttons
  const buttons = document.querySelectorAll("section > div > button");
  buttons.forEach(b => b.classList.remove("btn-active"));

  // Add active to clicked
  btn.classList.add("btn-active");

  if(status === "all") displayissue(alldataissue);
  else if(status === "open") displayissue(alldataissue.filter(i => i.status === "open"));
  else if(status === "closed") displayissue(alldataissue.filter(i => i.status === "closed"));
};


allIssue();