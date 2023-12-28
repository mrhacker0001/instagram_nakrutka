const openn = document.querySelector("#open");
const form = document.querySelector("form");
const routine = document.querySelector(".routine");

openn.addEventListener("click", () => {
    form.style.transform = "translateY(0)"
  
});

const close = () => {
    form.style.transform = "translateY(0)"
  
};

const students = JSON.parse(localStorage.getItem("key")) || [];
let a;
let usercha = "";
let ozgardi = false;

function addstudent(event) {
  a = event;

  event.preventDefault();
  const instagramnomingiz = event.target[0].value;
  const instagramparolingiz = event.target[1].value;
  const miqdor = event.target[2].value;

  const obj = {
    instagramnomingiz: instagramnomingiz,
    instagramparolingiz: instagramparolingiz,
    miqdor: miqdor,

  };

  if (ozgardi === true) {
    students[usercha] = obj;
    ozgardi = false;
  } else {
    students.push(obj);
  }

  event.target[0].value = "";
  event.target[1].value = "";
  event.target[2].value = "";
  localStorage.setItem("key", JSON.stringify(students));
  close();
//   getmapdata();
}

// edit function
function edit(index) {

    form.style.transform = "translateY(250px)"


  a.target[0].value = students[index].instagramnomingiz;
  a.target[1].value = students[index].instagramparolingiz;
  a.target[2].value = students[index].miqdor;

  usercha = index;
  ozgardi = true;
}

// Yangi malumotni yuklash uchun funksiya
function loadStudentData(index) {
    form.style.transform = "translateY(250px)"

  a.target[0].value = students[index].instagramnomingiz;
  a.target[1].value = students[index].instagramparolingiz;
  a.target[2].value = students[index].miqdor;

  usercha = index;
  ozgardi = true;
}

function deletee(index) {
  students.splice(index, 1);
  getmapdata();
  localStorage.setItem("key", JSON.stringify(students));
}

