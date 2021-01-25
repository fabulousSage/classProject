class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login() {
        console.log(this.email, 'just logged in');
        return this;
    }

    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }

    updateScore() {
        this.score++;
        console.log(this.email, 'score is now ' + this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}

let userOne = new User('remmy@yahoo.com', 'Remmy');
let userTwo = new User('sage@yahoo.com', 'Sage');
let admin = new Admin('admin@gmail.com', 'Adam')

let users = [userOne, userTwo, admin];

//userOne.login();
//userTwo.login();

//userOne.updateScore()

//userOne.login().updateScore().updateScore().logout();

//admin.deleteUser(userOne);

//console.log(users);