 var usertype ="admin";

 switch(usertype)
 {
    case "admin":
        console.log("you are sucessfully logged in and can access files");
        break;

    case "user":
        console.log("you can now view the files")    ;
        break;

    case "subadmin":
            console.log("you can now view the files or delete them ")    ;
            break;    

    case "employee":
                console.log("you can now view  and edit the files")    ;
                break;

    case "manager":
        console.log("you can now manage the files")    ;
        break;

        default:
            console.log("please enter a valid user type");
            break

 }