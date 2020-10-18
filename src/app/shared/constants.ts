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
        ['/projects', '#907163'],
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
}
