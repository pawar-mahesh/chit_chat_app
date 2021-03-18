export class User {
  username: String;
  password: String;
  Profile: Profile = new Profile();
}

export class Profile {
  firstName: String;
  lastName: String;
  email: String;
  mobileNo: Number;
  lastLogin: Date;
}
