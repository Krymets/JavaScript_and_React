const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};



function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let str = '';
    if (plan.skills.programmingLangs.length < 1) {
        return
    }
    for (let i in plan.skills.programmingLangs) {
        str += `Язык ${i} изучен на ${plan.skills.programmingLangs[i]}\n`
    }
    return str;
}