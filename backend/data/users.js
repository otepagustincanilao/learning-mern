import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('P@ssw0rd', 10),
        isAdmin: true
    },
    {
        name: 'Joseph Canilao',
        email: 'agustin.canilao@gmail.com',
        password: bcrypt.hashSync('P@ssw0rdotep', 10),
        isAdmin: false
    },
    {
        name: 'Cj Francisco',
        email: 'cj_francisco@gmail.com',
        password: bcrypt.hashSync('P@ssw0rdcj', 10),
        isAdmin: false
    },
    {
        name: 'Anton Santiago',
        email: 'anton_santiago@gmail.com',
        password: bcrypt.hashSync('P@ssw0rdanton', 10),
        isAdmin: false
    },
    {
        name: 'Shella Magallano',
        email: 'shella_magallano@gmail.com',
        password: bcrypt.hashSync('P@ssw0rdshella', 10),
        isAdmin: false
    },
    {
        name: 'Raymond Navarro',
        email: 'raymond_navarro@gmail.com',
        password: bcrypt.hashSync('P@ssw0rdraymond', 10),
        isAdmin: false
    }

  ]
  
  export default users         // ## this is ES modules
  // module.exports = products    // ## common js
  