class User {
    id;
    firstname;
    lastname;
    email;
    role;
    specialties;
    createdAt;
    updatedAt;
    token;

    set created_at(val){
        this.createdAt = val;
    }

    set updated_at(val){
        this.updatedAt = val;
    }

    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }
}

module.exports = User;