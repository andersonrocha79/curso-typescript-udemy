enum Permission 
{
    ADMIN,             // 0
    USER,              // 1 
    READONLY           // 2
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);

enum Permission2 
{
    ADMIN = 100, 
    USER,      
    READONLY   
}

console.log(Permission2.ADMIN);
console.log(Permission2.USER);
console.log(Permission2.READONLY);

enum Permission3
{
    ADMIN    = "A", 
    USER     = "U",      
    READONLY = "R"   
}

console.log(Permission3.ADMIN);
console.log(Permission3.USER);
console.log(Permission3.READONLY);