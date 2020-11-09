



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
        where : 'Mrs. Good',
        what : 'Keyboardist',
        when: '2009 - 2014',
        endDate : '2014',
        },
        {id : 2,
        where: 'Francois Staal',
        what : 'Homme à tout faire',
        when : '2015 - 2018',
        endDate : '2018'
        },
        {id : 3,
        where: 'Foyer',
        what : 'père au foyer',
        when : '2016 -',
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