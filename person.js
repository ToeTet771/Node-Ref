//!creating own package

//!module wrapper function
// (function(exports, require, module, __filename, __dirname){})

class Person{
    constructor(name, age, birthday, gender, relationship, ph, email, place, university, company, position)
    {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
        this.gender = gender;
        this.relationship = relationship;
        this.ph = ph;
        this.email = email;
        this.place = place;
        this.university = university;
        this.company = company;
        this.position = position;
    }
    routine(){                                                 //!add function
        console.log('getting up');          
        console.log('clean up');
        console.log('have breakfast');
        console.log('going work');
    }
    revise(newAge){                                            //!allows you to change the values
        this.age = newAge;
        this.revise = true;
    }
}

module.exports = Person;                                       //!exporting this package to use from other