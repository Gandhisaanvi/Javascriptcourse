//creating a function return different job roles with their names 



 function usertype(name,role)
 {
    switch(role)
    {
        case 'admin':
                return` ${name}, you are now accessing files on this page.`;
        case 'webchecker':
                return` ${name}, you are now accessing files on this page.`;
        case 'gamer':
                return` ${name}, you are now accessing files on this page.`;
        case 'CEO':
                return` ${name}, you are now accessing files on this page.`;
        case 'subadmin':
                return` ${name}, you are now accessing files on this page.`;
        default  :
                return `${name}, a trial user` ;

                                        
                
            
    }
 }

  console.log(usertype("saanvi","admin"));//1
  var answer = usertype("saanvi","gamer");//2
  console.log(answer);

