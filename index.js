//question1
function instagramPost(Handle_of_author,content,image_link_posted,Number_of_views,Number_of_likes ){
    this.Handle_of_author = Handle_of_author;
    this.content = content;
    this.image_link_posted =image_link_posted;
    this.Number_of_views = Number_of_views;
    this.Number_of_likes = Number_of_likes ;
    }
    
    //Q2
    newPost = new instagramPost("chocolateskinnedpanda","Beach Day", "https://www.instagram.com/p/Cgpj_aCDI2M/?next=%2F", 0, 0);
    newPost1 = new instagramPost("chocolateskinnedpanda","Understood the mission", "https://www.instagram.com/p/CaMZPZPIYux/?next=%2F", 1, 2)
    console.log(newPost)
    //answer
    // instagramPost {
    //     Handle_of_author: 'chocolateskinnedpanda',
    //     content: 'Beach Day',
    //     image_link_posted: 'https://www.instagram.com/p/Cgpj_aCDI2M/?next=%2F',
    //     Number_of_views: 50,
    //     Number_of_likes: 30
    //   }
    console.log(newPost1)
    //answer
    //   instagramPost {
    //     Handle_of_author: 'chocolateskinnedpanda',
    //     content: 'Understood the mission',
    //     image_link_posted: 'https://www.instagram.com/p/CaMZPZPIYux/?next=%2F',
    //     Number_of_views: 3,
    //     Number_of_likes: 3
    
    //question 3a
    function createPerson(name, age, gender) {
      return {
        name: name,
        age: age,
        gender: gender,
      };
    }
    
    const Musa= createPerson("Musa", 27, "male");
    
    console.log(Musa);
    //answer
    //{ name: 'Musa', age: 27, gender: 'male' }
    
    //Q3b
    function createJambScores(ENG, GOVT, LIT, CRK){
        return{
            ENG : ENG,
            GOVT : GOVT,
            LIT : LIT,
            CRK : CRK
    
        }
    }
    
    let jambScore = createJambScores(70,85,82,94);
    //{ ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }
    Object.assign(Musa, jambScore);
    console.log({Musa:Musa});
    //answer
    // { Musa: {
    //     name: 'Musa',
    //     age: 27,
    //     gender: 'male',
    //     ENG: 70,
    //     GOVT: 85,
    //     LIT: 82,
    //     CRK: 94
    // }
    // }
    
    // Q4
    //Object assign method
    let Onyinye = Object.assign({}, Musa);
    Onyinye.name = "Onyine";
    console.log(Onyine);
    //answer
    // {
    //     name: 'Onyinye',
    //     age: 27,
    //     gender: 'male',
    //     ENG: 70,
    //     GOVT: 85,
    //     LIT: 82,
    //     CRK: 94
    //   }
    
    //spread operator method
    let Jane = {...Musa};
    console.log({Jane});
    //answer
    // {
    //     Jane: {
    //       name: 'Musa',
    //       age: 27,
    //       gender: 'male',
    //       ENG: 70,
    //       GOVT: 85,
    //       LIT: 82,
    //       CRK: 94
    //     }
    //   }
    
    //Q5
    const presidentialCandidates = {
        AAC: 'Omoyele Sowore',
        ACCORD: 'Christopher Imumolen',
        APC: 'Bola Ahmed Tinubu',
        LP: 'Peter Obi',
        NNPP: 'Rabiu Kwankwaso',
        PDP: 'Atiku Abubakar',
     }
    
    
     for (let party in presidentialCandidates){
        console.log(presidentialCandidates[party]);
    
     }
     //answer
     //Omoyele Sowore
    // Christopher Imumolen
    // Bola Ahmed Tinubu
    // Peter Obi
    // Rabiu Kwankwaso
    // Atiku Abubakar