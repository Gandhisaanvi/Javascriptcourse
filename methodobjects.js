var courses = 
{
   name: "saanvi gandhi",
   university:"Presidency university",
   graduationyear:"2025",
   section:"5cse-14",
   course:"BTECH",
   Branch:" CSE",
   year:"3rd Year",

   coursesenrolled:[],
   coursesapplied :function(coursename)
   {
      this.coursesenrolled.push(coursename)//gave acces to coursesenrolled
   },
   coursecount : function()
   {
    return`${this.name} has enrolled into ${this.coursesenrolled.length}`
   }
,
    courseinfo: function()
    {
       return`${console.table( courses)}`
    }


}
console.log(courses.coursecount())
courses.coursesapplied("react course")
console.log(courses.coursecount())
console.log(courses.courseinfo())
