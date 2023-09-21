let imgJSON = "";
let imgList = "";

function loadPost() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    const photosList = JSON.parse(this.responseText);
    imgJSON = photosList;
    console.log(photosList);
    photosList.forEach((photo, idx) => {
      if (idx <= 11) {
        imgList += `
            <div
            class="w-full bg-white border border-gray-200 rounded-lg"
          >
            <a href="#" onclick="imgShow(${photo.id})">
              <img
                class="rounded-t-lg"
                src="${photo.url}"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                  ${photo.title}
                </h5>
              </a>
            </div>
          </div>
            `;
      }
    });

    document.getElementById("images").innerHTML = imgList;
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos");
  xhttp.send();
}
loadPost();

const imgShow = (id) => {
  const imgData = imgJSON.filter((item, index, arr) => item.id == id);

  console.log("imgData", imgData);
  console.log("url", imgData[0].url);

  //   const imgModal = `<img class="w-full rounded-t-lg" src="${imgData[0].url}" alt="${imgData[0].title}" />`;
  //   document.getElementById("modal").innerHTML = imgModal;
};
