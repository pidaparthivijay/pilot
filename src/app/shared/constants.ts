export class Constants {
    public static readonly CONTACT = 'contact';
    public static readonly EDUCATION = 'education';
    public static readonly RESUME = 'resume';
    public static readonly SKILLS = 'skills';
    public static readonly PROJECTS = 'projects';
    public static readonly HOME = 'home';
    public static readonly COLOR_MAP = new Map([
        ['/contact', '#8D8741'],
        ['/education', '#659DBD'],
        ['/resume', '#DAAD86'],
        ['/skills', '#BC986A'],
        ['/projects', '#501F3A'],
        ['/home', '#cccccc'],
        ['/', '#cccccc']
    ]);
    public static readonly NEXT_MAP = new Map([
        ['/home', '/about'],
        ['/about', '/education'],
        ['/contact', '/home'],
        ['/education', '/projects'],
        ['/resume', '/contact'],
        ['/skills', '/resume'],
        ['/projects', '/skills'],
        ['/', '/about']
    ]);
}
