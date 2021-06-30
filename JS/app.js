    var firebaseConfig = {
        apiKey: "AIzaSyDX27p0gt9fZ8NwWY6OfMn8AAofgtl77ro",
        authDomain: "profile-card-be3b8.firebaseapp.com",
        databaseURL: "https://profile-card-be3b8-default-rtdb.firebaseio.com/",
        projectId: "profile-card-be3b8",
        storageBucket: "profile-card-be3b8.appspot.com",
        messagingSenderId: "826746025432",
        appId: "1:826746025432:web:52df3a0db700feff45eead"
  };
  firebase.initializeApp(firebaseConfig);
      var nameV, rollV, secV, genV;


    // Form Section
  const Ready = ()=> {
      nameV = document.getElementById("nameOfStudent").value;
      rollV = document.getElementById("creditHours").value;
      secV = document.getElementById("courseTitle").value;
      genV = document.getElementById("regNo").value;
      
      // Name of Student
      const userName = document.querySelector("#name");
      const userElementH1 = document.createElement("h1");
      userElementH1.classList.add("name");
      userElementH1.innerText = `Name: ${nameV}`;
      userName.append(userElementH1);

      // Reg No
      const userGender = document.querySelector("#studentReg");
      const userElementP = document.createElement("p");
      userElementP.classList.add("studentReg");
      userElementP.innerText = `Reg No: ${genV}`;
      userGender.append(userElementP);

      // Credit Hours
      const userRoll = document.querySelector("#courseHours");
      const userElementH2 = document.createElement("h2");
      userElementH2.classList.add("courseHours");
      userElementH2.innerText = `Credit Hours: ${rollV}`;
      userRoll.append(userElementH2);

      // Course Tile
      const userSection = document.querySelector("#titleOfCourse");
      const userElementH3 = document.createElement("h3");
      userElementH3.classList.add("titleOfCourse");
      userElementH3.innerText = `Course Title: ${secV}`;
      userSection.append(userElementH3);
  }

  var messageRef = firebase.database().ref('student/'+rollV);

// Submit Form Data
    document.getElementById('contactForm').addEventListener('submit', submitForm)

  function submitForm(e){
      e.preventDefault();
      Ready();
      firebase.database().ref('student/'+rollV).set({
          NameOfStudent: nameV,
          CreditHours: rollV,
          CourseTitle: secV,
          RegNo: genV
      });
      // Show alert
      document.querySelector('.alertSubmitted').style.display = 'block';

    //   Show server with user data
      document.querySelector('.serverResponse').style.display = 'grid';

      // Hide alert and user data
      setTimeout(() => {
        document.querySelector('.alertSubmitted').style.display = 'none';
      }, 3000);
      setTimeout(() => {
        document.querySelector('.serverResponse').style.display = 'none';
      }, 10000);

      document.getElementById('contactForm').reset();
  }

// Update User Data
  document.getElementById('contactForm').addEventListener('update', updateForm);
  function updateForm(e){
      e.preventDefault();
      Ready();
          messageRef.update({
          NameOfStudent: nameV,
          Course: secV,
          RegNo: genV
      });
  }

// Delete User Data
  document.getElementById("delete").onclick = function(){
      rollV = document.getElementById("rollbox").value;
      if(rollV) return messageRef.remove();
  }












  // Retrieve User Data
  // document.getElementById('contactForm').addEventListener('select', selectData);

  // function selectData(e){
  //     e.preventDefault();
  //     Ready();
  //         messageRef.on('value', function(snapshot){
  //         document.getElementById('namebox').value = snapshot.val().NameOfStudent;
  //         document.getElementById('secbox').value = snapshot.val().Section;
  //         document.getElementById('genbox').value = snapshot.val().Gender;
  //     });
  // }