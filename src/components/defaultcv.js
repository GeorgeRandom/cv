



const defaultCv = {
    general : {
         name : 'Sacha Yordanoff',
        email : 'ninjavolant@hotmail.com',
        phone : '0675462239',
        adress : '13 rue de la croix Faubin 75011 Paris',
        lookingFor: 'Any Job, really...'
        },
    education : [
        {id :1,
        where: 'école ATLA',
        what : 'guitare',
        when : '2009',
        },
        {id : 2,
        where : 'Lycée Alain',
        what : 'BAC scientifique',
        when : '2003',
        },
        {id : 3,
        where : 'ODIN project',
        what : 'Front-end Javascript course (self-taught)',
        when : '2020'
        }
    ],
    experience : [
        {id : 1,
        company : 'Mrs. Good',
        job : 'Keyboardist',
        startDate : '2009',
        endDate : '2014',
        },
        {id : 2,
        company : 'Francois Staal',
        job : 'Homme à tout faire',
        startDate : '2015',
        endDate : '2018'
        },
        {id : 3,
        company : 'Foyer',
        job : 'père au foyer',
        startDate : '2016',
        }
    ],
    skills : [
        {id : 1,
        name : 'mandolin',
        useful : false
        },
        {id : 2,
        name : 'singing',
        useful : false
        },
        {id : 3,
        name : 'sound engineering',
        useful : true
        },

    ]
}

export default defaultCv