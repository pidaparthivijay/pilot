export class Constants {
    public static readonly CONTACT = 'contact';
    public static readonly EDUCATION = 'education';
    public static readonly RESUME = 'resume';
    public static readonly SKILLS = 'skills';
    public static readonly PROJECTS = 'projects';
    public static readonly HOME = 'home';
    public static readonly COLOR_MAP = new Map([
        ['/home', '#000000'],
        ['/about', '#000000'],
        ['/education', '#659DBD'],
        //['/projects', '#907163'],
        ['/projects', '#cccccc'],
        ['/skills', '#EDEAE5'],
        ['/resume', '#DAAD86'],
        ['/contact', '#8D8741']]);
    public static readonly NEXT_MAP = new Map([
        ['/', '/about'],
        ['/home', '/about'],
        ['/about', '/education'],
        ['/education', '/projects'],
        ['/projects', '/skills'],
        ['/skills', '/resume'],
        ['/resume', '/contact'],
        ['/contact', '/home']
    ]);

    public static readonly cBdata = {
        datasets: [{
            data: [35, 0, 0, 0, 0, 20, 30, 15, 0, 0],
            backgroundColor: ["#696969", "#BADA55", "#7FE5F0", "#FF80ED", "#407294", "#420420", "#133337", "#ff0000", "#065535", "#ffd700"],
            label: 'Cherry Brown Services'
        }],
        labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"]
    };
    public static readonly ccrData = {
        datasets: [{
            data: [22, 20, 0, 0, 10, 10, 18, 15, 5, 0
            ],
            backgroundColor: ["#696969", "#BADA55", "#7FE5F0", "#FF80ED", "#407294", "#420420", "#133337", "#ff0000", "#065535", "#ffd700"],
            label: 'Citi Connectivity Registry Utilization'
        }],
        labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"]
    };
    public static readonly selfServiceData = {
        datasets: [{
            data: [25, 0, 25, 12, 0, 0, 0, 0, 8, 30],
            backgroundColor: ["#696969", "#BADA55", "#7FE5F0", "#FF80ED", "#407294", "#420420", "#133337", "#ff0000", "#065535", "#ffd700"],
            label: 'CCR Self Service Utilization'
        }],
        labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"]
    };
    public static readonly hotelTourServicesData = {
        datasets: [{
            data: [20, 0, 25, 15, 0, 0, 0, 0, 15, 25],
            backgroundColor: ["#696969", "#BADA55", "#7FE5F0", "#FF80ED", "#407294", "#420420", "#133337", "#ff0000", "#065535", "#ffd700"],
            label: 'My Hotel & Tour Utilization'
        }],
        labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"]
    };
    public static readonly portFolioData = {
        datasets: [{
            data: [0, 0, 0, 0, 0, 0, 0, 15, 30, 55],
            backgroundColor: ["#696969", "#BADA55", "#7FE5F0", "#FF80ED", "#407294", "#420420", "#133337", "#ff0000", "#065535", "#ffd700"],
            label: 'My Portfolio'
        }],
        labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"]
    };

    public static readonly projectData = {
        labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"],
        datasets: [
            {
                label: 'Cherry Brown Services',
                borderColor: '#BADA55',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [35, 0, 0, 0, 0, 20, 30, 15, 0, 0]

            },
            {
                label: 'Citi Connectivity Registry',
                fontColor: '#000000',
                borderColor: '#7FE5F0',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [22, 20, 0, 0, 10, 10, 18, 15, 5, 0]

            },
            {
                label: 'CCR Self Service',
                borderColor: '#696969',
                fontColor: '#000000',
                pointBackgroundColor: 'rgba(55,79,32,1.5)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [25, 0, 25, 12, 0, 0, 0, 0, 8, 30]
            },
            {
                label: 'Hotel & Tour Services',
                borderColor: '#FF80ED',
                fontColor: '#000000',
                pointBackgroundColor: 'rgba(55,79,32,1.5)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [20, 0, 25, 15, 0, 0, 0, 0, 15, 25]
            },
            {
                label: 'Portfolio',
                borderColor: '#420420',
                fontColor: '#000000',
                pointBackgroundColor: 'rgba(55,79,32,1.5)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [0, 0, 0, 0, 0, 0, 0, 15, 30, 55]
            }
        ]
    };
}
