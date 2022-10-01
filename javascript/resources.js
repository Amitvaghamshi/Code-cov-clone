

    //  for navbar 
    window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }


    //for boxes

    let arr=[
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/08/0822_M259_HeresWhatsNew@3x-100-scaled.jpg",
        bpost:"BLOG POST",
        btext:"To mock or not to mock? Test doubles and how to use them",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/eli-hooten-2.png",
        name:"Eli Hooten",
        read:"Read Blog Post...",
        select:"tra"
       
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/01/32_Four-day-work-week-01.png",
        bpost:"BLOG POST",
        btext:"Reflections on the 32-hour Work Week at Codecov",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/eli-hooten-2.png",
        name:" Eli Hooten",
        read:"Read Blog Post...",
        select:"Tut"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/09/0922_M299_HeresWhatsNew_Sept-100.jpg",
        bpost:"BLOG POST",
        btext:"What's New - Manual Critical File Labeling and Visualizing Your Pull Request",
        img2:"https://about.codecov.io/wp-content/uploads/2021/06/adrian-viquez.png",
        name:" Adrian Viquez",
        read:"Read Blog Post... ",
        select:"jaco"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/09/Screen-Shot-2022-08-30-at-12.14.20-PM.png",
        bpost:"BLOG POST",
        btext:"Test-driven vs. test-later development: when should you write your tests?",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/tom-hu.png",
        name:" Tom Hu",
        read:"Read Blog Post...",
        select:"tra"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/08/0822_M254_Why-80-100-Percent-Coverage@2x-100-scaled.jpg",
        bpost:"BLOG POST",
        btext:"The Case Against 100% Code Coverage",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/tom-hu.png",
        name:"Tom Hu",
        read:"Read Blog Post...",
        select:"blog",
        select:"Tut"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/06/11.Codecov-with-C-and-GitHub-Actions-4-e1623430205538.png",
        bpost:"BLOG POST",
        btext:"How to Set Up Codecov with C and GitHub Actions in 2022",
        img2:"https://about.codecov.io/wp-content/uploads/2021/04/1602422364613.jpeg",
        name:"Aniket Bhattacharyea",
        read:"Read Blog Post...",
        select:"dem"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/07/0722_m55_5Reasons.jpg",
        bpost:"BLOG POST",
        btext:"Top 5 Reasons Companies Cover Their Code",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/cassie-gatton-1.png",
        name:" Cassie Gatton",
        read:"Read Blog Post...",
        select:"cov"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2022/07/0622_M38_DependencyCoverage-2.jpg",
        bpost:"BLOG POST",
        btext:"Top 5 Reasons Companies Cover Their Code",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/cassie-gatton-1.png",
        name:"Cassie Gatton",
        read:"Read Blog Post...",
        select:"blog"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/12/testdriven.png",
        bpost:"BLOG POST",
        btext:"Getting Started With Test-Driven Development",
        img2:"https://about.codecov.io/wp-content/uploads/2021/12/kealan.jpeg",
        name:" Kealan Parr",
        read:"Read Blog Post...",
        select:"dem"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/12/Test-Ops.png",
        bpost:"BLOG POST",
        btext:"An Introduction to TestOps",
        img2:"https://about.codecov.io/wp-content/uploads/2021/12/perfect-SanniMichaelTomiwa.jpeg",
        name:"Sanni Michael",
        read:"Read Blog Post...",
        select:"ap"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/12/Early-access.png",
        bpost:"BLOG POST",
        btext:"Codecov's Runtime Insights Feature enters Early Access",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/eli-hooten-2.png",
        name:" Eli Hooten",
        read:"Read Blog Post...",
        select:"cov"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/12/log4j2.png",
        bpost:"BLOG POST",
        btext:"Log4j 2 Security Vulnerability Update",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/tom-hu.png",
        name:" Tom Hu",
        read:"Read Blog Post...",
        select:"go"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/10/Codeov-and-Codefresh-md.jpg",
        bpost:"BLOG POST",
        btext:"Getting started with Codefresh and Codecov",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/tom-hu.png",
        name:"Tom Hu",
        read:"Read Blog Post...",
        select:"ap"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/11/29-Getting-Started-with-Contract-based-Testing-01.jpg",
        bpost:"BLOG POST",
        btext:"Getting Started with Contract-Based Testing",
        img2:"https://about.codecov.io/wp-content/uploads/2021/03/codecov-circle.svg",
        name:"Julien Bras",
        read:"Read Blog Post...",
        select:"c"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/10/12-software-testing-events-2021.png",
        bpost:"BLOG POST",
        btext:"12 Software Testing Events in 2021",
        img2:"https://about.codecov.io/wp-content/uploads/2021/10/cutmypic-3.png",
        name:"Chris Kenst",
        read:"Read Blog Post...",
        select:"jaco"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/07/Common-Steps-in-a-Complete-22_-Continuous-Integration-Workflow2-01.png",
        bpost:"BLOG POST",
        btext:"Common Steps in a Complete Continuous Integration Workflow",
        img2:"https://about.codecov.io/wp-content/uploads/2021/07/Atibhi-Agrawal.jpeg",
        name:"Atibhi Agrawal",
        read:"Read Blog Post...",
        select:"blog"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/07/20.-The-Role-of-Code-Coverage-in-Regulations-and-Standards-v2-01.jpg",
        bpost:"BLOG POST",
        btext:"The Role of Code Coverage in Regulated Industries",
        img2:"https://about.codecov.io/wp-content/uploads/2021/07/druck.jpeg",
        name:"Deborah Ruck",
        read:"Read Blog Post...",
        select:"go"
      },
      {
        img1:"https://about.codecov.io/wp-content/uploads/2021/05/How-Codecov-Is-Improving-Its-Security-Posture-3-1.png",
        bpost:"BLOG POST",
        btext:"How Codecov Is Reinforcing Its Security Posture",
        img2:"https://about.codecov.io/wp-content/uploads/2021/05/jerrod-engelberd.png",
        name:" Jerrod Engelberg",
        read:"Read Blog Post...",
        select:"c"
      },
      
    ]


    //CREATE FUNCTION FOR DISPLAY DATA

    dis_data(arr)

    function dis_data(data){

      document.querySelector("#boxes").innerHTML=null

    data.forEach(function(el){
            let main=  document.createElement("div");
            main.setAttribute("class","post")

            let img1=document.createElement("img")
            img1.src=el.img1;

            let bpost=document.createElement("p")
            bpost.innerText=el.bpost

            let btext=document.createElement("p")
            btext.innerText=el.btext

            let btmdiv=document.createElement("div")
            btmdiv.setAttribute("class","btmdiv")

            let div1=document.createElement("div");

            let img2=document.createElement("img")
            img2.src=el.img2;

            let name=document.createElement("p")
            name.innerText=el.name

            let div2=document.createElement("div");

            let read=document.createElement("p")
            read.innerText=el.read

             //append all tags
             div1.append(img2,name)
             div2.append(read)

            btmdiv.append(div1,div2);
         
            main.append(img1,bpost,btext,btmdiv)



            document.getElementById("boxes").append(main)
    })
 }



 //FILTER PART

//  for 1st tag
document.getElementById("sel1").addEventListener("change", funchange);

    function funchange(el){
      let val=  document.getElementById("sel1").value
      let filarr=arr.filter(function(el){
           return val==el.select
      })
      console.log(filarr)
      dis_data(filarr)
    }

    //second tag
    document.getElementById("sel2").addEventListener("change", funchange2);

    function funchange2(el){
      let val=  document.getElementById("sel2").value
      let filarr=arr.filter(function(el){
           return val==el.select
      })
      console.log(filarr)
      dis_data(filarr)
    }

    //3rd tag
    document.getElementById("sel3").addEventListener("change", funchange3);

    function funchange3(el){
      let val=  document.getElementById("sel3").value
      let filarr=arr.filter(function(el){
           return val==el.select
      })
      console.log(filarr)
      dis_data(filarr)
    }