# Git and GitHub 
## Source from [freeCodeCamp](https://www.freecodecamp.org/news/git-and-github-for-beginners/) (go through the webpage once and come back)
## Preliminary: install [Git](https://git-scm.com/install/) and register Github
### Basic command line tool
Open terminal in VS Code (macOS & Window)
``` bash
Control + `
```
Show the full path name of the current directory
``` bash
pwd
```
### Git
There are three stages of a file being tracked by Git
1. Committed state

    The file have been saved in the locol repo and are ready to be pushed

2. Modified state
    
    Some changes has made but it's not yet saved

3. Staged state

    The file is ready to be committed, i.e. state after 
    ``` bash
    git add .
    git add filename.md
    ```

#### Initialize your project
``` bash
git init
```
#### Add files to Git
``` bash
git add .
git add filename.md #if you only want to add a specific file
```
#### Check Git status
``` bash
git status
```
#### Commit files in Git
``` bash
git commit -m "message"
```
Notice that your message can been seen on Github
#### Push the repository to Github
``` bash
git remote add origin https://github.com/WilliamLiang-dev/TutorFlow.git #change to your repository URL
#required only for the first push
git branch -M main
git pull origin main --rebase
#required only if you ticked "Add README" when creating the repo
#required only for the first push
git push -u origin main
```
#### Branch operations
##### Check all braches that exist in repository
``` bash
git branch
```
##### Create a new branch
``` bash
git checkout -b test #test can be other names
```
![alt text](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgBNnGcPeE6E3njRpdZznDIIT_CxRvf-S-zUSUCRryAQTxbLI8 "Visualization_newBranch")

To merge the new state to the main branch, first stage and commit this branch. Then do this
``` bash
git checkout main
```
##### Merge branches
``` bash
git merge test 
#replace test with the name of branch you created
```
![alt text](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQc97EMDN0U47fxdLXoQH_EIPvPFPd8zEi20Htbjq2FL9iUZjW4 "Visualization_merge")

### GitHub