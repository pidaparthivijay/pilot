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
        ['/contact', '#8D8741'],
        ['/education', '#659DBD'],
        ['/resume', '#DAAD86'],
        ['/skills', '#BC986A'],
        ['/projects', '#501F3A']]);
    public static readonly NEXT_MAP = new Map([
        ['/home', '/about'],
        ['/about', '/education'],
        ['/education', '/projects'],
        ['/projects', '/skills'],
        ['/skills', '/resume'],
        ['/resume', '/contact'],
        ['/contact', '/home']
    ]);
}
