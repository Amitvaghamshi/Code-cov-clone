
//for navbar
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


//for filter
let arr=[
    {
        img:"https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/Slack-Logo-1.jpg?d=500x500&f=fill",
        type:"tech"
    },
    {
        img:"https://images.news18.com/ibnlive/uploads/2021/11/robinhood-logo-16364495983x2.jpg?impolicy=website&width=510&height=356",
        type:"finance"
    },
    {
        img:"https://voicepower.co.uk/wp-content/uploads/2018/11/Training-Courses-.-.png",
        type:"ent"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/commons/4/41/AliveCor_Logo_PNG.png",
        type:"soft"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/truepill.svg",
        type:"tech"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/spothero-1.svg",
        type:"soft"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/gatspy.svg",
        type:"finance"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/substack-1.svg",
        type:"tech"
    },  
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/EquityZen-Logo-2.svg",
        type:"soft"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/mux.svg",
        type:"ent"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/butterfly_network-1.svg",
        type:"soft"
    },
    {
        img:"https://www.logosvgpng.com/wp-content/uploads/2020/10/geckoboard-logo-vector.png",
        type:"finance"
    },
    {
        img:"https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/007/263/original/Axios_logo_-_RGB_-_clear_space.png?1580309119",
        type:"ent"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/Hewlett_Packard_Enterprise_logo.svg",
        type:"tech"
    },
    {
        img:"https://www.legalfutures.co.uk/wp-content/uploads/Shieldpay-200.jpg",
        type:"ent"
    },
    {
        img:"https://static.webshopapp.com/shops/221573/files/115863572/3650dc67b4.jpg",
        type:"finance"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/Nutrien_Logo.svg",
        type:"soft"
    },
    {
        img:"https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud4/media/image/fiercecable/1520431684/DiscoveryInc.jpg?VersionId=NQXgr02.qs92PtjfB1wSyCdHOWtBRV8s",
        type:"tech"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/hitachi.svg",
        type:"ent"
    },
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/07/wework-logo.svg",
        type:"tech"
    }, 
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/NTT-Data-Logo.svg",
        type:"ent"
    }, 
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/thiememeulenhoff.svg",
        type:"finance"
    }, 
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/06/ring-1.svg",
        type:"tech"
    }, 
    {
        img:"https://dv-website.s3.amazonaws.com/uploads/2016/11/bi-1.jpg",
        type:"soft"
    }, 
    {
        img:"https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/04/30105217/New-York-University-400x400.jpg",
        type:"tech"
    }, 
    {
        img:"https://www.afebhs.org/pics/college_acceptance/carnegie_mellon_university_logo.jpg",
        type:"finance"
    }, 
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/02/ujet-logo.svg",
        type:"tech"
    }, 
    {
        img:"http://1000logos.net/wp-content/uploads/2017/02/Font-Harvard-Logo.png",
        type:"finance"
    }, 
    {
        img:"https://www.verywellmind.com/thmb/JYKK-_iN25W-2fdzc0LPc_Baeoo=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Plushcare-dadde286ff914b80a601912ab9f21820.jpg",
        type:"ent"
    }, 
    {
        img:"https://about.codecov.io/wp-content/uploads/2021/02/healthsherpa-logo.png",
        type:"tech"
    }, 

    ]

    //creating function for display
    dis_data(arr)
     function dis_data(data){
        document.querySelector(".filtro").innerHTML=null
        data.forEach(function(el){
         let div=  document.createElement("div")
        let imgs= document.createElement("img");
        imgs.src=el.img
        div.append(imgs)
         document.querySelector(".filtro").append(div)

    })
    }

    //FILTER PART
  
    document.getElementById("compny").addEventListener("change", funchange);

    function funchange(el){
      let val=  document.getElementById("compny").value
      let filarr=arr.filter(function(el){
           return val==el.type
      })
      console.log(filarr)
      dis_data(filarr)
    }