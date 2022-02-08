# Windows Registry Editor 
All this action happens in Registry editor. 

Note: **Keys** are called folders in registry editor.

## Creating "open with vs code" on file Click Registry
- Go to `HKEY_CLASSES_ROOT\*\shell`
- - Create a folder called "vscode"
- - Open Default file and write "Open with VS Code"
### Icon File
- Creating a string file inside it called **"Icon"**
- - Give it the address of the app: `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\Code.exe`

### Running App File
- Create another folder (key) inside it called **"command"**
- - Inside the folder, open the default file and add the following command: 
- - - `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\Code.exe /waitfile:%1`

## Creating "open folder with vscode" on folder Click Registry
- Go to `HKEY_CLASSES_ROOT\Directory\shell\vscode`
- - Create a folder called "vscode"
- - Create a string file called "Open Folder with VS Code"
### Icon File
- Creating a string file inside it called **"Icon"**
- - Give it the address of the app: `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\Code.exe`

### Running App File
- Create another folder (key) inside it called **"command"**
- - Inside the folder, open the default file and add the following command: 
- - - `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\Code.exe /waitfile:%1`

## Creating "open current directory with vscode" on folder Click Registry
- Go to `HKEY_CLASSES_ROOT\Directory\Background\shell\vscode`
- - Create a folder called "vscode"
- - Create a string file called "Open Folder with VS Code"
### Icon File
- Creating a string file inside it called **"Icon"**
- - Give it the address of the app: `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\Code.exe`
### Running App File
- Create another folder (key) inside it called **"command"**
- - Inside the folder, open the default file and add the following command: 
- - - `C:\Users\{username}\AppData\Local\Programs\Microsoft VS Code\Code.exe`

