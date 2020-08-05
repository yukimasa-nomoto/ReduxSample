

2020/08/05

Finish No473
Start From No473


npm install --save react-router-dom@4.2.2
    →start OK

Up to My GitHub
    ・check
        git remote -v
            stephengrider was target
    ・create NewRepoditory
        ssh
            git@github.com:yukimasa-nomoto/ReduxSample.git
    ・change remote
        git remote set-url origin git@github.com:yukimasa-nomoto/ReduxSample.git
    ・check again
        git remote -v
    ↓
    Error
        Permission denied
    ↓
    Change Https
        git remote set-url origin https://github.com/yukimasa-nomoto/ReduxSample.git
        ↓
        git push -u origin master
    ↓
    Success


--------------------------------------------------------------
# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
